const {blog_index, blog_getBlog, blog_postBlog, blog_createBlog, blog_deleteBlog} = require("../controllers/blogControllers")

let router = require("express").Router()

//blog routes
router.get("/create", blog_createBlog)
router.get("/", blog_index)
router.post("/", blog_postBlog)
router.get("/:id", blog_getBlog)
router.delete("/:id", blog_deleteBlog)

module.exports = router
