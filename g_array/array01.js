// // ※ 중요(Array 메서드들은 모두 알고 있어야 함)
// // .of(초기값1, 초기값2, ...)
// // 배열을 생성할 때 초기값을 넣어서 생성하는 메서드
// const arr1 = []
// const arr2 = new Array()  // 아예 공간이 없는 배열이므로 반복(for)할 수 없음.
// const arr3 = new Array(10)  // 10칸의 빈 공간이 존재하기에 반복가능. 칸 수를 알고있을 때 사용.
// const arr4 = Array.of(10, 20)

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// for(let i in arr2){
//     console.log(i)
// }

// for(let i in arr3){
//     console.log(i)
// }

// // .fill("초기값")
// arr3.fill(0)
// console.log(arr3)
// // 초기값을 배열의 칸 수 만큼 넣은 배열을 반환하고 원본 값도 바꾸는 메서드.

// // .length: 배열의 길이를 반환하는 프로퍼티(필드)
// console.log(arr3.length)
// console.log(arr2.length)

// // .split("구분자"): Array - 문자열
// // 구분자로 잘라서 배열로 리턴해주는 문자열의 메서드
// console.log("abcd".split(""))
// console.log("ab,cd".split(","))
// // 앞 뒤에 구분자를 이용해서 자르면 빈 문자열이 들어간다.
// console.log(",abcd".split(","))
// console.log("abcd",.split(","))

// // join("매개변수"): string - 전달된 매개변수를 기준으로 새로운 문자열로 리턴하는 메서드
// console.log([10 ,20 ,30].join())
// console.log([10 ,20 ,30].join(""))
// console.log([10 ,20 ,30].join("+"))

// // .replace() - 문자열: 전달된 매개변수 중 가장 먼저 발견된 값을 찾고, 값을 치환하여 문자열을 반환
// console.log("1일차".replace("1일차", "2일차"))
// console.log("꿍얼거리는 고양이와 고양이 고양이".replaceAll("고양이", "승현" + "승현"))

// // .push()
// // 기존 배열의 뒤쪽에 값을 추가함 + 추가된 배열의 length를 리턴함.
// const arr1 = ["홍길동","장보고","이순신"]
// const arr_length = arr1.push("오승현")
// console.log(arr1, arr_length)

// // ※ .concat()
// // 기존의 배열에 추가 값들을 연결시켜주고 [새로운 배열]로 리턴하는 메서드
// const arr2 = [10, 20, 30]
// const arr3 = [40, 50, 60]

// const newArr2 = arr2.concat(arr3)
// const newArr3 = arr3.concat(arr2)
// console.log(newArr2, newArr3)

// // .pop()
// // 마지막 요소를 제거하고 그 값을 리턴하는 메소드
// const arr4 = [10, 20, 30]
// arr4.pop()
// last_arr4 = arr4.pop()
// console.log(arr4, last_arr4)

// // .unshift()
// // 맨 앞에 요소를 추가하고 추가된 요소까지의 전체 길이를 반환하는 함수
// // .shift()
// // 맨 앞의 요소를 삭제하고 삭제한 요소를 반환하는 함수
// const arr5 = [1, 2, 3, 4, 5]
// const newArr5Length = arr5.unshift(10)
// console.log(arr5, newArr5Length)
// const removedItem = arr5.shift()
// console.log(arr5, removedItem)

// // ※ .slice(start, end)
// // start 인덱스부터 end 인덱스 전까지 복사해서 [새로운 배열]로 반환하는 메서드(원본 건들지 않음)
// const arr6 = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr6.slice(3, 5))  // index 3부터 5 전까지
// console.log(arr6.slice(3))  // index 3부터 끝까지
// console.log(arr6.slice(-3))  // 맨 뒤에서부터 3개
// console.log(arr6.slice(-3, -1))  // 맨 뒤에서부터 3개
// console.log(arr6.slice(-2, -1))  // 맨 뒤에서부터 2개
// console.log(arr6)

// // ※ .splice(start, deleteCount) -> start 인덱스부터 deleteCount개만큼의 요소 삭제하고 삭제한 요소들을 배열로 반환
// // ※ .splice(start, deleteCount, newItem) -> 삭제한 자리에 새로운 값을 집어넣음(수정)
// const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const removedItems = arr7.splice(2, 3)
// console.log(arr7, removedItems)
// const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const removedItems = arr7.splice(2, 3, 100, 200, 300)
// console.log(arr7, removedItems)

// const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // arr7[7] = 100  
// // -> 삭제된 값을 되돌릴 방법이 없음
// const removedItem = arr7.splice(7, 1, 100)
// // -> removedItem에 삭제된 값이 저장되어있으므로 되돌릴 수 있음(※ 권장)

// .includes("찾을 값"): boolean - Array, String
// 배열 또는 문자열에서 해당 값을 찾고 값이 포함되어있으면 true 없으면 false 반환
// const arr8 = ["김희수", "박지호", "오승현", "김진휘", "오준승", "이상아"]
// console.log(arr8.includes("응?"))
// console.log("사과멜론딸기바나나".includes("바나나"))

// // .reverse()
// // 배열의 순서를 뒤집고 반환
// const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr8)
// // 얕은 복사로 반환
// console.log(arr8.reverse())
// console.log(arr8)

// .sort(콜백함수)
// 값들을 순회하면서 비교한 후 정렬시키는 메서드
const arr9 = [1, 10, 34, 5, 2, 6, 8, 213]
arr9.sort((a, b) => a - b)  // 오름차순
arr9.sort((a, b) => b - a)  // 내림차순
console.log(arr9)

