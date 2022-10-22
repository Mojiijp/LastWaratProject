/*!
* Start Bootstrap - One Page Wonder v6.0.5 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function auth(){
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
    if (email == "admin@ku.th" && password == "123456") 
    {
      window.location = "http://localhost:3000/admin/add-staff"
    }
    else{
      alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง")
      return
    }
}