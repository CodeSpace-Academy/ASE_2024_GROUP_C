import connectToDatabase from "../../../lib/connectMongoose";
import Recipe from "../../../models/Recipe";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log('cjsd csdcdsc')
  try {
    let db = await connectToDatabase();
    console.log('mdcakmdcma')
    const recipes = await Recipe.find({}, { _id: 1, title: 1, description: 1, prep: 1, cook: 1, images: 1, ingredients: 1, instructions: 1, nutrition: 1, servings: 1 }).limit(50).lean();
    //console.log(recipes[0])
    return NextResponse.json({ recipes });
  } catch (error) {
    console.error(error);
  }
}
