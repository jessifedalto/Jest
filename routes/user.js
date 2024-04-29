const express = require('express');
const router = express.Router();
const UserController = require('../controller/User');

router
    .get('/', UserController.getAll);

module.exports = router;