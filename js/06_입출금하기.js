// /* prompt 사용 연습 */

// function test(){
//     const password = prompt("비밀번호를 입력하세요");
//     //확인 -> 입력한 문자열 
//     //취소 -> null

//     if(password == null){
//         alert("취소")
//     }else{
//         //입력한 비밀번호가 1234가 맞는지 확인
//         if(password == '1234'){
//             alert("비밀번호가 일치합니다");
//         }else{
//             alert("비밀번호가 일치하지 않습니다");
//         }
//     }
// }

/* 입출금하기 연습문제 */
const amount = [""];
let balance = 10000;
const password = '1234';

const resultIn = document.getElementById("resultIn");
const resultOut = document.getElementById("resultOut");

const balanceResult = document.getElementById("balance");

balanceResult.innerText = balance;

function deposit(){
    const depositAmount = Number(document.getElementById("amount").value);

    if(!(depositAmount) || depositAmount <=0){
        alert("올바른 금액을 입력하세요");
    }

    balance += depositAmount;
    alert(`${depositAmount}원이 입력되었습니다. 현재 잔액 : ${balance}원`);
    balanceResult.innerText = balance;
}

function withdrawal(){
    const withdrawalAmount =  Number(document.getElementById("amount").value);
    const password = prompt("비밀번호를 입력하세요");

    const amount = document.getElementById("amount");

    if(password == null){
        alert("취소");
    } else {
        if (password == '1234') {
            alert("비밀번호가 일치합니다");

            if(withdrawalAmount>balance){
                alert("출금 금액이 잔액보다 클수 없습니다.");
            } else {
                balance -= withdrawalAmount;
                alert(`${withdrawalAmount}원이 출금되었습니다. 남은 잔액 : ${balance}원`);
                balanceResult.innerText = `${balance}`
            }
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }
}