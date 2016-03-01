module.exports = function(app) {
    app.get('/', function(req, res, next) {
        return res.send("WELCOME TO REST API");
    });
};
