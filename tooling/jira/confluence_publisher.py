#!/usr/bin/env python3
"""
Generic Confluence page publisher
Can be used to publish any markdown document to Confluence
"""

import sys
import json
import base64
import re
import ssl
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from jira_api import load_config


class ConfluenceAPI:
    """Confluence API client for publishing pages"""
    
    def __init__(self, base_url, email, api_token, space_key):
        self.base_url = base_url.rstrip('/').replace('/jira', '')
        self.email = email
        self.api_token = api_token
        self.space_key = space_key
        
        # Create auth header
        auth_string = f"{email}:{api_token}"
        auth_bytes = auth_string.encode('ascii')
        self.auth_b64 = base64.b64encode(auth_bytes).decode('ascii')
    
    def make_request(self, url, data=None, method='GET'):
        """Make HTTP request to Confluence API"""
        headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": f"Basic {self.auth_b64}"
        }

        if data:
            data = json.dumps(data).encode('utf-8')

        req = Request(url, data=data, headers=headers, method=method)

        # Create SSL context that doesn't verify certificates (for development)
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE

        try:
            with urlopen(req, context=ctx) as response:
                return json.loads(response.read().decode('utf-8'))
        except HTTPError as e:
            error_body = e.read().decode('utf-8')
            print(f"HTTP Error {e.code}: {e.reason}")
            print(f"Response: {error_body}")
            return None
        except URLError as e:
            print(f"URL Error: {e.reason}")
            return None
    
    def markdown_to_confluence_storage(self, markdown_text):
        """Convert markdown to Confluence storage format (simplified)"""
        html = markdown_text
        
        # Convert headers
        html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
        html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
        html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
        html = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', html, flags=re.MULTILINE)
        
        # Convert bold and italic
        html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
        html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)
        
        # Convert code blocks
        html = re.sub(r'`([^`]+)`', r'<code>\1</code>', html)
        
        # Convert bullet lists
        lines = html.split('\n')
        in_list = False
        result = []
        
        for line in lines:
            if line.strip().startswith('- '):
                if not in_list:
                    result.append('<ul>')
                    in_list = True
                content = line.strip()[2:]
                result.append(f'<li>{content}</li>')
            elif line.strip().startswith('* '):
                if not in_list:
                    result.append('<ul>')
                    in_list = True
                content = line.strip()[2:]
                result.append(f'<li>{content}</li>')
            else:
                if in_list:
                    result.append('</ul>')
                    in_list = False
                result.append(line)
        
        if in_list:
            result.append('</ul>')
        
        html = '\n'.join(result)
        
        # Convert paragraphs
        html = re.sub(r'\n\n', '</p><p>', html)
        html = f'<p>{html}</p>'
        
        # Clean up
        html = html.replace('<p></p>', '')
        html = html.replace('<p><h', '<h')
        html = html.replace('</h1></p>', '</h1>')
        html = html.replace('</h2></p>', '</h2>')
        html = html.replace('</h3></p>', '</h3>')
        html = html.replace('</h4></p>', '</h4>')
        html = html.replace('<p><ul>', '<ul>')
        html = html.replace('</ul></p>', '</ul>')
        
        return html
    
    def create_page(self, title, content, parent_id=None, add_toc=True):
        """
        Create a Confluence page
        
        Args:
            title: Page title
            content: Page content in HTML/storage format
            parent_id: Optional parent page ID
            add_toc: Whether to add table of contents
        
        Returns:
            Tuple of (page_id, page_url) or (None, None) if failed
        """
        # Add table of contents if requested
        if add_toc:
            toc_macro = ('<ac:structured-macro ac:name="toc">'
                        '<ac:parameter ac:name="minLevel">2</ac:parameter>'
                        '<ac:parameter ac:name="maxLevel">3</ac:parameter>'
                        '</ac:structured-macro><p></p>')
            content = toc_macro + content
        
        page_data = {
            "type": "page",
            "title": title,
            "space": {"key": self.space_key},
            "body": {
                "storage": {
                    "value": content,
                    "representation": "storage"
                }
            }
        }
        
        if parent_id:
            page_data["ancestors"] = [{"id": parent_id}]
        
        url = f"{self.base_url}/wiki/rest/api/content"
        response = self.make_request(url, data=page_data, method='POST')
        
        if response and 'id' in response:
            page_id = response['id']
            page_url = f"{self.base_url}/wiki/spaces/{self.space_key}/pages/{page_id}"
            print(f"✅ Page created: {title}")
            print(f"   URL: {page_url}")
            return page_id, page_url
        else:
            print(f"❌ Failed to create page: {title}")
            return None, None
    
    def add_info_panel(self, metadata):
        """
        Create an info panel with metadata
        
        Args:
            metadata: Dict of key-value pairs to display
        
        Returns:
            HTML string for info panel
        """
        content = '<ac:structured-macro ac:name="info"><ac:rich-text-body>'
        
        for key, value in metadata.items():
            content += f'<p><strong>{key}:</strong> {value}</p>'
        
        content += '</ac:rich-text-body></ac:structured-macro><p></p>'
        return content


def create_confluence_client(config_path=None):
    """Create a ConfluenceAPI client from config file"""
    config = load_config(config_path)
    
    base_url = config.get('JIRA_BASE_URL', '')
    email = config.get('JIRA_EMAIL', '')
    api_token = config.get('JIRA_API_TOKEN', '')
    space_key = config.get('CONFLUENCE_SPACE_KEY', 'DEV')
    
    # Validate required fields
    if not all([base_url, email, api_token]):
        print("❌ Error: Missing required Confluence configuration")
        print("Required fields: JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN")
        sys.exit(1)
    
    if "YOUR_DOMAIN" in base_url:
        print("❌ Error: Please configure your Confluence settings in jira-config.env")
        sys.exit(1)
    
    return ConfluenceAPI(base_url, email, api_token, space_key)


def publish_markdown_file(markdown_file, title=None, metadata=None, parent_id=None):
    """
    Publish a markdown file to Confluence
    
    Args:
        markdown_file: Path to markdown file
        title: Page title (defaults to filename without extension)
        metadata: Optional dict of metadata to display in info panel
        parent_id: Optional parent page ID
    
    Returns:
        Tuple of (page_id, page_url) or (None, None) if failed
    """
    markdown_file = Path(markdown_file)
    
    if not markdown_file.exists():
        print(f"❌ Error: Markdown file not found: {markdown_file}")
        return None, None
    
    # Read markdown content
    with open(markdown_file, 'r') as f:
        markdown_content = f.read()
    
    # Create Confluence client
    client = create_confluence_client()
    
    # Use filename as title if not provided
    if not title:
        title = markdown_file.stem.replace('-', ' ').replace('_', ' ').title()
    
    print(f"📄 Publishing: {title}")
    print(f"📍 Confluence: {client.base_url}/wiki")
    print(f"📁 Space: {client.space_key}")
    print()
    
    # Convert markdown to HTML
    content_html = client.markdown_to_confluence_storage(markdown_content)
    
    # Add metadata panel if provided
    if metadata:
        info_panel = client.add_info_panel(metadata)
        content_html = info_panel + content_html
    
    # Create page
    page_id, page_url = client.create_page(
        title=title,
        content=content_html,
        parent_id=parent_id,
        add_toc=True
    )
    
    return page_id, page_url


def main():
    if len(sys.argv) < 2:
        print("Usage: python confluence_publisher.py <markdown-file> [title] [--metadata key=value ...]")
        print()
        print("Examples:")
        print("  python confluence_publisher.py prd.md")
        print('  python confluence_publisher.py prd.md "My PRD Title"')
        print('  python confluence_publisher.py prd.md --metadata "Type=PRD" "Status=Draft"')
        sys.exit(1)
    
    markdown_file = sys.argv[1]
    title = None
    metadata = {}
    
    # Parse arguments
    i = 2
    while i < len(sys.argv):
        arg = sys.argv[i]
        if arg == '--metadata':
            # Collect metadata key=value pairs
            i += 1
            while i < len(sys.argv) and '=' in sys.argv[i]:
                key, value = sys.argv[i].split('=', 1)
                metadata[key.strip()] = value.strip()
                i += 1
        else:
            # First non-flag argument is the title
            if not title:
                title = arg
            i += 1
    
    # Publish the file
    page_id, page_url = publish_markdown_file(
        markdown_file=markdown_file,
        title=title,
        metadata=metadata if metadata else None
    )
    
    if page_id:
        print()
        print("=" * 60)
        print("✅ Successfully published to Confluence!")
        print()
        print(f"🔗 URL: {page_url}")
        print()
    else:
        print()
        print("❌ Failed to publish to Confluence")
        sys.exit(1)


if __name__ == "__main__":
    main()
