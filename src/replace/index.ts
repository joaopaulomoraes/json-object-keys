type JSObject = {
  [key: string | number | symbol]: unknown
}

type Replace<O extends JSObject, K extends { [T in keyof O]?: keyof O }> = {
  [T in keyof O]: T extends keyof K ? O[T] : O[T]
}

export function replace<O extends JSObject, R extends { [K in keyof O]?: string }>(
  object: O,
  replacement: R
): Replace<O, R> {
  const regex = new RegExp(`(${Object.keys(replacement).join('|')})`, 'g')
  const stringify = JSON.stringify(object).replace(regex, (match) => replacement[match] ?? match)
  return JSON.parse(stringify)
}
