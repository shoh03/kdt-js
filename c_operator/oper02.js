// let data1 = 10
// let data2 = 20

// // ||: or 연산자
// console.log(true || true)
// // 앞의 값이 false일 때 초기값을 넣는 용도로도 사용 ex) 회원정보 || "회원정보가 없습니다"
// console.log(data1 || true)
// console.log(false || "홍길동")

// // &&: and 연산자
// console.log(data1 && true)
// console.log(true && data1)

// // 리턴값이 값이 아닌 함수이더라도 삼항연산자 사용가능
// // 이 문법에 익숙해져야함(Next에는 if문법이 없으므로 if 쓸 자리에 삼항연산자를 사용해야함)
// 10 >= 11 ? (
//     console.log("a")
//  ) : (
//     console.log("b")
//  )

// false가 아닌데 false로 취급되는 값
console.log(Boolean(10))
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean("")) // false
console.log(Boolean(" ")) /* 공백문자도 값임 */
console.log(Boolean(0)) // false
// 배열과 객체는 비어있어도 true로 취급됨
console.log(Boolean([]))
console.log(Boolean({}))