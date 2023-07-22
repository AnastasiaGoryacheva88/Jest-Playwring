const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = ["Гарри Поттер",
    "Властелин Колец",
    "Волшебник изумрудного города",

    ]
    const expected = [
    "Властелин Колец",
    "Волшебник изумрудного города",
    "Гарри Поттер",
  ]
  const result = sorting.sortByName(input)

  expect(result).toEqual(expected);
  });

  test ("Function throws exception when called whitout parms (TypeError)", () =>{
expect(() => sorting.sortByName()).toThrow(TypeError)
  })
  test ("Function throws exception when called whitout parms", () =>{
    expect(() => sorting.sortByName()).toThrow()
      })
});

