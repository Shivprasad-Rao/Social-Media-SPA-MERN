const express = require('express');
const { check } = require('express-validator');

const placeControllers = require('../controllers/places-controller');
const fileUpload = require('../middleware/file-upload');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

router.get('/:pid', placeControllers.getPlaceById);

router.get('/user/:uid', placeControllers.getPlacesByUserId);

router.use(checkAuth);

//if there is invalid token, unauthenticated user cannot access the routes below.

router.post('/',
    fileUpload.single('image'),
    [
        check('title').not().isEmpty(),
        check('description').isLength({ min: 5 }),
        check('address').not().isEmpty()
    ], placeControllers.createPlace);

router.patch('/:pid', [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 })
], placeControllers.updatePlace);

router.delete('/:pid', placeControllers.deletePlace);

module.exports = router;