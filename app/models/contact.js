import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    email:{
        type:String,
        required:[true,"Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
         
    },

    date:{
        type:Date,
        default:Date.now,
    },
});

const Contacts = 
  mongoose.models.Contacts || mongoose.model("Contacts",contactSchema);

  export default Contacts;