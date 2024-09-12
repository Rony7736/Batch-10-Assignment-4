

function calculateTax(income, expenses){

    if(typeof income !== 'number' || typeof expenses !== 'number'){
        return 'Please provide a number';
    }

    const total = income - expenses;
    
    if(income < expenses || expenses <= 0){
        return "Invalid Input";
    }

    const afterTax = total * .20;
    return afterTax;
}



function sendNotification(email){

    if(typeof email !== "string"){
        return "Invalid Email";
    }

    const info = email.split('@');
    const userName = info[0];
    const domainName = info[1];

    if (email.indexOf('@') !== -1){
        const emailNotification = userName + " sent you an email from " + domainName
        return emailNotification;
    }
    else {
        return "Invalid Email";
    }
}


function checkDigitsInName(name){

    if(typeof name !== "string"){
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++){
        
        if(!isNaN(name[i])){
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj){

    if(typeof obj !== 'object'){
        return "Invalid Input";
    }

    let totalMark = obj.testScore + obj.schoolGeade;

    if(obj.isFfamily === true){
        totalMark = totalMark + 20;
    }

    if(obj.isFfamily === true && totalMark >= 80){
        return true;
    }
    else if(obj.isFfamily === true && totalMark <= 80){
        return false;
    }
    else if(obj.isFfamily === false && totalMark >= 80){
        return true;
    }
    else if (!obj.isFfamily === true && totalMark < 80){
        return false;
    }
}



function waitingTime(waitingTimes, serialNumber){
    
    if(!Array.isArray(waitingTimes) === true || typeof serialNumber !== "number"){
        return 'Invalid Input';
    }

    let sum = 0;
    for (let input of waitingTimes){
        sum = sum + input;
    }
    
    const avg = sum / waitingTimes.length;
    const rounded = Math.round(avg);

    const serialNumb = serialNumber - 1;

    const waitingserial = serialNumb - waitingTimes.length;
    
    const isratWaiting = rounded * waitingserial;

    return isratWaiting;
    
}