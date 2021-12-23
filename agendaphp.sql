-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 23, 2021 at 04:16 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agendaphp`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactos`
--

CREATE TABLE `contactos` (
  `id_contacto` int(3) NOT NULL,
  `nombre_contacto` varchar(50) NOT NULL,
  `empresa_contacto` varchar(50) NOT NULL,
  `telefono_contacto` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactos`
--

INSERT INTO `contactos` (`id_contacto`, `nombre_contacto`, `empresa_contacto`, `telefono_contacto`) VALUES
(4, 'Adeu', 'Llimebo', '9342324555'),
(5, 'Otilio', 'Llimebo', '2190312434'),
(6, 'Roneld', 'Ãšdemy', '903132111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id_contacto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id_contacto` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
