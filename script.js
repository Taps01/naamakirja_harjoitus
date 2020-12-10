var database = [
{
    username: "Lauri",
    password: "salainensana",
}

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

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

function signIn(username, password) {
    if (username === database[0], username && password === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Access deniaded!");
    }
}

signIn(userNamePrompt, passwordPrompt);
