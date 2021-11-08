//주어진 변수
//plans(1차원 배열을 원소로 하는 1차원 배열)
//plans의 원소는 [여행지,출발시간,도착시간]
//여행지(string,1<=length<=30)
//출발,도착시간(string,3<=length<=4,12시간제,1시간 단위,오전 오후 표기)
//time(남은 시간,0.5단위 씩 float 표현)
//RETURN:여행지
plans = [
  ["홍콩", "11PM", "9AM"],
  ["엘에이", "3PM", "2PM"],
];

//plan마다 requiredTime계산
let countReqTime = (plans) => {
  let departureTime, arrivalTime,requiredTime;
  plans.forEach((plans) => {
    let [, departureTimeStr, arrivalTimeStr] = plans;
    departureTime = StrToTime(departureTimeStr);
    arrivalTime = StrToTime(arrivalTimeStr);
  });
console.log(`departure: Fri/${departureTime}, arrival: Sat/${arrivalTime}`);


let StrToTime = (timeStr) => {
  let time;
  if (timeStr.length == 3) {
    time = int(timeStr.substring(0, 1));
  } else if (timeStr.length == 4) {
    time = int(timeStr.substring(0, 2));
  }
  if (timeStr.include("PM")) {
    time += 12;
  }
  return time;
};
