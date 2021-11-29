const router = require('express').Router();

const {
    createThought,
    updateThoughtById,
    getAllThought,
    deleteThought,
    getThoughtById,
    deleteReaction,
    createReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thought
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought);

// Set up POST, and DELTE at /:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction)

module.exports=router;