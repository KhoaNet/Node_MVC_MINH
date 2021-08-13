const db = require('../db');

let model = {
    getDataAll:(callback)=>{
        db.query("select * from students",(err,rows)=>{
            if (err) {throw err;console.log(err);}
            return callback(rows,err)
        });

    }
}

module.exports = model;