const model = require("../model/studentModel");

let ctrl = {
    getData:(req,res)=>{
        model.getDataAll((data)=>{
            res.send(data);
        })
    },
}

module.exports = ctrl;