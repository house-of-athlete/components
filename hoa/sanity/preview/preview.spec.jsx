import { arraySelect, arraySelectValue } from "./preview"

describe("preview", () => {
  test("arraySelect", () => {
    expect(arraySelect(3, "options", "name")).toEqual({
      options0Name: "options.0.name",
      options1Name: "options.1.name",
      options2Name: "options.2.name",
    })

    expect(arraySelect(2, "abc.options", "def.name")).toEqual({
      abcOptions0DefName: "abc.options.0.def.name",
      abcOptions1DefName: "abc.options.1.def.name",
    })

    expect(arraySelect(2, "options")).toEqual({
      options0: "options.0",
      options1: "options.1",
    })
  })

  test("arraySelectValue", () => {
    const values = {
      options0Name: "one",
      options1Name: "two",
      options2Name: "three",
    }

    expect(arraySelectValue(values, "options", "name")).toEqual([
      "one",
      "two",
      "three",
    ])

    expect(arraySelectValue({}, "options", "name")).toEqual([])
  })
})
