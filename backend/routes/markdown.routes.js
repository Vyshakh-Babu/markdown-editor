const express = require('express');
const router = express.Router();

const { convertMarkdown } = require('../controllers/markdown.controller');

router.post('/convert', convertMarkdown);

module.exports = router;
