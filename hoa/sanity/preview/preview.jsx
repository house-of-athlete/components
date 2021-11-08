import { camelCase, times } from "lodash"

const selectFieldName = (prefix, field, i) =>
  camelCase([`${prefix}${i}`, field].filter(i => i).join("_"))

export const arraySelect = (count, prefix, field) =>
  times(count).reduce(
    (acc, i) => ({
      ...acc,
      [selectFieldName(prefix, field, i)]: [`${prefix}.${i}`, field]
        .filter(i => i)
        .join("."),
    }),
    {}
  )

export const arraySelectValue = (values, prefix, field) => {
  const result = []

  for (
    let i = 0, current = values[selectFieldName(prefix, field, i)];
    current;
    i++, current = values[selectFieldName(prefix, field, i)]
  ) {
    result.push(current)
  }

  return result
}
