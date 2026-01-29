/**
 * Celcius to Fahrenhite Converter
 * Input: temp in celcius
 * return value in Fahrenhite
 */

function convertTemperature(temp, unit){
    if(unit == "C"){
        return temp * (9/5) + 32 + " F";
    }else if(unit === "F"){
        return (temp-32) * (5/9) + " C";
    }
    return "Invalid Unit";
}

// console.log(convertTemperature(100, "C"));
// console.log(convertTemperature(32, "F"));
// console.log(convertTemperature(32, "f"));


/**
 * secretMessage(secret)
 * 
 * Should not return value instantly unless invoked
 */

function secretMessage(secret){
    return function(){
        return secret;
    }
}
// let msg = secretMessage("New message");
// console.log(secretMessage("New message"));
// console.log(msg());


/**
 * rate limiter
 */

function limitFunction(fn, n){
    return function(){
        if(n>0){
            n--;
            return fn();
        }else{
            return "too many calls";
        }
    }
}

function greet(){
    return "Hello";
}

let limitGreet = limitFunction(greet, 2);
console.log(limitGreet());
console.log(limitGreet());
console.log(limitGreet());