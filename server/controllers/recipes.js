import Recipe from "../models/Recipe.js"
import User from "../models/User.js"
import cloudinary from "../cloudinary/index.js"
import mongoose from "mongoose"

export const createRecipe = async (req, res) => {
  try {
    const { author, title, cuisine, ingredients, tags, description } = req.body
    const image = await cloudinary.uploader.upload(req.file.path, {
      folder: "recipe-images",
      transformation: [{ width: 800, height: 800, crop: "fill" }],
    })
    const newRecipe = new Recipe({
      author,
      title,
      cuisine,
      image: image.secure_url,
      ingredients: ingredients.split(","),
      tags: tags.split(","),
      description,
      comments: [],
      views: 0,
      likes: {},
      stars: {},
    })
    await newRecipe.save()
    const recipes = await Recipe.find()
    res.status(201).json(recipes)
  } catch (err) {
    res.status(409).json({ msg: err.message })
  }
}