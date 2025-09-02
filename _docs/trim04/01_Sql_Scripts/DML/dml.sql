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
(1, null, 'Albeiro', 'Ramos', 'Villalba','3001112223', 'profealbeiro2020@gmail.com', 'KR 12 NO 20-245', sha1('12345'), '2023-04-10');


INSERT INTO USERS VALUES 
(1, null, 'Juan', 'Pérez', 'García', '3004567890', 'juan.perez1@example.com', 'Calle 123 #45-67', 'hash_password_1', '2025-08-20'),
(2, null, 'María', 'López', 'Rodríguez', '3112345678', 'maria.lopez23@example.com', 'Carrera 10 #20-30', 'hash_password_2', '2025-08-19'),
(2, null, 'María', 'López', 'Rodríguez', '3112345678', 'maria.lopez23@example.com', 'Carrera 10 #20-30', 'hash_password_2', '2025-08-19'),
(2, null, 'Carlos', 'García', 'Moreno', '3101112233', 'carlos.garcia@example.com', 'Calle 45 #12-30', 'hash_password_18', '2025-08-20'),
(2, null, 'Andrea', 'López', 'Pérez', '3124445566', 'andrea.lopez@example.com', 'Carrera 20 #5-18', 'hash_password_19', '2025-08-21'),
(2, null, 'Felipe', 'Ramírez', 'Torres', '3157778899', 'felipe.ramirez@example.com', 'Av. Siempre Viva 742', 'hash_password_20', '2025-08-22'),
(2, null, 'Paola', 'Martínez', 'Guzmán', '3163334455', 'paola.martinez@example.com', 'Transv. 56 #34-90', 'hash_password_21', '2025-08-23'),
(2, null, 'Jorge', 'Hernández', 'Suárez', '3176667788', 'jorge.hernandez@example.com', 'Cl. 100 #45-12', 'hash_password_22', '2025-08-24'),
(3, null, 'Carlos', 'Ramírez', 'Torres', '3229876543', 'carlos.ramirez45@example.com', 'Av. Siempre Viva 742', 'hash_password_3', '2025-08-18'),
(3, null, 'Ana', 'Torres', 'Martínez', '3008765432', 'ana.torres12@example.com', 'Calle 50 #10-25', 'hash_password_4', '2025-08-17'),
(3, null, 'Diana', 'Morales', 'Rincón', '3189990011', 'diana.morales@example.com', 'Bodega Central Km 7', 'hash_password_23', '2025-08-25'),
(3, null, 'Ricardo', 'Suárez', 'Castaño', '3192223344', 'ricardo.suarez@example.com', 'Cl. 80 #10-55', 'hash_password_24', '2025-08-26'),
(3, null, 'Lucía', 'Fernández', 'Quintero', '3205556677', 'lucia.fernandez@example.com', 'Carrera 15 #8-44', 'hash_password_25', '2025-08-27'),
(3, null, 'Santiago', 'Rojas', 'Bedoya', '3218889900', 'santiago.rojas@example.com', 'Cl. 30 #22-18', 'hash_password_26', '2025-08-28'),
(3, null, 'Valentina', 'Cárdenas', 'Prieto', '3221112233', 'valentina.cardenas@example.com', 'Zona Industrial 4', 'hash_password_27', '2025-08-29'),
(4, null, 'Luis', 'Gómez', 'Fernández', '3127654321', 'luis.gomez33@example.com', 'Carrera 30 #15-22', 'hash_password_5', '2025-08-16'),
(4, null, 'juan', 'perez', 'lopez', '3151234567', 'juanperez@gmail.com', 'juanp89', '5678', '1998-05-21'),
(4, null, 'ana', 'gomez', 'martinez', '3109876543', 'anagomez@yahoo.com', 'ana_g', '1234', '1995-12-10'),
(4, null, 'carlos', 'ruiz', 'garcia', '3123456789', 'carlosr@hotmail.com', 'carlosr23', '8765', '2000-03-15'),
(4, null, 'laura', 'jimenez', 'rodriguez', '3198765432', 'laurajim@gmail.com', 'lauraj', '4321', '1999-07-30'),
(4, null, 'pedro', 'torres', 'castillo', '3134567890', 'pedrotorres@mail.com', 'pedrot', '9876', '2001-11-22'),
(4, null, 'sofia', 'fernandez', 'mendez', '3145678901', 'sofiaf@hotmail.com', 'sofiaf1', '3456', '1997-08-14'),
(4, null, 'luis', 'alvarez', 'ortiz', '3167890123', 'luisalvarez@gmail.com', 'luisalv', '6543', '1996-09-05'),
(4, null, 'martha', 'vargas', 'ramos', '3178901234', 'marthav@yahoo.com', 'marthav', '7890', '2003-02-17'),
(4, null, 'andres', 'castro', 'morales', '3189012345', 'andrescastro@mail.com', 'andresc', '2345', '1994-06-09'),
(4, null, 'veronica', 'medina', 'salazar', '3190123456', 'veronicam@gmail.com', 'veronicam', '6789', '1993-04-25'),
(4, null, 'javier', 'sanchez', 'hernandez', '3101234567', 'javiers@yahoo.com', 'javiers', '3456', '2002-01-13'),
(4, null, 'laura', 'diaz', 'vazquez', '3112345678', 'lauradiaz@gmail.com', 'laurad', '5678', '1995-10-02'),
(4, null, 'miguel', 'rojas', 'castro', '3123456789', 'miguelr@mail.com', 'miguelr', '4321', '1998-03-27'),
(4, null, 'elena', 'martinez', 'sosa', '3134567890', 'elenam@hotmail.com', 'elenam', '1234', '2000-12-19');


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
(null, 1, 'All in one'),
(null, 1, 'Torres'),
(null, 2, 'LCD'),
(null, 2, 'LED'),
(null, 2, 'OLED'),
(null, 2, 'QLED'),
(null, 3, 'TN'),
(null, 3, 'VA'),
(null, 3, 'IPS'),
(null, 3, 'OLED'),
(null, 4, 'Impresora a color'),
(null, 4, 'Impresora a laser'),
(null, 4, 'Impresora de tanques'),
(null, 4, 'Impresora a térmica'),
(null, 5, 'Camaras sin espejo'),
(null, 5, 'Camaras a réflex digitales'),
(null, 5, 'Camaras a compactas'),
(null, 5, 'Camaras de accion'),
(null, 5, 'Camaras de Instantáneas'),
(null, 5, 'Camaras de Teléfonos móviles'),
(null, 5, 'Camaras de Formato medio y gran formato'),
(null, 6, 'Servidores de Archivos'),
(null, 6, 'Servidores de torre'),
(null, 6, 'Servidores de rack'),
(null, 6, 'Servidores de blade'),
(null, 6, 'Servidores de miniatura'),
(null, 6, 'Servidores de Ultra densos'),
(null, 7, 'Soportes de articulados'),
(null, 7, 'Soporte de Fijos');


INSERT INTO PRODUCT_BRANDS VALUES
(null, 'Zebra'),
(null, 'Canon'),
(null, 'Epson'),
(null, 'Hp'),
(null, 'Makita'),
(null, 'LG'),
(null, 'Samsung'),
(null, 'Lenovo'),
(null, 'Asus'),
(null, 'Panasonic'),
(null, 'Ricoh'),
(null, 'Genius'),
(null, 'Challenger'),
(null, 'WESTERN DIGITAL WD'),
(null, 'Kioxia'),
(null, 'Kingston'),
(null, 'Sony'),
(null, 'Crucial');


INSERT INTO PRODUCT_DETAILS VALUES
(null, 1, 'HP 110', 'Impresora térmica compacta para etiquetas'),
(null, 1, 'Zebra ZD420', 'Impresora térmica para puntos de venta'),
(null, 1, 'Epson TM-T20', 'Impresora térmica rápida y eficiente'),
(null, 2, 'Epson L3150', 'Multifuncional con sistema de tinta continua'),
(null, 2, 'Canon G2010', 'Impresora continua con escáner'),
(null, 2, 'HP Ink Tank 415', 'Impresora con tinta recargable inalámbrica'),
(null, 3, 'LaserJet Pro M15w', 'Impresora láser compacta y rápida'),
(null, 3, 'Brother HL-L2350DW', 'Impresora láser monocromo'),
(null, 3, 'Samsung Xpress M2020W', 'Impresora láser inalámbrica'),
(null, 4, 'QLED 55Q60A', 'Smart TV Samsung de 55" con resolución 4K'),
(null, 4, 'Bravia XR-55A80K', 'Sony Smart TV OLED 55" 4K'),
(null, 5, 'LED TV 43LM6370', 'LG TV LED 43" Full HD'),
(null, 6, 'OLED TV 65C1', 'TV OLED LG 65" 4K UHD'),
(null, 13, 'WD My Passport 1TB', 'Disco duro externo portátil con USB 3.0');


INSERT INTO PRODUCTS VALUES 
(null, 15, 1, 35),    -- HP 110
(null, 15, 2, 50),    -- Zebra ZD420
(null, 15, 3, 35),    -- Epson TM-T20
(null, 12, 4, 40),    -- Epson L3150
(null, 12, 5, 33),    -- Canon G2010
(null, 12, 6, 45),    -- HP Ink Tank 415
(null, 13, 7, 20),    -- LaserJet Pro
(null, 13, 8, 18),    -- Brother HL
(null, 13, 9, 25),    -- Samsung Xpress
(null, 7, 10, 15),   -- QLED Samsung
(null, 6, 11, 35),   -- Bravia Sony
(null, 5, 12, 14),   -- LG LED
(null, 6, 13, 11);   -- LG OLED


INSERT INTO SUPPLIERS VALUES
(null, 'Asus', 'Bogotá','Carrera 30 # 15 - 299', 'asus@asus.com', '1000000112'),
(null, 'Servicios Industriales', 'Miami', 'Cra 50 #25-60, Barranquilla', 'contacto@sic.com', '3019873210'),
(null, 'Lenovo', 'Miami', '1234 NW 107th Avenue, Miami, FL 33172', 'lenovo@lenovo.com', '3012141562');


INSERT INTO INPUT_ORDERS VALUES
(null, 1, 'Asus', 'INP00001', '2024-05-05'),
(null, 2, 'Industriales', 'INP00002', '2024-05-05'),
(null, 3, 'Lenovo', 'INP00002', '2024-05-05');


INSERT INTO PRODUCT_SERIALS VALUES
('QTYC1123122', 1, 1, '2027-08-25'),
('QTYC2123123', 2, 1, '2027-08-20'),
('QTYC3123123', 3, 1, '2027-08-20');


INSERT INTO OUTPUT_ORDERS VALUES
(null, '2025-03-24', 1, 3),
(null, '2025-05-22', 2, 4),
(null, '2025-01-10', 3, 5),
(null, '2025-07-15', 1, 6),
(null, '2025-09-30', 2, 7),
(null, '2025-04-18', 2, 8),
(null, '2025-08-21', 3, 9),
(null, '2025-06-12', 5, 10),
(null, '2025-02-28', 7, 11),
(null, '2025-11-05', 8, 12),
(null, '2025-12-12', 1, 13),
(null, '2025-10-09', 2, 14),
(null, '2025-03-01', 7, 15),
(null, '2025-05-15', 8, 16),
(null, '2025-07-07', 9, 17);    


INSERT INTO CUSTOMERS VALUES
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5),
(11, 6),
(12, 7),
(13, 8),
(14, 9),
(15, 10),
(16, 11),
(17, 12);


INSERT INTO OUTPUT_DETAILS VALUES
(1, 'QTYC1123122', null, '2028-12-29', 'No necesita');


INSERT INTO WARRANTY_INCIDENTS VALUES
(null, 'QTYC1123122', 'Ana Torres', '3008765432', 'Calle 50 #10-25', 'Problema con la impresión', '../warranties/images/WINC0001', 'Miami', '2025-08-15', 0),
(null, 'QTYC1123122', 'Ana Torres', '3008765432', 'Calle 50 #10-25', 'Problema con la impresión', '../warranties/images/WINC0001', 'Miami', '2025-08-15', 0);

INSERT INTO TECHNICAL VALUES
(4, 1);


INSERT INTO WAREHAUSEMAN VALUES
(2, 1),
(2, 2),
(3, 3);
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

INSERT INTO SUPPLIERS VALUES
('admin-1', 666555, '2022-09-25', sha1('45678'), 1);

INSERT INTO SUPPLIERS VALUES
('admin-2', 987654, "2022-06-11", sha1('12345'), 1);

INSERT INTO SUPPLIERS VALUES 
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