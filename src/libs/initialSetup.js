import Role from '../models/Role'

/*export const createRole = async () => {

    const count = await Role.estimatedDocumentCount()

    if(count > 0) return;

   const values = await Promise.all([
    new Role({ name: "Super Admin"}).save(),
    new Role({ name: "Aux Admin"}).save(),
    new Role({ name: "Residente"}).save(),
    new Role({ name: "SGSST"}).save()
   ])

   console.log(values)
} */