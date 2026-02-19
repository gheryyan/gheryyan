const auctionWinner = require("../4.js");
const Restriction = require("hacktiv8-restriction");

describe("Soal 4", () => {
  test("Requirement Output (100)", () => {

    const result1 = auctionWinner(["didi-2050", "rudi-50000", "andi-1000"]);
    const result2 = auctionWinner(["murni-120000", "rani-50400", "dini-107"]);

    expect(result1).toEqual("Selamat rudi anda mendapatkan tiket dengan harga 50000");
    expect(result2).toEqual("Selamat murni anda mendapatkan tiket dengan harga 120000");

  });

  test("check restriction (-20)", async () => {
    const checkRestriction = new Restriction("../4.js");
    checkRestriction.rules = [
      "match",
      "split",
      "concat",
      "search",
      "pop",
      "unshift",
      "shift",
    ];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
