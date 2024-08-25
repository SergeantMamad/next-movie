export function checkIfObjectHasValue(object:object) {
  return Object.values(object).some((value) =>
    Array.isArray(value) ? value.length > 0 : value !== ""
  )
}
