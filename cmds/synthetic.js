const cfg = require("../utils/config");
const synthSrvc = require("../rest/synthetic.service");

function getAllMonitors() {
  cfg.spinner.start();
  synthSrvc.getAllMonitors().then(function(res) {
    cfg.spinner.succeed(["Got all synthetic monitors"]);
    cfg.spinner.stop();
    //console.log(JSON.stringify(res));

  }, function(err) {
    cfg.spinner.stop();
    console.error(err);
  });
}

function synthMonitorEmail(id) {
  cfg.spinner.start();
  synthSrvc.synthMonitorEmail().then(function(res) {
    cfg.spinner.succeed(["Got synthetic alert email"]);
    cfg.spinner.stop();
    console.log("-->", JSON.stringify(res));

  }, function(err) {
    cfg.spinner.stop();
    console.error(err);
  });
}

function init(args) {
  getAllMonitors();
  synthMonitorEmail();
}

module.exports.exec = init;