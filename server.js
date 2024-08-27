const express = require("express"),
  path = require("path"),
  morgan = require("morgan"),
  dotenv = require("dotenv").config(),
  mongoose = require("mongoose")

const blogRoutes = require("./routes/blogRoutes")

let app = express()
app.set("view engine", "ejs")
app.set("views", "my views")

//middlewares
app.use(morgan("dev"))
app.use(express.static("./public"))
app.use(express.urlencoded({extended: true}))

app.get("/", async (req, res) => {
  res.redirect("/blogs")
  //res.sendFile(path.join(__dirname, "../Server/index.html"))
})

app.get("/about", (req, res) => {
  res.render("about", {title: "About"})
})

app.use("/blogs", blogRoutes)

app.use((req, res) => {
  res.render("404", {title: 404})
})

//connection to mongoDb
mongoose
  .connect(process.env.connectionString)
  .then(() => {
    console.log("connected to db!")
    app.listen(5000, () => {
      console.log("server is listening")
    })
  })
  .catch((err) => console.log(err))
