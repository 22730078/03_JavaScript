/* 배열 선언 및 기초 사용법 */
function check01(){

    //배열 선언 방법 확인
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "바나나", "딸기"];

    console.log(arr1,arr2,arr3,arr4);

    //배열명.length : 배열의 길이(배열의 칸 수 또는 저장된 데이터의 수)
    console.log(arr1.length,arr2.length,arr3.length,arr4.length);

    /* 
        배열의 index(색인,번호) 
        - 배열의 각 칸을 구분하는 번호
        - 0부터 시작
        - 중간에 번호를 생략할 수 없다(항상 연속적)
        - 마지막 index == 배열길이 -1
    */

    // 배열명[index] -> 배열의 해당 인덱스에 존재하는 데이터 반환
    console.log('arr4[0] : ', arr4[0]);
    console.log('arr4[1] : ', arr4[1]);
    console.log('arr4[2] : ', arr4[2]);

    //배열명[index] = 값; -> 해당 인덱스에 지정된 값 대입
    arr2[0] = 100;
    arr2[1] = "눈온당";
    arr2[2] = true;
    //(JS 배열의 특징 : 인덱스별로 자료형을 다르게 할 수 있다)
    console.log("arr2 : " ,arr2);

    //--------------------------------------------------------------------

    /* JS 배열 특징을 이용한 사용법 */

    //(1) 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능
    arr1[0] = "가";
    arr1[1] = "나";
    arr1[2] = "다";
    console.log("arr1 : ", arr1);

    //(2) 원하는 index에 값을 마음대로 추가할 수 있다 -> 중간에 건너뛴 index는 빈칸으로 채워짐
    arr1[5] = "마";
    console.log("arr1 : ", arr1);
}

/* 배열Xfor문_01 */
function check02(){
    
    //for문을 이용해서 배열 요소 초기화 하기
    // -index : 배열의 각 칸을 구분하는 번호
    // - 배열 요소 == 배열의 각 칸
    // -초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것
    
    //for문 X 
    const arr1=[];
    arr1[0] = '김밥';
    arr1[1] = '라면';
    arr1[2] = '떡볶이';
    arr1[3] = '볶음밥';

    //for문 O
    const arr2=[];
    for(let i=0; i<=3; i++){
        arr2[i] = i*10;
    }
    console.log("arr1 : ",arr1);
    console.log("arr2 : ",arr2);
}

/* 배열Xfor문_02 */
function check03(){

    //배열에 저장된 값 하나씩 순서대로 출력하기
    // -> for문을 이용해서 배열의 모든 요소 접근하기
    //  -> 순차 접근 또는 반복 접근
    const arr = [10,20,50,100,500,1000];

    //index는 0부터 배열 길이 -1까지 1씩 증가
    // (i<=arr.length-1) == (i<arr.length)
    for(let i =0; i<arr.length; i++){
        console.log(`arr[${i}]==${arr[i]}`);
    }
}

/* 배열Xfor문_03 */
function check04(){

    //for문을 이용해서 배열을 순서대로 초기화 한 후 다른 for문을 이용해서 배열 요소를 하나씩 모두 출력

    //모든 요소에 내용이 없는 5칸짜리 배열
    const arr = new Array(5);

    //(1) 배열을 순서대로 초기화
    for(let i =0; i<arr.length; i++){
        arr[i] = Number(prompt(`${i} 번째 숫자 입력`));
    }

    //(2) 배열 요소를 하나씩 모두 출력 + sum

    //합계
    let sum = 0; 

    for(let i =0; i<arr.length; i++){
        console.log(`arr[${i}] : ${arr[i]}`);

        //값 누적
        sum += arr[i];
    }
    console.log("합 : ",sum);
    console.log("평균 : ", sum/arr.length);
}

/* 점심 메뉴 뽑기 */
function selectMenu(){

    //결과 출력 span
    const menuResult = document.getElementById("menuResult");

    //점심메뉴로 초기화된 배열
    const menus = ["굶기", "김밥", "제육볶음", "돈까스", "파스타", "샐러드", "라면","햄버거","순대국밥","닭갈비"];

    //menus 배열 index 범위 내에서 난수 생성
    const randomNumber = Math.floor(Math.random()*menus.length);

    //난수번째 index 요소 값을 화면에 출력
    menuResult.innerText = menus[randomNumber];
}

/* 주문하기 */
// 주문하기 버튼 클릭 시 prompt를 이용해서 메뉴명, 수량 입력 받기
// 메뉴명 입력 시 취소를 클릭하면 "주문 완료"
// 수량 입력 시 취소를 클릭하면 해당 메뉴 주문만 취소
function orderFn(){

    const tbody = document.getElementById("tbody");
    const total = document.getElementById("total");

    //메뉴 배열 가격 배열
    const menus = ["라면","김밥","샌드위치","우동"];

    //가격 배열
    const prices = [4000, 3000, 5000, 6000];

    //주문한 메뉴 카운트 배열
    // -> 메뉴 갯수만큼 크기를 가지는 배열
    const counts = new Array(menus.length); // -> 모든 칸 비어있음

    //비어있는 칸을 0으로 채움
    // for(let i = 0; i<counts.length; i++){
    //     counts[i] = 0;
    // }
    counts.fill(0);

    while(true){
        const selectMenu = prompt("주문할 메뉴명 입력(완료 시 취소)");

        //메뉴 입력 시작

        //메뉴명 입력 시 취소를 클릭한 경우
        if(selectMenu == null){
            break;
        }

        /* 입력한 메뉴가 menus 몇번째 인덱스에 존재하는가? */
        // -> 배열 검색
        // (1) for문 이용
        // let idx = -1; //일치하는 메뉴의 인덱스를 저장할 변수
        // for(let i=0; i<menus.length; i++){

        //     //입력받은 메뉴
        //     //menus[i]값이 같다면 idx에 i값을 저장
        //     if(selectMenu == menus[i]){
        //         idx = i;
        //         break; //같은 메뉴를 찾으면 더이상 검색 불필요
        //     }
        // }
        
        // (2) 배열명.indexOf("값") 
        // - JS 배열에서 제공하는 함수
        // - 배열 내에 "값"이 존재하는 index번호를 반환, 없다면 -1 반환
        let idx = menus.indexOf(selectMenu);

        // 잘못 주문한 경우(idx == -1) 다시 반복
        if(idx == -1){
            alert("없는 메뉴입니다. 다시 입력하세요.")
            continue;
        } 
        
        //수량 입력 시작

        let input = prompt("수량 입력");

        //수량 입력 취소 -> 다시 메뉴 입력
        if(input == null){
            continue;
        }

        //수량을 입력하지 않았거나, 숫자를 입력하지 않은 경우
        if(input.length == 0 || isNaN(Number(input))){
            alert("잘못 입력하셨습니다. 다시 주문해주세요");
            continue;
        }

        //숫자로 변환해서 저장
        input = Number(input);
        
        //count 배열에 값 변경 시작
        
        //idx : 선택한 메뉴가 존재하는 index 번호
        //input : 입력한 수량(number 자료형)

        counts[idx] += input;
    } //while 종료

    //중간 확인
    console.log(menus);
    console.log(prices);
    console.log(counts);

    //화면 출력하기 + 합계(total 계산) 시작

    //tbody 이전 내용 지우기
    tbody.innerHTML="";

    //합계 구하기 변수
    let sum = 0;

    for(let i =0; i<counts.length; i++){

        //메뉴를 주문하지 않은 경우
        if(counts[i]==0) {
            continue;
        }

        //한줄 만들기
        let tr = "<tr>"

        tr +=`<td>${menus[i]}</td>`;
        tr +=`<td>${prices[i]}</td>`;
        tr +=`<td>${counts[i]}</td>`;

        tr += "</tr>"

        //화면에 tr 출력하기
        tbody.innerHTML += tr;

        //합계 누적하기
        sum += prices[i]* counts[i];
    }

    total.innerText = sum;
}

/* 2차원 배열 확인하기 */
function check05(){
    const arr = [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ];

    //1차원 배열 선언
    const arr1 = [100,200,300,400];
    const arr2 = [900,800,500,600];

    //2차원 배열 arr의 3,4번 인덱스 요소로 추가
    arr[3] = arr1;
    arr[4] = arr2;
    
    console.log(arr);

    //2차원 배열 요소 조회하는 방법

    //배열명[행][열]
    console.log(arr[1][3]); //8
    console.log(arr[4][3]); //600
    console.log(arr[0][0]); //600
}

/* 2부터 2씩 증가하는 수를 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기 */
function check06(){
    let count = 2;
    
    //2차원 배열 (요소로 1차원 배열 대입)
    const arr = [];

    for(let row=0; row<5; row++){ //행 제어

        //1차원 배열을 만들어 arr[i]에 대입
        arr[row] = [];

        for(let col=0; col<5; col++){ //열 제어
            arr[row][col] = count; //row행 col열에 count 대입
            count += 2; // count를 2 증가
        }
    }

    console.log(arr);

    // 2차원 배열 arr의 요소를 거꾸로 한 줄씩 출력하기

    //row ->4,3,2,1,0
    for(let row = arr.length-1; row >=0; row--){

        let str ="";

        //col ->4,3,2,1,0
        for(let col = arr[row].length -1; col >=0; col--){
            str += arr[row][col] + " ";
        }

        console.log(str);
    }
}