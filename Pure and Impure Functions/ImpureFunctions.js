//Part of this medium article 👉 https://medium.com/technofunnel/working-with-react-pure-components-166ded26ae48#:~:text=1%20Prevents%20re-rendering%20of%20Component%20if%20props%20or,Pure%20Components%20are%20more%20performant%20in%20certain%20cases
//Impure functions are functions that modify or affect the state of variables outside its scope

//example 1
var initialValue = 20;

function addValue(newValue)
{
    return initialValue + newValue;//impurity Introduced because the function is dependant on variables outside its scope in this instance initialValue
}

console.log(addValue(50));

//example 2
var getInitialValue = 0;

function getValue(inputValue){

    getInitialValue = inputValue;

    return getInitialValue;
}

console.log(getValue(100));