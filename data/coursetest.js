fetch('course.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
    appendData1(data);
    appendData2(data);
    appendData3(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
    var mainContainer = document.getElementById("myData");
        for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = ' ' + data[i].course_id;
        mainContainer.appendChild(div);
    }
}

function appendData1(data) {
  var mainContainer = document.getElementById("myData1");
      for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML =  ' ' + data[i].course_name;
      mainContainer.appendChild(div);
  }
}

function appendData2(data) {
  var mainContainer = document.getElementById("myData2");
      for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML =  ' ' + data[i].course_name_eng;
      mainContainer.appendChild(div);
  }
}

function appendData3(data) {
  var mainContainer = document.getElementById("myData3");
      for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML =  ' ' + data[i].credit;
      mainContainer.appendChild(div);
  }
}
