# <p align="center">DBdesign table</p>
<<<<<<< Updated upstream
***
## <p align="center"> 3주차 DB tables</p>
## Database name: STUDENT
>show tables;

STUDENT|
---|
student|

USER 데이터 베이스는 **Student** 테이블 하나를 갖고 있다.
>desc Student

Fidld|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
id|int(8)|NO|PRI|NULL|auto_increment
name|varchar(50)|NO||NULL|
grade|int(1)|NO||NULL|
major|varchar(50)|YES||NULL|
date|datetime|NO||NULL|
email|carchar(100)|NO|UNI|NULL|

>select * from Student;

id|name|grade|major|date|email
---|---|---|---|---|---|
1|changsoo|4|mechanics|2021-09-21 17:31:44|yameame320@gmail.com
2|Yeun|4|Biology|2021-09-21 17:33:44|yeun5233@gmail.com
3|Eryk|2|Linguistics|2021-09-21 17:34:57|eryk@gmail.com
4|jungmin|1|Philosophy|2021-09-21 17:36:08|stayhere0_0@gmail.com

Student 테이블은 위와 같이 구성되어 있다.

***
## <p align="center"> 8주차 DB tables</p>
## Database name: WEEK8
>show tables;

WEEK8|
---|
Department|
Employee|

WEEK8 데이터베이스는 **Department**와 **Employee** 테이블로 구성되어있다.

>desc Department

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---
Fname|varchar(10)|NO||NULL|
Minit|char(1)|YES||NULL|
Lname|varchar(20)|NO||NULL|
Ssn|char(9)|NO|PRI|NULL|
Bdate|date|YES||NULL|
Address|varchar(30)|YES||NULL|
Sex|char(1)|YES||NULL|
Salary|decimal(5,0)|YES||NULL|
Super_ssn|char(9)|YES||NULL|
Dno|int|NO||NULL|

>desc Employee

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---
Dname|varchar(15)|NO|UNI|NULL|
Dnumber|int|NO|PRI|NULL|
Mgr_ssn|char(9)|NO|MUL|NULL|
Mgr_start_date|date|YES||NULL|


***
## <p align="center"> 10주차 DB tables</p>
## Database name: WEEK10

>show tables;

Tables_in_week10|
---|
Department|
Food|
User|

WEEK10은 **Department,Food,User** 테이블로 이루어져 있다.

>desc department;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---
Dname|varchar(15)|NO|UNI|NULL|
Dnumber|int|NO|PRI|NULL

>desc Food;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---
name|varchar(50)|NO|PRI|NULL|
price|int|NO||NULL|
country|varchar(30)|NO||NULL|

>desc User;

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---
Id|varchar(20)|NO|PRI|NULL|
Password|varchar(20)|NO||NULL|
Role|varchar(5)|NO||NULL|


***
=======

---

## <p align="center"> 3주차 DB tables</p>

## Database name: STUDENT

3주차에는 데이터 베이스의 테이블을 가져와서 열람하는 실습을 진행하였다.

> show tables;

| STUDENT |
| ------- |
| student |

USER 데이터 베이스는 **Student** 테이블 하나를 갖고 있다.

> desc Student;

| Fidld | Type         | Null | Key | Default | Extra          |
| ----- | ------------ | ---- | --- | ------- | -------------- |
| id    | int(8)       | NO   | PRI | NULL    | auto_increment |
| name  | varchar(50)  | NO   |     | NULL    |
| grade | int(1)       | NO   |     | NULL    |
| major | varchar(50)  | YES  |     | NULL    |
| date  | datetime     | NO   |     | NULL    |
| email | carchar(100) | NO   | UNI | NULL    |

> select \* from Student;

| id  | name     | grade | major       | date                | email                 |
| --- | -------- | ----- | ----------- | ------------------- | --------------------- |
| 1   | changsoo | 4     | mechanics   | 2021-09-21 17:31:44 | yameame320@gmail.com  |
| 2   | Yeun     | 4     | Biology     | 2021-09-21 17:33:44 | yeun5233@gmail.com    |
| 3   | Eryk     | 2     | Linguistics | 2021-09-21 17:34:57 | eryk@gmail.com        |
| 4   | jungmin  | 1     | Philosophy  | 2021-09-21 17:36:08 | stayhere0_0@gmail.com |

Student 테이블은 위와 같이 구성되어 있다.

---

## <p align="center"> 8주차 DB tables</p>

## Database name: WEEK8

8주차에는 테이블에 튜플을 생성하고 수정하는 실습을 진행하였다.

> show tables;

| WEEK8      |
| ---------- |
| Department |
| Employee   |

WEEK8 데이터베이스는 부서를 나타내는 **Department**와 직원을 나타내는 **Employee** 테이블로 구성되어있다.
미리 삽입된 튜플은 존재하지 않는 상태이다.

> desc Employee;

| Field     | Type         | Null | Key | Default | Extra |
| --------- | ------------ | ---- | --- | ------- | ----- |
| Fname     | varchar(10)  | NO   |     | NULL    |
| Minit     | char(1)      | YES  |     | NULL    |
| Lname     | varchar(20)  | NO   |     | NULL    |
| Ssn       | char(9)      | NO   | PRI | NULL    |
| Bdate     | date         | YES  |     | NULL    |
| Address   | varchar(30)  | YES  |     | NULL    |
| Sex       | char(1)      | YES  |     | NULL    |
| Salary    | decimal(5,0) | YES  |     | NULL    |
| Super_ssn | char(9)      | YES  |     | NULL    |

Dno|int|NO||NULL|

> desc Department;

| Field          | Type        | Null | Key | Default | Extra |
| -------------- | ----------- | ---- | --- | ------- | ----- |
| Dname          | varchar(15) | NO   | UNI | NULL    |
| Dnumber        | int         | NO   | PRI | NULL    |
| Mgr_ssn        | char(9)     | NO   | MUL | NULL    |
| Mgr_start_date | date        | YES  |     | NULL    |

---

## <p align="center"> 10주차 DB tables</p>

## Database name: WEEK10

10주차에는 테이블에서 튜플을 삭제하는 실습을 진행하였다.

> show tables;

| Tables_in_week10 |
| ---------------- |
| Department       |
| Food             |
| User             |

WEEK10은 **Department,Food,User** 테이블로 이루어져 있다.

> desc Department;

| Field   | Type        | Null | Key | Default | Extra |
| ------- | ----------- | ---- | --- | ------- | ----- |
| Dname   | varchar(15) | NO   | UNI | NULL    |
| Dnumber | int         | NO   | PRI | NULL    |

> selelct \* from Department

| Dname          | Dnumber |
| -------------- | ------- |
| 전기공학과     | 2       |
| 전자공학과     | 3       |
| 정보통신공학과 | 0       |
| 컴퓨터공학과   | 1       |

> desc Food;

| Field   | Type        | Null | Key | Default | Extra |
| ------- | ----------- | ---- | --- | ------- | ----- |
| name    | varchar(50) | NO   | PRI | NULL    |
| price   | int         | NO   |     | NULL    |
| country | varchar(30) | NO   |     | NULL    |

> select \* from Food;

| name         | price | country |
| ------------ | ----- | ------- |
| Cheeseburger | 4000  | America |
| Gumbo        | 15000 | America |
| Oil-Pasta    | 12000 | Italy   |
| sushi        | 12500 | Japan   |

> desc User;

| Field    | Type        | Null | Key | Default | Extra |
| -------- | ----------- | ---- | --- | ------- | ----- |
| Id       | varchar(20) | NO   | PRI | NULL    |
| Password | varchar(20) | NO   |     | NULL    |
| Role     | varchar(5)  | NO   |     | NULL    |

> select \* from User

| Id    | Password  | Role  |
| ----- | --------- | ----- |
| admin | admin1234 | admin |
| test  | test1234  | users |

---

>>>>>>> Stashed changes
### <p align="center">마침</p>
