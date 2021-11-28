const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

const router = require('express').Router();

// Set up GET all and POST at /api/Users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/Users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
//     .delete(deleteFriend)

module.exports=router;