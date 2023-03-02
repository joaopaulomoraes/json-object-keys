type Key = string

type Keys = Array<Key>

type JSObject = {
  [key: string | symbol]: unknown
}

/**
 * Remove a key or multiple keys from object
 * @param object - An object
 * @param keys - A single key or an array of keys
 * @returns A new object without the given keys
 */
export function remove<T extends JSObject>(object: T, keys: Key | Keys): T {
  if (typeof keys === 'string') {
    return withoutKey(object, keys)
  }

  return withoutKeys(object, keys)
}

function withoutKey(object: JSObject, key: Key) {
  const regex = new RegExp(`"${key}":[^,}]+,?`, 'g')
  return withRegex(object, regex)
}

function withoutKeys(object: JSObject, keys: Keys) {
  const regex = new RegExp(`"(${keys.join('|')})":[^,}]+,?`, 'g')
  return withRegex(object, regex)
}

function withRegex(object: JSObject, regex: RegExp) {
  const stringify = JSON.stringify(object).replace(regex, '')
  return JSON.parse(stringify)
}
