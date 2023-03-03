![json-object-keys](https://user-images.githubusercontent.com/16243531/222727947-360bc403-92b8-4dc2-8d1b-586215b49a2f.jpg)

# json-object-keys | ⚠️ WIP ⚠️

Manage complex object keys in depth.

## Install

```sh
npm install json-object-keys
```

## Quickstart

### Remove a unique key

```ts
import { remove } from 'json-object-keys'

remove({
  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
  name: 'John Doe',
  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
  email: 'john@doe.com',
  age: 29
}, 'category')
```

Output

```ts
{
  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
  name: 'John Doe',
  email: 'john@doe.com',
  age: 29
}
```

Details

```diff
+{
+  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+  name: 'John Doe',
-  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+  email: 'john@doe.com',
+  age: 29
+}
```

### Remove multiple keys

```ts
import { remove } from 'json-object-keys'

remove({
  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
  name: 'John Doe',
  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
  email: 'john@doe.com',
  age: 29
}, ['category', 'email'])
```

Output

```ts
{
  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
  name: 'John Doe',
  age: 29
}
```

Details

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

remove({
  uuid: 'a78e3a45-3b3c-4f5d-85d6-9e6e1b2dcb45',
  name: 'Large Object',
  children: [
    {
      uuid: 'c828d77d-aa2c-4af6-a4a6-4d4bbd7f8bf5',
      name: 'Child 1',
      children: [
        {
          uuid: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          name: 'Child 1',
          children: [
            {
              uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
              name: 'Great Child 1'
            },
            {
              uuid: 'c579a0b8-c2c7-44e2-a7d9-2edba8f7b472',
              name: 'Great Child 2'
            }
          ]
        },
        {
          uuid: 'a3a7aee0-bfe6-47f6-8d90-a7e2c2fc1e35',
          name: 'Child 2'
        }
      ]
    }
  ]
}, 'uuid')
```

Output

```ts
{
  name: 'Large Object',
  children: [
    {
      name: 'Child 1',
      children: [
        {
          name: 'Child 1',
          children: [
            {
              name: 'Child 1'
            },
            {
              name: 'Child 2'
            }
          ]
        },
        {
          name: 'Child 2'
        }
      ]
    }
  ]
}
```

Details

```diff
+{
-  uuid: 'a78e3a45-3b3c-4f5d-85d6-9e6e1b2dcb45',
+  name: 'Large Object',
+  children: [
+    {
-      uuid: 'c828d77d-aa2c-4af6-a4a6-4d4bbd7f8bf5',
+      name: 'Child 1',
+      children: [
+        {
-          uuid: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
+          name: 'Child 1',
+          children: [
+            {
-              uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
+              name: 'Great Child 1'
+            },
+            {
-              uuid: 'c579a0b8-c2c7-44e2-a7d9-2edba8f7b472',
+              name: 'Great Child 2'
+            }
+          ]
+        },
+        {
-          uuid: 'a3a7aee0-bfe6-47f6-8d90-a7e2c2fc1e35',
+          name: 'Child 2'
+        }
+      ]
+    }
+  ]
+}
```

## License

This project is licensed under the MIT License.
