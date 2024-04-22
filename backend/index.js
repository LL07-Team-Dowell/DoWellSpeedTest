import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import routes from "./src/routes/index.js"
import config from "./src/config/index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

app.use("/api/v1/", routes)

app.get("/", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Backend Services for DoWell Speed Test 1.0.0"
    })
})

app.all("*", (_req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found"
    })
})


try {
    const onlistening = () => {
        console.log(`Listening on port ${config.PORT}`);
    }

    app.listen(config.PORT,onlistening)

} catch (error) {
    console.error("ERROR: ",error)
    throw error
}
export default app;