const http = require('https');
const q = require('q');
const cfg = require('../utils/config');
const request = require('request');


function get(endPoint){
    var deferred = q.defer();
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          deferred.resolve(JSON.parse(body));

        }else{
            deferred.reject(error);
        }
      }
      request(cfg.getServiceOptions(endPoint), callback);

    return deferred.promise;       
}

module.exports.get = get;