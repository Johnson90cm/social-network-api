const router = require('express').Router();

const {
    addThought,
    updateThoughtById,
    getAllThought,
    deleteThought,
    getThoughtById,
    deleteReaction,
    addReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thought
router
    .route('/')
    .get(getAllThought)
    .post(addThought)

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought)

// Set up POST, and DELTE at /:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports=router;