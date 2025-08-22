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
(null, '2025-05-20', 'Agregar un modúlo más de 8 gb de ram y agregar disco duro nvme M2 de 256gb', '100000'),


INSERT INTO CUSTOMERS VALUES
(4, '2005-05-05'),
(5, '1983-04-1');


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
(null, 'Lenovo'),
(null, 'Asus'),
(null, 'HP');


INSERT INTO PRODUCT_DETAILS VALUES
(null, 1, 3, '', ''),
(null, 2, 1, '', ''),
(null, 3, 2, '', '');


INSERT INTO PRODUCTS VALUES 
(null, 1, 1, 50),
(null, 2, 2, 40),
(null, 3, 3, 20),
(null, 1, 1, 30),
(null, 2, 2, 8),
(null, 3, 3, 1),
(null, 1, 1, 5),
(null, 2, 2, 20);


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

INSERT INTO MENSAJES VALUES
('person-3', '2022-08-15', 'Solicitud de Información', 'Quisiera saber sobre... ');

INSERT INTO CREDENCIALES VALUES
('admin-1', 666555, '2022-09-25', sha1('45678'), 1);

INSERT INTO CREDENCIALES VALUES
('admin-2', 987654, "2022-06-11", sha1('12345'), 1);

INSERT INTO CREDENCIALES VALUES 
('person-1', 666555, '2022-09-25', sha1('45678'), 1);

INSERT INTO VENDEDORES_PEDIDOS VALUES
('seller-1', 'pedido-4');

INSERT INTO CUSTOMERS VALUES
('seller-4', '2005-05-05');

-- ------------------------------------------------------------------------------------- --
-- 1.2. Actualizar. -------------------------------------------------------------------- --
--      UPDATE __ SET __ = __ WHERE __ = __ : ------------------------------------------ --
-- ------------------------------------------------------------------------------------- --
UPDATE ROLES SET 
rol_name = 'person'
WHERE rol_id = 2;

UPDATE USERS SET 
user_id = 'admin-3'
WHERE user_id = 'admin-2';

-- ------------------------------------------------------------------------------------- --
-- 1.3. Eliminar. ---------------------------------------------------------------------- --
--      DELETE FROM __ WHERE __ = __ : ------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
DELETE FROM USERS 
WHERE user_id = '2';