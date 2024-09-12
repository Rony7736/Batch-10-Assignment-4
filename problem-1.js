

function calculateTax(income, expenses){

    if(typeof income !== 'number' || typeof expenses !== 'number'){
        return 'Please provide a number'
    }

    const total = income - expenses 
    
    if(income < expenses || expenses <= 0){
        return "Invalid Input"
    }

    const afterTax = total * .20
    return afterTax 
}

const reult = calculateTax (10000, 3000)
console.log(reult);
