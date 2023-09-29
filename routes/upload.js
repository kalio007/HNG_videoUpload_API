const express = require('express')
const router = express.Router();
const { accept, getAssetInfo } = require('../controller/upload')
const upload = require('../middleware/multer')


router.post('/upload', upload.single('image'), accept)
router.get('/:public_id', getAssetInfo)




module.exports = router;