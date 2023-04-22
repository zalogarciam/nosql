import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const server = express();

const PORT = process.env.PORT || 3000

server.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'] ,
    origin: '*'
}))
server.use(express.json())

server.listen(PORT, () => {
    console.log(`Server running ... port: ${PORT}`)
})