import express from "express";
import sql from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res, next) {
  const users = await sql.getUsers();

  // 데이터베이스에서 사용자 목록 가져와서 users.hbs에 값을 넘겨줌
  res.render("users", {
    title: "사용자 목록",
    users,
  });
});

module.exports = router;
