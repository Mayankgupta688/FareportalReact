var userDetails = {
    userName : "Mayank",
    userAge: 10
}

debugger;

var otherUser = {...userDetails}

otherUser.userName = "asjdgaukd";

console.log(userDetails.userName)