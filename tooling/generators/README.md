# Generators

Scripts to scaffold new features and artifacts from framework templates.

## Available Generators

### new-feature.sh
Creates a complete feature structure from templates.

**Usage:**
```bash
./new-feature.sh <feature-name>
```

**Example:**
```bash
./new-feature.sh shipment-overview
```

**What it does:**
1. Creates `/specs/<feature-name>/` directory
2. Copies templates from `/po-framework/product-po-automation-spec/`
3. Renames files (template.md → prd.md, etc.)
4. Assigns next available IDs (PRD-XXX, USM-XXX)
5. Updates `/specs/index.md`
6. Allocates story ID range

**Output:**
```
specs/shipment-overview/
├── prd.md          # Contains: id: PRD-001
├── usm.md          # Contains: id: USM-001
├── usl.csv         # Proper CSV schema
├── usd.csv         # Proper CSV schema
└── uat.csv         # Proper CSV schema
```

## Implementation Status

- [ ] `new-feature.sh` - TODO: Implement
- [ ] `new-discovery.sh` - TODO: Create discovery folder structure
- [ ] `new-design.sh` - TODO: Create design folder structure

## How to Create a Generator

1. **Create Script**
   ```bash
   touch new-thing.sh
   chmod +x new-thing.sh
   ```

2. **Basic Template**
   ```bash
   #!/bin/bash
   set -e

   THING_NAME=$1

   if [ -z "$THING_NAME" ]; then
     echo "Usage: ./new-thing.sh <thing-name>"
     exit 1
   fi

   echo "Creating new thing: $THING_NAME"

   # Your logic here

   echo "✓ Thing created successfully"
   ```

3. **Test It**
   ```bash
   ./new-thing.sh test-name
   # Verify output
   # Clean up test artifacts
   ```

4. **Document It**
   - Add to this README
   - Add usage examples
   - Add to CONTRIBUTING.md if relevant

## Related

- **Templates:** `/po-framework/product-po-automation-spec/`
- **Validators:** `/tooling/validators/` (validate generated artifacts)
- **Specs:** `/specs/` (where generated features go)
