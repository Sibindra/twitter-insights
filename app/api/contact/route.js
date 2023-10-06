import { NextResponse } from "next/server";
import connectDB from "@/lib/database/mongodb";
import Contacts from "@/app/models/contact";
import mongoose from "mongoose";

export async function POST(req) {
  const { email } = await req.json();
  const {data} = await req.json();

  try {
    await connectDB();
    await Contacts.create({ email });
    await Contacts.create({ data });

    return NextResponse.json({
      msg: ["Subscribed Sucessfully."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      console.log(errorList);

      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
