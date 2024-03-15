import multer from "multer"
export const upload = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/uploads/')
        },
        filename: function (req, file, cb) {
            const fileName = Date.now() + "-" + file.originalname
            cb(null, fileName)
        }
    })
    return storage
}

export default upload

