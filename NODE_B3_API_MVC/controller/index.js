const model = require("../model/studentModel");

let ctrl = {
    viewHomePage:(req,res)=>{
        model.getDataAll((rows)=>{
            res.render('index',{title:"Demo",data:rows});
        });

    },
    viewHomeIntro:(req,res)=>{
        res.render('intro',{title:"HA"});

    }
}

module.exports = ctrl;