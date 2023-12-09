var request = require("request");
exports.Authenticate = function (ckey, csecret, redirect_uri, cb) {
  var err = "";
  var redirect_url = "";
  if (ckey === "" || csecret === "" || redirect_uri === "") {
    err = "Missing client key and/or client secret key.";
  } else {
    redirect_url =
      "https://www.dropbox.com/oauth2/authorize?client_id=" +
      ckey +
      "&response_type=code&redirect_uri=" +
      redirect_uri;
  }

  //to get the access token
  exports.AccessToken = function (ckey, csecret, auth_code, redirect_url, cb) {
    var url = "https://api.dropbox.com/1/oauth2/token";
    var body = {
      code: auth_code,
      grant_type: "authorization_code",
      redirect_uri: redirect_url,
      client_id: ckey,
      client_secret: csecret,
    };

    request.post(url, { form: body, json: true }, function (err, res, body) {
      cb(err, body);
    });
  };
  cb(err, redirect_url);
};

exports.api = function (access_token) {
  return {
    account: function (cb) {
      options = {
        url: "https://api.dropbox.com/1/account/info",
        headers: {
          Authorization: "Bearer " + access_token,
        },
        json: true,
      };
      request.get(options, function (err, res, body) {
        cb(err, res, body);
      });
    },
  };
};
