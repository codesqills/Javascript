var showbutton = document.getElementById("show");
var emptydiv = document.getElementById("people");

showbutton.addEventListener("click", function() {

    var ajaxdata = new XMLHttpRequest();
    ajaxdata.open('GET', "http://www.filltext.com/?rows=10&name={firstName}&lastname={lastName}&email={email}&city={city}&friendName={firstName}&pretty=true");

    ajaxdata.onload = function() {
        var ajaxdetails = JSON.parse(ajaxdata.responseText);
        HandlerCreation(ajaxdetails);
    };
    ajaxdata.send();
});

function HandlerCreation(peopledata) {
    var peopletemplate = document.getElementById("peopletemplate").innerHTML;
    var compiledtemplate = Handlebars.compile(peopletemplate);
    var generatedhtml = compiledtemplate(peopledata);

    document.getElementById("people").innerHTML = generatedhtml;
}
