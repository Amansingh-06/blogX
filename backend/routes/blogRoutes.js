const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { saveDraft, publishBlog, getBlogs, getBlogById } = require('../controllers/blogController');

router.post('/save-draft', auth, saveDraft);
router.post('/publish', auth, publishBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);

module.exports = router;
