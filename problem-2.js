

function sendNotification(email){

    if(typeof email !== "string"){
        return "Invalid Email"
    }

    const info = email.split('@');
    const userName = info[0];
    const domainName = info[1];

    if (email.indexOf('@') !== -1){
        const emailNotification = userName + " sent you an email from " + domainName
        return emailNotification
    }
    else {
        return "Invalid Email"
    }
}

console.log((sendNotification("ronychakrabarty.gmail.com")));
