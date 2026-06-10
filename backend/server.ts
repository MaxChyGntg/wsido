import express from 'express'
import db from './models/db.ts'
import 'axios'
import axios from 'axios'
const app = express()
app.use(axios)
app.use(express.json())

app.get('/', (req, res) => {
    res.json("Server nyala")
})

app.listen(8000, () => {
    console.log("Server nyala di http://10.0.2.2:8000")
})

export default app