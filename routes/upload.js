const express = require('express')
const router = express.Router();
const { accept, getVideo } = require('../controller/upload')
const upload = require('../middleware/multer')


router.post('/upload', upload.single('video'), accept)
router.get('/:public_id', getVideo)

module.exports = router;