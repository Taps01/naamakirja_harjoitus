var database = [
{
    username: "Lauri",
    password: "salainensana",
},
{
    username: "Sally",
    password: "qwerty",
},
{
    username: "Kalle",
    password: "1234",
},
{
    username: "Reetta",
    password: "qazwsx",
},

];

var newsFeed = [
{
    username: "Keijo",
    timeline: "Kello on Keijo",
},
{
    username: "Salli",
    timeline: "Jejejejeee",
}

];


function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        } else {
            alert("Sorry wrong username and password.");
        }
        return false;
}
}

function signIn(username, password) {
    console.log(isUserValid(username, password)); {
    }
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Access denied!");
    }
}

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

signIn(userNamePrompt, passwordPrompt);
