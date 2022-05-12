import {Router} from 'express';
import * as membershipController from '../controllers/membership.controller'
import {authJwt} from '../middlewares/'
const router = Router()

//http://localhost:4000/afiliacion
router.get('/', membershipController.findAllMembership)

//http://localhost:4000/afiliacion
router.post('/',[authJwt.verifyToken, authJwt.SuperAdmin, authJwt.AuxAdmin], membershipController.createMembership)

//http://localhost:4000/afiliacion/id
router.get('/:id' , membershipController.findOneMembership)

//http://localhost:4000/afiliacion/id
router.delete('/:id', [authJwt.verifyToken, authJwt.SuperAdmin] ,membershipController.deleteMembership)

export default router;