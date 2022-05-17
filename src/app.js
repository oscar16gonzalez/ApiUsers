import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UserRoutes from './routes/users.routes'
import MembershipRoutes from './routes/membership.routes'
import ProyectRoutesPruebas from './routes/proyectosPruebas.routes'
import ProyectRoutes from './routes/proyectos.routes'
//import {createRole} from './libs/initialSetup'
import authRoutes from './routes/auth.routes'


const app = express()
//createRole();

//settings
app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

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