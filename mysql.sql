
CREATE DATABASE IF NOT EXISTS tinker;
USE tinker;


/*----------------------------

Create User table


------------------------------*/

CREATE TABLE IF NOT EXISTS users(
  username VARCHAR(100) PRIMARY KEY,
  user_password VARCHAR(100) DEFAULT NULL,
  email VARCHAR(100) DEFAULT NULL UNIQUE,
  user_type ENUM('student','teacher') DEFAULT 'student'

);
/*----------------------------

Dumping Data on User table


------------------------------*/
INSERT INTO users VALUES ('test','test','test@gmail.com',2);
SELECT * FROM users;

/*----------------------------

Create Label table

------------------------------*/
CREATE TABLE IF NOT EXISTS Labels(
id INT PRIMARY KEY AUTO_INCREMENT,
label VARCHAR(20) UNIQUE
);

/*----------------------------
Dumping Data on Labels table
------------------------------*/
INSERT INTO Labels VALUES (1,'function');
INSERT INTO Labels VALUES (2,'array');
SELECT * FROM labels;
/*----------------------------
Create Challenge table
-----------------------------*/
CREATE TABLE IF NOT EXISTS challenges (
	id INT PRIMARY KEY AUTO_INCREMENT,
	instruction TEXT,
	starter TEXT,
	label VARCHAR(20),
	FOREIGN KEY (label) REFERENCES labels(label)
);
SELECT *FROM challenges;
/*----------------------------

Dumping Data on Challenges table
------------------------------*/
INSERT INTO challenges VALUES(1,"
This is an introduction to how challenges on Tinker work. In the Code tab you'll see a starter function that looks like this:
function hello() {

}
All you have to do is type return \"hello Tinker\" between the curly braces and click the Run button. If everything went according to plan, the console will display \"hello Tinker\" and say SUBMIT. Click it and see what happens.Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.","function hello() {

}",'function');
INSERT INTO challenges VALUES(2,"Just Do It Bruh!!","Starter bruh!",'array');
SELECT * FROM challenges;




/*----------------------------
Create Submissions table
------------------------------*/
CREATE TABLE IF NOT EXISTS submissions (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	submission TEXT,
	score INT,
	username VARCHAR(100),
	challenge_id INT,
	FOREIGN KEY (username) REFERENCES users(username),
	FOREIGN KEY (challenge_id) REFERENCES challenges(id)
);
/*----------------------------
Dumping Data on Submissions table
------------------------------*/
INSERT INTO submissions (submission,score,username,challenge_id) VALUES("
function hello() {
	return \"hello tinker\";
}",10,'test',1);
SELECT * FROM submissions;
/*----------------------------
Create Test table
------------------------------*/
CREATE TABLE IF NOT EXISTS tests (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	test VARCHAR(100),
	result VARCHAR(100),
	challenge_id INT,
	FOREIGN KEY (challenge_id) REFERENCES challenges(id)
);

/*----------------------------
Dumping Data on Test table
------------------------------*/
INSERT INTO tests VALUES(1,'hello()','hello tinker',1);

SELECT * FROM tests;

/*----------------------------
Create Resources table
------------------------------*/
CREATE TABLE IF NOT EXISTS resources (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	title VARCHAR(100),
	link VARCHAR(300),
	description VARCHAR(100),
	challenge_id INT,
	FOREIGN KEY (challenge_id) REFERENCES challenges(id)
);

/*----------------------------
Dumping Data on Test table
------------------------------*/
INSERT INTO resources VALUES(1,'JavaScript Functions Tutorial','javascript.info','Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.',1);

SELECT * FROM resources;

