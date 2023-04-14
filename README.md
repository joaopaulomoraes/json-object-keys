![json-object-keys](https://user-images.githubusercontent.com/16243531/222727947-360bc403-92b8-4dc2-8d1b-586215b49a2f.jpg)

# json-object-keys | ⚠️ WIP ⚠️

Manage complex object keys in depth.

## Table of contents

- [json-object-keys | ⚠️ WIP ⚠️](#json-object-keys--️-wip-️)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Quickstart](#quickstart)
    - [Remove an unique key](#remove-an-unique-key)
    - [Remove multiple keys](#remove-multiple-keys)
  - [License](#license)

## Install

```sh
npm install json-object-keys
```

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
    age: 29,
    ...
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

## License

This project is licensed under the MIT License.
