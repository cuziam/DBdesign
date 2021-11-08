import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();
//"/"로 get요청이 발생하면 views폴더의 home.hbs 템플릿을 렌더링하는 함수.
router.get("/", (req, res) => {
  res.render("home");
});

//"/"로 post요청이 발생하면 데이터베이스를 업데이트하고 "/"로 다시 라우팅하는 함수.
router.post("/", (req, res) => {
  const vars = req.body;
  const var_length = Object.keys(req.body).length;

  if (var_length > 4) {
    const data = {
      Fname: vars.fname,
      Minit: vars.minit,
      Lname: vars.lname,
      Ssn: vars.ssn,
      Bdate: vars.bdate,
      Address: vars.address,
      Sex: vars.sex,
      Salary: vars.salary,
      Super_ssn: vars.super_ssn,
      Dno: vars.dno,
    };
    insertSql.setEmployee(data);
  } else {
    const data = {
      Dname: vars.dname,
      Dnumber: vars.dnumber,
      Mgr_ssn: vars.mgr_ssn,
      Mgr_start_date: vars.mgr_start_date,
    };
    insertSql.setDepartment(data);
  }
  res.redirect("/");
});

module.exports = router;
