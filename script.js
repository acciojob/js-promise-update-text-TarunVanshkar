//your JS code here. If required.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, world!")
    }, 1000)
})

const div = document.getElementById("output")

promise.then((result) => {
    div.innerText = result
})