import Role from '../models/Role'

export const createRole = async () => {

    const count = await Role.estimatedDocumentCount()

    if(count > 0) return;

   const values = await Promise.all([
    new Role({name: "Super_Admin"}).save(),
    new Role({name: "Aux_Admin"}).save(),
    new Role({name: "Residente"}).save(),
    new Role({name: "SG_SST"}).save()
   ])

   console.log(values)
} 