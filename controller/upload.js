// const upload = require('../middleware/multer');
const cloudinary = require('../utils/cloudinary');

const accept = async (req, res) => {
    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto",
            use_filename: true,
            raw_convert: "google_speech"
        });
        // console.log(result);
        return res.status(200).json({
            success: true,
            message: "Uploaded!",
            public_id: result.public_id,
            video_url: result.url
        });
    } catch (error) {
        // console.error(error);
        return res.status(500).json({
            success: false,
            message: `Error: ${error.message}`,
            // console.log(error)
        })
    }
}
const getVideo = async (req, res) => {
    const public_id = req.params.public_id
    try {
        // Get details about the asset
        const result = await cloudinary.video(public_id, {
            transformation: [
                { overlay: { resource_type: "subtitles", public_id: `${public_id}.transcript` } },
                { flags: "layer_apply" }
            ]
        });
        // console.log(result);
        return res.status(200).json({
            message: "found video",
            statusCode: 200,
            data: result,
        });
    } catch (error) {
        // console.error(error);
        return res.status(500).json({
            message: `Error: ${error.message}`,
            data: null
        })
    }
};

module.exports = { accept, getVideo }