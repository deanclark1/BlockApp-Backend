const mongoose = require('mongoose')

/**
 * 
 * 
 * _id
 * __v
 * password
 */



const postSchema = mongoose.Schema({
    title: { type: String, required:true },
    content: {type:String, required:true },
    author: { type: String, required:true},
    date_created: {type: String, default: Date.now},
    upvotes: { type: Number, default: 0, },
    downvotes: { type: Number, default: 0}
})

postSchema.set('toJSON', {
    transform: (doc, post) =>{
        post.id = post._id.toString()
        delete post._id
        delete post.__v
        delete post.password
    }
})


// creating a module
const Post = mongoose.model('Post', postSchema)

module.exports = Post