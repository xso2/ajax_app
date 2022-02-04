function post (){
  const submit = document.getElementById("submit"); //リクエストを送信する処理
  submit.addEventListener("click", () => {
    console.log("イベント発火");
  });
 };
 
 window.addEventListener('load', post);