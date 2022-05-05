import {Router} from 'express';
import Users from '../models/Users'
const router = Router()

//http://localhost:4000/users
router.get('/', async (req, res) => {
    const users = await Users.find()
    res.json(users)
})

//http://localhost:4000/users
router.post('/', async (req, res) => {
    const newUsers = new Users({ name: req.body.name, last_name: req.body.last_name, email: req.body.email, password: req.body.password })
    const usersSave = await newUsers.save()
    res.json(usersSave)
})

export default router;