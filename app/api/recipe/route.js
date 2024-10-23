import { NextResponse } from 'next/server';
import  connectToDatabase  from '../../lib/mongodb';
import Recipe from '../../models/Recipe';
import mongoose from 'mongoose';

export async function GET() {
  try {
   // console.log('123')
   // console.log(Recipe);
    
    // Connect to the database
    //await connectToDatabase();
    const db = await connectToDatabase();
//  console.log('Connected to:', db.connection.name);  
   // console.log(mongoose.connection.db.databaseName);
   // console.log(Recipe.collection.collectionName);
   // console.log('12345dfg')
    // Fetch all recipes from the MongoDB collection
    let recipes;
    // try {
       recipes = await Recipe.find({});
    //  console.log('12345');
      
    // } catch (error) {
    //   console.error('Error fetching recipes:', error);
    // }
   // console.log(recipes);
    // Return the recipes in the response
    return NextResponse.json( {recipes});
  } catch (error) {
    console.error('Error fetching recipes:', error);

    // Return an error response
    return NextResponse.json({ success: false, error: 'Failed to fetch recipes' }, { status: 500 });
  }
}

