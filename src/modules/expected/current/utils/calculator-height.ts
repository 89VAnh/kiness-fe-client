const sampleData0 = [
  { Gender: 1, Age: 3, Height: 89.7, Class: "A" },
  { Gender: 1, Age: 3, Height: 91.8, Class: "B" },
  { Gender: 1, Age: 3, Height: 93.9, Class: "C" },
  { Gender: 1, Age: 3, Height: 96.5, Class: "D" },
  { Gender: 1, Age: 3, Height: 99.2, Class: "E" },
  { Gender: 1, Age: 3, Height: 101.8, Class: "F" },
  { Gender: 1, Age: 3, Height: 104.4, Class: "G" },
  { Gender: 1, Age: 4, Height: 95.6, Class: "A" },
  { Gender: 1, Age: 4, Height: 97.9, Class: "B" },
  { Gender: 1, Age: 4, Height: 100.3, Class: "C" },
  { Gender: 1, Age: 4, Height: 103.1, Class: "D" },
  { Gender: 1, Age: 4, Height: 105.9, Class: "E" },
  { Gender: 1, Age: 4, Height: 108.5, Class: "F" },
  { Gender: 1, Age: 4, Height: 111.2, Class: "G" },
  { Gender: 1, Age: 5, Height: 101.6, Class: "A" },
  { Gender: 1, Age: 5, Height: 104.1, Class: "B" },
  { Gender: 1, Age: 5, Height: 106.7, Class: "C" },
  { Gender: 1, Age: 5, Height: 109.6, Class: "D" },
  { Gender: 1, Age: 5, Height: 112.6, Class: "E" },
  { Gender: 1, Age: 5, Height: 115.3, Class: "F" },
  { Gender: 1, Age: 5, Height: 118, Class: "G" },
  { Gender: 1, Age: 6, Height: 107.4, Class: "A" },
  { Gender: 1, Age: 6, Height: 110.1, Class: "B" },
  { Gender: 1, Age: 6, Height: 112.8, Class: "C" },
  { Gender: 1, Age: 6, Height: 115.9, Class: "D" },
  { Gender: 1, Age: 6, Height: 119.1, Class: "E" },
  { Gender: 1, Age: 6, Height: 122, Class: "F" },
  { Gender: 1, Age: 6, Height: 125, Class: "G" },
  { Gender: 1, Age: 7, Height: 113.1, Class: "A" },
  { Gender: 1, Age: 7, Height: 115.9, Class: "B" },
  { Gender: 1, Age: 7, Height: 118.8, Class: "C" },
  { Gender: 1, Age: 7, Height: 122.1, Class: "D" },
  { Gender: 1, Age: 7, Height: 125.4, Class: "E" },
  { Gender: 1, Age: 7, Height: 128.6, Class: "F" },
  { Gender: 1, Age: 7, Height: 131.7, Class: "G" },
  { Gender: 1, Age: 8, Height: 118.5, Class: "A" },
  { Gender: 1, Age: 8, Height: 121.4, Class: "B" },
  { Gender: 1, Age: 8, Height: 124.4, Class: "C" },
  { Gender: 1, Age: 8, Height: 127.9, Class: "D" },
  { Gender: 1, Age: 8, Height: 131.4, Class: "E" },
  { Gender: 1, Age: 8, Height: 134.7, Class: "F" },
  { Gender: 1, Age: 8, Height: 137.9, Class: "G" },
  { Gender: 1, Age: 9, Height: 123.6, Class: "A" },
  { Gender: 1, Age: 9, Height: 126.6, Class: "B" },
  { Gender: 1, Age: 9, Height: 129.8, Class: "C" },
  { Gender: 1, Age: 9, Height: 133.4, Class: "D" },
  { Gender: 1, Age: 9, Height: 137.1, Class: "E" },
  { Gender: 1, Age: 9, Height: 140.5, Class: "F" },
  { Gender: 1, Age: 9, Height: 143.9, Class: "G" },
  { Gender: 1, Age: 10, Height: 128.4, Class: "A" },
  { Gender: 1, Age: 10, Height: 131.6, Class: "B" },
  { Gender: 1, Age: 10, Height: 135, Class: "C" },
  { Gender: 1, Age: 10, Height: 138.8, Class: "D" },
  { Gender: 1, Age: 10, Height: 142.8, Class: "E" },
  { Gender: 1, Age: 10, Height: 146.5, Class: "F" },
  { Gender: 1, Age: 10, Height: 150.2, Class: "G" },
  { Gender: 1, Age: 11, Height: 133.2, Class: "A" },
  { Gender: 1, Age: 11, Height: 136.8, Class: "B" },
  { Gender: 1, Age: 11, Height: 140.5, Class: "C" },
  { Gender: 1, Age: 11, Height: 144.7, Class: "D" },
  { Gender: 1, Age: 11, Height: 149, Class: "E" },
  { Gender: 1, Age: 11, Height: 153, Class: "F" },
  { Gender: 1, Age: 11, Height: 157.1, Class: "G" },
  { Gender: 1, Age: 12, Height: 138.2, Class: "A" },
  { Gender: 1, Age: 12, Height: 142.4, Class: "B" },
  { Gender: 1, Age: 12, Height: 146.7, Class: "C" },
  { Gender: 1, Age: 12, Height: 151.4, Class: "D" },
  { Gender: 1, Age: 12, Height: 156.2, Class: "E" },
  { Gender: 1, Age: 12, Height: 160.5, Class: "F" },
  { Gender: 1, Age: 12, Height: 164.7, Class: "G" },
  { Gender: 1, Age: 13, Height: 144.2, Class: "A" },
  { Gender: 1, Age: 13, Height: 148.9, Class: "B" },
  { Gender: 1, Age: 13, Height: 153.6, Class: "C" },
  { Gender: 1, Age: 13, Height: 158.6, Class: "D" },
  { Gender: 1, Age: 13, Height: 163.5, Class: "E" },
  { Gender: 1, Age: 13, Height: 167.8, Class: "F" },
  { Gender: 1, Age: 13, Height: 171.9, Class: "G" },
  { Gender: 1, Age: 14, Height: 150.6, Class: "A" },
  { Gender: 1, Age: 14, Height: 155.5, Class: "B" },
  { Gender: 1, Age: 14, Height: 160.2, Class: "C" },
  { Gender: 1, Age: 14, Height: 165, Class: "D" },
  { Gender: 1, Age: 14, Height: 169.5, Class: "E" },
  { Gender: 1, Age: 14, Height: 173.3, Class: "F" },
  { Gender: 1, Age: 14, Height: 176.9, Class: "G" },
  { Gender: 1, Age: 15, Height: 156.5, Class: "A" },
  { Gender: 1, Age: 15, Height: 160.8, Class: "B" },
  { Gender: 1, Age: 15, Height: 164.9, Class: "C" },
  { Gender: 1, Age: 15, Height: 169.2, Class: "D" },
  { Gender: 1, Age: 15, Height: 173.2, Class: "E" },
  { Gender: 1, Age: 15, Height: 176.6, Class: "F" },
  { Gender: 1, Age: 15, Height: 179.9, Class: "G" },
  { Gender: 1, Age: 16, Height: 160.3, Class: "A" },
  { Gender: 1, Age: 16, Height: 163.9, Class: "B" },
  { Gender: 1, Age: 16, Height: 167.5, Class: "C" },
  { Gender: 1, Age: 16, Height: 171.4, Class: "D" },
  { Gender: 1, Age: 16, Height: 175.2, Class: "E" },
  { Gender: 1, Age: 16, Height: 178.5, Class: "F" },
  { Gender: 1, Age: 16, Height: 181.7, Class: "G" },
  { Gender: 1, Age: 17, Height: 162.2, Class: "A" },
  { Gender: 1, Age: 17, Height: 165.5, Class: "B" },
  { Gender: 1, Age: 17, Height: 168.9, Class: "C" },
  { Gender: 1, Age: 17, Height: 172.6, Class: "D" },
  { Gender: 1, Age: 17, Height: 176.4, Class: "E" },
  { Gender: 1, Age: 17, Height: 179.7, Class: "F" },
  { Gender: 1, Age: 17, Height: 183.1, Class: "G" },
  { Gender: 1, Age: 18, Height: 163.3, Class: "A" },
  { Gender: 1, Age: 18, Height: 166.6, Class: "B" },
  { Gender: 1, Age: 18, Height: 169.9, Class: "C" },
  { Gender: 1, Age: 18, Height: 173.6, Class: "D" },
  { Gender: 1, Age: 18, Height: 177.4, Class: "E" },
  { Gender: 1, Age: 18, Height: 180.8, Class: "F" },
  { Gender: 1, Age: 18, Height: 184.3, Class: "G" },
  { Gender: 0, Age: 3, Height: 88.1, Class: "A" },
  { Gender: 0, Age: 3, Height: 90.4, Class: "B" },
  { Gender: 0, Age: 3, Height: 92.8, Class: "C" },
  { Gender: 0, Age: 3, Height: 95.4, Class: "D" },
  { Gender: 0, Age: 3, Height: 98.1, Class: "E" },
  { Gender: 0, Age: 3, Height: 101.5, Class: "F" },
  { Gender: 0, Age: 3, Height: 103, Class: "G" },
  { Gender: 0, Age: 4, Height: 94.5, Class: "A" },
  { Gender: 0, Age: 4, Height: 96.8, Class: "B" },
  { Gender: 0, Age: 4, Height: 99.2, Class: "C" },
  { Gender: 0, Age: 4, Height: 101.9, Class: "D" },
  { Gender: 0, Age: 4, Height: 104.7, Class: "E" },
  { Gender: 0, Age: 4, Height: 107.3, Class: "F" },
  { Gender: 0, Age: 4, Height: 109.8, Class: "G" },
  { Gender: 0, Age: 5, Height: 100.7, Class: "A" },
  { Gender: 0, Age: 5, Height: 103.4, Class: "B" },
  { Gender: 0, Age: 5, Height: 105.6, Class: "C" },
  { Gender: 0, Age: 5, Height: 108.4, Class: "D" },
  { Gender: 0, Age: 5, Height: 111.3, Class: "E" },
  { Gender: 0, Age: 5, Height: 114, Class: "F" },
  { Gender: 0, Age: 5, Height: 116.7, Class: "G" },
  { Gender: 0, Age: 6, Height: 106.6, Class: "A" },
  { Gender: 0, Age: 6, Height: 109.1, Class: "B" },
  { Gender: 0, Age: 6, Height: 111.8, Class: "C" },
  { Gender: 0, Age: 6, Height: 114.7, Class: "D" },
  { Gender: 0, Age: 6, Height: 117.8, Class: "E" },
  { Gender: 0, Age: 6, Height: 120.5, Class: "F" },
  { Gender: 0, Age: 6, Height: 123.3, Class: "G" },
  { Gender: 0, Age: 7, Height: 112.2, Class: "A" },
  { Gender: 0, Age: 7, Height: 114.8, Class: "B" },
  { Gender: 0, Age: 7, Height: 117.6, Class: "C" },
  { Gender: 0, Age: 7, Height: 120.8, Class: "D" },
  { Gender: 0, Age: 7, Height: 124.1, Class: "E" },
  { Gender: 0, Age: 7, Height: 127.1, Class: "F" },
  { Gender: 0, Age: 7, Height: 130.2, Class: "G" },
  { Gender: 0, Age: 8, Height: 117.5, Class: "A" },
  { Gender: 0, Age: 8, Height: 120.3, Class: "B" },
  { Gender: 0, Age: 8, Height: 123.2, Class: "C" },
  { Gender: 0, Age: 8, Height: 126.7, Class: "D" },
  { Gender: 0, Age: 8, Height: 130.2, Class: "E" },
  { Gender: 0, Age: 8, Height: 133.6, Class: "F" },
  { Gender: 0, Age: 8, Height: 137.1, Class: "G" },
  { Gender: 0, Age: 9, Height: 122.8, Class: "A" },
  { Gender: 0, Age: 9, Height: 125.8, Class: "B" },
  { Gender: 0, Age: 9, Height: 129, Class: "C" },
  { Gender: 0, Age: 9, Height: 132.6, Class: "D" },
  { Gender: 0, Age: 9, Height: 136.5, Class: "E" },
  { Gender: 0, Age: 9, Height: 140.2, Class: "F" },
  { Gender: 0, Age: 9, Height: 144.1, Class: "G" },
  { Gender: 0, Age: 10, Height: 128.2, Class: "A" },
  { Gender: 0, Age: 10, Height: 131.6, Class: "B" },
  { Gender: 0, Age: 10, Height: 135.1, Class: "C" },
  { Gender: 0, Age: 10, Height: 139.1, Class: "D" },
  { Gender: 0, Age: 10, Height: 143.3, Class: "E" },
  { Gender: 0, Age: 10, Height: 147.2, Class: "F" },
  { Gender: 0, Age: 10, Height: 151.2, Class: "G" },
  { Gender: 0, Age: 11, Height: 133.8, Class: "A" },
  { Gender: 0, Age: 11, Height: 137.6, Class: "B" },
  { Gender: 0, Age: 11, Height: 141.5, Class: "C" },
  { Gender: 0, Age: 11, Height: 145.8, Class: "D" },
  { Gender: 0, Age: 11, Height: 150, Class: "E" },
  { Gender: 0, Age: 11, Height: 153.9, Class: "F" },
  { Gender: 0, Age: 11, Height: 157.6, Class: "G" },
  { Gender: 0, Age: 12, Height: 139.5, Class: "A" },
  { Gender: 0, Age: 12, Height: 143.5, Class: "B" },
  { Gender: 0, Age: 12, Height: 147.5, Class: "C" },
  { Gender: 0, Age: 12, Height: 151.7, Class: "D" },
  { Gender: 0, Age: 12, Height: 155.7, Class: "E" },
  { Gender: 0, Age: 12, Height: 159.2, Class: "F" },
  { Gender: 0, Age: 12, Height: 162.6, Class: "G" },
  { Gender: 0, Age: 13, Height: 144.7, Class: "A" },
  { Gender: 0, Age: 13, Height: 148.4, Class: "B" },
  { Gender: 0, Age: 13, Height: 152, Class: "C" },
  { Gender: 0, Age: 13, Height: 155.9, Class: "D" },
  { Gender: 0, Age: 13, Height: 159.7, Class: "E" },
  { Gender: 0, Age: 13, Height: 162.9, Class: "F" },
  { Gender: 0, Age: 13, Height: 166, Class: "G" },
  { Gender: 0, Age: 14, Height: 147.9, Class: "A" },
  { Gender: 0, Age: 14, Height: 151.3, Class: "B" },
  { Gender: 0, Age: 14, Height: 154.6, Class: "C" },
  { Gender: 0, Age: 14, Height: 158.3, Class: "D" },
  { Gender: 0, Age: 14, Height: 161.9, Class: "E" },
  { Gender: 0, Age: 14, Height: 165, Class: "F" },
  { Gender: 0, Age: 14, Height: 168.1, Class: "G" },
  { Gender: 0, Age: 15, Height: 149.3, Class: "A" },
  { Gender: 0, Age: 15, Height: 152.6, Class: "B" },
  { Gender: 0, Age: 15, Height: 155.9, Class: "C" },
  { Gender: 0, Age: 15, Height: 159.5, Class: "D" },
  { Gender: 0, Age: 15, Height: 163, Class: "E" },
  { Gender: 0, Age: 15, Height: 166.1, Class: "F" },
  { Gender: 0, Age: 15, Height: 169.2, Class: "G" },
  { Gender: 0, Age: 16, Height: 150.3, Class: "A" },
  { Gender: 0, Age: 16, Height: 153.4, Class: "B" },
  { Gender: 0, Age: 16, Height: 156.5, Class: "C" },
  { Gender: 0, Age: 16, Height: 160, Class: "D" },
  { Gender: 0, Age: 16, Height: 163.5, Class: "E" },
  { Gender: 0, Age: 16, Height: 166.7, Class: "F" },
  { Gender: 0, Age: 16, Height: 169.8, Class: "G" },
  { Gender: 0, Age: 17, Height: 151, Class: "A" },
  { Gender: 0, Age: 17, Height: 153.9, Class: "B" },
  { Gender: 0, Age: 17, Height: 156.9, Class: "C" },
  { Gender: 0, Age: 17, Height: 160.2, Class: "D" },
  { Gender: 0, Age: 17, Height: 163.7, Class: "E" },
  { Gender: 0, Age: 17, Height: 166.9, Class: "F" },
  { Gender: 0, Age: 17, Height: 170.1, Class: "G" },
  { Gender: 0, Age: 18, Height: 151.6, Class: "A" },
  { Gender: 0, Age: 18, Height: 154.4, Class: "B" },
  { Gender: 0, Age: 18, Height: 157.3, Class: "C" },
  { Gender: 0, Age: 18, Height: 160.6, Class: "D" },
  { Gender: 0, Age: 18, Height: 164.1, Class: "E" },
  { Gender: 0, Age: 18, Height: 167.2, Class: "F" },
  { Gender: 0, Age: 18, Height: 170.4, Class: "G" },
];

// Mẫu dữ liệu từ hình ảnh đã tải lên
const sampleData = [
  {
    Gender: 1,
    Age: -1.6269784336399213,
    Height: -1.9818741930874073,
    Class: "A",
  },
  {
    Gender: 1,
    Age: -1.6269784336399213,
    Height: -1.897392387553451,
    Class: "B",
  },
  {
    Gender: 1,
    Age: -1.6269784336399213,
    Height: -1.8129105820194944,
    Class: "C",
  },
  {
    Gender: 1,
    Age: -1.6269784336399213,
    Height: -1.7083140608822152,
    Class: "D",
  },
  {
    Gender: 1,
    Age: -1.6269784336399213,
    Height: -1.599694596624271,
    Class: "E",
  },
  {
    Gender: 1,
    Age: -1.6269784336399213,
    Height: -1.4950980754869918,
    Class: "F",
  },
  {
    Gender: 1,
    Age: -1.6269784336399213,
    Height: -1.3905015543497121,
    Class: "G",
  },
  {
    Gender: 1,
    Age: -1.4100479758212652,
    Height: -1.7445205489681967,
    Class: "A",
  },
  {
    Gender: 1,
    Age: -1.4100479758212652,
    Height: -1.6519928571929106,
    Class: "B",
  },
  {
    Gender: 1,
    Age: -1.4100479758212652,
    Height: -1.5554422222969608,
    Class: "C",
  },
  {
    Gender: 1,
    Age: -1.4100479758212652,
    Height: -1.4427998149183523,
    Class: "D",
  },
  {
    Gender: 1,
    Age: -1.4100479758212652,
    Height: -1.330157407539743,
    Class: "E",
  },
  {
    Gender: 1,
    Age: -1.4100479758212652,
    Height: -1.225560886402464,
    Class: "F",
  },
  {
    Gender: 1,
    Age: -1.4100479758212652,
    Height: -1.1169414221445197,
    Class: "G",
  },
  {
    Gender: 1,
    Age: -1.193117518002609,
    Height: -1.503143961728321,
    Class: "A",
  },
  {
    Gender: 1,
    Age: -1.193117518002609,
    Height: -1.4025703837117063,
    Class: "B",
  },
  {
    Gender: 1,
    Age: -1.193117518002609,
    Height: -1.2979738625744266,
    Class: "C",
  },
  {
    Gender: 1,
    Age: -1.193117518002609,
    Height: -1.1813085120751536,
    Class: "D",
  },
  {
    Gender: 1,
    Age: -1.193117518002609,
    Height: -1.0606202184552158,
    Class: "E",
  },
  {
    Gender: 1,
    Age: -1.193117518002609,
    Height: -0.9520007541972717,
    Class: "F",
  },
  {
    Gender: 1,
    Age: -1.193117518002609,
    Height: -0.8433812899393276,
    Class: "G",
  },
  {
    Gender: 1,
    Age: -0.9761870601839528,
    Height: -1.2698132607297743,
    Class: "A",
  },
  {
    Gender: 1,
    Age: -0.9761870601839528,
    Height: -1.1611937964718306,
    Class: "B",
  },
  {
    Gender: 1,
    Age: -0.9761870601839528,
    Height: -1.0525743322138865,
    Class: "C",
  },
  {
    Gender: 1,
    Age: -0.9761870601839528,
    Height: -0.9278630954732838,
    Class: "D",
  },
  {
    Gender: 1,
    Age: -0.9761870601839528,
    Height: -0.7991289156120173,
    Class: "E",
  },
  {
    Gender: 1,
    Age: -0.9761870601839528,
    Height: -0.6824635651127439,
    Class: "F",
  },
  {
    Gender: 1,
    Age: -0.9761870601839528,
    Height: -0.561775271492806,
    Class: "G",
  },
  {
    Gender: 1,
    Age: -0.7592566023652966,
    Height: -1.0405055028518928,
    Class: "A",
  },
  {
    Gender: 1,
    Age: -0.7592566023652966,
    Height: -0.9278630954732838,
    Class: "B",
  },
  {
    Gender: 1,
    Age: -0.7592566023652966,
    Height: -0.811197744974011,
    Class: "C",
  },
  {
    Gender: 1,
    Age: -0.7592566023652966,
    Height: -0.6784406219920794,
    Class: "D",
  },
  {
    Gender: 1,
    Age: -0.7592566023652966,
    Height: -0.5456834990101475,
    Class: "E",
  },
  {
    Gender: 1,
    Age: -0.7592566023652966,
    Height: -0.4169493191488809,
    Class: "F",
  },
  {
    Gender: 1,
    Age: -0.7592566023652966,
    Height: -0.29223808240827875,
    Class: "G",
  },
  {
    Gender: 1,
    Age: -0.5423261445466404,
    Height: -0.8232665743360046,
    Class: "A",
  },
  {
    Gender: 1,
    Age: -0.5423261445466404,
    Height: -0.7066012238367312,
    Class: "B",
  },
  {
    Gender: 1,
    Age: -0.5423261445466404,
    Height: -0.5859129302167934,
    Class: "C",
  },
  {
    Gender: 1,
    Age: -0.5423261445466404,
    Height: -0.44510992099353264,
    Class: "D",
  },
  {
    Gender: 1,
    Age: -0.5423261445466404,
    Height: -0.30430691177027186,
    Class: "E",
  },
  {
    Gender: 1,
    Age: -0.5423261445466404,
    Height: -0.17154978878834096,
    Class: "F",
  },
  {
    Gender: 1,
    Age: -0.5423261445466404,
    Height: -0.04281560892707327,
    Class: "G",
  },
  {
    Gender: 1,
    Age: -0.32539568672798425,
    Height: -0.6180964751821106,
    Class: "A",
  },
  {
    Gender: 1,
    Age: -0.32539568672798425,
    Height: -0.4974081815621728,
    Class: "B",
  },
  {
    Gender: 1,
    Age: -0.32539568672798425,
    Height: -0.3686740017009051,
    Class: "C",
  },
  {
    Gender: 1,
    Age: -0.32539568672798425,
    Height: -0.22384804935697997,
    Class: "D",
  },
  {
    Gender: 1,
    Age: -0.32539568672798425,
    Height: -0.07499915389239048,
    Class: "E",
  },
  {
    Gender: 1,
    Age: -0.32539568672798425,
    Height: 0.06178091221020593,
    Class: "F",
  },
  {
    Gender: 1,
    Age: -0.32539568672798425,
    Height: 0.19856097831280234,
    Class: "G",
  },
  {
    Gender: 1,
    Age: -0.10846522890932808,
    Height: -0.42499520539020963,
    Class: "A",
  },
  {
    Gender: 1,
    Age: -0.10846522890932808,
    Height: -0.2962610255289431,
    Class: "B",
  },
  {
    Gender: 1,
    Age: -0.10846522890932808,
    Height: -0.1594809594263467,
    Class: "C",
  },
  {
    Gender: 1,
    Age: -0.10846522890932808,
    Height: -0.006609120841091701,
    Class: "D",
  },
  {
    Gender: 1,
    Age: -0.10846522890932808,
    Height: 0.15430860398549204,
    Class: "E",
  },
  {
    Gender: 1,
    Age: -0.10846522890932808,
    Height: 0.3031574994500815,
    Class: "F",
  },
  {
    Gender: 1,
    Age: -0.10846522890932808,
    Height: 0.45200639491467104,
    Class: "G",
  },
  {
    Gender: 1,
    Age: 0.10846522890932808,
    Height: -0.23189393559830984,
    Class: "A",
  },
  {
    Gender: 1,
    Age: 0.10846522890932808,
    Height: -0.08706798325438357,
    Class: "B",
  },
  {
    Gender: 1,
    Age: 0.10846522890932808,
    Height: 0.06178091221020593,
    Class: "C",
  },
  {
    Gender: 1,
    Age: 0.10846522890932808,
    Height: 0.2307445232781184,
    Class: "D",
  },
  {
    Gender: 1,
    Age: 0.10846522890932808,
    Height: 0.4037310774666964,
    Class: "E",
  },
  {
    Gender: 1,
    Age: 0.10846522890932808,
    Height: 0.5646488022932801,
    Class: "F",
  },
  {
    Gender: 1,
    Age: 0.10846522890932808,
    Height: 0.7295894702405282,
    Class: "G",
  },
  {
    Gender: 1,
    Age: 0.32539568672798425,
    Height: -0.030746779565080175,
    Class: "A",
  },
  {
    Gender: 1,
    Age: 0.32539568672798425,
    Height: 0.13821683150283343,
    Class: "B",
  },
  {
    Gender: 1,
    Age: 0.32539568672798425,
    Height: 0.31120338569141026,
    Class: "C",
  },
  {
    Gender: 1,
    Age: 0.32539568672798425,
    Height: 0.5002817123626468,
    Class: "D",
  },
  {
    Gender: 1,
    Age: 0.32539568672798425,
    Height: 0.6933829821545466,
    Class: "E",
  },
  {
    Gender: 1,
    Age: 0.32539568672798425,
    Height: 0.8663695363431246,
    Class: "F",
  },
  {
    Gender: 1,
    Age: 0.32539568672798425,
    Height: 1.035333147411037,
    Class: "G",
  },
  {
    Gender: 1,
    Age: 0.5423261445466404,
    Height: 0.21062980767479542,
    Class: "A",
  },
  {
    Gender: 1,
    Age: 0.5423261445466404,
    Height: 0.39970813434603203,
    Class: "B",
  },
  {
    Gender: 1,
    Age: 0.5423261445466404,
    Height: 0.5887864610172674,
    Class: "C",
  },
  {
    Gender: 1,
    Age: 0.5423261445466404,
    Height: 0.7899336170504971,
    Class: "D",
  },
  {
    Gender: 1,
    Age: 0.5423261445466404,
    Height: 0.9870578299630625,
    Class: "E",
  },
  {
    Gender: 1,
    Age: 0.5423261445466404,
    Height: 1.1600443841516404,
    Class: "F",
  },
  {
    Gender: 1,
    Age: 0.5423261445466404,
    Height: 1.3249850520988884,
    Class: "G",
  },
  {
    Gender: 1,
    Age: 0.7592566023652966,
    Height: 0.4680981673973296,
    Class: "A",
  },
  {
    Gender: 1,
    Age: 0.7592566023652966,
    Height: 0.6652223803098949,
    Class: "B",
  },
  {
    Gender: 1,
    Age: 0.7592566023652966,
    Height: 0.8543007069811304,
    Class: "C",
  },
  {
    Gender: 1,
    Age: 0.7592566023652966,
    Height: 1.0474019767730314,
    Class: "D",
  },
  { Gender: 1, Age: 0.7592566023652966, Height: 1.228434417202938, Class: "E" },
  { Gender: 1, Age: 0.7592566023652966, Height: 1.381306255788193, Class: "F" },
  {
    Gender: 1,
    Age: 0.7592566023652966,
    Height: 1.5261322081321183,
    Class: "G",
  },
  {
    Gender: 1,
    Age: 0.9761870601839528,
    Height: 0.7054518115165409,
    Class: "A",
  },
  {
    Gender: 1,
    Age: 0.9761870601839528,
    Height: 0.8784383657051189,
    Class: "B",
  },
  { Gender: 1, Age: 0.9761870601839528, Height: 1.043379033652367, Class: "C" },
  {
    Gender: 1,
    Age: 0.9761870601839528,
    Height: 1.2163655878409438,
    Class: "D",
  },
  {
    Gender: 1,
    Age: 0.9761870601839528,
    Height: 1.3772833126675275,
    Class: "E",
  },
  {
    Gender: 1,
    Age: 0.9761870601839528,
    Height: 1.5140633787701239,
    Class: "F",
  },
  { Gender: 1, Age: 0.9761870601839528, Height: 1.646820501752056, Class: "G" },
  { Gender: 1, Age: 1.193117518002609, Height: 0.8583236501017959, Class: "A" },
  { Gender: 1, Age: 1.193117518002609, Height: 1.003149602445721, Class: "B" },
  { Gender: 1, Age: 1.193117518002609, Height: 1.1479755547896462, Class: "C" },
  { Gender: 1, Age: 1.193117518002609, Height: 1.3048703364955656, Class: "D" },
  { Gender: 1, Age: 1.193117518002609, Height: 1.4577421750808195, Class: "E" },
  { Gender: 1, Age: 1.193117518002609, Height: 1.5904992980627515, Class: "F" },
  { Gender: 1, Age: 1.193117518002609, Height: 1.719233477924018, Class: "G" },
  {
    Gender: 1,
    Age: 1.4100479758212652,
    Height: 0.9347595693944223,
    Class: "A",
  },
  {
    Gender: 1,
    Age: 1.4100479758212652,
    Height: 1.0675166923763544,
    Class: "B",
  },
  {
    Gender: 1,
    Age: 1.4100479758212652,
    Height: 1.2042967584789508,
    Class: "C",
  },
  {
    Gender: 1,
    Age: 1.4100479758212652,
    Height: 1.3531456539435402,
    Class: "D",
  },
  {
    Gender: 1,
    Age: 1.4100479758212652,
    Height: 1.5060174925287952,
    Class: "E",
  },
  {
    Gender: 1,
    Age: 1.4100479758212652,
    Height: 1.6387746155107261,
    Class: "F",
  },
  {
    Gender: 1,
    Age: 1.4100479758212652,
    Height: 1.7755546816133225,
    Class: "G",
  },
  {
    Gender: 1,
    Age: 1.6269784336399213,
    Height: 0.9790119437217337,
    Class: "A",
  },
  {
    Gender: 1,
    Age: 1.6269784336399213,
    Height: 1.1117690667036646,
    Class: "B",
  },
  {
    Gender: 1,
    Age: 1.6269784336399213,
    Height: 1.2445261896855966,
    Class: "C",
  },
  { Gender: 1, Age: 1.6269784336399213, Height: 1.393375085150186, Class: "D" },
  { Gender: 1, Age: 1.6269784336399213, Height: 1.546246923735441, Class: "E" },
  {
    Gender: 1,
    Age: 1.6269784336399213,
    Height: 1.6830269898380374,
    Class: "F",
  },
  {
    Gender: 1,
    Age: 1.6269784336399213,
    Height: 1.8238299990612983,
    Class: "G",
  },
  {
    Gender: 0,
    Age: -1.6269784336399213,
    Height: -2.046241283018041,
    Class: "A",
  },
  {
    Gender: 0,
    Age: -1.6269784336399213,
    Height: -1.9537135912427552,
    Class: "B",
  },
  {
    Gender: 0,
    Age: -1.6269784336399213,
    Height: -1.8571629563468053,
    Class: "C",
  },
  {
    Gender: 0,
    Age: -1.6269784336399213,
    Height: -1.7525664352095254,
    Class: "D",
  },
  {
    Gender: 0,
    Age: -1.6269784336399213,
    Height: -1.643946970951582,
    Class: "E",
  },
  {
    Gender: 0,
    Age: -1.6269784336399213,
    Height: -1.5071669048489855,
    Class: "F",
  },
  {
    Gender: 0,
    Age: -1.6269784336399213,
    Height: -1.4468227580390165,
    Class: "G",
  },
  {
    Gender: 0,
    Age: -1.4100479758212652,
    Height: -1.788772923295507,
    Class: "A",
  },
  {
    Gender: 0,
    Age: -1.4100479758212652,
    Height: -1.6962452315202214,
    Class: "B",
  },
  {
    Gender: 0,
    Age: -1.4100479758212652,
    Height: -1.599694596624271,
    Class: "C",
  },
  {
    Gender: 0,
    Age: -1.4100479758212652,
    Height: -1.491075132366327,
    Class: "D",
  },
  {
    Gender: 0,
    Age: -1.4100479758212652,
    Height: -1.3784327249877184,
    Class: "E",
  },
  {
    Gender: 0,
    Age: -1.4100479758212652,
    Height: -1.2738362038504392,
    Class: "F",
  },
  {
    Gender: 0,
    Age: -1.4100479758212652,
    Height: -1.1732626258338243,
    Class: "G",
  },
  {
    Gender: 0,
    Age: -1.193117518002609,
    Height: -1.5393504498143022,
    Class: "A",
  },
  {
    Gender: 0,
    Age: -1.193117518002609,
    Height: -1.430730985556358,
    Class: "B",
  },
  {
    Gender: 0,
    Age: -1.193117518002609,
    Height: -1.3422262369017375,
    Class: "C",
  },
  {
    Gender: 0,
    Age: -1.193117518002609,
    Height: -1.2295838295231283,
    Class: "D",
  },
  {
    Gender: 0,
    Age: -1.193117518002609,
    Height: -1.1129184790238555,
    Class: "E",
  },
  {
    Gender: 0,
    Age: -1.193117518002609,
    Height: -1.0042990147659114,
    Class: "F",
  },
  {
    Gender: 0,
    Age: -1.193117518002609,
    Height: -0.8956795505079672,
    Class: "G",
  },
  {
    Gender: 0,
    Age: -0.9761870601839528,
    Height: -1.3019968056950915,
    Class: "A",
  },
  {
    Gender: 0,
    Age: -0.9761870601839528,
    Height: -1.2014232276784766,
    Class: "B",
  },
  {
    Gender: 0,
    Age: -0.9761870601839528,
    Height: -1.0928037634205325,
    Class: "C",
  },
  {
    Gender: 0,
    Age: -0.9761870601839528,
    Height: -0.976138412921259,
    Class: "D",
  },
  {
    Gender: 0,
    Age: -0.9761870601839528,
    Height: -0.8514271761806569,
    Class: "E",
  },
  {
    Gender: 0,
    Age: -0.9761870601839528,
    Height: -0.7428077119227128,
    Class: "F",
  },
  {
    Gender: 0,
    Age: -0.9761870601839528,
    Height: -0.6301653045441042,
    Class: "G",
  },
  {
    Gender: 0,
    Age: -0.7592566023652966,
    Height: -1.076711990937874,
    Class: "A",
  },
  {
    Gender: 0,
    Age: -0.7592566023652966,
    Height: -0.9721154698005947,
    Class: "B",
  },
  {
    Gender: 0,
    Age: -0.7592566023652966,
    Height: -0.8594730624219862,
    Class: "C",
  },
  {
    Gender: 0,
    Age: -0.7592566023652966,
    Height: -0.7307388825607191,
    Class: "D",
  },
  {
    Gender: 0,
    Age: -0.7592566023652966,
    Height: -0.5979817595787876,
    Class: "E",
  },
  {
    Gender: 0,
    Age: -0.7592566023652966,
    Height: -0.4772934659588498,
    Class: "F",
  },
  {
    Gender: 0,
    Age: -0.7592566023652966,
    Height: -0.35258222921824767,
    Class: "G",
  },
  {
    Gender: 0,
    Age: -0.5423261445466404,
    Height: -0.8634960055426506,
    Class: "A",
  },
  {
    Gender: 0,
    Age: -0.5423261445466404,
    Height: -0.7508535981640421,
    Class: "B",
  },
  {
    Gender: 0,
    Age: -0.5423261445466404,
    Height: -0.6341882476647687,
    Class: "C",
  },
  {
    Gender: 0,
    Age: -0.5423261445466404,
    Height: -0.49338523844150783,
    Class: "D",
  },
  {
    Gender: 0,
    Age: -0.5423261445466404,
    Height: -0.35258222921824767,
    Class: "E",
  },
  {
    Gender: 0,
    Age: -0.5423261445466404,
    Height: -0.21580216311565126,
    Class: "F",
  },
  {
    Gender: 0,
    Age: -0.5423261445466404,
    Height: -0.07499915389239048,
    Class: "G",
  },
  {
    Gender: 0,
    Age: -0.32539568672798425,
    Height: -0.6502800201474273,
    Class: "A",
  },
  {
    Gender: 0,
    Age: -0.32539568672798425,
    Height: -0.5295917265274894,
    Class: "B",
  },
  {
    Gender: 0,
    Age: -0.32539568672798425,
    Height: -0.4008575466662223,
    Class: "C",
  },
  {
    Gender: 0,
    Age: -0.32539568672798425,
    Height: -0.25603159432229716,
    Class: "D",
  },
  {
    Gender: 0,
    Age: -0.32539568672798425,
    Height: -0.0991368126163778,
    Class: "E",
  },
  {
    Gender: 0,
    Age: -0.32539568672798425,
    Height: 0.04971208284821169,
    Class: "F",
  },
  {
    Gender: 0,
    Age: -0.32539568672798425,
    Height: 0.20660686455413108,
    Class: "G",
  },
  {
    Gender: 0,
    Age: -0.10846522890932808,
    Height: -0.43304109163153953,
    Class: "A",
  },
  {
    Gender: 0,
    Age: -0.10846522890932808,
    Height: -0.2962610255289431,
    Class: "B",
  },
  {
    Gender: 0,
    Age: -0.10846522890932808,
    Height: -0.15545801630568234,
    Class: "C",
  },
  {
    Gender: 0,
    Age: -0.10846522890932808,
    Height: 0.005459708520901393,
    Class: "D",
  },
  {
    Gender: 0,
    Age: -0.10846522890932808,
    Height: 0.174423319588815,
    Class: "E",
  },
  {
    Gender: 0,
    Age: -0.10846522890932808,
    Height: 0.3313181012947332,
    Class: "F",
  },
  {
    Gender: 0,
    Age: -0.10846522890932808,
    Height: 0.49223582612131694,
    Class: "G",
  },
  {
    Gender: 0,
    Age: 0.10846522890932808,
    Height: -0.20775627687432138,
    Class: "A",
  },
  {
    Gender: 0,
    Age: 0.10846522890932808,
    Height: -0.05488443828906751,
    Class: "B",
  },
  {
    Gender: 0,
    Age: 0.10846522890932808,
    Height: 0.10201034341685186,
    Class: "C",
  },
  {
    Gender: 0,
    Age: 0.10846522890932808,
    Height: 0.27499689760542984,
    Class: "D",
  },
  {
    Gender: 0,
    Age: 0.10846522890932808,
    Height: 0.4439605086733423,
    Class: "E",
  },
  {
    Gender: 0,
    Age: 0.10846522890932808,
    Height: 0.6008552903792617,
    Class: "F",
  },
  {
    Gender: 0,
    Age: 0.10846522890932808,
    Height: 0.7497041858438511,
    Class: "G",
  },
  {
    Gender: 0,
    Age: 0.32539568672798425,
    Height: 0.021551481003559997,
    Class: "A",
  },
  {
    Gender: 0,
    Age: 0.32539568672798425,
    Height: 0.18246920583014373,
    Class: "B",
  },
  {
    Gender: 0,
    Age: 0.32539568672798425,
    Height: 0.3433869306567275,
    Class: "C",
  },
  {
    Gender: 0,
    Age: 0.32539568672798425,
    Height: 0.5123505417246399,
    Class: "D",
  },
  {
    Gender: 0,
    Age: 0.32539568672798425,
    Height: 0.6732682665512236,
    Class: "E",
  },
  {
    Gender: 0,
    Age: 0.32539568672798425,
    Height: 0.8140712757744845,
    Class: "F",
  },
  {
    Gender: 0,
    Age: 0.32539568672798425,
    Height: 0.9508513418770809,
    Class: "G",
  },
  {
    Gender: 0,
    Age: 0.5423261445466404,
    Height: 0.2307445232781184,
    Class: "A",
  },
  { Gender: 0, Age: 0.5423261445466404, Height: 0.379593418742709, Class: "B" },
  {
    Gender: 0,
    Age: 0.5423261445466404,
    Height: 0.5244193710866342,
    Class: "C",
  },
  {
    Gender: 0,
    Age: 0.5423261445466404,
    Height: 0.6813141527925536,
    Class: "D",
  },
  {
    Gender: 0,
    Age: 0.5423261445466404,
    Height: 0.8341859913778074,
    Class: "E",
  },
  {
    Gender: 0,
    Age: 0.5423261445466404,
    Height: 0.9629201712390751,
    Class: "F",
  },
  {
    Gender: 0,
    Age: 0.5423261445466404,
    Height: 1.0876314079796772,
    Class: "G",
  },
  {
    Gender: 0,
    Age: 0.7592566023652966,
    Height: 0.35947870313938607,
    Class: "A",
  },
  {
    Gender: 0,
    Age: 0.7592566023652966,
    Height: 0.4962587692419825,
    Class: "B",
  },
  {
    Gender: 0,
    Age: 0.7592566023652966,
    Height: 0.6290158922239134,
    Class: "C",
  },
  { Gender: 0, Age: 0.7592566023652966, Height: 0.777864787688504, Class: "D" },
  {
    Gender: 0,
    Age: 0.7592566023652966,
    Height: 0.9226907400324291,
    Class: "E",
  },
  {
    Gender: 0,
    Age: 0.7592566023652966,
    Height: 1.0474019767730314,
    Class: "F",
  },
  {
    Gender: 0,
    Age: 0.7592566023652966,
    Height: 1.1721132135136334,
    Class: "G",
  },
  {
    Gender: 0,
    Age: 0.9761870601839528,
    Height: 0.4157999068286906,
    Class: "A",
  },
  {
    Gender: 0,
    Age: 0.9761870601839528,
    Height: 0.5485570298106215,
    Class: "B",
  },
  {
    Gender: 0,
    Age: 0.9761870601839528,
    Height: 0.6813141527925536,
    Class: "C",
  },
  {
    Gender: 0,
    Age: 0.9761870601839528,
    Height: 0.8261401051364787,
    Class: "D",
  },
  {
    Gender: 0,
    Age: 0.9761870601839528,
    Height: 0.9669431143597395,
    Class: "E",
  },
  {
    Gender: 0,
    Age: 0.9761870601839528,
    Height: 1.0916543511003416,
    Class: "F",
  },
  {
    Gender: 0,
    Age: 0.9761870601839528,
    Height: 1.2163655878409438,
    Class: "G",
  },
  { Gender: 0, Age: 1.193117518002609, Height: 0.4560293380353365, Class: "A" },
  { Gender: 0, Age: 1.193117518002609, Height: 0.5807405747759387, Class: "B" },
  { Gender: 0, Age: 1.193117518002609, Height: 0.7054518115165409, Class: "C" },
  { Gender: 0, Age: 1.193117518002609, Height: 0.8462548207398016, Class: "D" },
  { Gender: 0, Age: 1.193117518002609, Height: 0.9870578299630625, Class: "E" },
  { Gender: 0, Age: 1.193117518002609, Height: 1.115792009824329, Class: "F" },
  { Gender: 0, Age: 1.193117518002609, Height: 1.2405032465649322, Class: "G" },
  {
    Gender: 0,
    Age: 1.4100479758212652,
    Height: 0.48418993987998826,
    Class: "A",
  },
  {
    Gender: 0,
    Age: 1.4100479758212652,
    Height: 0.6008552903792617,
    Class: "B",
  },
  {
    Gender: 0,
    Age: 1.4100479758212652,
    Height: 0.7215435839991995,
    Class: "C",
  },
  {
    Gender: 0,
    Age: 1.4100479758212652,
    Height: 0.8543007069811304,
    Class: "D",
  },
  {
    Gender: 0,
    Age: 1.4100479758212652,
    Height: 0.9951037162043912,
    Class: "E",
  },
  {
    Gender: 0,
    Age: 1.4100479758212652,
    Height: 1.1238378960656588,
    Class: "F",
  },
  {
    Gender: 0,
    Age: 1.4100479758212652,
    Height: 1.2525720759269254,
    Class: "G",
  },
  {
    Gender: 0,
    Age: 1.6269784336399213,
    Height: 0.5083275986039756,
    Class: "A",
  },
  {
    Gender: 0,
    Age: 1.6269784336399213,
    Height: 0.6209700059825847,
    Class: "B",
  },
  {
    Gender: 0,
    Age: 1.6269784336399213,
    Height: 0.7376353564818581,
    Class: "C",
  },
  { Gender: 0, Age: 1.6269784336399213, Height: 0.870392479463789, Class: "D" },
  {
    Gender: 0,
    Age: 1.6269784336399213,
    Height: 1.0111954886870498,
    Class: "E",
  },
  {
    Gender: 0,
    Age: 1.6269784336399213,
    Height: 1.1359067254276518,
    Class: "F",
  },
  {
    Gender: 0,
    Age: 1.6269784336399213,
    Height: 1.2646409052889196,
    Class: "G",
  },
];

function findNearestClass(
  gender: number,
  age: number,
  height: number,
  data: any,
) {
  let nearestClass = "";
  let smallestDistance = Infinity;

  // Tính khoảng cách Euclide giữa điểm mới và các điểm trong tập dữ liệu
  for (let i = 0; i < data.length; i++) {
    const distance = Math.sqrt(
      Math.pow(gender - data[i].Gender, 2) +
        Math.pow(age - data[i].Age, 2) +
        Math.pow(height - data[i].Height, 2),
    );

    // Cập nhật lớp và khoảng cách nhỏ nhất nếu tìm thấy khoảng cách mới nhỏ hơn
    if (distance < smallestDistance) {
      smallestDistance = distance;
      nearestClass = data[i].Class;
    }
  }

  return nearestClass;
}

function bertalanffyGrowthModel(
  currentAge: number,
  L_infinity: number,
  k: number,
  t0: number,
  m: number,
) {
  // Tính chiều cao dự đoán theo mô hình von Bertalanffy
  const predictedHeight =
    L_infinity * Math.pow(1 - Math.exp(-k * (currentAge - t0)), 1 / m);

  return predictedHeight.toFixed(1);
}

function calculateAge(birthDateString: string) {
  // Chuyển đổi chuỗi ngày sinh thành đối tượng Date
  const birthDateParts = birthDateString.split("/");
  const birthDate = new Date(
    +birthDateParts[2],
    +birthDateParts[1] - 1,
    +birthDateParts[0],
  );

  // Lấy ngày hiện tại
  const currentDate = new Date();

  // Tính số năm chênh lệch
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Kiểm tra xem đã qua sinh nhật trong năm hiện tại chưa để điều chỉnh tuổi
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Tính tuổi theo tháng để làm tròn đến 0 chữ số thập phân
  // const months =
  //   currentDate.getMonth() -
  //   birthDate.getMonth() +
  //   12 * (currentDate.getFullYear() - birthDate.getFullYear());
  const ageWithMonths =
    age +
    (currentDate.getMonth() < birthDate.getMonth()
      ? 12 + currentDate.getMonth() - birthDate.getMonth()
      : currentDate.getMonth() - birthDate.getMonth()) /
      12;

  // Làm tròn kết quả đến 0 chữ số thập phân
  return Math.round(ageWithMonths * 1) / 1;
}

function getGrowthRate(classLabel: string) {
  // Định nghĩa một đối tượng chứa các nhãn và tỉ lệ tăng trưởng tương ứng
  const growthRates: any = {
    A: 0.03,
    B: 0.1,
    C: 0.25,
    D: 0.5,
    E: 0.75,
    F: 0.9,
    G: 0.97,
  };
  // Trả về tỉ lệ tăng trưởng tương ứng với nhãn, hoặc undefined nếu nhãn không tồn tại
  return growthRates[classLabel];
}

function calculateMean(data: any[], key: any) {
  const sum = data.reduce((accumulator, item) => accumulator + item[key], 0);
  return sum / data.length;
}

// Tính giá trị trung bình cho Age và Height
const meanAge = calculateMean(sampleData0, "Age");
const meanHeight = calculateMean(sampleData0, "Height");

function calculateStandardDeviation(data: any[], key: any, mean: any) {
  const sumOfSquares = data.reduce((accumulator, item) => {
    return accumulator + Math.pow(item[key] - mean, 2);
  }, 0);
  return Math.sqrt(sumOfSquares / data.length);
}

// Tính độ lệch chuẩn cho Age và Height
const stdDeviationAge = calculateStandardDeviation(sampleData, "Age", meanAge);
const stdDeviationHeight = calculateStandardDeviation(
  sampleData,
  "Height",
  meanHeight,
);

function scaleRecord(age: number, height: number) {
  // Scale Age
  const scaledAge = (age - meanAge) / stdDeviationAge;

  // Scale Height
  const scaledHeight = (height - meanHeight) / stdDeviationHeight;

  return {
    scaledAge,
    scaledHeight,
  };
}

export {
  sampleData,
  calculateAge,
  findNearestClass,
  getGrowthRate,
  bertalanffyGrowthModel,
  scaleRecord,
};
