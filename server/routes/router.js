const express = require('express');
const Controllers = require('../controllers/index');
const router = express.Router();

router.get('/login', Controllers.getLogin);
router.get('/main', Controllers.getMain);
router.get('https://oauth.vk.com/blank.html', Controllers.redirectFromBlank);

module.exports = router;
