// const add = (a, b) => a + b
// const sub = (a, b) => a - b
// const multi = (a, b) => a * b
// const div = (a, b) => a / b

// module.exports={add,sub,multi,div}


exports.fact = (num) => {
    let fact = 1
    for (let i = 1; i <= num; ++i) {
        fact *= i;
    }
    return fact;
}