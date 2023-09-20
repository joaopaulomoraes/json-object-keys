import { expect, it, describe } from 'bun:test'
import { remove } from '.'

const user = {
  id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
  name: 'John Doe',
  category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
  email: 'john@doe.com',
  age: 29
}

const userNodes = {
  ...user,
  node: [
    {
      ...user,
      node: {
        ...user,
        node: {
          ...user
        }
      }
    },
    {
      ...user,
      node: {
        ...user
      }
    },
    {
      ...user,
      node: {
        ...user,
        node: {
          ...user
        }
      }
    }
  ]
}

describe('remove', () => {
  it('should remove the id from user', () => {
    expect(remove(user, 'id')).toStrictEqual({
      name: 'John Doe',
      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
      email: 'john@doe.com',
      age: 29
    })
  })

  it('should remove the category from user', () => {
    expect(remove(user, 'category')).toStrictEqual({
      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
      name: 'John Doe',
      email: 'john@doe.com',
      age: 29
    })
  })

  it('should remove category and email from user', () => {
    expect(remove(user, ['category', 'email'])).toStrictEqual({
      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
      name: 'John Doe',
      age: 29
    })
  })

  it('should remove age from user', () => {
    expect(remove(user, 'age')).toStrictEqual({
      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
      name: 'John Doe',
      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
      email: 'john@doe.com'
    })
  })

  it('should remove id and age from user', () => {
    expect(remove(user, ['id', 'age'])).toStrictEqual({
      name: 'John Doe',
      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
      email: 'john@doe.com'
    })
  })

  it('should remove id from userNodes', () => {
    expect(remove(userNodes, 'id')).toStrictEqual({
      name: 'John Doe',
      category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
      email: 'john@doe.com',
      age: 29,
      node: [
        {
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29,
          node: {
            name: 'John Doe',
            category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
            email: 'john@doe.com',
            age: 29,
            node: {
              name: 'John Doe',
              category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
              email: 'john@doe.com',
              age: 29
            }
          }
        },
        {
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29,
          node: {
            name: 'John Doe',
            category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
            email: 'john@doe.com',
            age: 29
          }
        },
        {
          name: 'John Doe',
          category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
          email: 'john@doe.com',
          age: 29,
          node: {
            name: 'John Doe',
            category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
            email: 'john@doe.com',
            age: 29,
            node: {
              name: 'John Doe',
              category: '65bf5579-710d-4f56-9907-8c0bb1b2f0d2',
              email: 'john@doe.com',
              age: 29
            }
          }
        }
      ]
    })
  })

  it('should remove email, category and age from userNodes', () => {
    expect(remove(userNodes, ['email', 'category', 'age'])).toStrictEqual({
      id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
      name: 'John Doe',
      node: [
        {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          node: {
            id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
            name: 'John Doe',
            node: {
              id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
              name: 'John Doe'
            }
          }
        },
        {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          node: {
            id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
            name: 'John Doe'
          }
        },
        {
          id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
          name: 'John Doe',
          node: {
            id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
            name: 'John Doe',
            node: {
              id: 'e059d01a-7082-4b63-9c70-997491cdcf7c',
              name: 'John Doe'
            }
          }
        }
      ]
    })
  })
})
