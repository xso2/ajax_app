function post (){
  const submit = document.getElementById("submit"); //リクエストを送信する処理
  submit.addEventListener("click", () => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    
  });
 };
 
 window.addEventListener('load', post);