const mongoose = require('mongoose');

// create our schema

const postSchema = mongoose.Schema(
    {
        message : {
            type : String,
            required : true,
        },
        author : {
            type : String,
            required : true,
        },
        likers : {
            type : [String],
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('post', postSchema)