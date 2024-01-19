//요소를 한번에 여러개 얻어오면 배열 형태로 저장된다 -> 얻어온 요소를 사용하려면 배열의 index별 요소를 하나씩 꺼내서 사용해야 한다
// ex) boxList.style.color="red"     = 배열의 글자색을  red로 변경 (x)
// ->  boxList[0].style.color="blue" = 0번 인덱스 요소 글자색 blue (o)

const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".input");

document.querySelector("#change").addEventListener("click",function(){
    for(let i=0; i<boxList.length; i++){
      boxList[i].style.backgroundColor = inputList[i].value;
    }
});