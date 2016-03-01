var fs = require('fs');
var route = {};
console.log(fs.readdirSync);

fs.readdirSync(__dirname +'/v1').forEach(function(file) {
    if (file == "api.js") return;
    var name = file.substr(0, file.indexOf('.'));
    route[name] = require('./v1/' + name);
});
console.log(route);
module.exports = route;