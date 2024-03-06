import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({
    title: String,
    content: {
        type:String,
        required: true
    },
    complete:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
},{timestamps:true});

export const subTodo = new mongoose.model("sub_todo",subTodoSchema);