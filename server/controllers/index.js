const path = require('path');

getLogin = (req, res) => {
    res.sendFile(path.join(__dirname, '../../view/login.html'))
};

getMain = (req, res) => {
    let code = req.query.code;
    res.sendFile(path.join(__dirname, '../../view/main.html'));
    if(req.query.code) {
      res.redirect(`https://oauth.vk.com/access_token?client_id=7277333&client_secret=YWwMFcEDEuaYzWIYtzyn&redirect_uri=http://localhost:8080/main&code=${code}`)
      console.log(req.body);
    };
};

getToken = (req, res) => {
  console.log('ku');
}

module.exports = {
    getLogin,
    getMain,
    getToken,
};
