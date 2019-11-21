// *** YOUR ANSWER BELOW ***
function quotient(x, y) {
    r = x / y;
    dec = x % y;
    return r - ( dec / y);
}

console.log(quotient(7,3));