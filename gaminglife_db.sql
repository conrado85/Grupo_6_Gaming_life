-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-04-2023 a las 02:30:48
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gaminglife_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(128) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(11,2) DEFAULT NULL,
  `img` varchar(128) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `img`, `category_id`) VALUES
(5, 'Motherboard Asus A320M', 'Para procesadores Ryzen de la serie 4000 y 5000 (ej: 4600g y 5600g) debe solicitarse la actualización de la BIOS por mensaje privado luego de realizada la compra.', '39999.00', '1682025035735--product.png', NULL),
(6, 'Motherboard Gigabyte A320M', 'Soporta AMD 3rd Gen Ryzen ™ / 2nd Gen Ryzen ™ / 1st Gen Ryzen ™ / 2nd Gen Ryzen ™ con Radeon ™ Vega Graphics / 1st Gen Ryzen ™ con Radeon ™ Vega Graphics / Athlon ™ con Radeon ™ Vega Graphics / 7th Gen A-series / Procesadores Athlon X4\r\nDDR4 sin búfer no ECC de doble canal, 2 DIMM\r\nPCIe Gen3 x4 M.2 ultrarrápido con compatibilidad con modo PCIe NVMe y SATA\r\nCondensadores de audio de alta calidad y protector de ruido de audio\r\nRealtek® Gigabit LAN con software acelerador de Internet cFosSpeed\r\nSmart Fan 5 cuenta con 5 sensores de temperatura y 2 cabezales de ventilador híbridos\r\nBIOS UEFI GIGABYTE ™\r\nCentro de aplicaciones completamente nuevo de GIGABYTE ™, uso sencillo y fácil', '36999.00', '1682025109311--product.png', NULL),
(7, 'Motherboard Asrock A320M', '4KRC S.A. - Especialistas en Hardware Gamer. Más de 20 años de experiencia.\r\nMás de 100.000 operaciones nos avalan. Mercadolider Platinum.\r\n\r\nNos encontramos en el barrio de Palermo. En la zona de las Cañitas. 9 a 20HS.\r\nNuevo punto de retiro, en la zona de Flores. 10 a 13 y 15 a 18HS. Sabádo 10 a 13HS\r\n\r\nEnvio Express Gratuito en moto 24HS a todo Capital Federal ! Con sistema Track&Trace !\r\nEnvio Gratuito por camión a todo el País ! Con sistema Track&Trace !\r\nEmitimos Factura A y B. Todos nuestros productos cuentan con Garantía Oficial.', '42999.00', '1682025189069--product.png', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230416163203-create_roles_table.js'),
('20230416164605-create_users_table.js'),
('20230416171229-create_categories_table.js'),
('202304161712350-create_users_table.js'),
('20230416171347-create_products_table.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `img` text DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
