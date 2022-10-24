const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    }, 
    flaire: {
        type: String,
        required: [true, 'Please select a flaire']
    },
    text: {
        type: String,
        required: [true, 'Please add a body to your post']
    },
    fireLevel: {
        type: Number,
        required: [true, 'Please select a fire level']
    }
}, 
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('Post', postSchema)