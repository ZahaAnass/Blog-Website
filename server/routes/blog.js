const express = require("express")
const router = express.Router()
const { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog, getBlogCategories } = require("../controllers/blog")

router.route("/").get(getAllBlogs).post(createBlog)
router.route("/categories").get(getBlogCategories)
router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog)

module.exports = router
