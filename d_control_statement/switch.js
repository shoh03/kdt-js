// 값을 이미 알고 있을 때 사용하는 분기문
// switch(값){}
const choice = "한식"
switch(choice){
    case "중식":
        console.log("짜장면")
        break
    case "한식":
        console.log("텀블러비어")
        break
    case "일식":
        console.log("돈까스")
        break
    // default는 else와 같은 기능
    default:
        console.log("굶기")
        break
}

const choice = "한식"
switch(choice){
    case "중식":
        let menu = "짜장면"
        console.log("짜장면")
        break
    case "한식":
        let menu = "텀블러비어"
        console.log("텀블러비어")
        break
    case "일식":
        console.log("돈까스")
        break
    // default는 else와 같은 기능
    default:
        console.log("굶기")
        break
}
// -> 오류(let은 재선언 불가)
// 재선언 아닌 재할당도 오류남.

const choice = "한식"
switch(choice){
    case "중식": {
        let menu = "짜장면"
        console.log(menu)
        break
    }
    case "한식": {
        let menu = "텀블러비어"
        console.log(menu)
        break
    }
    case "일식":
        console.log("돈까스")
        break
    // default는 else와 같은 기능
    default:
        console.log("굶기")
        break
}
// {}로 영역을 나눴기 때문에 let이 각각 다른 영역에서 선언된 것이므로 오류 안남