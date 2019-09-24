const q = require('q');
const cfg = require('../utils/config');
const request = require('request');


/**
 * Get email addresses for a monitor
 * This method gets list of all email addresses associated with a specific monitor's alert notifications in New Relic Synthetics
 * @param monitorId Synthetic monitor id in question
*/
function synthMonitorEmail(monitorId){

    var deferred = q.defer();
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          deferred.resolve(JSON.parse(body));

        }else{
            deferred.reject(error);
        }
      }
      request(cfg.getServiceOptions("https://synthetics.newrelic.com/synthetics/api/v1/monitors/724b8108-cbff-4de0-9f4b-c5b6471d9902/notifications"), callback);

    return deferred.promise;       
}


/**
 * Get all monitors
 * List all the monitors in your New Relic Synthetics account
*/
function getAllMonitors(){

  var deferred = q.defer();
  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        deferred.resolve(JSON.parse(body));

      }else{
          deferred.reject(error);
      }
    }
    request(cfg.getServiceOptions("https://synthetics.newrelic.com/synthetics/api/v3/monitors"), callback);

  return deferred.promise;       
}

module.exports.synthMonitorEmail = synthMonitorEmail;
module.exports.getAllMonitors = getAllMonitors;
