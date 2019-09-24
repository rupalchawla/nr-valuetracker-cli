const ora = require('ora');
const { Parser } = require('json2csv');

const fields = ['Question', 'Answer'];
const cvsOpts = {fields};
const cvsParser = new Parser(cvsOpts);

const spinner = ora({
    spinner: "clock",
    color: 'yellow',
    text: 'Loading...'
});

const ServiceMethod = {
    "GET": "GET",
    "POST": "POST",
    "DELETE": "DELETE",
    "PUT": "PUT"
};

const header = {
    "X-Api-Key": '',
    "content-type": "application/json"
};

function getServiceOptions(apiEndPoint) {
    var serviceOptions = {
        url: apiEndPoint,
        headers: header
    };

    return serviceOptions;
}




module.exports.ServiceMethod = ServiceMethod;
module.exports.spinner = spinner;
//module.exports.API_KEY = API_KEY;
module.exports.getServiceOptions = getServiceOptions;
module.exports.cvsParser = cvsParser;
