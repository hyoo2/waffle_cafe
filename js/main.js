"use strict";

/*
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type' : "text/plain"});
    response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
*/

/*function isPrime(n) {
    var divisor = 2;

    while (n > divisor) {
        if (n % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
    }

    return true;
}

console.log(isPrime(137));
console.log(isPrime(237));
console.log(isPrime(133));
*/

/*
function primeFactors(n) {
    var factors = [];
    var divisor = 2;

    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    
    return factors;
}

console.log(primeFactors(69));
*/

/*
function fibonacci(n) {
    var fibo = [0,1];

    if (n <= 2) {
        return 1;
    }
    
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[n];
}

console.log(fibonacci(12));

function fibonacci2(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci (n - 2);
    }
}

console.log(fibonacci2(12));
*/

/*
function greatestCommonDivisor(a, b) {
    var divisor = 2;
    var greatestDivisor = 1;

    // Doesn't work for negative numbers
    if (a < 2 || b < 2) {
        return 1;
    }

    while (a >= divisor && b >= divisor) {
        if (a % divisor == 0 && b % divisor == 0) {
            greatestDivisor = divisor;
        }
        divisor++;
    }
    
    return greatestDivisor;
}
*/

/*
function greatestCommonDivisor(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b != 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

console.log(greatestCommonDivisor(14, 21));
console.log(greatestCommonDivisor(69, 169));

function greatestCommonDivisor2(a, b) {
    if (b == 0) {
        return a;
    } else {
        return greatestCommonDivisor2(b, a % b);
    }
}

console.log(greatestCommonDivisor2(14, 21));
console.log(greatestCommonDivisor2(69, 169));
*/

/*
function removeDuplicate(arr) {
    var exists = {};
    var outArr = [];
    var elm;

    for (var i = 0; i < arr.length; i++) {
        elm = arr[i];
        
        if (!exists[elm]) {
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    
    return outArr;
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));
*/

function mergeSortedArray(a, b) {
    var merged = [];
    var aElm = a[0];
    var bElm = b[0];
    var i = 1;
    var j = 1;

    if (a.length == 0) {
        return b;
    }
    
    if (b.length == 0) {
        return a;
    }

    while (aElm || bElm) {
        if ((aElm && !bElm) || (aElm < bElm)) {
            merged.push(aElm);
            aElm = a[i++];
        } else {
            merged.push(bElm);
            bElm = b[j++];
        }
    } 

    return merged;
}

console.log(mergeSortedArray([2,5,6,9], [1,2,3,29]));