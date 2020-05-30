var loadSurvey = document.getElementById("load-select"); 
var submitCourse = document.getElementById("submit-course"); 
var loadDesc = document.getElementById("load-desc"); 
var engInfo = document.getElementById("eng-info"); 
var fname = document.getElementById("fname"); 
var lname = document.getElementById("lname"); 
var email = document.getElementById("email"); 
var submitBtn = document.querySelector("#submit-info");
var readMore = document.getElementById("readMore"); 
var listingHead = document.querySelector("#listingHead"); 

window.onload = function(){
    loadSurvey.style.display = "none"; 
    submitCourse.style.display = "none"; 
    readMore.style.display = "none"; 
    listingHead.style.display = "none"; 
}

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
        var itemArray = ["fname", "lname", "email"]; 
        for(var i = 0; i < itemArray.length; i++){
            if(i == 0){
                storeInfo("fname"); 
                console.log(localStorage.getItem("fname")); 
            }else if(i == 1){
                storeInfo("lname"); 
                console.log(localStorage.getItem("lname"));
            }else if(i == 2){
                storeInfo("email"); 
                console.log(localStorage.getItem("email"));
            }
        }
    }
}); 

function storeInfo(id){
    var container = document.getElementById(id); 
    if(id == "fname"){
        localStorage.setItem("fname", container.value);
    }else if(id == "lname"){
        localStorage.setItem("lname", container.value); 
    }else if(id == "email"){
        localStorage.setItem("email", container.value);
    }
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
    loadDesc.style.display = "none"; 
    readMore.style.display = "block"; 
    listingHead.style.display = "block"; 
}); 

//render a string that takes the first item from the JSON file 
function renderHTML(textObject){
    for(var i = 0; i < textObject.length; i++){
        var htmlText = textObject[i].name + "<br>"; 
        engInfo.insertAdjacentHTML("beforeend", htmlText); 
    }
}

readMore.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("expand"); 
})






