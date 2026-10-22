// // 일반함수
// // 두 수를 전달하면 두 수를 더해주는 함수
// // 매개변수에는 let 키워드 필요없음
// function add(num1, num2){
//     return num1 + num2
// }

// let result = add(10, 20)
// console.log(result)

// 화살표 함수(ES6) == python의 lambda
const getFullName1 = (lastName, firstName) => {
    return lastName + firstName
}

let fullName = getFullName1("홍","길동")
console.log(fullName)

// 매개변수가 하나면 ()를 생략할 수 있음(비추천)
const getFullName2 = lastName => {
    return lastName + firstName
}

// 중괄호와 return 키워드가 없다면 통째로가 리턴값임
const getFullName3 = lastName => lastName + firstName
// Enter를 치고 싶다면 ()로 감싸야 함
const getFullName3 = lastName => (
    lastName + firstName
)