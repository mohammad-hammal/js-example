var moment = require('moment');

exports.getAge = function (date) {
    return moment().diff(date, 'years');
}

