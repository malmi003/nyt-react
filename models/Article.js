let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ],
    data: {
        type: String,
    }
});

// create model from above schema using Mongoose's model method
let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;