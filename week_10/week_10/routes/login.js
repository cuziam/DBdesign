import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();
//Get => login화면 렌더링
router.get("/", (req, res) => {
  res.render("login");
});

//Post =>누구냐에 따라 다르게 처리
router.post("/", async (req, res) => {
  const vars = req.body;
  const users = await selectSql.getUsers();
  let whoAmI = "";
  let checkLogin = false;
  //map함수로 for문 대체
  users.map((user) => {
    console.log(user.Id);
    //입력된 아이디와 데이터 베이스의 아이디와 일치하는지 확인 후 로그인 실행.
    //id정보는 whoAmI변수에 잠시 저장해놓는다.
    if (vars.id === user.Id && vars.password === user.Password) {
      console.log("login success!");
      checkLogin = true;
    }
    if (vars.id === "admin") {
      whoAmI = "admin";
    } else {
      whoAmI = "user";
    }
  });

  //로그인을 요청한 사람이 admin이라면 /delete로, user라면 /select로 라우팅시킨다
  //login 실패하면 login failed 메세지를 출력한다.
  if (checkLogin && whoAmI === "admin") {
    res.redirect("/delete");
  } else if (checkLogin && whoAmI === "user") {
    res.redirect("/select");
  } else {
    console.log("login failed!");
    res.send("<script>alert('login failed'); location.href='/'</script>");
  }
});

module.exports = router;
