import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  date: {
    type: Date,
    default: Date.now,
  },

  contactEmail: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  name: {
    type: String,
    required: [true, "Name is required."],
    match: [/^[a-zA-Z ]{2,30}$/, "Invalid name."],
  },

  message: {
    type: String,
    required: [true, "Message is required."],
    match: [/^[a-zA-Z ]{2,30}$/, "Invalid message."],
  },
});

const Contacts =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);

export default Contacts;
