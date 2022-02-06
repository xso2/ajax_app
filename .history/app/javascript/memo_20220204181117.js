function post (){
  const submit = document.getElementById("submit"); //リクエストを送信する処理
  submit.addEventListener("click", () => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
  });
 };
 
 window.addEventListener('load', post);