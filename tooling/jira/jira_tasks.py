#!/usr/bin/env python3
"""
Generic Jira task creation script
Can be used for any spec/feature by passing a task definition file
"""

import sys
import json
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from jira_api import create_jira_client, format_description_doc


def load_tasks_from_csv(csv_path):
    """Load tasks from CSV file"""
    import csv
    
    tasks = []
    with open(csv_path, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            tasks.append(row)
    
    return tasks


def load_tasks_from_json(json_path):
    """Load tasks from JSON file"""
    with open(json_path, 'r') as f:
        return json.load(f)


def create_epic_from_definition(client, epic_def):
    """
    Create an epic from a definition dict
    
    Expected format:
    {
        "summary": "Epic title",
        "description": "Epic description" or dict with doc format,
        "labels": ["label1", "label2"]
    }
    """
    summary = epic_def.get('summary', '')
    description = epic_def.get('description', '')
    labels = epic_def.get('labels', [])
    
    # Format description if it's a string
    if isinstance(description, str):
        description = format_description_doc(description)
    
    return client.create_epic(summary, description, labels)


def create_stories_from_definitions(client, stories, epic_key=None):
    """
    Create stories from a list of definitions

    Expected format:
    [
        {
            "summary": "Story title",
            "description": "Story description" or dict,
            "acceptance_criteria": "AC text" or list,
            "story_points": 5,
            "labels": ["label1"],
            "priority": "High"
        }
    ]
    """
    created_keys = []

    for story in stories:
        summary = story.get('summary', '')
        description = story.get('description', '')
        acceptance_criteria = story.get('acceptance_criteria', '')
        story_points = story.get('story_points')
        labels = story.get('labels', [])
        priority = story.get('priority', 'Medium')

        # Format description (without AC)
        if isinstance(description, str):
            description_doc = format_description_doc(description)
        else:
            description_doc = description

        # Format acceptance criteria as a separate field
        ac_doc = None
        if acceptance_criteria:
            if isinstance(acceptance_criteria, list):
                ac_bullets = acceptance_criteria
            else:
                ac_bullets = [ac.strip() for ac in acceptance_criteria.split('\n') if ac.strip()]

            # Format AC as Jira doc format
            ac_doc = format_description_doc(
                text=None,
                bullets=ac_bullets
            )

        story_key = client.create_story(
            summary=summary,
            description=description_doc,
            epic_key=epic_key,
            story_points=story_points,
            labels=labels,
            priority=priority,
            acceptance_criteria=ac_doc
        )

        if story_key:
            created_keys.append(story_key)

    return created_keys


def main():
    if len(sys.argv) < 2:
        print("Usage: python jira_tasks.py <tasks-file.json>")
        print()
        print("The JSON file should contain:")
        print('{')
        print('  "epic": {')
        print('    "summary": "Epic title",')
        print('    "description": "Epic description",')
        print('    "labels": ["label1", "label2"]')
        print('  },')
        print('  "stories": [')
        print('    {')
        print('      "summary": "Story title",')
        print('      "description": "Story description",')
        print('      "acceptance_criteria": "AC\\n- Item 1\\n- Item 2",')
        print('      "story_points": 5,')
        print('      "labels": ["label"],')
        print('      "priority": "High"')
        print('    }')
        print('  ]')
        print('}')
        sys.exit(1)
    
    tasks_file = Path(sys.argv[1])
    
    if not tasks_file.exists():
        print(f"❌ Error: Tasks file not found: {tasks_file}")
        sys.exit(1)
    
    print("🚀 Creating Jira tasks...")
    print()
    
    # Create Jira client
    client = create_jira_client()
    
    print(f"📍 Jira URL: {client.base_url}")
    print(f"📁 Project: {client.project_key}")
    print(f"📧 Email: {client.email}")
    print()
    
    # Load tasks
    print(f"Loading tasks from: {tasks_file}")
    tasks_data = load_tasks_from_json(tasks_file)
    
    # Create Epic if provided
    epic_key = None
    if 'epic' in tasks_data:
        print("Creating Epic...")
        epic_key = create_epic_from_definition(client, tasks_data['epic'])
        if epic_key:
            print(f"✅ Epic: {client.base_url}/browse/{epic_key}")
        print()
    
    # Create Stories
    if 'stories' in tasks_data:
        stories = tasks_data['stories']
        print(f"Creating {len(stories)} stories...")
        created_keys = create_stories_from_definitions(client, stories, epic_key)
        
        print()
        print("=" * 60)
        print(f"✅ Successfully created {len(created_keys)} out of {len(stories)} stories")
        
        if epic_key:
            print()
            print(f"📊 Epic: {client.base_url}/browse/{epic_key}")
        
        if created_keys:
            print()
            print("Created Stories:")
            for key in created_keys:
                print(f"  - {client.base_url}/browse/{key}")
        
        print()
        print("🎉 Done! Check your Jira board.")
    else:
        print("⚠️  No stories found in tasks file")


if __name__ == "__main__":
    main()
