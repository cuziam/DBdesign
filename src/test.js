//html element 저장
let jsTitleSpan = document.getElementById("js-title").querySelector("span");
let jsRange = document.getElementById("js-range");
let guessedInput = document.getElementById("guessed-input");
let jsResultSpan = document.getElementById("js-result").querySelector("span");
//초기의 maxNumber값 저장
let maxNumber = Number(jsRange.value);

//최대값 업데이트 함수
const updateMaxNumber = () => {
  maxNumber = Number(jsRange.value);
  guessedInput.setAttribute("max", maxNumber);
  console.log(maxNumber);
  console.log("update complete!\n");
};

//최대값을 HTML에 작성하는 함수.
const printMaxNumber = () => {
  updateMaxNumber();
  jsTitleSpan.innerHTML = `${maxNumber}`;
};

//결과를 HTML에 작성하는 함수.
const printResult = (e) => {
  e.preventDefault();
  let guessedNumber = Number(guessedInput.value); //플레이어가 입력한 숫자
  let machineNumber = Math.floor(Math.random() * (maxNumber + 1)); //기계가 생성한 숫자
  if (guessedNumber === machineNumber) {
    jsResultSpan.innerHTML = `You choose ${guessedNumber} the machine choose ${machineNumber}
    You win!`;
  } else {
    jsResultSpan.innerHTML = `You choose ${guessedNumber} the machine choose ${machineNumber}
    You lose!`;
  }
};

//이벤트 리스너 관련
jsRange.addEventListener("input", printMaxNumber);
document.addEventListener("submit", printResult);
