
const userName = "Tom";
const userAge = 18;

let userIsAdmin = true;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

if (userName && userAge >= 18 && !userIsBlocked) {
    goToPage = "/home";
    userIsLoggedIn = true;
    if (userIsAdmin) { 
        goToPage = "/admin";}
} else {
    console.log("The form you filled contains errors");
}
console.log(goToPage);