import { Router } from 'express';
import * as membershipController from '../controllers/membership.controller'
import { authJwt } from '../middlewares/' //-----------------> es para proteger las rutas pero todavi lo tengo que mirar
const router = Router()

//http://localhost:4000/afiliacion
router.get('/', membershipController.findAllMembership)

//http://localhost:4000/afiliacion
router.post('/', membershipController.createMembership)

//http://localhost:4000/afiliacion/id
//router.get('/:id', membershipController.findOneMembership)

//http://localhost:4000/afiliacion/cedula
router.delete('/:cedula', membershipController.deleteMembership)

//http://localhost:4000/afiliacion/cedula
router.get('/:cedula', membershipController.findOneMembershipEmail,)

export default router;