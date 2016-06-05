const request = require("request"),
      isUrl = require('is-url'),
      cheerio = require("cheerio");
/**
 * Retrieves the text-to-code/content-to-html ratio at url and uses
 * the callback to return said ratio
 * @name getRatio
 * @param {String} url - A url to a webpage.
 * @param {Function} [callback] - A callback which is called after the
 * ratio has been retrieved. Invoked with (ratio, responseError)
 */

module.exports = function(url, callback){
  if (!isUrl(url)) {
    throw new Error('Invalid url');
  }
  if (!callback) {
    throw new Error('Callback must be set to recieve the text-to-code ratio for the url.');
  }
  function qresponse(error,response,body){
    var ratio;
    if (!error && response.statusCode === 200) {
      $ = cheerio.load(body);
      ratio = $("body").text().length/$("body").html().length;
    }
    callback(ratio,error);
  }
  request(url, qresponse);
};
