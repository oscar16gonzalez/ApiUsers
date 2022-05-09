import {Router} from 'express';
import * as membershipController from '../controllers/membership.controller'
const router = Router()

//http://localhost:4000/afiliacion
router.get('/', membershipController.findAllMembership)

//http://localhost:4000/afiliacion
router.post('/', membershipController.createMembership)

//http://localhost:4000/afiliacion/id
router.get('/:id', membershipController.findOneMembership)

//http://localhost:4000/afiliacion/id
router.delete('/:id', membershipController.deleteMembership)

export default router;