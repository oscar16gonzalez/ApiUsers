import {Router} from 'express';
import * as usersController from '../controllers/users.controller'
const router = Router()

//http://localhost:4000/users
router.get('/', usersController.findAllUsers)

//http://localhost:4000/users
router.post('/',usersController.createUsers)

//http://localhost:4000/users/id
router.get('/:id', usersController.findOneUser)


//http://localhost:4000/users/id
router.delete('/:id', usersController.deleteUser)

export default router; 