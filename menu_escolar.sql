-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-09-2022 a las 22:34:54
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `menu_escolar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `is_rectified` tinyint(1) NOT NULL,
  `observations` text NOT NULL,
  `school_id` int(11) NOT NULL,
  `vegetarian` int(11) NOT NULL,
  `vegetarian_real` int(11) NOT NULL,
  `celiac` int(11) NOT NULL,
  `celiac_real` int(11) NOT NULL,
  `standard` int(11) NOT NULL,
  `standard_real` int(11) NOT NULL,
  `caloric` int(11) NOT NULL,
  `caloric_real` int(11) NOT NULL,
  `ethnic` int(11) NOT NULL,
  `ethnic_real` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `date`, `is_rectified`, `observations`, `school_id`, `vegetarian`, `vegetarian_real`, `celiac`, `celiac_real`, `standard`, `standard_real`, `caloric`, `caloric_real`, `ethnic`, `ethnic_real`) VALUES
(1, '2022-09-22', 0, '            ', 3, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1),
(2, '2022-09-30', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 50, 50),
(3, '2022-09-30', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 50, 50),
(4, '2022-09-23', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(5, '2022-09-29', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(6, '2022-09-29', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(7, '2022-09-29', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(8, '2022-09-30', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(9, '2022-09-25', 1, '', 3, 4, 4, 2, 2, 3, 3, 4, 4, 3, 3),
(10, '2022-09-22', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(11, '2022-09-22', 1, '', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3),
(12, '2022-09-22', 1, '', 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2),
(13, '2022-09-29', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(14, '2022-09-30', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(15, '2022-09-30', 1, '', 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2),
(16, '2022-09-29', 1, '', 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2),
(17, '2022-09-29', 1, '', 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2),
(18, '2022-09-22', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(19, '2022-09-28', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(20, '2022-09-23', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(21, '2022-09-22', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(22, '2022-09-30', 1, '', 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(23, '2022-09-23', 1, '', 3, 12, 12, 13, 13, 15, 15, 14, 14, 12, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schools`
--

CREATE TABLE `schools` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `schools`
--

INSERT INTO `schools` (`id`, `name`, `email`, `password`) VALUES
(2, 'Admin Junaeb', 'admin@junaeb.cl', '$2a$10$cdRKpPZjbnf.a2.73BSQz.5bX.l1qXo0ZuV8Kkbto1dPKwSyyLl0W'),
(3, 'franco', 'fpalmalopez2@gmail.com', '$2a$10$MkSI.EDbC2Q0lA37YIqPYuIdeZjpXKBTf3XlUw05gvt5ubUvPwMXy');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
