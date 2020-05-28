var loadSurvey = document.getElementById("load-select"); 
var submitCourse = document.getElementById("submit-course"); 
var loadDesc = document.getElementById("load-desc"); 
var courseInfo = document.getElementById("course-info"); 

window.onload = function(){
    loadSurvey.style.display = "none"; 
    submitCourse.style.display = "none"; 
}

/*when user clicks button, new request is created to fetch data
from JSON file and create renderable data using an external function*/
loadDesc.addEventListener("click", function(){
    var request = new XMLHttpRequest; 
    request.open("GET", "https://raw.githubusercontent.com/jtordilla/VanillaJavascript/master/JSON_files/courses.json"); 
    request.onload = function(){
        var data = JSON.parse(request.responseText); 
        renderHTML(data); 
    }
    request.send(); 
}); 
//render a string that takes the first item from the JSON file 
function renderHTML(textObject){
    htmlText = textObject[0].name; 
    courseInfo.insertAdjacentHTML("beforeend", htmlText); 
}

