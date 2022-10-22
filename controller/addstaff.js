const Staff = require("../models/addstaff")

exports.getAdmin = (req, res, next) => {
         res.render('admin',{
              pageTitle:'Admin',
              path:'/admin'
         })
}

exports.postAdmin = (req, res, next) => {
    // const {email, password } = req.body;
    // if (email === "admin@ku.th" && password === "123456") {
    //     res.redirect("/admin/add-staff");
    // }else{
    //     res.redirect("/admin");
    // }
    res.redirect("/admin/add-staff")
}

exports.getStaff = (req, res, next) => {
    Staff.fetchAll((staffs) => {
        res.render('staff',{
             prods: staffs,
             pageTitle:'Staff',
             path:'/staff'
        })
   })
}

exports.getAddStaff = (req, res, next) => {
    res.render("add-staff", {
        pageTitle : "Add Staff",
        path : "/admin/add-staff",
    })
}

exports.postAddStaff = (req, res, next) => {
    const p = new Staff(
        req.body.st_id,
        req.body.st_name_eng,
        req.body.st_name,
        req.body.st_email,
        req.body.st_office,
        req.body.st_image);
    p.save()
    res.redirect("/staff")
}