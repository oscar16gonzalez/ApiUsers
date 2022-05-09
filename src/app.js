import express from 'express'
import UserRoutes from './routes/users.routes'
import MembershipRoutes from './routes/membership.routes'

const app = express()

//settings
app.set('port', process.env.PORT || 4000)
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})

app.use('/users', UserRoutes)
app.use('/afiliacion', MembershipRoutes)

export default app;