const srvc = require('../rest/service.common.js');
const endPoint = require('../utils/endPoints.json');
const cfg = require("../utils/config");
const apmBO = require("../bo/apm.bo");

var finalAPMData = [];

//Make service call to get all APM applications
function listApplications(){
    cfg.spinner.info("Getting list of all APM applications");
    cfg.spinner.start();
    srvc.get(endPoint.APM_LIST_ALL_APPS).then(function(res){
        finalAPMData.push(apmBO.howManyApplications(res));
        cfg.spinner.succeed(["Done"]);
        cfg.spinner.stop();
        var cvs = cfg.cvsParser.parse(finalAPMData);
        console.log(cvs);
    }, function(err){
        cfg.spinner.fail("Failed");
        cfg.spinner.stop();
    });
}


function listKeyTransactions(){
    cfg.spinner.info("Getting key transactions ");
    cfg.spinner.start();
    srvc.get(endPoint.APM_LIST_ALL_KEY_TX).then(function(res){
        cfg.spinner.succeed(["Done"]);
        cfg.spinner.stop();
    }, function(err){
        cfg.spinner.fail("Failed");
        cfg.spinner.stop();
    });
}




function exec(){
    listApplications();
}
module.exports.exec = exec;
