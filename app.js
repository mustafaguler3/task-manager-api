const express = require("express")
const app = express();
const tasks = require("./routes/tasks")
const connectDb = require("./db/connect")
const notFound = require("./middleware/notfound")
const errorHandler = require("./middleware/error-handler")

require("dotenv").config()
//middleware
app.use(notFound)
app.use(errorHandler)
app.use(express.static("./public"))
app.use(express.json())

app.get("/hello",(req,res)=>{
    res.send("Task manager app")
})

app.use("/api/v1/tasks",tasks);


const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)

        app.listen(3000,()=>{
            console.log("Server is listening on port 3000")
        })
    }catch (err) {
        console.log(err)
    }
}

start()
