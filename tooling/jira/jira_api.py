#!/usr/bin/env python3
"""
Reusable Jira API client
Uses only Python standard library (no external dependencies)
"""

import json
import sys
import base64
import ssl
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError


class JiraAPI:
    """Jira API client for common operations"""
    
    def __init__(self, base_url, email, api_token, project_key):
        self.base_url = base_url.rstrip('/')
        self.email = email
        self.api_token = api_token
        self.project_key = project_key
        self._available_issue_types = None
        
        # Create auth header
        auth_string = f"{email}:{api_token}"
        auth_bytes = auth_string.encode('ascii')
        self.auth_b64 = base64.b64encode(auth_bytes).decode('ascii')
    
    def make_request(self, url, data=None, method='GET'):
        """Make HTTP request to Jira API"""
        headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": f"Basic {self.auth_b64}"
        }

        if data:
            data = json.dumps(data).encode('utf-8')

        req = Request(url, data=data, headers=headers, method=method)

        # Disable SSL verification (for development/testing)
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE

        try:
            with urlopen(req, context=ctx) as response:
                response_body = response.read().decode('utf-8')
                # DELETE and some PUT requests return empty body
                if not response_body:
                    return None
                return json.loads(response_body)
        except HTTPError as e:
            error_body = e.read().decode('utf-8')
            print(f"HTTP Error {e.code}: {e.reason}")
            print(f"Response: {error_body}")
            return None
        except URLError as e:
            print(f"URL Error: {e.reason}")
            return None
    
    def get_available_issue_types(self):
        """Get available issue types for the project"""
        if self._available_issue_types is not None:
            return self._available_issue_types
        
        url = f"{self.base_url}/rest/api/3/project/{self.project_key}"
        response = self.make_request(url)
        
        if response and 'issueTypes' in response:
            self._available_issue_types = [it['name'] for it in response['issueTypes']]
            return self._available_issue_types
        
        # Default fallback
        return ['Epic', 'Task']
    
    def get_story_issue_type(self):
        """Get the appropriate issue type for stories (Story or Task)"""
        available = self.get_available_issue_types()
        return "Story" if "Story" in available else "Task"
    
    def create_epic(self, summary, description, labels=None):
        """Create an Epic"""
        epic_data = {
            "fields": {
                "project": {"key": self.project_key},
                "summary": summary,
                "description": description,
                "issuetype": {"name": "Epic"},
            }
        }
        
        if labels:
            epic_data["fields"]["labels"] = labels
        
        url = f"{self.base_url}/rest/api/3/issue"
        response = self.make_request(url, data=epic_data, method='POST')
        
        if response and 'key' in response:
            epic_key = response['key']
            print(f"✅ Epic created: {epic_key} - {summary}")
            return epic_key
        else:
            print(f"❌ Failed to create Epic: {summary}")
            return None
    
    def create_story(self, summary, description, epic_key=None, story_points=None, labels=None, priority="Medium", acceptance_criteria=None):
        """Create a Story (automatically detects if Story or Task issue type should be used)"""
        issue_type = self.get_story_issue_type()

        story_data = {
            "fields": {
                "project": {"key": self.project_key},
                "summary": summary,
                "description": description,
                "issuetype": {"name": issue_type},
                "priority": {"name": priority}
            }
        }

        if epic_key:
            story_data["fields"]["parent"] = {"key": epic_key}

        if story_points:
            # Note: Story Points field ID varies by Jira instance
            # Commonly "customfield_10016" but may need adjustment
            story_data["fields"]["customfield_10016"] = story_points

        if labels:
            story_data["fields"]["labels"] = labels

        if acceptance_criteria:
            # Acceptance Criteria field ID (customfield_10037 = "Acceptant Criteria")
            story_data["fields"]["customfield_10037"] = acceptance_criteria

        url = f"{self.base_url}/rest/api/3/issue"
        response = self.make_request(url, data=story_data, method='POST')

        if response and 'key' in response:
            story_key = response['key']
            issue_type_name = self.get_story_issue_type()
            print(f"✅ {issue_type_name} created: {story_key} - {summary}")
            return story_key
        else:
            issue_type_name = self.get_story_issue_type()
            print(f"❌ Failed to create {issue_type_name}: {summary}")
            return None
    
    def create_task(self, summary, description, parent_key=None, labels=None, priority="Medium"):
        """Create a Task"""
        task_data = {
            "fields": {
                "project": {"key": self.project_key},
                "summary": summary,
                "description": description,
                "issuetype": {"name": "Task"},
                "priority": {"name": priority}
            }
        }
        
        if parent_key:
            task_data["fields"]["parent"] = {"key": parent_key}
        
        if labels:
            task_data["fields"]["labels"] = labels
        
        url = f"{self.base_url}/rest/api/3/issue"
        response = self.make_request(url, data=task_data, method='POST')
        
        if response and 'key' in response:
            task_key = response['key']
            print(f"✅ Task created: {task_key} - {summary}")
            return task_key
        else:
            print(f"❌ Failed to create Task: {summary}")
            return None
    
    def link_issue_to_epic(self, issue_key, epic_key):
        """Link an issue to an Epic"""
        url = f"{self.base_url}/rest/api/3/issue/{issue_key}"
        data = {
            "fields": {
                "parent": {"key": epic_key}
            }
        }
        
        response = self.make_request(url, data=data, method='PUT')
        
        if response is not None:
            print(f"✅ Linked {issue_key} to Epic {epic_key}")
            return True
        else:
            print(f"❌ Failed to link {issue_key} to Epic {epic_key}")
            return False
    
    def get_issue(self, issue_key):
        """Get issue details"""
        url = f"{self.base_url}/rest/api/3/issue/{issue_key}"
        return self.make_request(url)
    
    def update_issue(self, issue_key, fields):
        """Update issue fields"""
        url = f"{self.base_url}/rest/api/3/issue/{issue_key}"
        data = {"fields": fields}
        
        response = self.make_request(url, data=data, method='PUT')
        if response is not None:
            print(f"✅ Updated {issue_key}")
            return True
        else:
            print(f"❌ Failed to update {issue_key}")
            return False


def load_config(config_path=None):
    """Load configuration from jira-config.env"""
    if config_path is None:
        # Default: look for config in workspace root
        config_path = Path(__file__).parent.parent.parent / "jira-config.env"
    else:
        config_path = Path(config_path)
    
    config = {}
    
    if config_path.exists():
        with open(config_path, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    config[key.strip()] = value.strip()
    else:
        print(f"❌ Error: Config file not found: {config_path}")
        sys.exit(1)
    
    return config


def create_jira_client(config_path=None):
    """Create a JiraAPI client from config file"""
    config = load_config(config_path)
    
    base_url = config.get('JIRA_BASE_URL', '')
    email = config.get('JIRA_EMAIL', '')
    api_token = config.get('JIRA_API_TOKEN', '')
    project_key = config.get('JIRA_PROJECT_KEY', '')
    
    # Validate required fields
    if not all([base_url, email, api_token, project_key]):
        print("❌ Error: Missing required Jira configuration")
        print("Required fields: JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN, JIRA_PROJECT_KEY")
        sys.exit(1)
    
    if "YOUR_DOMAIN" in base_url or "YOUR_PROJECT_KEY" in project_key:
        print("❌ Error: Please configure your Jira settings in jira-config.env")
        sys.exit(1)
    
    return JiraAPI(base_url, email, api_token, project_key)


def format_description_doc(text, heading=None, bullets=None):
    """
    Format description in Jira Doc format (Atlassian Document Format)
    
    Args:
        text: Main text content
        heading: Optional heading text
        bullets: Optional list of bullet points
    
    Returns:
        Dict in Jira Doc format
    """
    content = []
    
    if text:
        content.append({
            "type": "paragraph",
            "content": [{"type": "text", "text": text}]
        })
    
    if heading:
        content.append({
            "type": "heading",
            "attrs": {"level": 3},
            "content": [{"type": "text", "text": heading}]
        })
    
    if bullets:
        bullet_content = []
        for bullet in bullets:
            bullet_content.append({
                "type": "listItem",
                "content": [{
                    "type": "paragraph",
                    "content": [{"type": "text", "text": bullet}]
                }]
            })
        
        content.append({
            "type": "bulletList",
            "content": bullet_content
        })
    
    return {
        "type": "doc",
        "version": 1,
        "content": content
    }
