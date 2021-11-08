//필요한 모듈 import
import express from "express";
import logger from "morgan";
import path from "path";
//routes폴더의 home,update,select 모듈 import
import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 1231; //포트번호 지정
const app = express(); //express app정의

//express에서 사용할 parsing관련 미들웨어 지정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//view engine 및 view 폴더 지정
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.use(logger("dev"));

//라우팅 할 때 실행할 모듈(파일) 지정
app.use("/", homeRouter);
app.use("/update", updateRouter);
app.use("/select", selectRouter);

//위에서 정한 포트번호를 리스닝함. 리스닝이 잘될 경우 콜백 함수로 메세지 출력.
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
