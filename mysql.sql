CREATE DATABASE tinker;
USE tinker;

/*----------------------------

Create User table


------------------------------*/
CREATE TABLE users(
  username VARCHAR(100),
  user_password VARCHAR(100) DEFAULT NULL,
  email VARCHAR(100) DEFAULT NULL UNIQUE,
  user_type ENUM('student','teacher') DEFAULT 'student'

);
/*----------------------------

Dumping Data on User table


------------------------------*/
INSERT INTO users VALUES ('test','test','test@gmail.com',2);
SELECT * FROM users;
