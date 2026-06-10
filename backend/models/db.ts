import dotenv from 'dotenv'
dotenv.config()
import { MongoClient } from 'mongodb'

const DB_URL = process.env.MONGO_DB_URL
if (!DB_URL) {
    console.error("MONGO_DB_URL tidak ditemukan. Pastikan .env telah dimuat.")
    process.exit(1)
}

const client = new MongoClient(DB_URL)
const dbname = "WSIDO_DB"

const ConnectDB = async () => {
    try {
        await client.connect()
        console.log("DB SUKSES KONEK KE", dbname)
        return client.db(dbname)
    } catch (error) {
        console.error("GAGAL KONEK", error)
        throw error
    }
}

const db = ConnectDB()
export default db