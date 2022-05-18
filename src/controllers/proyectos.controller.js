import Proyect from "../models/Proyectos";

//Crear los proyectos
export const createProyects = async (req, res) => {
    try {
        const newProyect = new Proyect({
            contrato: req.body.contrato, objeto_contrato: req.body.objeto_contrato, contratista: req.body.contratista,
            interventoria: req.body.interventoria, entidad: req.body.entidad, valor_contrato: req.body.valor_contrato,
            departamento: req.body.departamento, municipio: req.body.municipio, usuarios: req.body.usuarios
        })

        const proyectSave = await newProyect.save()
        res.json(proyectSave)
    } catch (error) {
        res.status(500).send('error create projects')
    }

}


//Buscar todos los proyectos
export const findAllProyects = async (req, res) => {
    try {
        const proyect = await Proyect.find()
        res.json(proyect)
    } catch (error) {
        res.status(500).send('Projects not founds')
    }
}

//buscra por nombre del contrato
export const findOneProyectByName = async (req, res) => {
    try {
        const proyect = await Proyect.find({ contrato: req.params.contrato })
        console.log(proyect)

        if (Proyect.length === 0) {
            res.status(400).send('Project not found')
        } else {
            res.json(proyect)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Project not found')
    }
}
//Borrar proyecto por id 

export const deleteProyect = async (req, res) => {
    try {
        await Proyect.findByIdAndDelete(req.params.id)
        res.json({
            message: 'Project were deleted successfully'
        })
    } catch (error) {
        res.status(500).send('Error deleting project')
    }
}