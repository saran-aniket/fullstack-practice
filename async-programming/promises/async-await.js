console.log("start");
const p1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("p1 ran");
        }, 3000);
    })
}
const p2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("p2 ran");
        }, 1000);
    })
}

async function test(){
    const result1 = await p1();
    const result2 = await p2();
    console.log(result1);
    console.log(result2);   
}

console.log("end");

test();
