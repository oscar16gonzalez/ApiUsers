import { Router } from "express";
import *as authController from '../controllers/auth.controller'
const router = Router()

//http://localhost:4000/auth

router.post('/signup', authController.signUp)
router.post('/signin', authController.signIn)
router.get('/', authController.findAllUsers)



export default router