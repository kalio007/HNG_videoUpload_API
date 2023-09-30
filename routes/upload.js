const express = require('express')
const router = express.Router();
const { accept } = require('../controller/upload')
const upload = require('../middleware/multer')


router.post('/upload', upload.single('file'), accept)
// router.get('/:public_id', getAssetInfo)

module.exports = router;