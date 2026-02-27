function outer() {
    let a = 10;
    function sayAval() {
        return increment => {
            a++;
        }
    }
    function inner() {
        // console.log(`${a} from inner`);
        let b = 20;
        function innerx2(){
            sayAval()();
            console.log('a',a);
            console.log(`Printing a + b = ${a+b}`);
            return a+b;
        }
        return innerx2;
    }
    return inner;
}

let firstInner = outer();
let secondInner = firstInner();
secondInner();