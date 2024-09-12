

function waitingTime(waitingTimes, serialNumber){
    
    if(!Array.isArray(waitingTimes)=== true || typeof serialNumber !== "number"){
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

const number = [3,5,7,11,6];
const serialNum = 10;
const total = waitingTime(number, serialNum);
console.log(total);
