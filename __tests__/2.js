const quoteGenerator = require("../2.js");
const Restriction = require("hacktiv8-restriction");
/**
 * This unit test is made for live code session. Therefore these are not so strict.
*/

describe("Soal 2: QUOTE GENERATOR", () => {
  let quotes3 = [
    ["Whatever", "you", "are,", "be", "a", "good", "one"],
    [
      "You",
      "only",
      "live",
      "once,",
      "but",
      "if",
      "you do",
      "it",
      "right,",
      "once",
      "is",
      "enough",
    ],
    ["Just", "do it"],
    [
      "Never",
      "put",
      "off",
      "till",
      "morrow",
      "what",
      "may",
      "be",
      "done",
      "today",
      "as",
      "well <3",
    ],
  ];
  let quotes4 = [
    ["Istanbul", "Helsinki", "Glasgow"],
    ["have a great interest in", "adore", "worship"],
    ["Ruby", "JavaScript", "PHP"],
  ];
  const result3 = quoteGenerator(quotes3);
  const result4 = quoteGenerator(quotes4);
  const result5 = quoteGenerator([]);
  const result6 = quoteGenerator();

  test("Output should be defined when input is valid (5)", () => {
    expect(result4).not.toBe(undefined);
  });

  test("Output should be string when argument is empty array (5)", () => {
    // expect(result5).toBe("invalid input");
    expect(typeof result5).toMatch(/string/i);
    expect(result5).toMatch(/invalid/i);
  });
  
  test("Output should be string when argument is undefined (5)", () => {
    // expect(result6).toBe("invalid input");
    expect(typeof result5).toMatch(/string/i);
    expect(result6).toMatch(/invalid/i);
  });

  test("Output should be an array when input valid (5)", () => {
    expect(result4).toEqual(expect.any(Array))
  });

  test("Output should be an array with 2 element when input valid (5)", () => {
    expect(result4.length).toBe(2)
  });

  test("Output index 0 should be a string when input valid (5)", () => {
    expect(result4[0]).toEqual(expect.any(String))
  });

  test("Output index 1 should be a string when input valid (5)", () => {
    expect(result4[1]).toEqual(expect.any(String))
  });
  
  test("Should be able to get all longest strings (25)", () => {
    expect(result3[0]).toMatch(/^[\s\S]?(Whatever)[\s\S]?(you do)[\s\S]?(do it)[\s\S]?(well <3)[\s\S]?$/i)
  });
  
  test("Should be able to get all indexes (20)", () => {
    expect(result3[1]).toMatch(/^[\D]?(0)[\D]?(6)[\D]?(1)[\D]?(11)[\D]?$/)
  });
  
  test("Correctly create logic for quote (10)", () => {
    expect(result3[0]).toMatch(/^(Whatever)[\s\S]?( )[\s\S]?(you do)[\s\S]?( )[\s\S]?(do it)[\s\S]?( )[\s\S]?(well <3)$/i)
  });
  
  test("Correctly create logic for indexes (10)", () => {
    expect(result3[1]).toMatch(/^(0)[\s\S]?(,)[\s\S]?(6)[\s\S]?(,)[\s\S]?(1)[\s\S]?(,)[\s\S]?(11)$/)
  });

  test("Should check restriction rules (-20)", async () => {
    const checkRestriction = new Restriction("../2.js");
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
