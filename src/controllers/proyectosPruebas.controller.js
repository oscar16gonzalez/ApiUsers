import Proyectspruebas from '../models/ProyectosPruebas'

//Crear proyectos
export const createdProyect = async (req, res) => {

    const newProyect = new Proyects({
        tipo_persona: req.body.tipo_persona, nit: req.body.nit, representante_legal: req.body.representante_legal,
        cedula_repre: req.body.cedula_repre, nombre: req.body.nombre, cedula: req.body.cedula, usuarios: req.body.usuarios
    })


    const proyectSave = await newProyect.save()
    res.json(proyectSave)


}

//Buscar todos los proyectos
export const findAllProyect = async (req, res) => {

    const proyect = await Proyectspruebas.find()
    res.json(proyect)



}

//Buscar proyecto por id

export const findOneProyect = async (req, res) => {
    const proyect = await Proyectspruebas.findById(req.params.proyectid)
    res.json(proyect)
}

//Borrar proyectos por id

export const deleteProyect = async (req, res) => {

    await Proyectspruebas.findById(req.params.proyectid)
    res.json({
        message: 'Proyect were deleted successfully'
    })

}
