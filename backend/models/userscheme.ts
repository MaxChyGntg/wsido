import mongoose, { Schema } from 'mongoose'

const UserAuth = new mongoose.Schema({
    name: String,
    password: String,
    Email: String,
    Age: Number
})

const ExportUserAuth = mongoose.model('User', UserAuth)

export default ExportUserAuth