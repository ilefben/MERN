//import { updatePost } from "../../client/src/api/index.js";
import RecipePost from "../models/recipesSchema.js";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
  try {
    const recipeSchema = await RecipePost.find();
    console.log(recipeSchema);
    res.status(200).json(recipeSchema);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new RecipePost(recipe);

  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post with that id ");

  const updatedPost = await RecipePost.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  await postMessage.findByIdAndRemove(id);
  console.log("DELETE!!");
  res.json({ message: "Post deleted successfully" });
};
export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("hhgg");
  const post = await RecipePost.findById(id);
  const updatedPost = await RecipePost.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
