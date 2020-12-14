const routes = require('express').Router()
const { createPost, allBlogPost, specificAuthor, byParam, updatePost ,deletePost} = require('../controllers/post')


routes.post("/api/post/createpost", createPost)
routes.get("/api/post/allposts", allBlogPost)
routes.get("/api/post/postauthor", specificAuthor)
routes.get("/api/post/postparam", byParam)
routes.put("/api/post/updatepost", updatePost)
routes.delete("/api/post/deletepost", deletePost)

module.exports = routes