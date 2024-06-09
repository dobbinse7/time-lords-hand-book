

function toggleColors() {
  var sheet = document.getElementsByTagName("link")[0];
  if (sheet.getAttribute("href") == "style.css") {
    sheet.setAttribute("href", "dark.css");
    setCookie("theme", "dark");
  } else {
    sheet.setAttribute("href", "style.css");
    setCookie("theme", "light");
  }
}

function setColor(color){
  var sheet = document.getElementsByTagName("link")[0];
  if (color == "light"){
    sheet.setAttribute("href", "style.css");
    //setCookie("theme", "light");
  }
  if (color == "dark"){
    sheet.setAttribute("href", "dark.css");
    //setCookie("theme", "dark");
  }
  if (color == "retro"){
    sheet.setAttribute("href", "retro.css");
  }
}

function getTheme(){
  var cookies = document.cookie.split(';');
  var theme = "";
  var cookieFound = false;
  for (var i = 0; i < cookies.length; i++){
    var cook = cookies[i];
    if (cook.substring(0, name.length) == name){
      theme += cook.substring(6, cook.length);
      cookieFound = true;
    }
  }
  if (!cookieFound){
    theme += "light";
  }
  return theme;
}

function setCookie(name, value){
  var cookies = document.cookie.split(';');
  var newCookies = "";
  var cookieFound = false;
  for (var i = 0; i < cookies.length; i++){
    var cook = cookies[i];
    if (cook.substring(0, name.length) == name){
      newCookies += (name + "=" + value);
      cookieFound = true;
    }
  }
  if (!cookieFound){
    newCookies += (name + "=" + value);
  }
  document.cookie = newCookies;
}

function checkCookies(){
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++){
    // Check theme
    if (cookies[i].substring(0, 5) == "theme"){
      var theme = cookies[i].substring(6, cookies[i].length);
      setColor(theme);
    }
  }
}

function deleteCookies(){
  document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

/*$(document).ready(function() {
  $("#signInButton").click(function() {
    window.open("home.html");
  });
});
$(document).ready(function() {
  $("#signUpButton").click(function() {
    window.open("signUp.html");
  });
});*/
$(document).ready(function() {
  checkCookies();
});