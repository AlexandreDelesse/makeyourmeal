const express = require("express");
const { Ingredient, NutritionalInfo } = require("../datasource/db/db");
const { ok } = require("assert");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll({ include: NutritionalInfo });
    return res.json(ingredients);
  } catch (error) {
    return res.status(500).json({ error: "Failled to retrieve ingredients" });
  }
});

// Route POST /ingredients - Créer un nouvel ingrédient avec des informations nutritionnelles
router.post("/", async (req, res) => {
  try {
    const { name, lipids, proteins, carbohydrates } = req.body;

    // Créer d'abord l'entité NutritionalInfo
    const nutritionalInfo = await NutritionalInfo.create({
      lipids,
      proteins,
      carbohydrates,
    });

    // Puis créer l'ingrédient en le liant à NutritionalInfo
    const ingredient = await Ingredient.create({
      name,
      NutritionalInfoId: nutritionalInfo.id,
    });

    return res.status(201).json(ingredient);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Failed to create ingredient" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ingredient = await Ingredient.findByPk(id);
    if (!ingredient) return res.status(404).send();
    await ingredient.destroy();
    return res.send(ingredient);
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete ingredient" });
  }
});

module.exports = router;
