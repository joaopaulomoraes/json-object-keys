import remove from '.'

describe('remove', () => {
  it('should remove a specific key', () => {
    expect(remove({ id: 1, foo: 2, bar: 3 }, 'foo')).toStrictEqual({"bar": 3, "id": 1})
  })

  it('should remove multiple keys', () => {
    expect(remove({ id: 1, foo: 2, bar: 3, baz: [] }, ['foo', 'bar'])).toStrictEqual({"baz": [], "id": 1})
  })
})
