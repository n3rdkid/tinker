-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2019 at 08:57 PM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `user_type` enum('user','student','teacher') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `user_password`, `email`, `user_type`) VALUES
('nccsdemo', '$2a$10$P8B23NZEf6U8u.fkd.JwUudC3Keip5pvwD5vnPU2F8GLJZzDq77Ty', 'nccsdemo@gmail.com', 'student'),
('nccstest', '$2a$10$bd7RgLfs/NRmh0YfcWYhQO870aA63dCnbHuhxRerm6CIGAttOZdmO', 'nccs@gmail.com', 'student'),
('pink123', '$2a$10$ZHNoygvY725hQ.k0ds3Q7uX09m4fEz/lKcIOH9EsEeUWLci8/nP9e', 'pink@gmail.com', 'student'),
('student', '$2a$10$RIHvgTWSI1brOvZe/mdvE.MC5viEeNyZB.7jrAeA2kCXYwbyCbOWq', 'student@gmail.com', 'student'),
('teacher', '$2a$10$QlahXzT8O.Jsazl9KfOBD.WQ6TXm6O2illhCE.7XPkkFkQkI8a6M6', 'teacher@t.com', 'student'),
('test', 'test', 'test@gmail.com', 'teacher'),
('test123', '$2a$10$J/58Hmd1u4MHHdxHMZ6aT.QMBSzmzI/Kok0J0SAVSU0jS58VXoDRq', 't@gmail.com', 'teacher'),
('user123', '$2a$10$x1/NQ26NN2S19cU7X0dQmepnc/w6IpCwAz3CI/wU/EWBD33JL9l/C', 'user@test.com', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
