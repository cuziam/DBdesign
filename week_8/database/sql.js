import mysql from "mysql2";

//mysql 풀 생성. database는 week8을 선택.
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week8",
    password: "39652520",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

//pool의 promise객체 생성
const promisePool = pool.promise();

//mysql select문 쿼리를 처리하는 함수 정의.
//promisePool 쿼리를 실행하여 fulfilled 상태가 되면, rows변수에 쿼리의 결과를 담는다.
export const selectSql = {
  getEmployee: async () => {
    const [rows] = await promisePool.query(`select * from employee`);
    console.log(rows);
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`);
    return rows;
  },
};

//mysql insert문 쿼리를 처리하는 함수 정의
export const insertSql = {
  setEmployee: async (data) => {
    const sql = `insert into employee values(
        "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
        "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}")`;

    await promisePool.query(sql);
  },
  setDepartment: async (data) => {
    const sql = `insert into department values(
        "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;
    await promisePool.query(sql);
  },
};

//mysql update문 쿼리를 처리하는 함수 정의
export const updateSql = {
  updateEmployee: async () => {
    const sql = `update employee set salary =30000 where Minit= "F"`;
    await promisePool.query(sql);
  },
  updateDepartment: async () => {
    const sql = `update department set dname="${data.Dname}" where Dnumber =1`;
    await promisePool.query(sql);
  },
};
