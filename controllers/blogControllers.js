const {blogsModel} = require("../models/blog")

let blog_index = async (req, res) => {
  try {
    let blogs = await blogsModel.find()
    res.render("blogs/index", {title: "Home", blogs})
  } catch (error) {
    console.log(error)
  }
}

let blog_getBlog = async (req, res) => {
  try {
    let {id} = req.params
    let blog = await blogsModel.findOne({_id: id})
    res.render("blogs/details", {blog, title: blog.title})
  } catch (error) {
    console.log(error)
    res.render("404", {title: "Blog not found"})
  }
}

let blog_postBlog = async (req, res) => {
  let {title, snippet, body} = req.body
  const blog = new blogsModel({
    title,
    snippet,
    body,
  })
  try {
    await blog.save()
  } catch (err) {
    console.log(err)
  } finally {
    res.redirect("/")
  }
}
let blog_createBlog = (req, res) => {
  res.render("blogs/create", {title: "Create a new blog"})
}

let blog_deleteBlog = async (req, res) => {
  try {
    let {id} = req.params
    console.log(id)
    let blog = await blogsModel.deleteOne({_id: id})
    console.log(blog)
    res.send({redirectTo: "/blogs"})
  } catch (error) {
    console.log(error)
    res.send({error})
  }
}

module.exports = {
  blog_index,
  blog_getBlog,
  blog_postBlog,
  blog_createBlog,
  blog_deleteBlog,
}
