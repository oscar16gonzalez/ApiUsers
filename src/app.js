import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UserRoutes from './routes/users.routes'
import MembershipRoutes from './routes/membership.routes'
import ProyectRoutesPruebas from './routes/proyectosPruebas.routes'
import ProyectRoutes from './routes/proyectos.routes'
import authRoutes from './routes/auth.routes'
import path from 'path'
import multer from 'multer'


const app = express()
//createRole();

//settings
app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//middlewares
/*app.use(multer({
    dest: path.join(__dirname, 'uploads')
}).single('image'))*/

//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome' })
})

app.use('/users', UserRoutes)
app.use('/afiliacion', MembershipRoutes)
app.use('/auth', authRoutes)
app.use('/proyectosprueba', ProyectRoutesPruebas)
app.use('/proyectos', ProyectRoutes)



export default app;