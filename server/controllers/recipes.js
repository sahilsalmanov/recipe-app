
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

export const editRecipe = async (req, res) => {
    try {
      const { recipeId } = req.params
      const { title, cuisine, ingredients, tags, description, image, newImage } =
        req.body
      const imagePath = image.split("/")
      if (newImage) {
        await cloudinary.uploader.destroy(
          `${imagePath[7]}/${imagePath[8].slice(0, -4)}`,
          function (error, result) {
            console.log(result)
          }
        )
      }
      const updatedImage =
        req.file &&
        (await cloudinary.uploader.upload(req.file.path, {
          folder: "recipe-images",
          transformation: [{ width: 800, height: 800, crop: "fill" }],
        }))
      const recipe = await Recipe.findByIdAndUpdate(
        recipeId,
        {
          title,
          cuisine,
          ingredients: ingredients.split(","),
          tags: tags.split(","),
          description,
          image: req.file && updatedImage.secure_url,
        },
        { new: true }
      ).populate("author")
      await recipe.save()
      res.status(200).json(recipe)
    } catch (err) {
      res.status(404).json({ msg: err.message })
    }
  }

  export const getRecipe = async (req, res) => {
    const { recipeId } = req.params
    try {
      const recipe = await Recipe.findById(recipeId).populate("author")
      res.status(200).json(recipe)
    } catch (err) {
      res.status(404).json({ msg: err.message })
    }
  }     
