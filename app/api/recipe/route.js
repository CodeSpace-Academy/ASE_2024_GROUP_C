import connectToDatabase from "../../../lib/connectMongoose";
import Recipe from "../../../models/Recipe";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log('cjsd csdcdsc')
  try {
    await connectToDatabase();
    const recipes = await Recipe.find({}).lean().limit(50);
    console.log(recipes)
    return NextResponse.json({ recipes });
  } catch (error) {
    console.error(error);
    console.error('Error fetching recipes:', error);

    // Return an error response
    return NextResponse.json({ success: false, error: 'Failed to fetch recipes' }, { status: 500 });
  }
}




