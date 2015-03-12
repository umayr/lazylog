/**
 * Created by Umayr Shahid on 3/12/2015.
 */

'use strict';

var info = require('../package.json');
var fs = require('fs');

module.exports = {
    version: function () {
        return info.version;
    },
    writeFile: function (filename, data, callback) {
        fs.writeFileSync(filename, data, 'utf8', callback);
    }
}
