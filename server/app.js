require("dotenv").config()
require("express-async-errors")
const express = require("express")
const app = express()

// extra security packages
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimiter = require("express-rate-limit")

// Swagger
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerDocument = YAML.load("./swagger.yaml")

// connectDB
const connectDB = require("./db/connect")
const authenticateUser = require("./middleware/authentification")

// routers
const authRoutes = require("./routes/auth")
const blogRoutes = require("./routes/blog")

// error handler
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use(express.json())

app.set('trust proxy', 1)
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
}))
app.use(helmet())
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(xss())

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.get("/", (req, res) => {
    res.send("<h1>Blog Api</h1><a href='/api-docs'>Api Documentation</a>")
})

// routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/blogs", authenticateUser, blogRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    }catch(error){
        console.log(error)
    }
};

start();