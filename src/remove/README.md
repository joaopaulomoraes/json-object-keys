# Remove

## Quickstart

### Remove an unique key

```ts
import { remove } from 'json-object-keys'

remove(
  {
    id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
    name: 'John Doe',
    category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
    email: 'john@doe.com',
    age: 29
  },
  'category'
)
```

Output

```diff
+{
+  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  name: 'John Doe',
-  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+  email: 'john@doe.com',
+  age: 29
+}
```

```ts
import { remove } from 'json-object-keys'

remove(
  {
    id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
    name: 'John Doe',
    category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
    email: 'john@doe.com',
    age: 29,
    node: [
      {
        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
        name: 'John Doe',
        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
        email: 'john@doe.com',
        age: 29,
        node: {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29,
          node: {
            id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
            name: 'John Doe',
            category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
            email: 'john@doe.com',
            age: 29
          }
        }
      },
      {
        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
        name: 'John Doe',
        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
        email: 'john@doe.com',
        age: 29,
        node: {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29
        }
      },
      {
        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
        name: 'John Doe',
        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
        email: 'john@doe.com',
        age: 29,
        node: {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29,
          node: {
            id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
            name: 'John Doe',
            category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
            email: 'john@doe.com',
            age: 29
          }
        }
      }
    ]
  },
  'id'
)
```

Output

```diff
+{
-  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  name: 'John Doe',
+  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+  email: 'john@doe.com',
+  age: 29,
+  node: [
+    {
-      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
+      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+      email: 'john@doe.com',
+      age: 29,
+      node: {
-        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
+        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+        email: 'john@doe.com',
+        age: 29,
+        node: {
-          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          name: 'John Doe',
+          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+          email: 'john@doe.com',
+          age: 29
+        }
+      }
+    },
+    {
-      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
+      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+      email: 'john@doe.com',
+      age: 29,
+      node: {
-        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
+        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+        email: 'john@doe.com',
+        age: 29
+      }
+    },
+    {
-      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
+      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+      email: 'john@doe.com',
+      age: 29,
+      node: {
-        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
+        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+        email: 'john@doe.com',
+        age: 29,
+        node: {
-          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          name: 'John Doe',
+          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+          email: 'john@doe.com',
+          age: 29
+        }
+      }
+    }
+  ]
+}
```

### Remove multiple keys

```ts
import { remove } from 'json-object-keys'

remove(
  {
    id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
    name: 'John Doe',
    category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
    email: 'john@doe.com',
    age: 29
  },
  ['category', 'email']
)
```

Output

```diff
+{
+  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  name: 'John Doe',
-  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-  email: 'john@doe.com',
+  age: 29
+}
```

```ts
import { remove } from 'json-object-keys'

remove(
  {
    id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
    name: 'John Doe',
    category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
    email: 'john@doe.com',
    age: 29,
    node: [
      {
        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
        name: 'John Doe',
        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
        email: 'john@doe.com',
        age: 29,
        node: {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29,
          node: {
            id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
            name: 'John Doe',
            category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
            email: 'john@doe.com',
            age: 29
          }
        }
      },
      {
        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
        name: 'John Doe',
        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
        email: 'john@doe.com',
        age: 29,
        node: {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29
        }
      },
      {
        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
        name: 'John Doe',
        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
        email: 'john@doe.com',
        age: 29,
        node: {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29,
          node: {
            id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
            name: 'John Doe',
            category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
            email: 'john@doe.com',
            age: 29
          }
        }
      }
    ]
  },
  ['email', 'category', 'age']
)
```

Output

```diff
+{
+  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  name: 'John Doe',
-  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-  email: 'john@doe.com',
-  age: 29,
+  node: [
+    {
+      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
-      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-      email: 'john@doe.com',
-      age: 29,
+      node: {
+        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
-        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-        email: 'john@doe.com',
-        age: 29,
+        node: {
+          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          name: 'John Doe',
-          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-          email: 'john@doe.com',
-          age: 29
+        }
+      }
+    },
+    {
+      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
-      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-      email: 'john@doe.com',
-      age: 29,
+      node: {
+        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
-        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-        email: 'john@doe.com',
-        age: 29
+      }
+    },
+    {
+      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
-      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-      email: 'john@doe.com',
-      age: 29,
+      node: {
+        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
-        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-        email: 'john@doe.com',
-        age: 29,
+        node: {
+          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          name: 'John Doe',
-          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
-          email: 'john@doe.com',
-          age: 29
+        }
+      }
+    }
+  ]
+}
```
