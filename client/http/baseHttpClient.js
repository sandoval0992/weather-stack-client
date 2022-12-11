const rp = require('request-promise');

class BaseHttpClient {
  // TODO: Create constructor method

  _sendRequest(options) {
    return new Promise((resolve, reject) => {
      rp(options, function (err, response, body) {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      });
    });
  }
}

module.exports = BaseHttpClient;
