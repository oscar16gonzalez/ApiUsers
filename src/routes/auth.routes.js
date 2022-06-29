import { Router } from "express";
import * as authController from '../controllers/auth.controller'
const router = Router()

//http://localhost:4000/auth
router.post('/signup', authController.signUp)
router.post('/signin', authController.signIn)
router.get('/', authController.findAllUsers)

//http://localhost:4000/auth/correo
router.get('/:correo', authController.findOneUser)
router.put('/:id', authController.UpdateUsers)

//http://localhost:4000/auth/correo
router.delete('/:correo', authController.deleteUser)

export default router