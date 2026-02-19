const mentionWatch = require('../3')
const Restriction = require('hacktiv8-restriction')

describe('Soal 3', () => {
  test('Requirement Output (100)', () => {
    let groups = [
      {
        name: "Twoosh",
        price: 500
      },
      {
        name: "Itsy",
        price: 175
      },
      {
        name: "GET7",
        price: 550,
      },
      {
        name: "Whitepink",
        price: 250
      },
      {
        name: "JYV",
        price: 300
      }
    ]

    const result1 = mentionWatch(groups, 5350)
    const result2 = mentionWatch(groups, 1000)
    const result3 = mentionWatch(groups, 350)
    const result4 = mentionWatch(groups, 100)
    const result5 = mentionWatch(groups)

    expect(result1).toEqual({
      performances: {
        Twoosh: 3,
        Itsy: 3,
        GET7: 3,
        Whitepink: 3,
        JYV: 3
      },
       change: 25}
  )
    expect(result2).toEqual({
      performances: {
        Twoosh: 1,
        Itsy: 1,
        Whitepink: 1
      },
       change: 75
    })
    expect(result3).toEqual({
      performances: {
        Itsy: 2
      },
       change:  0
    })
    expect(result4).toEqual({
      performances: {},
       change: 100
    })
    expect(result5).toEqual(`There's no budget`)
  })

  test('check restriction (-20)', async () => {
    const checkRestriction = new Restriction('../3.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'search', 'pop', 'unshift', 'shift'];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });

})
