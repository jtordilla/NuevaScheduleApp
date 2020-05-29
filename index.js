var loadSurvey = document.getElementById("load-select"); 
var submitCourse = document.getElementById("submit-course"); 
var loadDesc = document.getElementById("load-desc"); 
var engInfo = document.getElementById("eng-info"); 
var counter = 0; 
var fname = document.getElementById("fname"); 
var lname = document.getElementById("lname"); 
var email = document.getElementById("email"); 
var submitBtn = document.querySelector("#submit-info"); 

submitBtn.addEventListener("click", function(){
    if(fname.value == "" || fname.value === "First Name"){
        alert("Please fill out first name"); 
    }else if(lname.value == "" || lname.value === "Last Name"){
        alert("Please fill out last name"); 
    }else if(email.value == "" || lname.value === "Email"){
        alert("Please fill out email"); 
    }
    else{
        console.log("successfully filled out"); 
    }
}); 

window.onload = function(){
    loadSurvey.style.display = "none"; 
    submitCourse.style.display = "none"; 
}

/*when user clicks button, new request is created to fetch data
from JSON file and create renderable data using an external function*/
loadDesc.addEventListener("click", function(){
    if(counter == 0){
        var request = new XMLHttpRequest; 
        request.open("GET", "https://raw.githubusercontent.com/jtordilla/VanillaJavascript/master/JSON_files/courses.json"); 
        request.onload = function(){
            var data = JSON.parse(request.responseText); 
            renderHTML(data); 
        }
        request.send(); 
        counter++; 
    }
}); 
//render a string that takes the first item from the JSON file 
function renderHTML(textObject){
    htmlText = "Mandatory: " + textObject[0].name + "<br>"; 
    engInfo.insertAdjacentHTML("beforeend", htmlText); 
}



