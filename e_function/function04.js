// // 즉시 실행 함수 ()()
// // (function(){})()
// let num = 10

// (() => {
//     console.log("Hello, World")
// })()

// // ↓

// let num = 10(() => {
//     console.log("Hello, World")
// })()

// error
// 그러므로 10 뒤에 ;를 붙여야 함.

let num = 10;

(() => {
    console.log("Hello, World")
})()

