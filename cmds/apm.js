const apmSrvc = require("../rest/apm.service");
const cfg = require("../utils/config");

function init(args) {
  var apmData = apmSrvc.exec();
  // var cvs = cfg.cvsParser.parse(apmData);
  // console.log(cvs);
}

module.exports.exec = init;
