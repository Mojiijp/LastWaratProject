const CourseDetail = require('../models/course')

exports.getCourses = (req, res, next) => {
    CourseDetail.fetchAll((courses) => {
        res.render("course", {
            course: courses,
            pageTitle: "รายวิชาที่เปิดสอน - วิทยาการคอมพิวเตอร์",
            path: "/course",
        })
    })
}

exports.getCoursesDetail = (req, res, next) => {
    CourseDetail.fetchAll((coursesdetail) => {
        for (let i = 0; i < coursesdetail.length; i++) {
            if (req.params.id == coursesdetail[i].id) {
                res.render("cscourse", { 
                    coursedt: coursesdetail[i],
                    pageTitle: req.params.id + " " + coursesdetail[i].subject_th + " - วิทยาการคอมพิวเตอร์",
                    path: "/course/cs" + req.params.id,
                })
            }
        }
    })
}