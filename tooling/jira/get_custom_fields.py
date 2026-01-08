#!/usr/bin/env python3
"""
Helper script to list all custom fields in your Jira project
This helps you find the correct field ID for Acceptance Criteria
"""

import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from jira_api import create_jira_client


def main():
    print("🔍 Fetching custom fields from Jira...")
    print()

    client = create_jira_client()

    print(f"📍 Jira URL: {client.base_url}")
    print(f"📁 Project: {client.project_key}")
    print()

    # Get all fields
    url = f"{client.base_url}/rest/api/3/field"
    fields = client.make_request(url)

    if not fields:
        print("❌ Failed to fetch fields")
        sys.exit(1)

    print("Custom Fields:")
    print("-" * 80)

    custom_fields = [f for f in fields if f.get('id', '').startswith('customfield_')]

    for field in custom_fields:
        field_id = field.get('id', '')
        field_name = field.get('name', '')
        field_type = field.get('schema', {}).get('type', '')

        print(f"ID: {field_id:25} Name: {field_name:40} Type: {field_type}")

    print()
    print(f"Found {len(custom_fields)} custom fields")
    print()
    print("Look for 'Acceptance Criteria' field and update the field ID in jira_api.py")


if __name__ == "__main__":
    main()
