//할 일.. 랜덤번호 맞추기
//maxNumber를 수정할 수 있는 슬라이드가 있고 슬라이드로 조절할 때마다 maxNumber가 바뀌고 텍스트 렌더링도 바뀜
//maxNumber에 따라서 사용자가 입력할 수 있는 값과 기계가 생성한 난수의 최대값이 정해진다.
//html 파일에서 제출이나 on클릭이벤트가 발생하면 js는 그 이벤트를 읽는다.
//사용자의 값과 난수값을 비교해서 HTML코드 변경해서 결과출력

const jsTitleSpan = document.getElementById("js-title").querySelector("span");
const jsRange = document.getElementById("js-range");
const guessedInput = document.getElementById("guessed-input");
const jsResultSpan = document.getElementById("js-result").querySelector("span");
let maxNumber = jsRange.value;

const updateMaxNumber = () => {
  maxNumber = jsRange.value;
  console.log(maxNumber);
  console.log("update complete");
};

const changeMaxNumber = () => {
  updateMaxNumber();
  jsTitleSpan.innerHTML = `${maxNumber}`;
};

const printResult = (e) => {
  e.preventDefault();
  let guessedNumber = guessedInput.value;
  let machineNumber = Math.floor(Math.random() * maxNumber + 1);
  if (guessedNumber === machineNumber) {
    jsResultSpan.innerHTML = `You choose ${guessedNumber} the machine choose ${machineNumber}
    You win!`;
  } else {
    jsResultSpan.innerHTML = `You choose ${guessedNumber} the machine choose ${machineNumber}
    You lose!`;
  }
};

jsRange.addEventListener("input", changeMaxNumber);
document.addEventListener("submit", printResult);
