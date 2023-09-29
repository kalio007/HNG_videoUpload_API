const upload = require('../middleware/multer');
const cloudinary = require('../utils/cloudinary');

const accept = async (req, res) => {
    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(req.file.path, options);
        console.log(result);
        return res.status(200).json({
            success: true,
            message: "Uploaded!",
            data: result.public_id
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error"
        })
    }
}
const getAssetInfo = async (publicId) => {

    try {
        // Get details about the asset
        const result = await cloudinary.api.resource(publicId);
        console.log(result);
        return result.colors;
    } catch (error) {
        console.error(error);
    }
};

module.exports = { accept, getAssetInfo }