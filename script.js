if (!navigator.userAgent.includes("ArtisBrowser")) {
  window.location.href = "unauthorized_access/unauthoried_browser.html"
}
// disable right click
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});

function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // define the list of predefined users and their corresponding links
  var userLinks = {
    // "BlastoiseBattler": "./course/course.html",
    // "muhammmadali177": "./course/course.html",
    "mnsakibalhasan2000": "./course/course.html",
    "adnin97": "./course/course.html",
    "arifulislam18340": "./course/course.html",
    "mdjafaruddinsomrat": "./course/course.html",
    "atikulhoqueimran": "./course/course.html",
    "ahmedshafin74": "./course/course.html",
    "sanjidiaislam10": "./course/course.html",
    "rakibulhasan461": "./course/course.html",
    "moniraakter696787": "./course/course.html",
    // "mdjafar": "./course/course.html",
    // "opuarifur": "./course/course.html",
    // "sabbiranik": "./course/course.html",
    // "safayethossain": "./course/course.html",
    // "omairij": "./course/course.html",
    // "chhandaakter": "./course/course.html",
    // "samihahaque": "./course/course.html",
    // "rakilbulhasan": "./course/course.html",
    // "iftikharmahmudrafi": "./course/course.html",
    // "sanjidhaislam": "./course/course.html",
    // "moniraakter": "./course/course.html",
    // "arfanhoq": "./course/course.html"
  };

  // define the list of predefined users with their authentication details
  var users = [
    // { username: "BlastoiseBattler", password: "ShellSmash33"},
    // { username: "muhammmadali177", password: "nodropout84651adsc"},
    { username: "mnsakibalhasan2000", password: "nodropout46a32sdc"},
    { username: "adnin97", password: "nodropout845ads"},
    { username: "arifulislam18340", password: "nodropout8465a21"},
    { username: "mdjafaruddinsomrat", password: "nodropout4521a1"},
    { username: "atikulhoqueimran", password: "nodropout845a848"},
    { username: "ahmedshafin74", password: "nodropout845sa74"},
    { username: "sanjidiaislam10", password: "nodropout846512abb"},
    { username: "rakibulhasan461", password: "nodropout45212asa"},
    { username: "moniraakter696787", password: "nodropout854afds"},
    // { username: "mdjafar", password: "jazbhakf63547"},
    // { username: "opuarifur", password: "jagzkf63547"},
    // { username: "sabbiranik", password: "oihzauwds5421"},
    // { username: "safayethossain", password: "vbnzajmds6523"},
    // { username: "omairij", password: "pftgnza526532"},
    // { username: "chhandaakter", password: "amzingea5844"},
    // { username: "samihahaque", password: "fzazamel77987"},
    // { username: "rakilbulhasan", password: "zkidarkpule9987"},
    // { username: "iftikharmahmudrafi", password: "aquazing5844"},
    // { username: "sanjidhaislam", password: "faztamzing5844"},
    // { username: "moniraakter", password: "dzarkulse8599"},
    // { username: "arfanhoq", password: "arjapuz52844"}
  ];

  // check if the username and password match any of the predefined users
  var authenticatedUser = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  // check if the user's IP address matches their predefined IP address
  if (authenticatedUser) {
    // set the authenticated flag in session storage
    sessionStorage.setItem("authenticated", "true");

    // redirect the user to their corresponding page
    window.location.href = userLinks[username];
  } else {
    alert("Access denied");
  }
}
