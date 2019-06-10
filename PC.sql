-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2019 at 06:06 AM
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
  `id` int(11) NOT NULL,
  `answer` varchar(100) DEFAULT NULL,
  `quiz_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, '2019-06-06 21:08:50'),
(2, '2019-06-13 18:15:00'),
(3, '2019-06-17 21:50:05'),
(4, '2019-06-27 18:15:00');

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
(1, 'Positive Test', 'Return true for positive and false for negative', 'function positive(n)\n{\n	return true;\n}\n', 'condition', 1),
(2, 'Divisible By Five', 'Return true for positive and false for negative', 'function divisibleByFive(n)\n{\n	return true;\n}\n', 'condition', 1),
(3, 'Remainder Reminder', 'Return the remainder that results when a is divided by b.', 'function remainder(a,b)\n{\n    let remainder; \n    return remainder ;\n}', 'function', 2),
(4, 'Palindrome Malindrome', 'Return true if a number is palindrome false otherwise', ' function isPalindrome(n)\n{\n	return true;\n}\n', 'condition', 2),
(5, 'Traverse Reverse', 'Return true if a number is reverse false otherwise', 'function isReverse(a,b)\n{\n	return true;\n}', 'function', 3),
(6, 'Smallest Common Multiple', 'Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.\n\nThe range will be an array of two numbers that will not necessarily be in numerical order.\n\nFor example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.', 'function smallestCommons(arr) {\n  return arr;\n}', 'function', 4),
(7, 'Sum All Primes', 'Sum all the prime numbers up to and including the provided number.\n\nA prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it\'s only divisible by one and two.\n\nThe provided number may not be a prime.', 'function sumPrimes(num) {\n  return num;\n}', 'function', 4),
(8, 'Sum All Odd Fibonacci Numbers', 'Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.\n\nThe first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.\n\nFor example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.', 'function sumFibs(num) {\n  return num;\n}', 'function', 4),
(9, 'Missing letters', 'Find the missing letter in the passed letter range and return it.\n\nIf all letters are present in the range, return false.', 'function fearNotLetter(str) {\n  return str;\n}', 'function', 4);

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
(1, 'Conditional Codes', 'https://www.javatpoint.com/javascript-if', 'Check out all tyou can at JavatPoint', 3);

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
(1, 'JavaScript Functions Tutorial', 'javascript.info', 'Functions are the main “building blocks” of the program. They allow the code to be called many times', 1);

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
(1, '\nfunction hello() {\n	return \"hello tinker\";\n}', 10, 'test', 1, '2019-06-01 17:38:55'),
(2, 'function odd(n){\nreturn n%2!==0;\n}', 9351, 'student', 2, '2019-06-06 23:52:30'),
(3, 'function odd(n){\nreturn n%2!==0;\n}', 29521, 'student', 2, '2019-06-06 23:52:50'),
(4, 'function odd(n){\nreturn n%2!==0;\n}', 13485, 'student', 2, '2019-06-06 23:53:53'),
(5, 'function odd(n){\nreturn n%2!==0;\n}', 12745, 'student', 2, '2019-06-06 23:58:54'),
(6, 'function odd(n){\nreturn n%2!==0;\n}', 3617, 'student', 2, '2019-06-07 08:06:19'),
(7, 'function odd(n){\nreturn n%2!==0;\n}', 11416, 'student', 2, '2019-06-07 08:06:27'),
(8, 'function odd(n){\nreturn n%2!==0;\n}', 12029, 'student', 2, '2019-06-07 08:06:27'),
(9, 'function odd(n){\nreturn n%2!==0;\n}', 12183, 'student', 2, '2019-06-07 08:06:28'),
(10, 'function odd(n){\nreturn n%2!==0;\n}', 21156, 'student', 2, '2019-06-07 08:06:55');

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
(1, 'function remainder(a,b)\n{\n    let remainder; \n    return a%b ;\n}', 58574, 'student', 3, '2019-06-07 09:03:41'),
(2, 'function remainder(a,b)\n{\n    let remainder; \n    return a%b ;\n}', 6503, 'student', 3, '2019-06-07 09:07:31'),
(3, 'function remainder(a,b)\n{\n    let remainder; \n    return a%b ;\n}', 6509, 'student', 3, '2019-06-07 09:07:55'),
(4, 'function remainder(a,b)\n{\n    let remainder; \n    return a%b ;\n}', 5267, 'student', 3, '2019-06-07 09:10:29'),
(5, 'function remainder(a,b)\n{\n    let remainder; \n    return a%b ;\n}', 9394, 'student', 3, '2019-06-07 09:10:33'),
(6, 'function remainder(a,b)\n{\n    let remainder; \n    return a%b ;\n}', 15698, 'student', 3, '2019-06-07 09:12:40');

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
(1, 'positive(1)', 'true', 1),
(2, 'positive(-10)', 'false', 1),
(3, 'positive(25)', 'true', 1),
(4, 'positive(-999995)', 'false', 1),
(5, ' divisibleByFive(500)', 'true', 2),
(6, ' divisibleByFive(35)', 'true', 2),
(7, ' divisibleByFive(7)', 'false', 2),
(8, ' divisibleByFive(2)', 'false', 2),
(9, 'remainder(1,3)', '1', 3),
(10, 'remainder(5,3)', '2', 3),
(11, 'remainder(15,7)', '1', 3),
(12, 'isPalindrome(343)', 'true', 4),
(13, 'isPalindrome(344)', 'false', 4),
(14, 'isPalindrome(222)', 'true', 4),
(15, 'isReverse(12345,54321)', 'true', 5),
(16, 'isReverse(1357,7531)', 'true', 5),
(17, 'isReverse(157,175)', 'false', 5),
(18, 'isReverse(1527,1275)', 'false', 5),
(19, 'smallestCommons([1, 5])', '60', 6),
(20, 'smallestCommons([2, 10])', '2520', 6),
(21, 'smallestCommons([5, 1])', '60', 6),
(22, 'smallestCommons([23, 18])', '6056820', 6),
(23, 'sumPrimes(10)', '17', 7),
(24, 'sumPrimes(977)', '73156', 7),
(25, 'sumFibs(1000)', '1785', 8),
(26, 'sumFibs(4)', '5', 8),
(27, 'sumFibs(75025)', '135721', 8),
(28, 'fearNotLetter(\"abce\")', 'd', 9),
(29, 'fearNotLetter(\"abcdefghjklmno\")', 'i', 9),
(30, 'fearNotLetter(\"stvwx\")', 'u', 9),
(31, 'fearNotLetter(\"abcdefghijklmnopqrstuvwxyz\")', 'false', 9);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `assignment_question`
--
ALTER TABLE `assignment_question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `resources_assignments`
--
ALTER TABLE `resources_assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `resources_challenge`
--
ALTER TABLE `resources_challenge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `submissions_assignments`
--
ALTER TABLE `submissions_assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tests_assignments`
--
ALTER TABLE `tests_assignments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

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
