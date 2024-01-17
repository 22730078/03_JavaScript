/* break 확인 */
function check01(){
    //1~10까지 1씩 증가하다 5가 되면 멈춤
    for (let i=1; i<=10; i++){

        console.log("i : ", i);

        //반복문 멈춤
        if(i==5) break;
    }
}

/* 무한 반복하는 while문 멈추기 */
function check02(){

    let i = 1;

    while(true){

        //true일때 반복 수행하는 코드
        console.log("i : ", i++);

        //10초과 시 멈춤
        if(i>10) break;
    }
}

/* continue 확인하기 */
function check03(){

    //1~20까지 출력. 
    for(let i = 1; i<=20; i++){

        //3의 배수인 경우 건너뛰기
        if(i % 3 ==0) continue;

        console.log("i : ", i);
    } 
}

/* 1부터 30까지 1씩 증가하며 출력. 단, 홀수 또는 10의 배수는 건너뛰기  */
function check04(){

    //1~30까지 출력
    for(let i =1; i<=30; i++){
        // 홀수 또는 10의 배수 건너뛰기
        if(i % 2 == 1 || i % 10 ==0) continue;

        console.log("i : ",i);
    }
}

/* 0~9까지 5줄 출력. 단, 각 줄에서 4의 배수는 건너뛰고 3번째 줄 출력 후 멈추기 */
function check05(){
    
    //5출 출력
    for(let row=1; row<=5; row++){

        //0~9까지 출력
        let str="";
        for(let col=0; col<=9; col++){

            //0을 제외한 4의 배수 건너뛰기
            if(col != 0 && col % 4 ==0) continue;

            str += col;
        }
        
        //안쪽 for문 출력
        console.log(str);

        //3번째 줄 출력 후 멈춤
        if(row == 3) break;
    }
    
}

/* UP/DOWN GAME */
function startGame() {

    //1~100 사이 난수
    const randomNumber = Math.floor(Math.random()*100) + 1;

    //숫자를 입력한 횟수(정답 시도 횟수)
    let count = 0;

    //prompt에 작성되어질 문자열
    let str = "1~100 숫자를 입력해주세요";

    while(true){ //무한반복

        //prompt를 이용해 값 입력받기 -> 확인 : 입력한 값 , 취소 : null
        let input = prompt(str);

        //취소를 누른 경우 '게임 포기' 알림을 띄운 뒤 반복 종료
        if(input==null){ 
             alert("게임 포기"); break;
        }

        //확인을 누른 경우 숫자로 변환
        //NaN(Not a Number) : "숫자가 아니다"를 나타내는 값
        //input에는 입력한 숫자 || NaN이 대입
        input=Number(input); 

        //NaN인 경우 다시 입력 받기
        //isNaN(변수/값) : 변수/값이 NaN이면 true, 아니면 false 반환
        if(isNaN(input)){
            alert("숫자만 입력해주세요.");
            continue; //다시 while로 올라가 제대로 입력받게 하기
        }

        //정상 입력(숫자 입력)한 경우 정답 시도 횟수를 1 증가
        count++;
        //입력한 값이 난수와 같다면 "정답!(입력한 값) / count : 정답시도횟수" 알림창 출력 후 반복 종료
        if(input == randomNumber){
            alert(`정답!! (${input}) / count : ${count}`); break;
        }
        //입력한 값이 난수보다 큰 경우 "[UP / count : 정답시도횟수" 문자열을 str에 대입 후 다음 반복으로 이동
        if(input > randomNumber){
            str = `[DOWN]  / count : ${count}`;
          }
        //입력한 값이 난수보다 작은 경우 "[DOWN / count : 정답시도횟수" 문자열을 str에 대입 후 다음 반복으로 이동
          else{
            str = `[UP]  / count : ${count}`;
          }
    }
}