import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:3000/api/v1",
})

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
})

// User 
export const UserSignUp = async (user) => {
    const response = await API.post("/auth/register", user)
    return response
}

export const UserLogin = async (user) => {
    const response = await API.post("/auth/login", user)
    return response
}

// Blog
export const getAllBlogs = async () => {
    const response = await API.get("/blogs")
    return response
}

export const getBlogById = async (id) => {
    const response = await API.get(`/blogs/${id}`)
    return response
}

export const getBlogCategories = async () => {
    const response = await API.get("/blogs/categories")
    return response
}

// export const updateBlog = async (id, blog, token) => {
//     const response = await API.patch(`/blogs/${id}`, blog, {
//         headers: { Authorization: `Bearer ${token}` }
//     })
//     return response
// }

export const updateBlog = async (id, blog) => {
    const response = await API.patch(`/blogs/${id}`, blog)
    return response
}

export const deleteBlog = async (id) => {
    const response = await API.delete(`/blogs/${id}`)
    return response
}

export const createBlog = async (blog) => {
    const response = await API.post("/blogs", blog)
    return response
}
