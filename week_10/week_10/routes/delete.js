import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();
//delete로 라우팅 되면 delete.hbs 렌더링한다.
//이 주소에선 부서 목록 열람과 데이터 베이스의 레코드 삭제가 가능하다.
router.get("/", async (req, res) => {
  const food = await selectSql.getFood();

  res.render("delete", {
    title: "삭제 기능",
    food, //department대신 food로 교체
  });
});

//레코드 삭제를 하면, 삭제를 수행한 뒤 다시 페이지를 리로딩한다.
router.post("/", async (req, res) => {
  console.log("delete router:", req.body.delBtn);
  const data = {
    price: req.body.delBtn, //Dnumber대신 price로 교체
  };
  console.log(data);
  //deleteDepartment 대신 deleteFood로 교체
  await deleteSql.deleteFood(data);
  res.redirect("/delete");
});

module.exports = router;
