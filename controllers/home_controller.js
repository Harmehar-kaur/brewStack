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

module.exports.about = function(req,res){
    return res.render('about',{
        title: 'About Us'
    })
}

module.exports.cart = function(req,res){
    return res.render('cart',{
        title:'Cart'
    })
}

module.exports.heritage = function(req,res){
    return res.render('heritage',{
        title:'Our Heritage'
    })
}

module.exports.diversity = function(req,res){
    return res.render('diversity',{
        title:'Diversity'
    })
}

module.exports.privacy = function(req,res){
    return res.render('privacy',{
        title:'Privacy Policy'
    })
}

module.exports.terms = function(req,res){
    return res.render('term',{
        title:'Terms And Condition'
    })
}