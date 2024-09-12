

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
    else if(obj.isFfamily === false && totalMark >= 80)
        return true;
    else if (!obj.isFfamily === true && totalMark < 80){
        return false;
    }
}

const person = {
    name : 'Rajib',
    testScore : 15,
    schoolGeade : 25,
    isFfamily : true,
};

const candidate = calculateFinalScore(person);
console.log(candidate);
