# Jira & Confluence Tooling

Reusable Python scripts for interacting with Jira and Confluence APIs. These tools can be used across all specs and features in the project.

## Overview

This tooling provides a modular approach to:

- Creating Jira epics, stories, and tasks
- Publishing markdown documents to Confluence
- Managing Jira issues programmatically

All scripts use only Python standard library (no external dependencies required).

## Configuration

All tools read from the `jira-config.env` file in the project root:

```env
JIRA_BASE_URL=https://your-domain.atlassian.net
JIRA_API_TOKEN=your-api-token
JIRA_PROJECT_KEY=YOUR_PROJECT
JIRA_EMAIL=your-email@example.com
CONFLUENCE_SPACE_KEY=YOUR_SPACE
```

## Modules

### `jira_api.py`

Core Jira API client with reusable functions.

**Key Features:**

- `JiraAPI` class for all Jira operations
- `create_epic()` - Create an epic
- `create_story()` - Create a story (auto-detects Story or Task issue type)
- `create_task()` - Create a task
- `link_issue_to_epic()` - Link issues to epics
- `get_issue()` - Get issue details
- `update_issue()` - Update issue fields
- `get_available_issue_types()` - Get available issue types for the project
- `get_story_issue_type()` - Auto-detect Story or Task issue type

**Smart Issue Type Detection:**
The `create_story()` method automatically detects whether your Jira instance supports "Story" issue type. If not available, it falls back to "Task". This makes the tooling work across different Jira configurations.

**Usage:**

```python
from jira_api import create_jira_client

# Create client (reads from jira-config.env)
client = create_jira_client()

# Create an epic
epic_key = client.create_epic(
    summary="My Epic",
    description="Epic description",
    labels=["label1", "label2"]
)

# Create a story
story_key = client.create_story(
    summary="My Story",
    description="Story description",
    epic_key=epic_key,
    story_points=5,
    labels=["story"],
    priority="High"
)
```

### `jira_tasks.py`

Generic script for creating Jira tasks from a JSON definition file.

**Usage:**

```bash
python jira_tasks.py <tasks-file.json>
```

**JSON Format:**

```json
{
  "epic": {
    "summary": "Epic title",
    "description": "Epic description",
    "labels": ["label1", "label2"]
  },
  "stories": [
    {
      "summary": "Story title",
      "description": "Story description",
      "acceptance_criteria": ["AC item 1", "AC item 2"],
      "story_points": 5,
      "labels": ["label"],
      "priority": "High"
    }
  ]
}
```

**Example:**

```bash
# Create tasks from definition file
cd tooling/jira
python jira_tasks.py ../../specs/feature-login/jira-tasks-definition.json
```

### `confluence_publisher.py`

Generic script for publishing markdown files to Confluence.

**Usage:**

```bash
python confluence_publisher.py <markdown-file> [title] [--metadata key=value ...]
```

**Examples:**

```bash
# Basic usage
python confluence_publisher.py prd.md

# With custom title
python confluence_publisher.py prd.md "My Custom Title"

# With metadata
python confluence_publisher.py prd.md "PRD Title" --metadata "Type=PRD" "Status=Draft"
```

**Features:**

- Converts markdown to Confluence storage format
- Adds table of contents automatically
- Supports metadata info panels
- Handles headers, lists, bold, italic, code

## Using in Your Specs

### Option 1: Use Generic Tools Directly

```bash
# From your spec directory
cd specs/my-feature

# Create Jira tasks
python ../../tooling/jira/jira_tasks.py jira-tasks-definition.json

# Publish to Confluence
python ../../tooling/jira/confluence_publisher.py prd.md "My Feature PRD"
```

### Option 2: Create Wrapper Scripts

Create thin wrapper scripts in your spec folder:

**create-jira-tasks.py:**

```python
#!/usr/bin/env python3
import sys
from pathlib import Path

# Add tooling to path
tooling_path = Path(__file__).parent.parent.parent / "tooling" / "jira"
sys.path.insert(0, str(tooling_path))

from jira_tasks import main as create_tasks_main

# Point to your tasks definition file
sys.argv = [sys.argv[0], str(Path(__file__).parent / "jira-tasks-definition.json")]

if __name__ == "__main__":
    create_tasks_main()
```

**publish-to-confluence.py:**

```python
#!/usr/bin/env python3
import sys
from pathlib import Path

tooling_path = Path(__file__).parent.parent.parent / "tooling" / "jira"
sys.path.insert(0, str(tooling_path))

from confluence_publisher import publish_markdown_file

if __name__ == "__main__":
    prd_file = Path(__file__).parent / "prd.md"

    metadata = {
        "Type": "PRD",
        "Status": "Draft"
    }

    page_id, page_url = publish_markdown_file(
        markdown_file=prd_file,
        title="My Feature PRD",
        metadata=metadata
    )
```

### Option 3: Use as Python Module

```python
import sys
from pathlib import Path

# Add tooling to path
sys.path.insert(0, str(Path(__file__).parent.parent.parent / "tooling" / "jira"))

from jira_api import create_jira_client

# Use the client
client = create_jira_client()
epic_key = client.create_epic("My Epic", "Description")
```

## Examples

See the `specs/feature-login/` directory for complete examples:

- `jira-tasks-definition.json` - Task definition file
- `create-jira-tasks-new.py` - Wrapper using the new tooling
- `publish-to-confluence-new.py` - Wrapper for publishing PRD

## Benefits

✅ **Reusable** - Use across all specs and features
✅ **Modular** - Import only what you need
✅ **Consistent** - Standardized approach for all specs
✅ **Maintainable** - Update once, applies everywhere
✅ **Flexible** - Use directly or create custom wrappers
✅ **No Dependencies** - Pure Python standard library

## Migration Guide

To migrate existing spec-specific scripts:

1. Extract task definitions into JSON format
2. Create wrapper scripts using the new tooling
3. Test with the new scripts
4. Archive old scripts (keep for reference)

## Troubleshooting

**Missing Configuration:**

- Ensure `jira-config.env` exists in project root
- Verify all required fields are filled

**Authentication Errors:**

- Check API token is valid
- Verify email matches the token owner
- Ensure you have permissions in Jira/Confluence

**Import Errors:**

- Add tooling/jira to Python path as shown in examples
- Run from correct directory or use absolute paths

## Future Enhancements

Potential additions:

- Batch operations for bulk updates
- CSV import/export for tasks
- Template system for common task patterns
- Integration with other project management tools
- Enhanced markdown conversion for Confluence
