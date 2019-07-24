const cfg = require("../utils/config");
const srvc = require("../utils/rest.service");

function getApplications(){
  srvc.listApplications().then(function(res){
    cfg.spinner.succeed(["Got application list"]);
    cfg.spinner.stop();
    console.log(res);
  }, function(err){
    cfg.spinner.stop();
    console.error(err);
  });
}

function init(args) {
  cfg.spinner.start();
  getApplications();
}

module.exports.exec = init;