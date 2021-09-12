const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("mail");
const userid = document.getElementById("userid");
const printForm = document.getElementById("user");
const display = document.getElementById("form-result");

const handlePrint = (e) => {
  e.preventDefault();

  const fn = firstName.value;
  const ln = lastName.value;
  const em = email.value;
  const id = userid.value;

  const displaySpan = display.querySelector("span");

  displaySpan.innerHTML = `
First Name is: ${fn}<br>
Last Name is:${ln}<br>
Email is: ${em}<br>
ID is: ${id}`;
};
printForm.addEventListener("submit", handlePrint); //submit이 되면 handlePrint함수 실행
