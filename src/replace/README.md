# Replace

## Quickstart

### Replace an unique key

```ts
import { replace } from 'json-object-keys'

replace(
  {
    id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
    name: 'John Doe',
    category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
    email: 'john@doe.com',
    age: 29
  },
  {
    id: 'uuid',
  }
)
```

Output

```diff
+{
   id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  name: 'John Doe',
+  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+  email: 'john@doe.com',
+  age: 29
+}
```

```ts
import { replace } from 'json-object-keys'

replace(
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
  {
    id: 'uuid',
  }
)
```

Output

```diff
+{
   id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  name: 'John Doe',
+  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+  email: 'john@doe.com',
+  age: 29,
+  node: [
+    {
       id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
+      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+      email: 'john@doe.com',
+      age: 29,
+      node: {
         id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
+        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+        email: 'john@doe.com',
+        age: 29,
+        node: {
           id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          name: 'John Doe',
+          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+          email: 'john@doe.com',
+          age: 29
+        }
+      }
+    },
+    {
       id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
+      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+      email: 'john@doe.com',
+      age: 29,
+      node: {
         id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
+        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+        email: 'john@doe.com',
+        age: 29
+      }
+    },
+    {
       id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      name: 'John Doe',
+      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+      email: 'john@doe.com',
+      age: 29,
+      node: {
         id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        name: 'John Doe',
+        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+        email: 'john@doe.com',
+        age: 29,
+        node: {
           id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
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

### Replace multiple keys

```ts
import { replace } from 'json-object-keys'

replace(
  {
    id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
    name: 'John Doe',
    category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
    email: 'john@doe.com',
    age: 29
  },
  {
    id: 'uuid',
    category: 'tag',
  }
)
```

Output

```diff
+{
   id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  name: 'John Doe',
   category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+  tag: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+  email: 'john@doe.com',
+  age: 29
+}
```

```ts
import { replace } from 'json-object-keys'

replace(
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
  {
    id: 'uuid',
    node: 'children',
    name: 'firstName'
  }
)
```

Output

```diff
+{
+  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  firstName: 'John Doe',
   category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
   email: 'john@doe.com',
   age: 29,
+  children: [
+    {
+      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      firstName: 'John Doe',
       category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
       email: 'john@doe.com',
       age: 29,
+      children: {
+        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        firstName: 'John Doe',
         category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
         email: 'john@doe.com',
         age: 29,
+        children: {
+          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          firstName: 'John Doe',
           category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
           email: 'john@doe.com',
           age: 29
+        }
+      }
+    },
+    {
+      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      firstName: 'John Doe',
+      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+      email: 'john@doe.com',
+      age: 29,
+      children: {
+        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        firstName: 'John Doe',
+        category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+        email: 'john@doe.com',
+        age: 29
+      }
+    },
+    {
+      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+      firstName: 'John Doe',
       category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
       email: 'john@doe.com',
       age: 29,
+      children: {
+        id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+        firstName: 'John Doe',
         category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
         email: 'john@doe.com',
         age: 29,
+        children: {
+          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+          firstName: 'John Doe',
           category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
           email: 'john@doe.com',
           age: 29
+        }
+      }
+    }
+  ]
+}
```
