import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();
//"/select"로 get요청이 발생하면 select.hbs템플릿으로 employee와 department테이블을 출력하는 함수.
//즉 select 쿼리의 결과를 출력하는 함수.
router.get("/", async function (req, res) {
  const employee = await selectSql.getEmployee();
  const department = await selectSql.getDepartment();

  res.render("select", {
    title: "직원 테이블",
    title2: "부서 테이블",
    employee,
    department,
  });
});

module.exports = router;
