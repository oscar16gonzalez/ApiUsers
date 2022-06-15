/*import multer from 'multer'
import shortid from 'shortid'

export const multerConfig = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../uploads'); //los uploads se suben a esta carpeta 
        },
        filename: (req, file, cb) => {
            //obtener extencion del archivo
            const extension = file.mimetype.split('/')[1];
            //generar id para ponerlo como nombre de la imagen 
            cb(null, `${shortid.generate()}.${extension}`);
        }

    }),

    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') { //solo acepta tipo de imagen jpng y png
            cb(null, true);
        } else {
            cb(new Error('Invalid image format'))
        }
    }
}

export default multerConfig;*/