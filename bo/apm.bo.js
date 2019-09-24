function getRes(q,a){
    var resObj = {};
    resObj.Question = q;
    resObj.Answer = a;
    return resObj;
}

function howManyApplications(reqObj){
    return getRes("How many APM applications?", reqObj.applications.length);
}

module.exports.howManyApplications = howManyApplications;