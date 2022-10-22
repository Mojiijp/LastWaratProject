const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "staff.json"
)

module.exports = class Staff {
    constructor(id, name_eng, name, email, office, image) {
        this.st_id = id;
        this.st_name_eng = name_eng;
        this.st_name = name;
        this.st_email = email;
        this.st_office = office;
        this.st_image = image;
    }
    save() {

            fs.readFile(p, (err, fileContent) => {
                let staffs = [];
                if (!err) {
                    staffs = JSON.parse(fileContent);
                }
                staffs.push(this)
                fs.writeFile(p, JSON.stringify(staffs), (err) => {
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