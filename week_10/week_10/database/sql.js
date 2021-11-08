import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  //mysql 연결풀 생성
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "yameame320",
    database: "week10",
    password: "mamatiuos320!",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

// mysql pool의 promise객체 생성
const promisePool = pool.promise();

//select 쿼리를 실행하는 함수 정의,실행 결과는 rows변수에 담겨 리턴됨.
export const selectSql = {
  getUsers: async () => {
    const [rows] = await promisePool.query(`select * from user`);
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`);

    return rows;
  },
  //getFood함수 추가
  getFood: async () => {
    const [rows] = await promisePool.query(`select * from food`);

    return rows;
  },
};

//delete 쿼리를 실행하는 함수 정의
export const deleteSql = {
  // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
  deleteDepartment: async (data) => {
    console.log("deleteSql.deleteDepartment:", data.Dnumber);
    const sql = `delete from department where Dnumber=${data.Dnumber}`;
    await promisePool.query(sql); //한번 delete를 마치면 다시 쿼리 실행을 기다림
  },
  //deleteFood함수 추가
  deleteFood: async (data) => {
    console.log("deleteSql.deleteFood:", data.price);
    const sql = `delete from food where price=${data.price}`;
    await promisePool.query(sql); //한번 delete를 마치면 다시 쿼리 실행을 기다림
  },
};
