window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";

  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage; //Webkit, Safari, Chrome
});

window.onload = function () {

  if (document.cookie.indexOf('name') > -1) {
    var cookies = document.cookie
      .split(";")
      .map(cookie => cookie.split("="))
      .reduce((accumulator, [key, value]) =>
        ({
          ...accumulator,
          [key.trim()]: decodeURIComponent(value)
        }), {});

    document.getElementById("p").innerHTML += "Welcome back, " + cookies.name + "! How are you today?";
  } else {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {

      document.cookie = "name=" + person + ";expires= Fri, 31 Dec 9999 23:59:59 GMT";
      document.getElementById("p").innerHTML += "Hello " + person + "! How are you today?";

    }
  }
}

function check_value(fieldvalue){
 if(fieldvalue == 1){
  document.getElementById("inner2").innerHTML += "<img class='fox center h-100' src='images/fox.png'>";
 }else if(fieldvalue == 2){
    document.getElementById("inner2").innerHTML += "<img class='fox center h-100' src='images/fox.png'>";
 }else if(fieldvalue == 3){
  document.getElementById("inner2").innerHTML += "<img class='fox center h-100' src='images/fox.png'>";
}else if(fieldvalue == 4){
  document.getElementById("inner2").innerHTML += "<img class='fox center h-100' src='images/fox.png'>";
}else {
  document.getElementById("inner2").innerHTML += "<img class='fox center h-100' src='images/Curiosity.gif'>";
}

}


window.onblur = function () { document.title = 'No, come back! :) '; }

window.onfocus = function () { document.title = 'Yey! You are back'; }
