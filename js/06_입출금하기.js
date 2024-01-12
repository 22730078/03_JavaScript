/* prompt 사용 연습 */

function test(){
    const password = prompt("비밀번호를 입력하세요");
    //확인 -> 입력한 문자열 
    //취소 -> null

    if(password == null){
        alert("취소")
    }else{
        //입력한 비밀번호가 1234가 맞는지 확인
        if(password == '1234'){
            alert("비밀번호가 일치합니다");
        }else{
            alert("비밀번호가 일치하지 않습니다");
        }
    }
}

/* 입출금하기 연습문제 */
function withdrawal(){
    const password = prompt("비밀번호를 입력하세요");

    if(password == '1234'){
        alert("비밀번호가 일치합니다");
    }else{
        alert("비밀번호가 일치하지 않습니다");
    }
}
// 비밀번호 받기
