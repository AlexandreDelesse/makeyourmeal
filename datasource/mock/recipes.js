const { v4: uuidv4 } = require("uuid");

const RECIPES = [
  {
    id: uuidv4(),
    title: "Un super repas bien calorique",
    ingredients: [
      {
        foodstuffId: 1,
        quantity: 120,
      },
      {
        foodstuffId: 2,
        quantity: 25,
      },
      {
        foodstuffId: 4,
        quantity: 100,
      },
      {
        foodstuffId: 5,
        quantity: 40,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Un autre super repas mais plus leger",
    ingredients: [
      {
        foodstuffId: 4,
        quantity: 120,
      },
      {
        foodstuffId: 2,
        quantity: 25,
      },
      {
        foodstuffId: 1,
        quantity: 100,
      },
      {
        foodstuffId: 5,
        quantity: 40,
      },
    ],
  },
];

module.exports = RECIPES;
