const Staff = require("../models/addstaff")

// exports.getProducts = (req, res, next) => {
//     Product.fetchAll((products) => {
//         res.render("shop", { 
//             prods: products, 
//             pageTitle: "Staff", 
//             path: "/", 
//             hasProducts: products.length > 0, 
//             productCSS: true,
//             activeShop: true,
//         })
//     })
// }

exports.getStaff = (req, res, next) => {
    Staff.fetchAll((products) => {
        res.render("staff", {
            prods: products, 
            pageTitle: "Staff",
            path : '/staff'
        })
})
}

exports.getAddStaff = (req, res, next) => {
    res.render("addstaff", {
        pageTitle : "Add Staff",
        path : "/admin/add-staff",
    })
}

exports.postAddProduct = (req, res, next) => {
    const staff = new Product(req.body.title)
    staff.save()
    res.redirect("/")
}