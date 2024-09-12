
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

const person = "Rony123";
const result = checkDigitsInName (person);
console.log(result);
