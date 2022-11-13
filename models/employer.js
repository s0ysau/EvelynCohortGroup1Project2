const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employerSchema = new Schema(
  {
    username: { 
      type: String, 
      required: true, 
      unique: true,
      minLength: 5,
      maxLength: 15,
    },
    password: { 
      type: String, 
      required: true,
      minLength: 8,
      maxLength: 20,
    },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true },
    jobPosting: [{
      type: Schema.Types.ObjectID,
      ref: "job postings"
    }]
  }
)

const Employer = model("employer", employerSchema)

module.exports = Employer



