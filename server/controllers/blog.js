const Blog = require("../models/Blog")
const { BadRequestError, NotFoundError } = require("../errors")
const { StatusCodes } = require("http-status-codes")

const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find({ authorId: req.user.userId }).sort({ createdAt: 1 })
    res.status(StatusCodes.OK).json({ blogs })
}

const getBlog = async (req, res) => {
    const {user: {userId}, params: {id: blogId}} = req
    if(!blogId){
        throw new BadRequestError("Please provide blog id")
    }
    const blog = await Blog.findOne({ _id: blogId, authorId: userId })
    if(!blog){
        throw new NotFoundError(`No blog with id: ${blogId}`)
    }
    res.status(StatusCodes.OK).json({ blog })
}

const createBlog = async (req, res) => {
    const { title, excerpt, imageUrl, category, content } = req.body
    if(!title || !excerpt || !imageUrl || !category || !content){
        throw new BadRequestError("Please provide all fields")
    }
    const blog = await Blog.create({ authorId: req.user.userId, title, excerpt, imageUrl, category, content })
    res.status(StatusCodes.CREATED).json({ blog })
}

const updateBlog = async (req, res) => {
    const {
        body: { title, excerpt, imageUrl, category, content },
        params: { id: blogId },
        user: { userId }
    } = req
    if(!blogId){
        throw new BadRequestError("Please provide blog id")
    }
    const blog = await Blog.findOneAndUpdate({ _id: blogId, authorId: userId }, { title, excerpt, imageUrl, category, content })
    if(!blog){
        throw new NotFoundError(`No blog with id: ${blogId}`)
    }
    const updatedBlog = await Blog.findOne({ _id: blogId, authorId: userId })
    res.status(StatusCodes.OK).json({ blog: updatedBlog })
}

const deleteBlog = async (req, res) => {
    const {user: {userId}, params: {id: blogId}} = req
    if(!blogId){
        throw new BadRequestError("Please provide blog id")
    }
    const blog = await Blog.findOneAndDelete({ _id: blogId, authorId: userId })
    if(!blog){
        throw new NotFoundError(`No blog with id: ${blogId}`)
    }
    res.status(StatusCodes.OK).json({ blog })
}

module.exports = {
    createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog
}

