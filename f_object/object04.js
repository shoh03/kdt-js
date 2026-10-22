// // 동물 프로토타입
// // 이름, 나이, 걷기, 먹기, 짖기
// // 동물 3마리 생성

// function Animal(name, age, walk, feed, bark){
//     this.name = name
//     this.age = age
//     this.walk = walk
//     this.feed = feed
//     this.bark = bark
// }

// const animal1 = new Animal("애용이", 7, "챱챱", "까드득", "애용")
// const animal2 = new Animal("멈뭄미", 8, "촘촘", "쩝쩝", "멈멈")
// const animal3 = new Animal("깡총이", 4, "깡총깡총", "사각사각", "찍찍")

// console.log(animal1, animal2, animal3)


// // const = () => {} : 프로토타입은 화살표 함수 사용하면 안됨
// // this 바인딩

// function Animal2(name, age){
//     this.name = name
//     this.test1 = function(){console.log(this.name)}
//     this.test2 = () => {console.log(this.name)}
// }

// const test = new Animal2("치즈")
// test.test1()
// test.test2()

// function This1(){
//     this.test = console.log(this)
// }

// // 화살표 함수는 this 바인딩 불가(주소를 불러올 수 없으므로 전역변수를 가져와버림 = 변수 초기화가 안됨)