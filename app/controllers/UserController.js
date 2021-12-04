var postgres = require('postgres');

module.exports = {
    getSignUp : function(req,res,next){
        return req.render('views/index.html');
    },
    postSignUp: function(req,res,next){
        console.log(req.body);
        return;
    }
};