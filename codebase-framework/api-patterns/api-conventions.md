# API Conventions

> REST patterns and response formats

## Overview

Follow these conventions for consistent, predictable APIs.

---

## URL Structure

```
GET    /api/users          → List all users
POST   /api/users          → Create user
GET    /api/users/[id]     → Get single user
PUT    /api/users/[id]     → Update user (full)
PATCH  /api/users/[id]     → Update user (partial)
DELETE /api/users/[id]     → Delete user
```

---

## Response Formats

### Success Response

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### List Response

```json
{
  "data": [
    { "id": 1, "name": "John" },
    { "id": 2, "name": "Jane" }
  ]
}
```

### Paginated Response

```json
{
  "data": [...],
  "page": 1,
  "pageSize": 10,
  "total": 100,
  "totalPages": 10
}
```

### Error Response

```json
{
  "error": "User not found",
  "details": "No user exists with ID 999"
}
```

---

## Status Codes

Code | Meaning | Use When
---|---|---
200 | OK | Successful GET/PUT/PATCH
201 | Created | Successful POST
204 | No Content | Successful DELETE
400 | Bad Request | Validation error
404 | Not Found | Resource doesn't exist
500 | Server Error | Unexpected error

---

## Query Parameters

```
/api/users?page=1&pageSize=10          # Pagination
/api/users?role=admin                   # Filtering
/api/users?sortBy=name&order=asc        # Sorting
/api/users?q=john                       # Search
/api/users?fields=id,name,email         # Field selection
```

---

**Last Updated:** 2025-12-19
