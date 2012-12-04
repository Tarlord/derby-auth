// Encryption using http://dailyjs.com/2010/12/06/node-tutorial-5/

var crypto = require('crypto');

module.exports.encryptPassword = function(password, salt) {
    var encrypted = crypto.createHmac('sha1', salt).update(password).digest('hex');
    debugger;
    return encrypted;
}

module.exports.makeSalt = function() {
    return Math.round((new Date().valueOf() * Math.random())) + '';
}