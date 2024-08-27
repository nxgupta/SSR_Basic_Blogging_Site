const mongoose = require("mongoose")
const Schema = mongoose.Schema
let blogSchema = new Schema(
  {
    title: {type: String, required: true},
    snippet: {type: String, required: true},
    body: {type: String, required: true},
    createdDate: {type: Date, default: Date.now()},
  },
  {timestamps: true}
)

module.exports.blogsModel = new mongoose.model("blogs", blogSchema)
