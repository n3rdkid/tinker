
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
INSERT INTO Labels VALUES (3,'condition');
SELECT * FROM labels;
/*----------------------------
Create Challenge table
-----------------------------*/
CREATE TABLE IF NOT EXISTS challenges (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(60),
	instruction TEXT,
	starter TEXT,
	label VARCHAR(20),
	FOREIGN KEY (label) REFERENCES labels(label)
);
SELECT *FROM challenges;

/*----------------------------

Dumping Data on Challenges table
------------------------------*/
INSERT INTO challenges VALUES(1,"How Tinker Works","
This is an introduction to how challenges on Tinker work. In the Code tab you'll see a starter function that looks like this:
function hello() {

}
All you have to do is type return \"hello Tinker\" between the curly braces and click the Run button. If everything went according to plan, the console will display \"hello Tinker\" and say SUBMIT. Click it and see what happens.Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.","function hello() {

}",'function');
INSERT INTO challenges VALUES(2,"Odd Test","Return true for odd else false!","function odd(n){

return false;
}",'condition');
SELECT * FROM challenges;




/*----------------------------
Create Submissions table
------------------------------*/
CREATE TABLE IF NOT EXISTS submissions (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	submission TEXT,
	timeTaken INT,
	username VARCHAR(100),
	challenge_id INT,
	submisison_date DATETIME,
	FOREIGN KEY (username) REFERENCES users(username),
	FOREIGN KEY (challenge_id) REFERENCES challenges(id)
);
/*----------------------------
Dumping Data on Submissions table
------------------------------*/
INSERT INTO submissions (submission,timeTaken,username,challenge_id,submisison_date) VALUES("
function hello() {
	return \"hello tinker\";
}",10,'test',1,NOW());
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
INSERT INTO tests VALUES(2,'odd(1)','true',2);
INSERT INTO tests VALUES(3,'odd(2)','false',2);
INSERT INTO tests VALUES(4,'odd(3)','true',2);
INSERT INTO tests VALUES(5,'odd(4)','false',2);
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
INSERT INTO resources VALUES(2,'Title 2 Functions Tutorial','2.info',' The',1);
INSERT INTO resources VALUES(3,'Title 3 Functions Tutorial','3.info','repetition.',1);
INSERT INTO resources VALUES(4,'4 Functions Tutorial','4.info','kills',1);
INSERT INTO resources VALUES(5,'5 Functions Tutorial','5.info','Functions ',1);

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
INSERT INTO `quiz` (`id`, `question`, `timeLimit`) VALUES
(1, '0.4 + 0.04 = ?', 25),
(2, 'Inside which HTML element do we put the Javascript?', 25),
(3, 'What is the correct place to insert a Javascript?', 25),
(4, 'What is the correct syntax for referring to an external script called \"xxx.js\"?', 30),
(5, 'How do you write \"Hello World\" in an alert box?', 25),
(6, 'How do you create a function in Javascript', 15),
(7, 'How do you call a function in Javascript', 15),
(8, 'How do you write an IF statement in Javascript', 20),
(9, 'How can you add a comment in a Javascript', 15),
(10, 'How do you round the number 7.25, to a nearest integer', 20);

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
INSERT INTO `answers` (`id`, `answer`, `quiz_id`) VALUES
(1, '0.404', 1),
(2, '0.440', 1),
(3, '0.044', 1),
(4, '4.44', 1),
(5, '<javascript?', 2),
(6, '<scripting>', 2),
(7, '<js>', 2),
(8, '<script>', 2),
(9, 'Both the <head> section and the <body> section are correct.', 3),
(10, 'The <body> section', 3),
(11, 'The <head> section', 3),
(12, 'The <title> section', 3),
(13, '<script href=\"xxx.js\">', 4),
(14, '<script src=\"xxx.js\">', 4),
(15, '<script name=\"xxx.js\"', 4),
(16, '<script link=\"xxx.js\">', 4),
(17, 'alert(\"Hello World\");', 5),
(18, 'msgBox(\"Hello World\");', 5),
(19, 'alertBox(\"Hello world\");', 5),
(20, 'msg(\"Hello World\");', 5),
(21, 'fucntion = myFunction()', 7),
(22, 'function: myFunction()', 7),
(23, 'function myFunction()', 7),
(24, 'funciton() myFunction', 7),
(25, 'if i==5 then', 8),
(26, 'if i=5 then', 8),
(27, 'if (i==5)', 8),
(28, 'if i==5', 8),
(29, '\"This is a comment', 9),
(30, '//This is a comment', 9),
(31, '<!--This is a comment', 9),
(32, '!This is a comment', 9),
(33, 'Math.rnd(7.25)', 10),
(34, 'rnd(7.25)', 10),
(35, 'Math.round(7.25)', 10),
(36, 'round(7.25)', 10),
(37, 'call function myFunction()', 6),
(38, 'cal myFunction()', 6),
(39, 'myFunction()', 6),
(40, 'call()', 6);



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
INSERT INTO `correctanswer` (`id`, `quiz_id`, `ans_id`) VALUES
(1, 1, 1),
(2, 2, 8),
(3, 3, 3),
(4, 4, 4),
(5, 5, 17),
(6, 6, 22),
(7, 7, 39),
(8, 8, 27),
(9, 9, 30),
(10, 10, 35);
SELECT * FROM correctAnswer;