const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "staff.json"
)
module.exports = class Product {
    constructor(t) {
        this.title = t
    }
    
    save() {

            fs.readFile(p, (err, fileContent) => {
                let staff = [];
                if (!err) {
                    staff = JSON.parse(fileContent);
                }
                staff.push(this)
                fs.writeFile(p, JSON.stringify(staff), (err) => {
                    console.log(err)
                });
            });
    }
    static fetchAll(cb) {

            fs.readFile(p, (err, fileContent) => {
                if (err) {
                    cb([]);
                }
                cb(JSON.parse(fileContent));

            });
    }
};