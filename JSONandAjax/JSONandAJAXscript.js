var displaydetails = document.getElementById("people");
var showbutton = document.getElementById("show");

/* on button click fetch the JSON data */
show.addEventListener("click", function() {

    /*Open the connection*/
    var ajaxdata = new XMLHttpRequest();
    ajaxdata.open('GET', 'http://www.filltext.com/?rows=10&name={firstName}&lastname={lastName}&email={email}&city={city}&friendName={firstName}&pretty=true');

    /*On JSON load*/
    ajaxdata.onload = function() {
        /*If connect to the external JSON URL*/
        if (request.status >= 200 && request.status < 400) {
            var ajaxdetails = JSON.parse(ajaxdata.responseText);
            renderHTML(ajaxdetails); //display in li tag function
        } else {
            console.log("We connected but something went wrong");
        }
    };
    ajaxdata.send(); //
    showbutton.classList.add("hidefetch"); // Hide the Button
});

/* display the json data inside li tag */
function renderHTML(data) {
    var htmlstring = "";
    for (i = 0; i < data.length; i++) {
        htmlstring += "<li>" + data[i].name + "</li >";
    }
    displaydetails.insertAdjacentHTML("beforeend", htmlstring);
}
