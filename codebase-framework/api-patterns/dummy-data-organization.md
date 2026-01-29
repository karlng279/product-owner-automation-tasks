# Dummy Data Organization

> Structuring JSON files for realistic API simulation

## Overview

This guide shows how to organize dummy JSON data files to simulate a realistic backend without a database.

---

## File Structure

```
data/
├── users.json              # User records
├── products.json           # Product catalog
├── orders.json             # Order history
├── categories.json         # Product categories
├── api-keys.json           # API keys/tokens
└── README.md               # Data structure documentation
```

---

## Data File Format

### Basic Structure

```json
// data/users.json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "status": "active",
    "avatar": "/images/avatars/john.jpg",
    "createdAt": "2025-01-15T10:30:00Z",
    "updatedAt": "2025-01-15T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "user",
    "status": "active",
    "avatar": "/images/avatars/jane.jpg",
    "createdAt": "2025-02-20T14:45:00Z",
    "updatedAt": "2025-02-20T14:45:00Z"
  }
]
```

### Best Practices

**1. Use Arrays for Collections**
```json
// ✅ Good - Array of objects
[
  { "id": 1, "name": "John" },
  { "id": 2, "name": "Jane" }
]

// ❌ Bad - Object with keys
{
  "user1": { "name": "John" },
  "user2": { "name": "Jane" }
}
```

**2. Include All Common Fields**
```json
{
  "id": 1,                              // Primary key
  "name": "John Doe",                   // Display name
  "email": "john@example.com",          // Unique identifier
  "status": "active",                   // State
  "createdAt": "2025-01-15T10:30:00Z", // Created timestamp
  "updatedAt": "2025-01-15T10:30:00Z"  // Updated timestamp
}
```

**3. Use ISO 8601 for Dates**
```json
{
  "createdAt": "2025-01-15T10:30:00Z",     // ✅ ISO 8601
  "birthdate": "1990-05-20",                // ✅ Date only
  "scheduledAt": "2025-12-25T09:00:00-05:00" // ✅ With timezone
}
```

**4. Realistic Data Volume**
- **Small dataset:** 5-10 records (good for initial development)
- **Medium dataset:** 20-50 records (good for testing pagination)
- **Large dataset:** 100+ records (test performance)

---

## Relationships

### One-to-Many

```json
// data/users.json
[
  { "id": 1, "name": "John Doe" },
  { "id": 2, "name": "Jane Smith" }
]

// data/posts.json
[
  {
    "id": 1,
    "userId": 1,                 // Foreign key
    "title": "My First Post",
    "content": "Hello world"
  },
  {
    "id": 2,
    "userId": 1,                 // Same user
    "title": "My Second Post",
    "content": "More content"
  },
  {
    "id": 3,
    "userId": 2,                 // Different user
    "title": "Jane's Post",
    "content": "Jane's content"
  }
]
```

### Embedded Relationships

```json
// Option 1: Foreign key only
{
  "id": 1,
  "userId": 1,
  "title": "Post Title"
}

// Option 2: Embedded data (denormalized)
{
  "id": 1,
  "title": "Post Title",
  "author": {
    "id": 1,
    "name": "John Doe",
    "avatar": "/avatars/john.jpg"
  }
}
```

**When to Embed:**
- Data is frequently accessed together
- Child data rarely changes
- Reduces API calls in UI

**When to Use Foreign Keys:**
- Data changes frequently
- Reduces duplication
- Keeps data normalized

---

## Common Patterns

### Users

```json
// data/users.json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "status": "active",
    "avatar": "/images/avatars/john.jpg",
    "phone": "+1-555-0123",
    "company": "Acme Corp",
    "bio": "Software engineer passionate about web development",
    "settings": {
      "notifications": true,
      "theme": "dark",
      "language": "en"
    },
    "createdAt": "2025-01-15T10:30:00Z",
    "lastLoginAt": "2025-12-19T08:00:00Z"
  }
]
```

### Products

```json
// data/products.json
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with precision tracking",
    "price": 29.99,
    "currency": "USD",
    "category": "electronics",
    "categoryId": 1,
    "sku": "WM-001",
    "stock": 150,
    "inStock": true,
    "images": [
      "/images/products/mouse-1.jpg",
      "/images/products/mouse-2.jpg"
    ],
    "tags": ["wireless", "ergonomic", "office"],
    "rating": 4.5,
    "reviewCount": 127,
    "createdAt": "2025-01-10T00:00:00Z"
  }
]
```

### Orders

```json
// data/orders.json
[
  {
    "id": 1,
    "orderNumber": "ORD-2025-001",
    "userId": 1,
    "status": "completed",
    "total": 99.97,
    "currency": "USD",
    "items": [
      {
        "productId": 1,
        "name": "Wireless Mouse",
        "quantity": 2,
        "price": 29.99,
        "subtotal": 59.98
      },
      {
        "productId": 2,
        "name": "USB Cable",
        "quantity": 1,
        "price": 9.99,
        "subtotal": 9.99
      }
    ],
    "shipping": {
      "address": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001",
      "country": "USA"
    },
    "payment": {
      "method": "credit_card",
      "last4": "4242",
      "status": "paid"
    },
    "createdAt": "2025-12-15T14:30:00Z",
    "completedAt": "2025-12-18T10:00:00Z"
  }
]
```

---

## Data Generation Tips

### 1. Use Realistic Names

```json
// ✅ Good - Realistic
{ "name": "John Doe", "email": "john@example.com" }

// ❌ Bad - Test data
{ "name": "Test User 1", "email": "test1@test.com" }
```

### 2. Vary the Data

```json
[
  { "status": "active", "role": "admin" },
  { "status": "active", "role": "user" },
  { "status": "inactive", "role": "user" },
  { "status": "pending", "role": "user" }
]
```

### 3. Include Edge Cases

```json
[
  { "name": "John Doe" },              // Normal
  { "name": "María José García" },     // Special characters
  { "name": "O'Brien" },               // Apostrophe
  { "name": "李明" },                   // Non-Latin characters
  { "name": "Very Long Name That Might Cause Issues" }, // Long text
  { "name": "" },                      // Empty (if allowed)
]
```

---

## Documentation

Create a README in your data folder:

```markdown
# Data Structure Documentation

## Files

- `users.json` - User accounts (15 records)
- `products.json` - Product catalog (50 records)
- `orders.json` - Order history (100 records)

## Schema

### User
- id: number (primary key)
- name: string
- email: string (unique)
- role: "admin" | "user"
- status: "active" | "inactive" | "pending"
- createdAt: ISO 8601 timestamp

### Product
- id: number (primary key)
- name: string
- price: number (USD)
- categoryId: number (foreign key → categories)
- stock: number
- inStock: boolean

## Relationships

- User → Posts (one-to-many via userId)
- Product → Category (many-to-one via categoryId)
- Order → User (many-to-one via userId)
- Order → Products (many-to-many via items array)
```

---

## TypeScript Types

Generate types from your data:

```typescript
// lib/types.ts
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
  status: 'active' | 'inactive' | 'pending'
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: number
  name: string
  description: string
  price: number
  currency: string
  category: string
  stock: number
  inStock: boolean
  images: string[]
  tags: string[]
  rating: number
  reviewCount: number
  createdAt: string
}
```

---

**Last Updated:** 2025-12-19
