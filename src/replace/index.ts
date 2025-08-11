type JSObject = {
  [key: PropertyKey]: unknown
}

type Replace<O extends JSObject, R extends Readonly<{ [T in keyof O]?: keyof O }>> = {
  [K in keyof O as K extends keyof R ? NonNullable<R[K]> : K]: O[K]
}

/**
 * Replace a key or multiple keys from object
 * @param object - An object
 * @param replacement - An object of replacement keys
 * @returns A new object replaced with the given keys
 */
export function replace<O extends JSObject, R extends Readonly<{ [K in keyof O]?: string }>>(
  object: O,
  replacement: R
): Replace<O, R> {
  const regex = new RegExp(`(${Object.keys(replacement).join('|')})`, 'g')
  const stringify = JSON.stringify(object).replace(regex, (match) => replacement[match] ?? match)
  return JSON.parse(stringify)
}
