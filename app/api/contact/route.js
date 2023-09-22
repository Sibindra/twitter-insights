import { NextResponse } from "next/server";
import connectDB from "@/app/libr/mongodb";
import Contacts from "@/app/models/contact";
import mongoose from "mongoose";

export async function POST(req){
    const{email} = await req.json();

    // console.log("Email:",email);

    try{
        await connectDB();
        await Contacts.create({email});

        return NextResponse.json({
            msg:["Subscribed Sucessfully."],
            success:true,
        });
    } catch(error){

        if(error instanceof mongoose.Error.ValidationError){
            let errorList =[];
            for (let e in error.errors){
                errorList.push(error.errors[e].message);
            }

            console.log(errorList);

            return NextResponse.json({msg:errorList});

        }
        else{
            return NextResponse.json({msg:["Unable to send message."]});
        }
    }



}