const CourseDetail = require('../models/course')

exports.getCourses = (req, res, next) => {
    CourseDetail.fetchAll((courses) => {
        res.render("course", {
            course: courses,
            path: "/course",
        })
    })
}

exports.getCoursesDetail = (req, res, next) => {
    CourseDetail.fetchAll((coursesdetail) => {
        for (let i = 0; i < coursesdetail.length; i++) {
            if (req.params.id == coursesdetail[i].course_id) {
                res.render("cscourse", { 
                    coursedt: coursesdetail[i],
                    path: "/course/cs" + req.params.course_id,
                })
            }
        }
    })
}