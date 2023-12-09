var node_dropbox = require("./dropbox.js");
var key = "ikeap8bxxxxxxxx";
var secret = "xxxxxxxxxxxxxxx";
var redirect_url = "http://localhost:3000/api/v1/dbox";
node_dropbox.Authenticate(key, secret, redirect_url, function (err, url) {
  console.log(url); //this is the url where user will be redirected
  // looks like this: "https://www.dropbox.com/1/oauth2/authorize?client_id=ikeap8bxxxxxxxx&response_type=code&redirect_uri=http://localhost:3000/api/v1/dbox"
});
module.exports.dbox = (function () {
  var getToken = function (code) {
    node_dropbox.AccessToken(
      key,
      secret,
      code,
      redirect_url,
      function (err, body) {
        var access_token = body.access_token;
        api = node_dropbox.api(access_token);
        api.account(function (err, res, body) {
          console.log(body);
        });
      }
    );
  };
  return {
    getToken: getToken,
  };
})();
