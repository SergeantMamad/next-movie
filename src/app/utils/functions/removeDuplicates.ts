export function removeDuplicates<T extends Record<string, any>>(
  originalArray: T[],
  prop: keyof T
): T[] {
  const lookupObject: Record<string, T> = {}
  const newArray: T[] = []

  for (const item of originalArray) {
    lookupObject[item[prop] as string] = item
  }

  for (const key in lookupObject) {
    if (Object.prototype.hasOwnProperty.call(lookupObject, key)) {
      newArray.push(lookupObject[key])
    }
  }

  return newArray
}
