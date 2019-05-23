
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

/*





QUIZ MODULE




*/
/*----------------------------
Creating quiz table
------------------------------*/
CREATE TABLE IF NOT EXISTS quiz (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	question VARCHAR(100),
	timeLimit INT
);
/*----------------------------
Dumping Data on quiz table
------------------------------*/
INSERT INTO quiz VALUES(1,"0.4 + 0.04 = ?",25);
INSERT INTO quiz VALUES(2,"Dummy Question 2",60);
INSERT INTO quiz VALUES(3,"Dummy Question 3",70);
INSERT INTO quiz VALUES(4,"Dummy Question 4",80);

SELECT * FROM quiz;
/*----------------------------
Creating answers table
------------------------------*/
CREATE TABLE IF NOT EXISTS answers(
	id INT PRIMARY KEY AUTO_INCREMENT,
	answer VARCHAR(100),
	quiz_id INT,
	FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);
/*----------------------------
Dumping Data on answers table
------------------------------*/
INSERT INTO answers VALUES (1,"Answer 1",1);
INSERT INTO answers VALUES (2,"Answer 2",1);
INSERT INTO answers VALUES (3,"Answer 3",1);
INSERT INTO answers VALUES (4,"Answer 4",1);

INSERT INTO answers VALUES (5,"Answer 1",2);
INSERT INTO answers VALUES (6,"Answer 2",2);
INSERT INTO answers VALUES (7,"Answer 3",2);
INSERT INTO answers VALUES (8,"Answer 4",2);

INSERT INTO answers VALUES (9,"Answer 1",3);
INSERT INTO answers VALUES (10,"Answer 2",3);
INSERT INTO answers VALUES (11,"Answer 3",3);
INSERT INTO answers VALUES (12,"Answer 4",3);

INSERT INTO answers VALUES (13,"Answer 1",4);
INSERT INTO answers VALUES (14,"Answer 2",4);
INSERT INTO answers VALUES (15,"Answer 3",4);
INSERT INTO answers VALUES (16,"Answer 4",4);

SELECT * FROM answers;



/*----------------------------
Creating answers table
------------------------------*/
CREATE TABLE IF NOT EXISTS correctAnswer(
	id INT PRIMARY KEY AUTO_INCREMENT,
	quiz_id INT,
	ans_id INT,
	FOREIGN KEY (quiz_id) REFERENCES quiz(id),
	FOREIGN KEY (ans_id) REFERENCES answers(id)
);
/*----------------------------
Dumping Data on correctAnswer table
------------------------------*/
INSERT INTO correctAnswer VALUES (1,1,1);
INSERT INTO correctAnswer VALUES (2,1,2);
INSERT INTO correctAnswer VALUES (3,1,3);
INSERT INTO correctAnswer VALUES (4,1,4);