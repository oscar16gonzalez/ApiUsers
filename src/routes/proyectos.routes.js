import { Router } from "express";
import * as proyectController from '../controllers/proyectos.controller'
const router = Router()

//http://localhost:4000/proyectos
router.post('/', proyectController.createProyects)


//http://localhost:4000/proyectos
router.get('/', proyectController.findAllProyects)

//http://localhost:4000/proyectos/contrato
// router.get('/:contrato', proyectController.findOneProyectByName)

//http://localhost:4000/proyectos/id
router.delete('/:id', proyectController.deleteProyect)

router.get('/:id', proyectController.findOneProyect)

export default router;