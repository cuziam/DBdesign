import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();
//"/update/[테이블 명]"으로 get요청이 발생하면 테이블을 출력하는 함수.
router.get("/employee", async (req, res) => {
  const emp_res = await selectSql.getEmployee();
  //updateEmployee.hbs 렌더링
  res.render("updateEmployee", {
    title: "직원 테이블 갱신",
    emp_res,
  });
});

router.get("/department", async (req, res) => {
  const dept_res = await selectSql.getDepartment();
  //updateDepartment.hbs 렌더링
  res.render("updateDepartment", {
    title: "부서 테이블 갱신",
    dept_res,
  });
});
//"/update/[테이블 명]"으로 post요청이 발생하면 테이블을 업데이트하고 "/select"로 라우팅하는 함수.
router.post("/employee", async (req, res) => {
  await updateSql.updateEmployee();
  res.redirect("/select");
});

router.post("/department", async (req, res) => {
  const vars = req.body;
  console.log(vars.dname);

  const data = {
    Dname: vars.dname,
  };
  await updateSql.updateDeprtment(data);
  res.redirect("/select");
});
module.exports = router;
