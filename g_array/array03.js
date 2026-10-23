
// 1. 1~10까지 누적합 구하기
let total = 0
// new Array(10).fill(0).map((_, i) => i + 1).forEach((data) => {total += data})
total = new Array(10).fill(0).map((_, i) => i + 1).reduce((acc, crr) => acc += crr)
console.log(total)

// 2. 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경후 원본 배열을 출력
const arr2 = new Array(10)
    .fill(0)
    .map((_, i) => i + 1)
    .map((data) => data > 5 ? data * 2 : data)

console.log(arr2)

// 3. 10, 20, 30, 40, 50을 배열에 담고 내림차순 정렬하기 
const arr3 = new Array(5)
    .fill(0)
    .map((_, i) => i + 1)
    .map((data) => data * 10)
    .sort((a, b) => b - a)

console.log(arr3)

// 4. array의 고차 함수로 사용하여 a개수 구하기
// "abcccddeaddddadwefdaasdasdjkasdhkjw"
const aCount = "abcccddeaddddadwefdaasdasdjkasdhkjw".split("a").length - 1
console.log(aCount)

