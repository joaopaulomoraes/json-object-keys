type JSObject = {
  [key: PropertyKey]: unknown
}

/**
 * Remove a key or multiple keys from object
 * @param object - An object
 * @param keys - A single key or an array of keys
 * @returns A new object without the given keys
 */
export function remove<O extends JSObject, K extends keyof O>(object: O, keys: K | K[]): Omit<O, K> {
  if (typeof keys === 'string') return withoutKey(object, keys)

  if (typeof keys === 'object') return withoutKeys(object, keys)

  return object
}

function withoutKey<O extends JSObject, K extends string>(object: O, key: K) {
  const regex = new RegExp(`"${key}":[^,}]+,?|,?"${key}":[^,}]+`, 'g')
  return withRegex(object, regex)
}

function withoutKeys<O extends JSObject, K extends keyof O>(object: O, keys: K[]) {
  const params = keys.join('|')
  const regex = new RegExp(`"(${params})":[^,}]+,?|,?"(${params})":[^,}]+`, 'g')
  return withRegex(object, regex)
}

function withRegex(object: JSObject, regex: RegExp) {
  const stringify = JSON.stringify(object).replace(regex, '')
  return JSON.parse(stringify)
}
