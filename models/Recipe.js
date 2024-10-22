
import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  prep: Number,
  cook: Number,
  category: String,
  servings: String,
  published: Date,
  tags: [String],
  ingredients: {
    type: Map,
    of: String,
  },
  images: [String],
  instructions: [String],
  nutrition: {
    calories: String,
    fat: String,
    saturated: String,
    sodium: String,
    carbohydrates: String,
    fiber: String,
    sugar: String,
    protein: String,
  },
});

export default mongoose.models.Recipe || mongoose.model('recipe', RecipeSchema);
