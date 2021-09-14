const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("mail");
const userid = document.getElementById("userid");
const printForm = document.getElementById("user");
const display = document.getElementById("form-result"); //form-result라는 id를 갖고 있는 엘리먼트 저장.

const handlePrint = (e) => {
  e.preventDefault(); //이벤트 전송 중지

  const fn = firstName.value;
  const ln = lastName.value;
  const em = email.value;
  const id = userid.value;

  const displaySpan = display.querySelector("span"); //span엘리먼트 선택해서 displaySpan에 저장

  displaySpan.innerHTML = `
First Name is: ${fn}<br>
Last Name is:${ln}<br>
Email is: ${em}<br>
ID is: ${id}`;
}; //span 태그 안에 들어갈 문자열 설정.

printForm.addEventListener("submit", handlePrint); //submit 이벤트가 발생하면 handlePrint함수 실행
