#!/usr/bin/env python3
"""
Delete Jira issues by key
"""

import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent))

from jira_api import create_jira_client


def delete_issue(client, issue_key):
    """Delete a Jira issue"""
    url = f"{client.base_url}/rest/api/3/issue/{issue_key}"
    response = client.make_request(url, method='DELETE')

    # DELETE returns None on success (204 No Content)
    if response is None:
        print(f"✅ Deleted: {issue_key}")
        return True
    else:
        print(f"❌ Failed to delete: {issue_key}")
        return False


def main():
    if len(sys.argv) < 2:
        print("Usage: python delete_issues.py UNI-2 UNI-3 UNI-4 ...")
        print("   or: python delete_issues.py UNI-2..UNI-18")
        sys.exit(1)

    client = create_jira_client()

    print(f"🗑️  Deleting Jira issues...")
    print(f"📍 Jira URL: {client.base_url}")
    print()

    issue_keys = []

    # Handle range format (e.g., UNI-2..UNI-18)
    for arg in sys.argv[1:]:
        if '..' in arg:
            start, end = arg.split('..')
            prefix = start.rsplit('-', 1)[0]
            start_num = int(start.rsplit('-', 1)[1])
            end_num = int(end.rsplit('-', 1)[1])

            for num in range(start_num, end_num + 1):
                issue_keys.append(f"{prefix}-{num}")
        else:
            issue_keys.append(arg)

    print(f"Issues to delete: {', '.join(issue_keys)}")
    print()

    deleted_count = 0
    for issue_key in issue_keys:
        if delete_issue(client, issue_key):
            deleted_count += 1

    print()
    print(f"✅ Deleted {deleted_count} out of {len(issue_keys)} issues")


if __name__ == "__main__":
    main()
