-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2019 at 11:12 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tinker`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` INT(11) NOT NULL,
  `answer` VARCHAR(100) DEFAULT NULL,
  `quiz_id` INT(11) DEFAULT NULL
) ENGINE=INNODB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `id` int(11) NOT NULL,
  `dueDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignments`
--

INSERT INTO `assignments` (`id`, `dueDate`) VALUES
(1, '2019-06-02 11:54:09'),
(2, '2019-06-03 11:54:09'),
(3, '2019-06-04 11:54:09'),
(4, '2019-06-05 11:54:10'),
(5, '2019-06-06 11:54:10'),
(6, '2019-06-07 11:54:10'),
(7, '2019-06-08 11:54:10'),
(8, '2019-06-09 11:54:10'),
(9, '2019-06-10 11:54:10');

-- --------------------------------------------------------

--
-- Table structure for table `assignment_question`
--

CREATE TABLE `assignment_question` (
  `id` int(11) NOT NULL,
  `title` varchar(60) DEFAULT NULL,
  `instruction` text,
  `starter` text,
  `label` varchar(20) DEFAULT NULL,
  `assignment_no` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment_question`
--

INSERT INTO `assignment_question` (`id`, `title`, `instruction`, `starter`, `label`, `assignment_no`) VALUES
(1, 'Assignment 1 Question 1', 'Instruction For Assignment 1', 'function hello(){\nreturn \"Hello World!\"\n}', 'condition', 1),
(2, 'Assignment 2  Question 1', 'Instruction For Assignment 2', 'function demo(){\nreturn \"Hello World!\"\n}', 'condition', 2),
(3, 'Assignment 3 Question 1', 'Instruction For Assignment 3', 'function demo(){\nreturn \"Hello World!\"\n}', 'condition', 3),
(4, 'Assignment 4 Question 1', 'Instruction For Assignment 4', 'function demo(){\nreturn \"Hello World!\"\n}', 'condition', 4),
(5, 'Assignment 5 Question 1', 'Instruction For Assignment 5', 'function demo(){\nreturn \"Hello World!\"\n}', 'condition', 5),
(6, 'Assignment 1 Question 3', 'Instruction For Assignment 1 Q 3 ', 'function demo(){\nreturn \"Hello World!\"\n}', 'condition', 1),
(7, 'Assignment 1 Question 4', 'Instruction For Assignment 1 Q 4', 'function demo(){\nreturn \"Hello World!\"\n}', 'condition', 1),
(8, 'Assignment 1 Question 2', 'Instruction For Assignment 1 Q 2 ', 'function demo(){\nreturn \"Hello World!\"\n}', 'condition', 1);

-- --------------------------------------------------------

--
-- Table structure for table `challenges`
--

CREATE TABLE `challenges` (
  `id` int(11) NOT NULL,
  `title` varchar(60) DEFAULT NULL,
  `instruction` text,
  `starter` text,
  `label` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `challenges`
--

INSERT INTO `challenges` (`id`, `title`, `instruction`, `starter`, `label`) VALUES
(1, 'How Tinker Works', '\nThis is an introduction to how challenges on Tinker work. In the Code tab you\'ll see a starter function that looks like this:\nfunction hello() {\n}\nAll you have to do is type return \"hello Tinker\" between the curly braces and click the Run button. If everything went according to plan, the console will display \"hello Tinker\" and say SUBMIT. Click it and see what happens.Notes\nDon\'t forget to return the result.\nIf you get stuck on a challenge, find help in the Resources tab.', 'function hello() {\n}', 'function'),
(2, 'Odd Test', 'Return true for odd else false!', 'function odd(n){\nreturn false;\n}', 'condition'),
(3, 'Sum All Numbers in a Range', 'Return the sum of those two numbers plus the sum of all the numbers between them.\nThe lowest number will not always come first.', 'function sumAll(arr) {\n  return 1;\n}\nsumAll([1, 4]);', 'Test'),
(4, 'Pig Latin', 'Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an \"ay\".\nIf a word begins with a vowel you just add \"way\" to the end.\nInput strings are guaranteed to be English words in all lowercase.', 'function translatePigLatin(str) {\n  return str;\n}\ntranslatePigLatin(\"consonant\");', 'Test'),
(5, 'Missing letters', 'Find the missing letter in the passed letter range and return it.\nIf all letters are present in the range, return 0(zero).', 'function fearNotLetter(str) {\n  return str;\n}\n', 'Test');

-- --------------------------------------------------------

--
-- Table structure for table `correctanswer`
--

CREATE TABLE `correctanswer` (
  `id` int(11) NOT NULL,
  `quiz_id` int(11) DEFAULT NULL,
  `ans_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `correctanswer`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `labels`
--

CREATE TABLE `labels` (
  `id` int(11) NOT NULL,
  `label` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `labels`
--

INSERT INTO `labels` (`id`, `label`) VALUES
(2, 'array'),
(3, 'condition'),
(1, 'function'),
(4, 'Test');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `question` varchar(100) DEFAULT NULL,
  `timeLimit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz`
--

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

-- --------------------------------------------------------

--
-- Table structure for table `quiz_result`
--

CREATE TABLE `quiz_result` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `submisison_date` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz_result`
--

INSERT INTO `quiz_result` (`id`, `username`, `score`, `submisison_date`) VALUES
(1, 'test123', 22, '2019-06-03 13:50:12');

-- --------------------------------------------------------

--
-- Table structure for table `resources_assignments`
--

CREATE TABLE `resources_assignments` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `link` varchar(300) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `resources_assignments`
--

INSERT INTO `resources_assignments` (`id`, `title`, `link`, `description`, `question_id`) VALUES
(1, 'JavaScript Functions Tutorial', 'javascript.info', 'Functions are the main “building blocks” of the program. They allow the code to be called many times', 1),
(2, 'Title 2 Functions Tutorial', '2.info', ' The', 1),
(3, 'Title 3 Functions Tutorial', '3.info', 'repetition.', 1),
(4, '4 Functions Tutorial', '4.info', 'kills', 1),
(5, '5 Functions Tutorial', '5.info', 'Functions ', 1),
(6, '6 Assignment 1', '5.info', 'Functions ', 1),
(7, '7 Assignment 1', '5.info', 'Functions ', 1),
(8, '8 Assignment 1', '5.info', 'Functions ', 1),
(9, '9 Assignment 1', '5.info', 'Functions ', 1),
(10, '0 Assignment 1', '5.info', 'Functions ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `resources_challenge`
--

CREATE TABLE `resources_challenge` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `link` varchar(300) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `challenge_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `resources_challenge`
--

INSERT INTO `resources_challenge` (`id`, `title`, `link`, `description`, `challenge_id`) VALUES
(1, 'JavaScript Functions Tutorial', 'javascript.info', 'Functions are the main “building blocks” of the program. They allow the code to be called many times', 1),
(2, 'Title 2 Functions Tutorial', '2.info', ' The', 1),
(3, 'Title 3 Functions Tutorial', '3.info', 'repetition.', 1),
(4, '4 Functions Tutorial', '4.info', 'kills', 1),
(5, '5 Functions Tutorial', '5.info', 'Functions ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

CREATE TABLE `submissions` (
  `id` int(11) NOT NULL,
  `submission` text,
  `timeTaken` int(11) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `challenge_id` int(11) DEFAULT NULL,
  `submisison_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `submissions`
--

INSERT INTO `submissions` (`id`, `submission`, `timeTaken`, `username`, `challenge_id`, `submisison_date`) VALUES
(1, '\nfunction hello() {\n	return \"hello tinker\";\n}', 10, 'test', 1, '2019-06-01 17:38:55');

-- --------------------------------------------------------

--
-- Table structure for table `submissions_assignments`
--

CREATE TABLE `submissions_assignments` (
  `id` int(11) NOT NULL,
  `submission` text,
  `timeTaken` int(11) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `submisison_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `submissions_assignments`
--

INSERT INTO `submissions_assignments` (`id`, `submission`, `timeTaken`, `username`, `question_id`, `submisison_date`) VALUES
(1, '\nfunction hello() {\n	return \"hello tinker\";\n}', 10, 'test', 1, '2019-06-01 17:39:23'),
(3, 'function hello(){\nreturn \"hello tinker\"\n}', 38110, 'test123', 1, '2019-06-01 17:44:36'),
(4, 'function hello(){\nreturn \"hello tinker\"\n}', 3651, 'test123', 1, '2019-06-01 18:19:04');

-- --------------------------------------------------------

--
-- Table structure for table `tests_assignments`
--

CREATE TABLE `tests_assignments` (
  `id` int(11) NOT NULL,
  `test` varchar(100) DEFAULT NULL,
  `result` varchar(100) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tests_assignments`
--

INSERT INTO `tests_assignments` (`id`, `test`, `result`, `question_id`) VALUES
(1, 'hello()', 'hello tinker', 1),
(2, 'odd(1)', 'true', 2),
(3, 'odd(2)', 'false', 2),
(4, 'odd(3)', 'true', 2),
(5, 'odd(4)', 'false', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tests_challenge`
--

CREATE TABLE `tests_challenge` (
  `id` int(11) NOT NULL,
  `test` varchar(100) DEFAULT NULL,
  `result` varchar(100) DEFAULT NULL,
  `challenge_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tests_challenge`
--

INSERT INTO `tests_challenge` (`id`, `test`, `result`, `challenge_id`) VALUES
(1, 'hello()', 'hello tinker', 1),
(2, 'odd(1)', 'true', 2),
(3, 'odd(2)', 'false', 2),
(4, 'odd(3)', 'true', 2),
(5, 'odd(4)', 'false', 2),
(6, 'sumAll([1, 4])', '10', 3),
(7, 'sumAll([4, 1])', '10', 3),
(8, 'sumAll([5, 10])', '45', 3),
(9, 'sumAll([10, 5])', '45', 3),
(10, 'translatePigLatin(\"california\")', 'aliforniacay', 4),
(11, 'translatePigLatin(\"paragraphs\")', 'aragraphspay', 4),
(12, 'translatePigLatin(\"glove\")', 'oveglay', 4),
(13, 'translatePigLatin(\"algorithm\")', 'algorithmway', 4),
(14, 'translatePigLatin(\"eight\")', 'eightway', 4),
(15, 'fearNotLetter(\"abce\")', 'd', 5),
(16, 'fearNotLetter(\"abcdefghjklmno\")', 'i', 5),
(17, 'fearNotLetter(\"stvwx\")', 'u', 5),
(18, 'fearNotLetter(\"bcdf\")', 'e', 5),
(19, 'fearNotLetter(\"abcdefghijklmnopqrstuvwxyz\")', '0', 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `user_type` enum('student','teacher') DEFAULT 'student'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `user_password`, `email`, `user_type`) VALUES
('student', '$2a$10$RIHvgTWSI1brOvZe/mdvE.MC5viEeNyZB.7jrAeA2kCXYwbyCbOWq', 'student@gmail.com', 'student'),
('test', 'test', 'test@gmail.com', 'teacher'),
('test123', '$2a$10$J/58Hmd1u4MHHdxHMZ6aT.QMBSzmzI/Kok0J0SAVSU0jS58VXoDRq', 't@gmail.com', 'teacher');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_id` (`quiz_id`);

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assignment_question`
--
ALTER TABLE `assignment_question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assignment_no` (`assignment_no`),
  ADD KEY `label` (`label`);

--
-- Indexes for table `challenges`
--
ALTER TABLE `challenges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `label` (`label`);

--
-- Indexes for table `correctanswer`
--
ALTER TABLE `correctanswer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_id` (`quiz_id`),
  ADD KEY `ans_id` (`ans_id`);

--
-- Indexes for table `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `label` (`label`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_result`
--
ALTER TABLE `quiz_result`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `resources_assignments`
--
ALTER TABLE `resources_assignments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `resources_challenge`
--
ALTER TABLE `resources_challenge`
  ADD PRIMARY KEY (`id`),
  ADD KEY `challenge_id` (`challenge_id`);

--
-- Indexes for table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`),
  ADD KEY `challenge_id` (`challenge_id`);

--
-- Indexes for table `submissions_assignments`
--
ALTER TABLE `submissions_assignments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `tests_assignments`
--
ALTER TABLE `tests_assignments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `tests_challenge`
--
ALTER TABLE `tests_challenge`
  ADD PRIMARY KEY (`id`),
  ADD KEY `challenge_id` (`challenge_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `assignments`
--
ALTER TABLE `assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `assignment_question`
--
ALTER TABLE `assignment_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `challenges`
--
ALTER TABLE `challenges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `correctanswer`
--
ALTER TABLE `correctanswer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `labels`
--
ALTER TABLE `labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `quiz_result`
--
ALTER TABLE `quiz_result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `resources_assignments`
--
ALTER TABLE `resources_assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `resources_challenge`
--
ALTER TABLE `resources_challenge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `submissions_assignments`
--
ALTER TABLE `submissions_assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tests_assignments`
--
ALTER TABLE `tests_assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tests_challenge`
--
ALTER TABLE `tests_challenge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`);

--
-- Constraints for table `assignment_question`
--
ALTER TABLE `assignment_question`
  ADD CONSTRAINT `assignment_question_ibfk_1` FOREIGN KEY (`assignment_no`) REFERENCES `assignments` (`id`),
  ADD CONSTRAINT `assignment_question_ibfk_2` FOREIGN KEY (`label`) REFERENCES `labels` (`label`);

--
-- Constraints for table `challenges`
--
ALTER TABLE `challenges`
  ADD CONSTRAINT `challenges_ibfk_1` FOREIGN KEY (`label`) REFERENCES `labels` (`label`);

--
-- Constraints for table `correctanswer`
--
ALTER TABLE `correctanswer`
  ADD CONSTRAINT `correctanswer_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`),
  ADD CONSTRAINT `correctanswer_ibfk_2` FOREIGN KEY (`ans_id`) REFERENCES `answers` (`id`);

--
-- Constraints for table `quiz_result`
--
ALTER TABLE `quiz_result`
  ADD CONSTRAINT `quiz_result_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`);

--
-- Constraints for table `resources_assignments`
--
ALTER TABLE `resources_assignments`
  ADD CONSTRAINT `resources_assignments_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `assignment_question` (`id`);

--
-- Constraints for table `resources_challenge`
--
ALTER TABLE `resources_challenge`
  ADD CONSTRAINT `resources_challenge_ibfk_1` FOREIGN KEY (`challenge_id`) REFERENCES `challenges` (`id`);

--
-- Constraints for table `submissions`
--
ALTER TABLE `submissions`
  ADD CONSTRAINT `submissions_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  ADD CONSTRAINT `submissions_ibfk_2` FOREIGN KEY (`challenge_id`) REFERENCES `challenges` (`id`);

--
-- Constraints for table `submissions_assignments`
--
ALTER TABLE `submissions_assignments`
  ADD CONSTRAINT `submissions_assignments_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  ADD CONSTRAINT `submissions_assignments_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `assignment_question` (`id`);

--
-- Constraints for table `tests_assignments`
--
ALTER TABLE `tests_assignments`
  ADD CONSTRAINT `tests_assignments_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `assignment_question` (`id`);

--
-- Constraints for table `tests_challenge`
--
ALTER TABLE `tests_challenge`
  ADD CONSTRAINT `tests_challenge_ibfk_1` FOREIGN KEY (`challenge_id`) REFERENCES `challenges` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
