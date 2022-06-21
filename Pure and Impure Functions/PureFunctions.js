//Part of this medium article 👉 https://medium.com/technofunnel/working-with-react-pure-components-166ded26ae48#:~:text=1%20Prevents%20re-rendering%20of%20Component%20if%20props%20or,Pure%20Components%20are%20more%20performant%20in%20certain%20cases
//example 1
function addData(firstInput,secondInput){
    return firstInput + secondInput;//Doesn't modify any variables outside it's scope making it pure
}

console.log(addData(10,20));