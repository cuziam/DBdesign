import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

//select로 라우팅이 되면 select.hbs를 렌더링한다.
//이 주소에선 부서의 목록을 확인할 수 있다. 삭제는 불가하다.
router.get("/", async function (req, res) {
  const department = await selectSql.getDepartment();

  res.render("select", {
    titie: "IT 공대",
    department,
  });
});

module.exports = router;
