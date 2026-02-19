const getHikingDestination = require("../1.js");
const Restriction = require("hacktiv8-restriction");

describe("Soal 1", () => {
  let destinationList1 = [
    ["Jawa", "Gunung Semeru"],
    ["Aceh", "Gunung Leuser"],
    ["Kalimantan", "Gunung Lianpran"],
    ["NTB", "Gunung Rinjani"],
    ["Papua", "Puncak Jaya"],
    ["Sulawesi", "Gunung Sojol"],
    ["Jawa", "Gunung Merbabu"],
  ];

  let destinationList2 = [
    ["Bali", "Gunung Batukaru"],
    ["Jawa", "Gunung Pangrango"],
    ["Papua", "Gunung Yamin"],
    ["Bali", "Gunung Agung"],
    ["Jawa", "Gunung Prau"],
    ["Jawa", "Gunung Papandayan"],
    ["Kalimantan", "Gunung Bukit Raya"],
  ];

  let destinationList3 = [
    ["Jawa", "Gunung Ciremay"],
    ["Aceh", "Gunung Perkison"],
    ["Sulawesi", "Gunung Mekongga"],
    ["Jambi", "Gunung Kerinci"],
    ["Sulawesi", "Gunung Latimojong"],
    ["Aceh", "Gunung Simpali"],
    ["NTB", "Gunung Tambora"],
  ];
  const result1 = getHikingDestination(destinationList1);
  const result2 = getHikingDestination(destinationList2);
  const result3 = getHikingDestination(destinationList3);
  const result4 = getHikingDestination([]);
  const result5 = getHikingDestination();

  test("Menggunakan return (10)", () => {
    expect(result1).not.toBe(undefined);
    expect(result2).not.toBe(undefined);
    expect(result3).not.toBe(undefined);
  });

  test("Output benar jika argumen adalah undefined (10)", () => {
    expect(result5).toBe("Invalid Data!");
  });

  test("Output benar jika parameter input adalah array kosong (10)", () => {
    expect(result4).toBe("Destination List Data is Not Exist!");
  });

  test("Output yang berupa object terdapat key yang lengkap (5)", () => {
    expect(result1).toEqual(
      expect.objectContaining({
        Jawa: expect.any(Array),
        Kalimantan: expect.any(Array),
        Sulawesi: expect.any(Array),
        Aceh: expect.any(Array),
        Others: expect.any(Array),
      })
    );
    expect(result2).toEqual(
      expect.objectContaining({
        Jawa: expect.any(Array),
        Kalimantan: expect.any(Array),
        Sulawesi: expect.any(Array),
        Aceh: expect.any(Array),
        Others: expect.any(Array),
      })
    );
    expect(result3).toEqual(
      expect.objectContaining({
        Jawa: expect.any(Array),
        Kalimantan: expect.any(Array),
        Sulawesi: expect.any(Array),
        Aceh: expect.any(Array),
        Others: expect.any(Array),
      })
    );
  });

  test("Output sesuai dengan test case (55)", () => {
    expect(result1).toEqual({
      Jawa: ["Gunung Semeru", "Gunung Merbabu"],
      Kalimantan: ["Gunung Lianpran"],
      Sulawesi: ["Gunung Sojol"],
      Aceh: ["Gunung Leuser"],
      Others: ["Gunung Rinjani", "Puncak Jaya"],
    });
    expect(result2).toEqual({
      Jawa: ["Gunung Pangrango", "Gunung Prau", "Gunung Papandayan"],
      Kalimantan: ["Gunung Bukit Raya"],
      Sulawesi: [],
      Aceh: [],
      Others: ["Gunung Batukaru", "Gunung Yamin", "Gunung Agung"],
    });
    expect(result3).toEqual({
      Jawa: ["Gunung Ciremay"],
      Kalimantan: [],
      Sulawesi: ["Gunung Mekongga", "Gunung Latimojong"],
      Aceh: ["Gunung Perkison", "Gunung Simpali"],
      Others: ["Gunung Kerinci", "Gunung Tambora"],
    });
  });

  test("should check restriction rules (-20)", async () => {
    const checkRestriction = new Restriction("../1.js");
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
