const http = require('https');
const q = require('q');
const cfg = require('./config');
const request = require('request');


function listApplications(){
    var deferred = q.defer();
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          deferred.resolve(JSON.parse(body));

        }else{
            deferred.reject(error);
        }
      }
      request(cfg.getServiceOptions("https://api.newrelic.com/v2/applications.json"), callback);

    return deferred.promise;       
}

module.exports.listApplications = listApplications;