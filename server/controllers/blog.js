const Blog = require("../models/Blog")
const { BadRequestError, NotFoundError } = require("../errors")
const { StatusCodes } = require("http-status-codes")

const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: 1 }).populate("authorId", "name")
    res.status(StatusCodes.OK).json({ blogs })
}

const getBlog = async (req, res) => {
    const { params: {id: blogId} } = req
    if(!blogId){
        throw new BadRequestError("Please provide blog id")
    }
    const blog = await Blog.findOne({ _id: blogId }).populate("authorId", "name")
    if(!blog){
        throw new NotFoundError(`No blog with id: ${blogId}`)
    }
    res.status(StatusCodes.OK).json({ blog })
}

const createBlog = async (req, res) => {
    const { userId } = req.user
    const { title, excerpt, imageUrl, category, content } = req.body
    if(!title || !excerpt || !imageUrl || !category || !content){
        throw new BadRequestError("Please provide all fields")
    }
    const blog = await Blog.create({ title, excerpt, imageUrl, category, content, authorId: userId })
    res.status(StatusCodes.CREATED).json({ blog })
}

const updateBlog = async (req, res) => {
    const {
        body: { title, excerpt, imageUrl, category, content },
        params: { id: blogId },
    } = req
    if(!blogId){
        throw new BadRequestError("Please provide blog id")
    }
    const blog = await Blog.findOneAndUpdate({ _id: blogId }, { title, excerpt, imageUrl, category, content })
    if(!blog){
        throw new NotFoundError(`No blog with id: ${blogId}`)
    }
    const updatedBlog = await Blog.findOne({ _id: blogId })
    res.status(StatusCodes.OK).json({ blog: updatedBlog })
}

const deleteBlog = async (req, res) => {
    const {params: {id: blogId}} = req
    if(!blogId){
        throw new BadRequestError("Please provide blog id")
    }
    const blog = await Blog.findOneAndDelete({ _id: blogId })
    if(!blog){
        throw new NotFoundError(`No blog with id: ${blogId}`)
    }
    res.status(StatusCodes.OK).json({ blog })
}

const getBlogCategories = async (req, res) => {
    const categories = await Blog.find({}).select("category")
    const uniqueCategories = [...new Set(categories.map(category => category.category).flat())]
    if(!categories){
        throw new NotFoundError("No categories found")
    }
    res.status(StatusCodes.OK).json({ categories: uniqueCategories })
}

module.exports = {
    createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog, getBlogCategories
}

