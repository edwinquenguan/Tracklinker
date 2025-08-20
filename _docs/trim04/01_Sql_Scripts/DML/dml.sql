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


/* ************************************************************************************* */
/* ----------------------------- 2. CONSULTAS DE SELECCIÓN ----------------------------- */
/* --------------------------------------- SELECT -------------------------------------- */
/* ************************************************************************************* */

-- ------------------------------------------------------------------------------------- --
-- 2.1. Generales. --------------------------------------------------------------------- --
--      SELECT * FROM __ : ------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM ROLES;
SELECT * FROM USERS;
SELECT * FROM CATEGORIES;
SELECT * FROM SUBCATEGORIES;
SELECT * FROM SUPLIERS;
SELECT * FROM CUSTOMERS;
SELECT * FROM PRODUCTS;
SELECT * FROM PRODUCT_BRANDS;
SELECT * FROM PRODUCT_DETAILS;
SELECT * FROM PRODUCT_SERIALS;
SELECT * FROM OUTPUT_DETAILS;
SELECT * FROM OUTPUT_ORDERS;
SELECT * FROM INPUT_ORDERS;
SELECT * FROM WARRANTY_INCIDENTS;
SELECT * FROM TECHNICAL;
SELECT * FROM WAREHAUSEMAN;

-- ------------------------------------------------------------------------------------- --
-- 2.2. Específicas. ------------------------------------------------------------------- --
--      SELECT __ , __ FROM __ : ------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT user_id, user_email, rol_id FROM USERS;

-- ------------------------------------------------------------------------------------- --
-- 2.3. Con Criterios. ----------------------------------------------------------------- --
--      SELECT __ , __ FROM __ WHERE __ = __ : ----------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT rol_id, user_id, user_email FROM USERS
WHERE rol_id = 3;

-- ------------------------------------------------------------------------------------- --
-- 2.4. Con Operadores Lógicos. -------------------------------------------------------- --
--      OR, AND, NOT : ----------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 2.4.1. O [OR] . --------------------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ = __ OR __ = __ : ---------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT rol_id, user_id, user_email FROM USERS 
WHERE rol_id = 2 OR rol_id = 3;

-- ------------------------------------------------------------------------------------- --
-- 2.4.2. Y [AND] . -------------------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ = __ AND __ = __ : --------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT codigo_pedido, codigo_customer, ciudad_pedido, total_pr_pedido FROM PEDIDOS 
WHERE ciudad_pedido = 'Bogotá' AND estado_pedido = 'entregado';

-- ------------------------------------------------------------------------------------- --
-- 2.4.3. NO [NOT] . ------------------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ = __ AND __ = __ : --------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT codigo_pedido, codigo_customer, ciudad_pedido FROM PEDIDOS 
WHERE ciudad_pedido NOT IN ('Bogotá');

-- ------------------------------------------------------------------------------------- --
-- 2.5. Con Operadores de Comparación. --------------------------------------- --
--      <>, <, <=, >, >= : ------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 2.5.1. Diferente [<>] . ------------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ <> __ : -------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS WHERE product_stock <> 3500;

-- ------------------------------------------------------------------------------------- --
-- 2.5.2. Menor que [<] . -------------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ < __ : --------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS WHERE product_stock < 3500;

-- ------------------------------------------------------------------------------------- --
-- 2.5.3. Mayor que [>] . -------------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ > __ : --------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS WHERE product_stock > 3500;

-- ------------------------------------------------------------------------------------- --
-- 2.5.4. Menor o igual que [<=] . ----------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ > __ : --------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS WHERE product_stock <= 3500;

-- ------------------------------------------------------------------------------------- --
-- 2.5.5. Mayor o igual que [>=] . ----------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ > __ : --------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS WHERE product_stock >= 3500;

-- ------------------------------------------------------------------------------------- --
-- 2.6. Con otros Operadores. ---------------------------------------------------------- --
--      LIKE, BETWEEN, IN -------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 2.6.1. Comodín [LIKE '_%'] . -------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ LIKE '_%' : ---------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS_BRANDS WHERE  LIKE 'j%';

SELECT * FROM PRODUCTS_BRANDS WHERE  LIKE '_a%';

-- ------------------------------------------------------------------------------------- --
-- 2.6.2. Entre [BETWEEN] . ------------------------------------------------------------ --
--        SELECT __ , __ FROM __ WHERE __ BETWEEN __ AND __ : -------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM CREDENCIALES 
WHERE fecha_ingreso_cred BETWEEN '2022-08-01' AND '2022-08-31';

SELECT * FROM CREDENCIALES 
WHERE fecha_ingreso_cred >= '2022-08-01' AND fecha_ingreso_cred <= '2022-08-31';

-- ------------------------------------------------------------------------------------- --
-- 2.6.3. Lista [IN ( __ )] . ---------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ IN( __ , __ ) : ------------------------------ --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS 
WHERE product_stock IN (1,500);

-- ------------------------------------------------------------------------------------- --
-- 2.7. Ordenadas. --------------------------------------------------------------------- --
--      ORDER BY, ASC, DESC : ---------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 2.7.1. Ascendente [ASC] . ----------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ = __ ORDER BY __ ASC; : ---------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM SUBCATEGORIES 
WHERE category_id = 2 
ORDER BY category_id;

SELECT * FROM SUBCATEGORIES
WHERE category_id = 2 OR category_id = 3 
ORDER BY category_id ASC;

SELECT * FROM SUBCATEGORIES
WHERE category_id = 2 OR category_id = 3 
ORDER BY product_stock ASC;

-- ------------------------------------------------------------------------------------- --
-- 2.7.2. Descendente [DESC] . --------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ = __ ORDER BY __ DES; : ---------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS 
WHERE subcategory_id = 2 
ORDER BY subcategory_id DESC;

SELECT * FROM PRODUCTS
WHERE subcategory_id = 2 OR subcategory_id = 3 
ORDER BY subcategory_id DESC;

SELECT * FROM PRODUCTS
WHERE subcategory_id = 2 OR subcategory_id = 3 
ORDER BY product_stock DESC;

-- ------------------------------------------------------------------------------------- --
-- 2.7.3. Combinadas . ----------------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ = __ ORDER BY __ DES; : ---------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT * FROM PRODUCTS 
WHERE subcategory_id = 2 OR subcategory_id = 3 
ORDER BY subcategory_id ASC, product_stock DESC;

-- ------------------------------------------------------------------------------------- --
-- 2.8. Calculadas con Funciones. ------------------------------------------------------ --
--      GROUP BY : --------------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 2.8.1. Suma [SUM()] . --------------------------------------------------------------- --
--        SELECT __ , SUM( __ ) FROM __ GROUP BY __ : ---------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT SUM(total_pr_pedido) FROM PEDIDOS;

SELECT codigo_customer, SUM(total_pr_pedido) FROM PEDIDOS 
WHERE codigo_customer = 'customer-1';

SELECT codigo_customer, SUM(total_pr_pedido) FROM PEDIDOS 
GROUP BY codigo_customer;

-- ------------------------------------------------------------------------------------- --
-- 2.8.2. Promedio [AVG()] . ----------------------------------------------------------- --
--        SELECT __ , AVG( __ ) FROM __ GROUP BY __ : ---------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT codigo_customer, AVG(total_pr_pedido) FROM PEDIDOS 
WHERE codigo_customer = 'customer-1';

SELECT codigo_customer, AVG(total_pr_pedido) FROM PEDIDOS 
GROUP BY codigo_customer;

-- ------------------------------------------------------------------------------------- --
-- 2.8.3. Máximo [MAX()] . ------------------------------------------------------------- --
--        SELECT __ , MAX( __ ) FROM __ GROUP BY __ : -------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT codigo_customer, MAX(total_pr_pedido) FROM PEDIDOS 
WHERE codigo_customer = 'customer-1';

SELECT codigo_customer, MAX(total_pr_pedido) FROM PEDIDOS 
GROUP BY codigo_customer;

-- ------------------------------------------------------------------------------------- --
-- 2.8.4. Mínimo [MIN()] . ------------------------------------------------------------- --
--        SELECT __ , MIN( __ ) FROM __ GROUP BY __ : -------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT codigo_customer, MIN(total_pr_pedido) FROM PEDIDOS 
WHERE codigo_customer = 'customer-1';

SELECT codigo_customer, MIN(total_pr_pedido) FROM PEDIDOS 
GROUP BY codigo_customer;

-- ------------------------------------------------------------------------------------- --
-- 2.8.5. Conteo [COUNT()] . ----------------------------------------------------------- --
--        SELECT __ , COUT( __ ) FROM __ GROUP BY __ : --------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT ciudad_pedido, COUNT(codigo_pedido) FROM PEDIDOS 
WHERE ciudad_pedido = 'Bogotá';

SELECT ciudad_pedido, COUNT(codigo_pedido) FROM PEDIDOS 
GROUP BY ciudad_pedido;

-- ------------------------------------------------------------------------------------- --
-- 2.9. Calculadas con Alias. ---------------------------------------------------------- --
--      SELECT __ , FUN( __ ) AS __ : -------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT SUM(total_pr_pedido) AS suma_pedidos FROM PEDIDOS;

SELECT codigo_customer, SUM(total_pr_pedido) AS suma_pedidos
FROM PEDIDOS 
GROUP BY codigo_customer
ORDER BY suma_pedidos ASC;

SELECT codigo_customer, AVG(total_pr_pedido) AS promedio_pedidos
FROM PEDIDOS 
GROUP BY codigo_customer
ORDER BY promedio_pedidos DESC;

SELECT codigo_customer, MAX(total_pr_pedido) AS maximo_pedido
FROM PEDIDOS 
GROUP BY codigo_customer
ORDER BY maximo_pedido DESC;

SELECT codigo_customer, MIN(total_pr_pedido) AS minimo_pedido
FROM PEDIDOS 
GROUP BY codigo_customer
ORDER BY minimo_pedido ASC;

SELECT ciudad_pedido, COUNT(codigo_pedido) cant_pedidos
FROM PEDIDOS 
GROUP BY ciudad_pedido
ORDER BY cant_pedidos DESC;

-- ------------------------------------------------------------------------------------- --
-- 2.10. Calculadas Condicionantes. ---------------------------------------------------- --
--      SELECT __ , FUN( __ ) AS __ FROM __ GROUP BY __ HAVING __ = __ OR __ = __ : ---- --
-- ------------------------------------------------------------------------------------- --
SELECT codigo_customer, estado_pedido, SUM(total_pr_pedido) AS suma_pedidos
FROM PEDIDOS 
GROUP BY estado_pedido HAVING codigo_customer='customer-1' AND estado_pedido='entregado' 
ORDER BY suma_pedidos ASC;

SELECT codigo_customer, estado_pedido, AVG(total_pr_pedido) AS promedio_pedidos
FROM PEDIDOS 
GROUP BY estado_pedido HAVING codigo_customer='customer-1' AND estado_pedido='entregado' 
ORDER BY promedio_pedidos ASC;

SELECT codigo_customer, estado_pedido, MAX(total_pr_pedido) AS maximo_pedido
FROM PEDIDOS 
GROUP BY estado_pedido HAVING codigo_customer='customer-1' AND estado_pedido='entregado' 
ORDER BY maximo_pedido ASC;

SELECT codigo_customer, estado_pedido, MIN(total_pr_pedido) AS minimo_pedido
FROM PEDIDOS 
GROUP BY estado_pedido HAVING codigo_customer='customer-1' AND estado_pedido='entregado' 
ORDER BY minimo_pedido ASC;

SELECT ciudad_pedido, COUNT(codigo_pedido) AS cant_pedidos
FROM PEDIDOS 
GROUP BY ciudad_pedido HAVING ciudad_pedido = "Medellín" OR ciudad_pedido = "Cali"
ORDER BY cant_pedidos DESC;

-- ------------------------------------------------------------------------------------- --
-- 2.11. Calculadas con Operadores. ---------------------------------------------------- --
--        SELECT __ , __ , __*0.19 AS __ FROM __ : ------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT nombre_producto, product_stock, product_stock * 0.19 
FROM PRODUCTS;

SELECT nombre_producto, product_stock, product_stock * 0.19 AS iva_producto 
FROM PRODUCTS;

SELECT nombre_producto, product_stock, ROUND(product_stock*0.19,2) AS iva_producto 
FROM PRODUCTS;

-- ------------------------------------------------------------------------------------- --
-- 2.12. Calculadas con Fechas. -------------------------------------------------------- --
--       NOW(), DATE_FORMAT(), TIMESTAMPDIFF() : --------------------------------------- --
-- ------------------------------------------------------------------------------------- --

-- ------------------------------------------------------------------------------------- --
-- 2.12.1. Fecha Actual. --------------------------------------------------------------- --
--         SELECT __ , __ , NOW() AS __ FROM __ : -------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT nombre_producto, product_stock, NOW() FROM PRODUCTS;

SELECT nombre_producto, product_stock, NOW() AS fecha_actual FROM PRODUCTS;

-- ------------------------------------------------------------------------------------- --
-- 2.12.2. Formato de Fecha. ----------------------------------------------------------- --
--         SELECT __ , __ , DATE_FORMAT(NOW(), '%Y-%m-%d') AS __ FROM __ : ------------- --
-- ------------------------------------------------------------------------------------- --
SELECT nombre_producto, product_stock, 
DATE_FORMAT(NOW(),'%Y-%m-%d') AS fecha_actual 
FROM PRODUCTS;

-- ------------------------------------------------------------------------------------- --
-- 2.12.3. Diferencia Fechas. ---------------------------------------------------------- --
--         SELECT __ , fecha , --------------------------------------------------------- --
--         DATE_FORMAT(NOW(), '%Y-%m-%d') AS __ , -------------------------------------- --
--         TIMESTAMPDIFF(DAY, __ , NOW()) AS __ , -------------------------------------- --
--         FROM __ : ------------------------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT codigo_cred, estado_cred, fecha_ingreso_cred,
DATE_FORMAT(NOW(),'%Y-%m-%d') AS fecha_actual,
TIMESTAMPDIFF(YEAR, fecha_ingreso_cred, NOW()) AS años_transcurridos,
TIMESTAMPDIFF(MONTH, fecha_ingreso_cred, NOW()) AS meses_transcurridos, 
TIMESTAMPDIFF(DAY, fecha_ingreso_cred, NOW()) - 
TIMESTAMPDIFF(MONTH, fecha_ingreso_cred, NOW()) * 30 AS dias_transcurridos
FROM CREDENCIALES;


/* ************************************************************************************* */
/* -------------------------- 3. CONSULTAS DE ACCIÓN [Final] --------------------------- */
/* ---------------------------- INSERT INTO, UPDATE, DELETE ---------------------------- */
/* ************************************************************************************* */

INSERT INTO USERS VALUES 
(1, 'admin-2', 'Pepito', 'Perez', 'pepito@gmail.com');

INSERT INTO MENSAJES VALUES
('admin-2',DATE_FORMAT(NOW(),'%Y-%m-%d'),'Mantenimiento Sistema','Se informa a los ...');

INSERT INTO CREDENCIALES VALUES
('admin-2', 213456, DATE_FORMAT(NOW(),'%Y-%m-%d'), sha1('12345'), 1);

INSERT INTO PEDIDOS VALUES
('customer-2','pedido-6',DATE_FORMAT(NOW(),'%Y-%m-%d'),'Medellín','Av Rogeles',
	10000.00, total_pl_pedido * 0.19, iva_pedido + total_pl_pedido, 'entregado');


/* ************************************************************************************* */
/* ------------------------------------------------------------------------------------- */
/* ----------------------------------- BIBLIOGRAFÍA ------------------------------------ */
/* ------------------------------------------------------------------------------------- */
/* ************************************************************************************* */

-- ------------------------------------------------------------------------------------- --
-- Tutoriales de Programación ya. (s.f.). MySQL ya. Recuperado el 15 de Mayo de 2022,    --
--      de https://www.tutorialesprogramacionya.com/mysqlya/                             --
-- ------------------------------------------------------------------------------------- --
-- Pildoras Informáticas. (16 de Julio de 2015). Curso SQL.                              --
--      Recuperado el 16 de Abril de 2022, de [Archivo de Vídeo]                         --
--      https://www.youtube.com/playlist?list=PLU8oAlHdN5Bmx-LChV4K3MbHrpZKefNwn         --
--      página web                                                                       --
-- ------------------------------------------------------------------------------------- --