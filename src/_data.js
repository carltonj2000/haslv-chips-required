export const images = [
  { level: 0, color: "Pink", chips: [{ name: "Chip Master.png", qty: 20 }] },
  {
    level: 4,
    color: "Green",
    chips: [
      { name: "Anniversary Narrows.png", qty: 40 },
      { name: "Brownstone.jpg", qty: 40 },
      { name: "Calico Shark Fin.jpg", qty: 30 },
      { name: "Gunsight.jpg", qty: 30 },
      { name: "Juniper Peak.jpg", qty: 30 },
      { name: "Kraft - No Route.jpg", qty: 30 },
      { name: "Magic Mountain.jpg", qty: 100 },
      { name: "Mummys Nose.jpg", qty: 40 },
      { name: "Mummys Toe.jpg", qty: 40 },
      { name: "Turtle Peak Jr Double Slot.jpg", qty: 100 },
    ],
  },
  {
    level: 5,
    color: "Orange",
    chips: [
      { name: "Evas Tower.jpg", qty: 40 },
      { name: "Goodman.jpg", qty: 30 },
      { name: "Griffith.jpg", qty: 100 },
      { name: "Mescalito.jpg", qty: 30 },
      { name: "Mummy Mountain.jpg", qty: 30 },
      { name: "Sisters.jpg", qty: 40 },
      { name: "White Rock Hills Peak.jpg", qty: 40 },
    ],
  },
  {
    level: 6,
    color: "Black",
    chips: [
      { name: "Bridge 360.jpg", qty: 10 },
      { name: "Holiday Peak.jpg", qty: 30 },
      { name: "Ice Box.jpg", qty: 30 },
      { name: "Charleston.jpg", qty: 50 },
      { name: "Wilson.jpg", qty: 30 },
      { name: "Mummy Head to Toe.jpg", qty: 20 },
      { name: "Mummys Chin.jpg", qty: 20 },
      { name: "Mummys Forehead.jpg", qty: 20 },
      { name: "Mummys Head Loop.jpg", qty: 10 },
      { name: "White Pinnacle.jpg", qty: 50 },
    ],
  },
];

export const total = images.reduce(
  (a, i) => a + i.chips.reduce((a1, i2) => a1 + i2.qty, 0),
  0
);
