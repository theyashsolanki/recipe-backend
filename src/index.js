import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js'
import { recipesRouter } from './routes/Recipes.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)
app.use('/recipes', recipesRouter)

mongoose.connect(
    `mongodb+srv://yash_solanki:${process.env.DB_PASSWORD}@recipes.ghnk9xs.mongodb.net/recipes?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.listen(3001, () => {
    console.log('server started')
})