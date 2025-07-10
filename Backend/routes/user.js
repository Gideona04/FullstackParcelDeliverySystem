const express = require('express');
const router = express.Router();
const { deleteUser, getAllUsers } = require('../controllers/user');

// DELETE USER
router.delete("/:id", deleteUser);

// GET ALL USERS
router.get("/", getAllUsers);

module.exports = router;
