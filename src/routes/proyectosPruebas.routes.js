import { Router } from "express";
import *as proyectController from '../controllers/proyectosPruebas.controller';
const router = Router()

//http://localhost:4000/proyectos
router.get('/', proyectController.findAllProyect)

//http://localhost:4000/proyectos
router.post('/', proyectController.createdProyect)

//http://localhost:4000/proyectos/id
//router.delete('/:proyectid', proyectController.deleteProyect)

//http://localhost:4000/proyectos/id
router.get('/:proyectid', proyectController.findOneProyect)



export default router;