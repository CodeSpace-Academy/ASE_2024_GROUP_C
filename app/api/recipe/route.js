import { connectMongoose } from "@/lib/connectMongoose";
import Recipe from "@/models/Recipe";
import { NextResponse } from "next/server";

export  async function GET(req) {

    try {
       await connectMongoose()
       const recipe = await Recipe.find({})
       console.log(recipe)
       return NextResponse.json({recipe})
    } catch (error) {
        
    }
    
}

