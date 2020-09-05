const mongoose = require("mongoose");

const exampleTwoSchema = new mongoose.Schema({
    name: String,
});

const exampleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        default: ""
    },
    exmapleTwo: [exampleTwoSchema]
});

mongoose.model("Example", exampleSchema);
