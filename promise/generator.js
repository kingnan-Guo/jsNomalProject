function bar(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(params)
        }, 1000)
    })
}

function foo(params) {
    return params
}



function* gen() {
    yield foo(2)
    yield foo(10)
    yield bar(12)
    return 0

}
const g = gen()

console.log("g ==", g);
console.log(g.next());
console.log(g.next());
// g.next().value.then((res) => {
//     console.log("then ==", res);
// })
console.log(g.next().value.then((res) => {
    console.log("then ==", res);
}));
console.log(g.next());

// --------------------



function fn(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(params * 2)
        }, 1000)
    })
}

function* gen2() {
    const num1 = yield fn(1)
    const num2 = yield fn(num1)
    const num3 = yield fn(num2)
    return num3;

}
const g2 = gen2()


function generatorToAsync(generatorFN) {
    let g = generatorFN()

    function handleResult(result) {
        if (result.done) {
            return Promise.resolve(result.value)
        }
        return Promise.resolve(result.value)
        .then((res) => handleResult(g.next(res)))
        .catch((err) => {
            handleResult(g.throw(err))
        })
    }

    try {
        return handleResult(g.next())
    } catch (error) {
        Promise.reject(error)
    }
}

const asyncPromise = generatorToAsync(gen2)
asyncPromise.then((res) => {
    console.log("generatorToAsync res =", res);
})