const box = document.querySelector("#box");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

//#btn1 클릭했을 때
btn.addEventListener("click", function(){

    box.style.backgroundColor = input.value 
});

//#input1에서 엔터 입력(key 관련 이벤트) 시 배경색 변경
input.addEventListener("keyup", function(e){

   if(e.key == "Enter"){

    box.style.backgroundColor = input.value;
  }
});
