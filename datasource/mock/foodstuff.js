const { v4: uuidv4 } = require("uuid");

const FOODSTUFF = [
  {
    id: uuidv4(),
    name: "Avocat",
    nutritionals: {
      protein: 2,
      carb: 3.5,
      fat: 22,
    },
  },
  {
    id: uuidv4(),
    name: "Banane",
    nutritionals: {
      protein: 1.5,
      carb: 20,
      fat: 0,
    },
  },
  {
    id: uuidv4(),
    name: "Flocons d'avoine complets",
    nutritionals: {
      protein: 13,
      carb: 61,
      fat: 7,
    },
  },
  {
    id: uuidv4(),
    name: "Beurre de cacahuètes",
    nutritionals: {
      protein: 26,
      carb: 17,
      fat: 49,
    },
  },
  {
    id: uuidv4(),
    name: "Riz",
    nutritionals: {
      protein: 7.9,
      carb: 79,
      fat: 1,
    },
  },
  {
    id: uuidv4(),
    name: "Impact whey isolate",
    nutritionals: {
      protein: 90,
      carb: 2.5,
      fat: 0.3,
    },
  },
];

module.exports = FOODSTUFF;
