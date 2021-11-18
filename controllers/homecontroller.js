const indexView = (req,res, next) =>{
    res.render('home')
}

const iconView = (req,res, next) =>{
   res.render('icons');
 }

module.exports = {
    indexView,
    iconView
}