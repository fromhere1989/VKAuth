const path = require('path');

getLogin = (req, res) => {
    res.sendFile(path.join(__dirname, '../../view/login.html'))
};

redirectFromBlank = (req, res) => {
    res.redirect('/main')
};

getMain = (req, res) => {
    res.sendFile(path.join(__dirname, '../../view/main.html'))
};

module.exports = {
    getLogin,
    getMain,
    redirectFromBlank,
};
