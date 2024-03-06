import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: String,
    content :{
        type: String,
        required : true,
    },
    complete:{
        type:Boolean,
        default : false,
    },
    createdBy:{ // object of user
        type: mongoose.Schema.Types.ObjectId, // connect with another model via schema and objectId 
        ref:"user", // model reference 
    },
    subTodo:[ // Array of sub todo
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'sub_todo',
        }
    ]
    

},{timestamps:true});

export const todo = new mongoose.model("todo",todoSchema);