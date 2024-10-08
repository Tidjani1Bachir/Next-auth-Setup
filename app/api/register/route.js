import User from "@/models/User.js";
import connectDB from "@/config/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// getting the user credentials
export const POST = async (request) => {
  const { username, email, password, confirmPassword } = await request.json();

  if (password !== confirmPassword) {
    return new NextResponse(
      JSON.stringify({ error: "Passwords do not match" }),
      {
        status: 400,
      }
    );
  }
  //  connect to the db  

  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  }
// hash the password when save it to the db so that if someone acces the data base don't see the passwords 
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    return new NextResponse("User is registered", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
