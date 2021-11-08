import express from "express";
import logger from "morgan";
import path from "path";
//라우팅에 필요한 모듈(js)파일을 import함.
import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
//라우팅 설정. 라우팅 주소에 따라 각각 다른 js파일을 실행함.
app.use("/", loginRouter);
app.use("/select", selectRouter);
app.use("/delete", deleteRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
