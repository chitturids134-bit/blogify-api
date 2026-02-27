const express = require('express');
const router = express.Router();

const postRoutes = require('./posts.routes');
const profileRoutes = require('./profiles.routes');

router.use('/posts', postRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;