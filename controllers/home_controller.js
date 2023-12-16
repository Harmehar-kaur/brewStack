module.exports.home = function(req, res){

    try{
        return res.render('index', {
            title: "Brew Stack"
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}

module.exports.login = function(req,res){
    return res.render('login',{
        title:'Login'
    })
}