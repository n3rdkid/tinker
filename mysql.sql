
CREATE DATABASE IF NOT EXISTS tinker;
USE tinker;
SELECT * FROM tests_assignments;
SELECT * FROM assignment_question;
UPDATE tests_assignments SET test="1",result="1" WHERE id="1";
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
CREATE TABLE IF NOT EXISTS tests_challenge (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	test VARCHAR(100),
	result VARCHAR(100),
	challenge_id INT,
	FOREIGN KEY (challenge_id) REFERENCES challenges(id)
);


/*----------------------------
Dumping Data on Test table
------------------------------*/
INSERT INTO tests_challenge VALUES(1,'hello()','hello tinker',1);
INSERT INTO tests_challenge VALUES(2,'odd(1)','true',2);
INSERT INTO tests_challenge VALUES(3,'odd(2)','false',2);
INSERT INTO tests_challenge VALUES(4,'odd(3)','true',2);
INSERT INTO tests_challenge VALUES(5,'odd(4)','false',2);
SELECT * FROM tests_challenge;

/*----------------------------
Create Resources table
------------------------------*/
DROP TABLE resources_challenge;
CREATE TABLE IF NOT EXISTS resources_challenge (
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
INSERT INTO resources_challenge VALUES(1,'JavaScript Functions Tutorial','javascript.info','Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.',1);
INSERT INTO resources_challenge VALUES(2,'Title 2 Functions Tutorial','2.info',' The',1);
INSERT INTO resources_challenge VALUES(3,'Title 3 Functions Tutorial','3.info','repetition.',1);
INSERT INTO resources_challenge VALUES(4,'4 Functions Tutorial','4.info','kills',1);
INSERT INTO resources_challenge VALUES(5,'5 Functions Tutorial','5.info','Functions ',1);

SELECT * FROM resources_challenge;

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




SELECT * FROM`users`;

SELECT * FROM challenges;
INSERT INTO Labels VALUES (4,"Test");
INSERT INTO challenges (title, instruction, starter, label) 
VALUES
  (
    "Sum All Numbers in a Range",
    "Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.","function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);",
    "Test"
  );
INSERT INTO challenges (title, instruction, starter, label) 
VALUES ("Pig Latin","Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an \"ay\".

If a word begins with a vowel you just add \"way\" to the end.

Input strings are guaranteed to be English words in all lowercase.","function translatePigLatin(str) {
  return str;
}

translatePigLatin(\"consonant\");","Test");

INSERT INTO challenges (title, instruction, starter, label) 
VALUES  ("Missing letters","Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return 0(zero).","function fearNotLetter(str) {
  return str;
}
","Test");

  SELECT * FROM tests_challenge;
  INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("sumAll([1, 4])",10,3);
  INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("sumAll([4, 1])",10,3);
  INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("sumAll([5, 10])",45,3);
  INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("sumAll([10, 5])",45,3);
  
  
  
INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("translatePigLatin(\"california\")","aliforniacay",4);
  INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("translatePigLatin(\"paragraphs\")","aragraphspay",4);
 INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("translatePigLatin(\"glove\")","oveglay",4);
  INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("translatePigLatin(\"algorithm\")","algorithmway",4);
    INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("translatePigLatin(\"eight\")","eightway",4);
    

INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("fearNotLetter(\"abce\")","d",5);    
INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("fearNotLetter(\"abcdefghjklmno\")","i",5);  
INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("fearNotLetter(\"stvwx\")","u",5);  
INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("fearNotLetter(\"bcdf\")","e",5);  
INSERT INTO tests_challenge (test,result,challenge_id) VALUES ("fearNotLetter(\"abcdefghijklmnopqrstuvwxyz\")","0",5);  

/*----------------------------
Create Assignemnt table
-----------------------------*/
DROP TABLE assignments;
CREATE TABLE IF NOT EXISTS assignments (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dueDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM assignments; 
/*----------------------------
Dumping Data on Assignemnt table
-----------------------------*/
INSERT INTO ASSIGNMENTS VALUES(1,DATE_ADD(NOW(),INTERVAL 1 DAY)) ;
INSERT INTO ASSIGNMENTS VALUES(2,DATE_ADD(NOW(),INTERVAL 2 DAY)) ;
INSERT INTO ASSIGNMENTS VALUES(3,DATE_ADD(NOW(),INTERVAL 3 DAY)) ;
INSERT INTO ASSIGNMENTS VALUES(4,DATE_ADD(NOW(),INTERVAL 4 DAY));
INSERT INTO ASSIGNMENTS VALUES(5,DATE_ADD(NOW(),INTERVAL 5 DAY)) ;
INSERT INTO ASSIGNMENTS VALUES(6,DATE_ADD(NOW(),INTERVAL 6  DAY)) ;
INSERT INTO ASSIGNMENTS VALUES(7,DATE_ADD(NOW(),INTERVAL 7 DAY)) ;
INSERT INTO ASSIGNMENTS VALUES(8,DATE_ADD(NOW(),INTERVAL 8 DAY)) ;
INSERT INTO ASSIGNMENTS VALUES(9,DATE_ADD(NOW(),INTERVAL 9 DAY)) ;

/*----------------------------
Create Challenge table
-----------------------------*/
CREATE TABLE IF NOT EXISTS assignment_question (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(60),
	instruction TEXT,
	starter TEXT,
	label VARCHAR(20),
	assignment_no INT,	
	FOREIGN KEY (assignment_no) REFERENCES ASSIGNMENTS(id),
	FOREIGN KEY (label) REFERENCES labels(label)
);

INSERT INTO assignment_question VALUES(1,"Assignment 1 Question 1","Instruction For Assignment 1",'function hello(){
return "Hello World!"
}','condition',1);
INSERT INTO assignment_question VALUES(8,"Assignment 1 Question 2","Instruction For Assignment 1 Q 2 ",'function demo(){
return "Hello World!"
}','condition',1);
INSERT INTO assignment_question VALUES(6,"Assignment 1 Question 3","Instruction For Assignment 1 Q 3 ",'function demo(){
return "Hello World!"
}','condition',1);
INSERT INTO assignment_question VALUES(7,"Assignment 1 Question 4","Instruction For Assignment 1 Q 4",'function demo(){
return "Hello World!"
}','condition',1);
INSERT INTO assignment_question VALUES(2,"Assignment 2  Question 1","Instruction For Assignment 2",'function demo(){
return "Hello World!"
}','condition',2);
INSERT INTO assignment_question VALUES(3,"Assignment 3 Question 1","Instruction For Assignment 3",'function demo(){
return "Hello World!"
}','condition',3);
INSERT INTO assignment_question VALUES(4,"Assignment 4 Question 1","Instruction For Assignment 4",'function demo(){
return "Hello World!"
}','condition',4);
INSERT INTO assignment_question VALUES(5,"Assignment 5 Question 1","Instruction For Assignment 5",'function demo(){
return "Hello World!"
}','condition',5);
SELECT *FROM assignment_question;



/*----------------------------
Create Test table
------------------------------*/
CREATE TABLE IF NOT EXISTS tests_assignments (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	test VARCHAR(100),
	result VARCHAR(100),
	question_id INT,
	FOREIGN KEY (question_id) REFERENCES assignment_question(id)
);

/*----------------------------
Dumping Data on Test table
------------------------------*/
INSERT INTO tests_assignments VALUES(1,'hello()','hello tinker',1);
INSERT INTO tests_assignments VALUES(2,'odd(1)','true',2);
INSERT INTO tests_assignments VALUES(3,'odd(2)','false',2);
INSERT INTO tests_assignments VALUES(4,'odd(3)','true',2);
INSERT INTO tests_assignments VALUES(5,'odd(4)','false',2);
SELECT * FROM tests_assignments;

/*----------------------------
Create Resources table
------------------------------*/
CREATE TABLE IF NOT EXISTS resources_assignments (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	title VARCHAR(100),
	link VARCHAR(300),
	description VARCHAR(100),
	question_id INT,
	FOREIGN KEY (question_id) REFERENCES assignment_question(id)
);

/*----------------------------
Dumping Data on Test table
------------------------------*/
INSERT INTO resources_assignments VALUES(1,'JavaScript Functions Tutorial','javascript.info','Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.',1);
INSERT INTO resources_assignments VALUES(2,'Title 2 Functions Tutorial','2.info',' The',1);
INSERT INTO resources_assignments VALUES(3,'Title 3 Functions Tutorial','3.info','repetition.',1);
INSERT INTO resources_assignments VALUES(4,'4 Functions Tutorial','4.info','kills',1);
INSERT INTO resources_assignments VALUES(5,'5 Functions Tutorial','5.info','Functions ',1);
INSERT INTO resources_assignments VALUES(6,'6 Assignment 1','5.info','Functions ',1);
INSERT INTO resources_assignments VALUES(7,'7 Assignment 1','5.info','Functions ',1);
INSERT INTO resources_assignments VALUES(8,'8 Assignment 1','5.info','Functions ',1);
INSERT INTO resources_assignments VALUES(9,'9 Assignment 1','5.info','Functions ',1);
INSERT INTO resources_assignments VALUES(10,'0 Assignment 1','5.info','Functions ',1);
SELECT * FROM resources_assignments;


/*----------------------------
Create Submissions table
------------------------------*/
CREATE TABLE IF NOT EXISTS submissions_assignments (
	id INT PRIMARY KEY AUTO_INCREMENT ,
	submission TEXT,
	timeTaken INT,
	username VARCHAR(100),
	question_id INT,
	submisison_date DATETIME,
	FOREIGN KEY (username) REFERENCES users(username),
	FOREIGN KEY (question_id) REFERENCES assignment_question(id)
);
/*----------------------------
Dumping Data on Submissions table
------------------------------*/
INSERT INTO submissions_assignments (submission,timeTaken,username,question_id,submisison_date) VALUES("
function hello() {
	return \"hello tinker\";
}",10,'test',1,NOW());
SELECT * FROM submissions_assignments;
CREATE TABLE IF NOT EXISTS quiz_result(
id INT PRIMARY KEY AUTO_INCREMENT ,
	username VARCHAR(100) ,
	score INT ,
	submisison_date DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (username) REFERENCES users(username));
SELECT * FROM quiz_result;



        