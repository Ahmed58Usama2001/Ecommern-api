const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
    cloud_name: 'ddserezcu',
    api_key: '528818685667258',
    api_secret: 'Nc8PL2jMiFkxd3WPlk75x4PATDU'
})

router.delete('/:public_id', async (req, res) => {
    const { public_id } = req.params;
    try {
        await cloudinary.uploader.destroy(public_id);
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e.message)
    }
})


module.exports = router;