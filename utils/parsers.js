/**
 * Created by Umayr Shahid on 3/12/2015.
 */

'use strict';

module.export = {
    regex: function (val) {
        return new RegExp(val, 'i');
    },
    number: function (val) {
        return (val > 0) ? val : constants.NUMBER;
    },
    date: function (val) {
        if (typeof val === 'undefined')
            return val;

        var date = new Date(val);
        if (!isNaN(date.getTime())) {

            var d = date.getDate(),
                m = date.getMonth() + 1,
                y = date.getFullYear();

            return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
        }
        else {
            return -1;
        }
    }
}
