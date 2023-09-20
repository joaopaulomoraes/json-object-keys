import { expect, it, describe } from 'bun:test'
import { replace } from '.'

describe('replace', () => {
  it('should replace foo with bar', () => {
    expect(replace({ id: 1, foo: 2, baz: 3 }, { foo: 'bar' })).toStrictEqual({ id: 1, bar: 2, baz: 3 })
  })

  it('should replace a complex object', () => {
    expect(
      replace(
        {
          uuid: 'a78e3a45-3b3c-4f5d-85d6-9e6e1b2dcb45',
          name: 'Large Object',
          children: [
            {
              uuid: 'c828d77d-aa2c-4af6-a4a6-4d4bbd7f8bf5',
              name: 'Child 1',
              children: [
                {
                  uuid: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
                  name: 'Grandchild 1',
                  children: [
                    {
                      uuid: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
                      name: 'Great Grandchild 1'
                    },
                    {
                      uuid: 'c579a0b8-c2c7-44e2-a7d9-2edba8f7b472',
                      name: 'Great Grandchild 2'
                    }
                  ]
                },
                {
                  uuid: 'a3a7aee0-bfe6-47f6-8d90-a7e2c2fc1e35',
                  name: 'Grandchild 2'
                }
              ]
            },
            {
              uuid: '3b0f3ea3-af52-4f03-9f54-4a4a7f2f299a',
              name: 'Child 2',
              children: [
                {
                  uuid: '6a45df6a-54d7-4abf-9db9-9fc2fdff6f79',
                  name: 'Grandchild 3',
                  children: [
                    {
                      uuid: '417f6e08-a0d3-405f-8b63-2fa701d9717b',
                      name: 'Great Grandchild 3'
                    },
                    {
                      uuid: '25a6a035-c95e-4df7-a92d-40f59c9f6ff2',
                      name: 'Great Grandchild 4'
                    }
                  ]
                },
                {
                  uuid: 'f4e4f54d-4d4b-4fb7-bc51-d097d08f0a78',
                  name: 'Grandchild 4'
                }
              ]
            }
          ]
        },
        { uuid: 'id', children: 'node' }
      )
    ).toStrictEqual({
      id: 'a78e3a45-3b3c-4f5d-85d6-9e6e1b2dcb45',
      name: 'Large Object',
      node: [
        {
          id: 'c828d77d-aa2c-4af6-a4a6-4d4bbd7f8bf5',
          name: 'Child 1',
          node: [
            {
              id: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
              name: 'Grandchild 1',
              node: [
                {
                  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
                  name: 'Great Grandchild 1'
                },
                {
                  id: 'c579a0b8-c2c7-44e2-a7d9-2edba8f7b472',
                  name: 'Great Grandchild 2'
                }
              ]
            },
            {
              id: 'a3a7aee0-bfe6-47f6-8d90-a7e2c2fc1e35',
              name: 'Grandchild 2'
            }
          ]
        },
        {
          id: '3b0f3ea3-af52-4f03-9f54-4a4a7f2f299a',
          name: 'Child 2',
          node: [
            {
              id: '6a45df6a-54d7-4abf-9db9-9fc2fdff6f79',
              name: 'Grandchild 3',
              node: [
                {
                  id: '417f6e08-a0d3-405f-8b63-2fa701d9717b',
                  name: 'Great Grandchild 3'
                },
                {
                  id: '25a6a035-c95e-4df7-a92d-40f59c9f6ff2',
                  name: 'Great Grandchild 4'
                }
              ]
            },
            {
              id: 'f4e4f54d-4d4b-4fb7-bc51-d097d08f0a78',
              name: 'Grandchild 4'
            }
          ]
        }
      ]
    })
  })
})
