import express from 'express'
import UserRoutes from './routes/users.routes'

const app = express()

//settings
app.set('port', process.env.PORT || 4000)
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})

app.use('/users', UserRoutes)

export default app;