/* ************************************************************************************* */
/* ---------------------------------------- DML ---------------------------------------- */
/* ---------------------------- DATA MANIPULATION LANGUAGE ----------------------------- */
/* ------------------------- LENGUAJE DE MANIPULACIÓN DE DATOS ------------------------- */
/* ------------------------------------- UNA TABLA ------------------------------------- */
/* ------------------------------------------------------------------------------------- */
/* ************************************************************************************* */
/* ------------------------------------------------------------------------------------- */
/* 1. CONSULTAS DE ACCIÓN [Inicio] : . INSERT INTO, UPDATE, DELETE                       */
/* 1.1. Crear o Registrar : .......... INSERT INTO __ VALUES ( __ , __ )                 */
/* 1.1.1. Datos Correctos : .......... INSERT INTO __ VALUES ( __ , __ )                 */
/* 1.1.2. Datos Incorrectos : ........ INSERT INTO __ VALUES ( __ , __ )                 */
/* 1.2. Actualizar : ................. UPDATE __ SET __ = __ WHERE __ = __               */
/* 1.3. Eliminar : ................... DELETE FROM __ WHERE __ = __                      */
/* 2. CONSULTAS DE SELECCIÓN : ....... SELECT                                            */
/* 2.1. Generales : .................. SELECT * FROM __                                  */
/* 2.2. Específicas : ................ SELECT __ , __ FROM __                            */
/* 2.3. Con Criterios: ............... SELECT __ FROM __ WHERE __ = __                   */
/* 2.4. Con Operadores Lógicos : ..... OR, AND, NOT                                      */
/* 2.4.1. 0 [OR] : ................... SELECT __ FROM __ WHERE __ = __ OR __ = __        */
/* 2.4.2. Y [AND] : .................. SELECT __ FROM __ WHERE __ = __ AND __ = __       */
/* 2.4.3. No [NOT] : ................. SELECT __ FROM __ WHERE __ NOT IN ( __ )          */
/* 2.5. Con Operadores Comparación : . <>, <, <=, >, >=                                  */
/* 2.5.1. Diferente [<>] : ........... SELECT __ FROM __ WHERE __ <> __                  */
/* 2.5.2. Menor que [<] : ............ SELECT __ FROM __ WHERE __ <  __                  */
/* 2.5.3. Mayor que [>] : ............ SELECT __ FROM __ WHERE __ >  __                  */
/* 2.5.4. Menor o igual [<=] : ....... SELECT __ FROM __ WHERE __ <=  __                 */
/* 2.5.5. Mayor o igual [>=] : ....... SELECT __ FROM __ WHERE __ >=  __                 */
/* 2.6. Con otros Operadores : ....... LIKE '_%' , BETWEEN __ AND __ , IN ( __ , __ )    */
/* 2.6.1. Comodín [LIKE '_%'] : ...... SELECT __ FROM __ WHERE __ LIKE '_%'              */
/* 2.6.2. Entre [BETWEEN] : .......... SELECT __ FROM __ WHERE __ BETWEEN __ AND __      */
/* 2.6.3. Lista [IN ( __ )] : ........ SELECT __ FROM __ WHERE __ IN( __ , __ )          */
/* 2.7. Ordenadas : .................. ORDER BY __                                       */
/* 2.7.1. Ascendente [ASC] : ......... SELECT __ FROM __ WHERE __ = __ ORDER BY __ ASC   */
/* 2.7.2. Descendente [DESC] : ....... SELECT __ FROM __ WHERE __ = __ ORDER BY __ DESC  */
/* 2.7.3. Combinadas : ............... SELECT __ FROM __ WHERE __ = __ ORDER BY __       */
/* 2.8. Calculadas con Funciones: .... GROUP BY __                                       */
/* 2.8.1. Suma [SUM()] : ............. SELECT __ , SUM( __ ) FROM __ GROUP BY __         */
/* 2.8.2. Promedio [AVG()] : ......... SELECT __ , AVG( __ ) FROM __ GROUP BY __         */
/* 2.8.3. Máximo [MAX()] : ........... SELECT __ , MAX( __ ) FROM __ GROUP BY __         */
/* 2.8.4. Mínimo [MIN()] : ........... SELECT __ , MIN( __ ) FROM __ GROUP BY __         */
/* 2.8.5. Conteo [COUNT()] : ......... SELECT __ , COUNT( __ ) FROM __ GROUP BY __       */
/* 2.9. Calculadas con Alias : ....... SELECT __ , FUN( __ ) AS __ FROM __               */
/* 2.10. Calculadas Condicionantes : . GROUP BY __ HAVING __ = __ OR __ = __             */
/* 2.11. Calculadas con Operadores : . SELECT __ , __ , ROUND( __*0.19,2) AS __ FROM __  */
/* 2.12. Calculadas con Fechas : ..... NOW(), DATE_FORMAT(), TIMESTAMPDIFF()             */
/* 2.12.1. Fecha Actual : ............ NOW()                                             */
/* 2.12.2. Formato Fecha : ........... DATE_FORMAT(NOW(), '%Y-%m-%d')                    */
/* 2.12.3. Direfencia Fechas : ....... TIMESTAMPDIFF(DAY, __ , NOW())                    */
/* 3. CONSULTAS DE ACCIÓN [Final] : .. INSERT INTO, UPDATE, DELETE                       */
/* ------------------------------------------------------------------------------------- */
/* BIBLIOGRAFÍA                                                                          */
/* ------------------------------------------------------------------------------------- */
/* ************************************************************************************* */
/* EN CONSOLA: XAMPP / SHELL / cd mysql/bin / mysql -h localhost -u root -p / ENTER      */
/* ************************************************************************************* */


/* ************************************************************************************* */
/* -------------------------- 1. CONSULTAS DE ACCIÓN [Inicio] -------------------------- */
/* ---------------------------- INSERT INTO, UPDATE, DELETE ---------------------------- */
/* ************************************************************************************* */

-- ------------------------------------------------------------------------------------- --
-- 1.1. Crear o Registrar. ------------------------------------------------------------- --
--      INSERT INTO __ VALUES ( __ , __ ) : -------------------------------------------- --
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 1.1.1. Datos Correctos -------------------------------------------------------------- --
--        INSERT INTO __ VALUES ( __ , __ ) : ------------------------------------------ --
-- ------------------------------------------------------------------------------------- --
INSERT INTO ROLES VALUES 
(null, 'Admin'),
(null, 'Almacen'),
(null, 'Tecnico'),
(null, 'Cliente');


INSERT INTO USERS VALUES 
(1, null, 'Albeiro', 'Ramos', 'Villalba','3001112223', 'profealbeiro2020@gmail.com', 'KR 12 NO 20-245', sha1'12345', '2023-04-10');


INSERT INTO USERS VALUES 
(1, null, 'Juan', 'Pérez', 'García', '3004567890', 'juan.perez1@example.com', 'Calle 123 #45-67', 'hash_password_1', '2025-08-20'),
(2, null, 'María', 'López', 'Rodríguez', '3112345678', 'maria.lopez23@example.com', 'Carrera 10 #20-30', 'hash_password_2', '2025-08-19'),
(3, null, 'Carlos', 'Ramírez', 'Torres', '3229876543', 'carlos.ramirez45@example.com', 'Av. Siempre Viva 742', 'hash_password_3', '2025-08-18'),
(4, null, 'Ana', 'Torres', 'Martínez', '3008765432', 'ana.torres12@example.com', 'Calle 50 #10-25', 'hash_password_4', '2025-08-17'),
(4, null, 'Luis', 'Gómez', 'Fernández', '3127654321', 'luis.gomez33@example.com', 'Carrera 30 #15-22', 'hash_password_5', '2025-08-16');


INSERT INTO OUTPUT_ORDERS VALUES
(NULL, '2025-03-24', 'Disco, ram', '3'),
(NULL, '2025-05-22', 'ram, programas', '4'),
(NULL, '2025-01-10', 'SSD, almacenamiento', '5'),
(NULL, '2025-07-15', 'Tarjeta gráfica, NVIDIA', '6'),
(NULL, '2025-09-30', 'Procesador, Intel', '7'),
(NULL, '2025-04-18', 'Monitor, 24 pulgadas', '8'),
(NULL, '2025-08-21', 'Teclado, mecánico', '9'),
(NULL, '2025-06-12', 'Ratón, inalámbrico', '10'),
(NULL, '2025-02-28', 'Fuente de poder, 600W', '11'),
(NULL, '2025-11-05', 'Memoria RAM, 16GB', '12'),
(NULL, '2025-12-12', 'Placa madre, ASUS', '13'),
(NULL, '2025-10-09', 'Disco duro, 1TB', '14'),
(NULL, '2025-03-01', 'Auriculares, Bluetooth', '15'),
(NULL, '2025-05-15', 'Webcam, HD', '16'),
(NULL, '2025-07-07', 'Impresora, láser', '17');

INSERT INTO CUSTOMERS VALUES
(3, 1),
(4, 2),
(5, 3),
(6, 4),
(7, 5),
(8, 6),
(9, 7),
(10, 8),
(11, 9),
(12, 10),
(13, 11),
(14, 12),
(15, 13),
(16, 14),
(17, 15);


INSERT INTO SUPLIERS VALUES
(null, 'Asus', 'Bogotá','Carrera 30 # 15 - 299', 'asus@asus.com', '1000000112'),
(null, 'Servicios Industriales', 'Cra 50 #25-60, Barranquilla', 'contacto@sic.com', '3019873210'),
(null, 'Lenovo', 'Miami', '1234 NW 107th Avenue, Miami, FL 33172', 'lenovo@lenovo.com', '3012141562');


INSERT INTO INPUT_ORDERS VALUES
(null, 1, '2022-09-17', '', 'INP00001', '2024-05-05'),
(null, 2, '2022-09-18', '', 'INP00002', '2024-05-05'),
(null, 3, '2022-09-18', '', 'INP00002', '2024-05-05');


INSERT INTO CATEGORIES VALUES 
(null, 'Computadores'),
(null, 'Televisores'),
(null, 'Monitores'),
(null, 'Impresoras'),
(null, 'Cámaras'),
(null, 'Servidores'),
(null, 'Soportes');


INSERT INTO SUBCATEGORIES VALUES 
(null, 1, 'Portatiles'),
(null, 2, 'All in one');


INSERT INTO PRODUCT_BRANDS VALUES
(NULL, 'Zebra'),
(NULL, 'Canon'),
(NULL, 'Epson'),
(NULL, 'Hp'),
(NULL, 'Makita'),
(NULL, 'LG'),
(NULL, 'Samsung'),
(NULL, 'Lenovo'),
(NULL, 'Asus'),
(NULL, 'Panasonic'),
(NULL, 'Ricoh'),
(NULL, 'Genius'),
(NULL, 'Challenger'),
(NULL, 'WESTERN DIGITAL WD'),
(NULL, 'Kioxia'),
(NULL, 'Kingston'),
(NULL, 'Sony'),
(NULL, 'Crucial');


INSERT INTO PRODUCT_DETAILS VALUES
(NULL, 1, 'HP 110', 'Impresora térmica compacta para etiquetas'),
(NULL, 1, 'Zebra ZD420', 'Impresora térmica para puntos de venta'),
(NULL, 1, 'Epson TM-T20', 'Impresora térmica rápida y eficiente'),
(NULL, 2, 'Epson L3150', 'Multifuncional con sistema de tinta continua'),
(NULL, 2, 'Canon G2010', 'Impresora continua con escáner'),
(NULL, 2, 'HP Ink Tank 415', 'Impresora con tinta recargable inalámbrica'),
(NULL, 3, 'LaserJet Pro M15w', 'Impresora láser compacta y rápida'),
(NULL, 3, 'Brother HL-L2350DW', 'Impresora láser monocromo'),
(NULL, 3, 'Samsung Xpress M2020W', 'Impresora láser inalámbrica'),
(NULL, 4, 'QLED 55Q60A', 'Smart TV Samsung de 55" con resolución 4K'),
(NULL, 4, 'Bravia XR-55A80K', 'Sony Smart TV OLED 55" 4K'),
(NULL, 5, 'LED TV 43LM6370', 'LG TV LED 43" Full HD'),
(NULL, 6, 'OLED TV 65C1', 'TV OLED LG 65" 4K UHD'),
(NULL, 7, 'Logitech M185', 'Mouse inalámbrico con receptor USB'),
(NULL, 8, 'Razer DeathAdder V2', 'Mouse gamer ergonómico con sensor óptico'),
(NULL, 9, 'Microsoft Basic Optical Mouse', 'Mouse USB económico y confiable'),
(NULL, 10, 'Corsair K95 RGB', 'Teclado mecánico retroiluminado con macros'),
(NULL, 11, 'Logitech K380', 'Teclado inalámbrico compacto'),
(NULL, 12, 'Microsoft 600', 'Teclado de membrana silencioso'),
(NULL, 13, 'WD My Passport 1TB', 'Disco duro externo portátil con USB 3.0');


INSERT INTO PRODUCTS VALUES 
(NULL, 1, 1, 35),    -- HP 110
(NULL, 1, 2, 50),    -- Zebra ZD420
(NULL, 1, 3, 28),    -- Epson TM-T20
(NULL, 2, 4, 40),    -- Epson L3150
(NULL, 2, 5, 33),    -- Canon G2010
(NULL, 2, 6, 45),    -- HP Ink Tank 415
(NULL, 3, 7, 20),    -- LaserJet Pro
(NULL, 3, 8, 18),    -- Brother HL
(NULL, 3, 9, 25),    -- Samsung Xpress
(NULL, 4, 10, 15),   -- QLED Samsung
(NULL, 4, 11, 12),   -- Bravia Sony
(NULL, 5, 12, 14),   -- LG LED
(NULL, 6, 13, 11),   -- LG OLED
(NULL, 7, 14, 60),   -- Mouse Logitech
(NULL, 8, 15, 52),   -- Razer Mouse
(NULL, 9, 16, 44),   -- Microsoft Mouse
(NULL, 10, 17, 10),  -- Corsair K95
(NULL, 11, 18, 16),  -- Logitech K380
(NULL, 12, 19, 21),  -- Microsoft Keyboard
(NULL, 13, 20, 30);  -- WD Passport


INSERT INTO PRODUCT_SERIALS VALUES
(null, 1, 2, '12 Meses'),
(null, 2, 2, '6 Meses'),
(null, 3, 2, '24 Meses');

-- ------------------------------------------------------------------------------------- --
-- 1.1.2. Datos Incorrectos ------------------------------------------------------------ --
--        INSERT INTO __ VALUES ( __ , __ ) : ------------------------------------------ --
-- ------------------------------------------------------------------------------------- --
INSERT INTO USERS VALUES 
(5, 'customer-5', 'Alejandra', 'Martínez', 'alejandra@gmail.com');

INSERT INTO USERS VALUES 
(3, 'customer-1', 'Wilson', 'Cifuentes', 'wilson@gmail.com');

INSERT INTO USERS VALUES 
(4, 'seller-3', 'Marina', 'Roncancio', 'marinita@gmail.com');

INSERT INTO CUSTOMERS VALUES
('person-3', '2022-08-15', 'Solicitud de Información', 'Quisiera saber sobre... ');

INSERT INTO SUPLIERS VALUES
('admin-1', 666555, '2022-09-25', sha1('45678'), 1);

INSERT INTO SUPLIERS VALUES
('admin-2', 987654, "2022-06-11", sha1('12345'), 1);

INSERT INTO SUPLIERS VALUES 
('person-1', 666555, '2022-09-25', sha1('45678'), 1);

INSERT INTO TECHNICAL VALUES
('seller-1', 'pedido-4');

INSERT INTO CUSTOMERS VALUES
('seller-4', '2005-05-05');

-- ------------------------------------------------------------------------------------- --
-- 1.2. Actualizar. -------------------------------------------------------------------- --
--      UPDATE __ SET __ = __ WHERE __ = __ : ------------------------------------------ --
-- ------------------------------------------------------------------------------------- --
UPDATE ROLES SET 
rol_name = 'Persona'
WHERE rol_id = 2;

UPDATE USERS SET 
user_name = 'Miguel'
WHERE user_id = 5;

-- ------------------------------------------------------------------------------------- --
-- 1.3. Eliminar. ---------------------------------------------------------------------- --
--      DELETE FROM __ WHERE __ = __ : ------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
DELETE FROM USERS 
WHERE user_id = 2;