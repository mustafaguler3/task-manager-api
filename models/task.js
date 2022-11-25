const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"must provide name"],
        trim:true,
        maxLength:[20,"name can not be more than 20 characters"]
    },
    completed:Boolean
});

module.exports = mongoose.model("Task",taskSchema)