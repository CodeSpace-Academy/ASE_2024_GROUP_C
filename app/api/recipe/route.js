import connectToDatabase from "../../../lib/connectMongoose";
import Recipe from "../../../models/Recipe";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDatabase();
    const recipes = await Recipe.find({}).lean().limit(50);
    console.log(recipes)
    return NextResponse.json({ recipes });
  } catch (error) {
    console.error(error);
  }
}
