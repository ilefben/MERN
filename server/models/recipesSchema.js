import mongoose from "mongoose";
const recipeSchema = mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
  creator: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const RecipePost = mongoose.model("RecipePost", recipeSchema);
export default RecipePost;
