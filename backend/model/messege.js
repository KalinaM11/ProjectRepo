// Schema for what a message looks like

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema (
    {
        id: {Type: Number, required: true},
        from: {type: String, required: true},
        content: {type: String, required: true},
        to: {type: String, required: true}
    }, 

    {
    //save to collection proj_collection 
    collection: "proj_collection"
    }
);

const db = mongoose.connection.useDb("teaching_proj");
const Message = db.model("message", MessageSchema);

export default Message;



