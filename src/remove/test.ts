import remove from '.'

describe('remove', () => {
  it('should remove a specific key', () => {
    expect(remove({ id: 1, foo: 2, bar: 3 }, 'foo')).toStrictEqual({
      bar: 3,
      id: 1
    })
  })

  it('should remove a specific key from different levels', () => {
    expect(
      remove(
        {
          id: 1,
          foo: 1,
          children: {
            id: 2,
            foo: 2,
            children: {}
          }
        },
        'foo'
      )
    ).toStrictEqual({
      children: {
        children: {},
        id: 2
      },
      id: 1
    })
  })

  it('should remove multiple keys', () => {
    expect(
      remove({ id: 1, foo: 2, bar: 3, baz: [] }, ['foo', 'bar'])
    ).toStrictEqual({ baz: [], id: 1 })
  })
})

it('should remove multiple keys from different levels', () => {
  expect(
    remove(
      {
        id: 1,
        foo: 1,
        bar: 1,
        children: {
          id: 2,
          foo: 2,
          bar: 2,
          children: {}
        }
      },
      ['foo', 'bar']
    )
  ).toStrictEqual({
    children: {
      children: {},
      id: 2
    },
    id: 1
  })
})
