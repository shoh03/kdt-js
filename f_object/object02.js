// 얕은 복사와 깊은 복사


// let name1 = "승현"
// let name2 = name1
// name2 += "짱"

// console.log(name1, name2)
// // 서로 다른 주소를 참조하고 있음(깊은 복사)


const animal1 = {
    dog: "누렁이",
    cat: "점박이",
    cow: "얼룩이"
}   

// const animal2 = animal1
// animal1.dog = "누렁스"
// // 얕은 복사

// // 깊은 복사(1번째)
// // Object.assign(target, source)
// // Object가 정의된 적이 없는데도 사용할 수 있는 이유는 static 변수이기 때문
// const animal2 = Object.assign({}, animal1)
// animal1.dog = "누렁스"
// console.log(animal1, animal2)

// // 1depth까지만 깊은 복사 가능
// const animal1 = {
//     dog: "누렁이",
//     cat: "점박이",
//     cow: "얼룩이",
//     human: {
//         name: "이승현",
//         age: 20
//     }
// }   

// const animal4 = Object.assign({}, animal3)
// animal3.human.name = "승현"
// console.log(animal3, animal4)
// // lodash로는 1depth보다 더 깊은 값도 깊은 복사 가능

// // 깊은 복사(1depth) -spread 문법
// const students = {
//     student1: "만약에 수민",
//     student2: "가나디 혜진",
//     student3: "이시츄 시우",
//     student4: "금요일 휴가 슬기"
// }
// // 여기서의 ...은 가변 매개변수 아니고 spread 문법
// const students2 = {...students}
// students.student1 = "스트레칭 수민"
// console.log(students, students2)

// const students3 = {...students, student1: "스트레칭 수민"}
// // 이렇게 활용도 가능
// console.log(students3)

// 배열의 spread
const arr1 = [10, 20, 30]
const arr2 = [100, 200, 300]
const arr3 = [1, 2, 3]

console.log(arr1 + arr2 + arr3)
// -> 값들이 전부 문자열로 바뀌어 연결됨

console.log([...arr1, ...arr2, ...arr3])
// 배열이 정상적으로 다 합쳐짐

// Math
console.log(Math.min(...arr1))
console.log(Math.max(...arr1))