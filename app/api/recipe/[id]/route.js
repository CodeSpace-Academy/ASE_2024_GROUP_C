import connectToDatabase from "@/lib/connectMongoose";
import Recipe from "@/models/Recipe";
import { NextResponse } from "next/server";

/**
 *
 * @param {*} req
 * @param {id} param1 - This Will get the exact recipe id from database
 * @returns - The recipe object by its Id
 */

export async function GET(req, { params }) {
  try {
    let { id } = params;
    await connectToDatabase();
    const recipe = await Recipe.findOne({ _id: id }).lean();

    return NextResponse.json({ recipe }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
