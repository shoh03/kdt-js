// // 객체의 생성
// // 프로토타입 -> Object
// // 참조 레퍼런스 타입
// const user1 = new Object()
// // = 객체 생성자 문법
// // const: 주소를 변경하지 못하게 하는 키워드
// const user2 = {}
// // = 객체 리터럴 문법

// 데이터 객체 접근법
const user3 = {
    name: "노퓨어진성",
    age: 50 / 2,
    address: "잠실(부자동네)"
}

// // 닷(.) 접근법
// console.log(user3.name)

// // 대괄호 접근법([])
// for(let i of user3){
//     console.log(i)
// }
// // -> 오류(값은 key를 통해서만 접근 가능하므로)

// for(let i in user3){
//     console.log(i)
// }
// // key가 index이므로 in은 가능

for(let i in user3){
    console.log(user3.i)
}
// -> undefined(user3.i의 i에는 user3의 key가 들어가는 게 아니라 "i"라는 문자 자체가 들어감. user3에는 "i"라는 key가 없으므로 undefined)
// w

user3.name = "승현"
// -> user3은 const인데 왜 변경이 되지?
// = user3의 자체 주소는 바뀌지 않았고 user3가 참조하고있는 값의 주소만 변경된 것이기 때문.