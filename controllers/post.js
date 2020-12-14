const { request } = require('express')
const Post = require('../models/posts')
const { post } = require('../routes/auth')


// get all blog post

const allBlogPost = async( req, res ) =>{
    await Post.find({}).exec((error, posts) =>{
        if(error){
            res.status(500).send({
                error: 'Internal server error'
            })
        }
        res.send(posts)
    })
}

//create a new post
const createPost = async (req, res ) =>{
    const {title, author, content, date_created, upvotes, downvotes } = req.body
    const post = Post({ title, author , content, date_created, upvotes, downvotes})
    
    try{
        const newPost = await post.save()
        res.send({ message: 'Post ccreated', newPost})
    }catch(exception){
        res.status(500).send({ error: 'Cannot create'})
    }


}

//get a specific author

const specificAuthor = async (req, res) =>{
    const { author } = req.body
    try{
        await Post.find({ author}).exec((error, posts) =>{
            if(error){
                console.log(error)
                res.status(500).send({ error: 'Internal server error'})
            }
            res.send(posts)
        }) 
    }catch(error){
        console.log(error)
    }

}

//get a post by param

const byParam = async (req, res) =>{
    try{
        await Post.find(req.query).exec((error, posts) =>{
            if(error){
                console.log(error)
                res.status(500).send({ error: 'Internal server error'})
            }
            res.send(posts)
        }) 
    }catch(error){
        console.log(error)
    }

}

//update a post
const updatePost =async (req, res) =>{
    const { content, upvotes } = req.body

    try{
        let post = await Post.findOneAndUpdate({ _id: req.param.id}, {content, upvotes});
        res.status(200).send({ message: 'successfuly updated', post})
    }catch (error ){
        console.log(error)
    }
}
// delete a post
const deletePost = async (req, res) => {
    try {
      await Post.findOneAndDelete({ _id: req.params.id });
      res.status(200).send({ message: "successfully deleted" });
    } catch (error) {
      console.log(error);
    }
  };




module.exports = {createPost, allBlogPost, specificAuthor, byParam, updatePost ,deletePost } 