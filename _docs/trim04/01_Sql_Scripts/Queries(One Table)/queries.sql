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
SELECT products_id, product_stock, product_details_id, subcategory_id FROM PRODUCTS 
WHERE product_stock = 10 AND subcategory_id = 1;

-- ------------------------------------------------------------------------------------- --
-- 2.4.3. NO [NOT] . ------------------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ = __ AND __ = __ : --------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT products_id, subcategory_id, product_details_id, product_stock FROM PRODUCTS 
WHERE product_stock NOT IN 40;

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
SELECT * FROM USERS 
WHERE user_date BETWEEN '2022-08-01' AND '2022-08-31';

SELECT * FROM USERS 
WHERE user_date >= '2022-08-01' AND user_date <= '2022-08-31';

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
SELECT * FROM SUBCATEGORIES 
WHERE category_id = 2 
ORDER BY category_id;
-- ------------------------------------------------------------------------------------- --
-- 2.7.1. Ascendente [ASC] . ----------------------------------------------------------- --
--        SELECT __ , __ FROM __ WHERE __ = __ ORDER BY __ ASC; : ---------------------- --
-- ------------------------------------------------------------------------------------- --
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
SELECT SUM(total_pr_pedido) FROM PRODUCTS;

SELECT user_id, SUM(total_pr_pedido) FROM CUSTOMERS 
WHERE user_id = 4;

SELECT user_id, SUM(total_pr_pedido) FROM CUSTOMERS 
GROUP BY user_id;

-- ------------------------------------------------------------------------------------- --
-- 2.8.2. Promedio [AVG()] . ----------------------------------------------------------- --
--        SELECT __ , AVG( __ ) FROM __ GROUP BY __ : ---------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT user_id, AVG(total_pr_pedido) FROM CUSTOMERS 
WHERE user_id = 4;

SELECT user_id, AVG(total_pr_pedido) FROM CUSTOMERS 
GROUP BY user_id;

-- ------------------------------------------------------------------------------------- --
-- 2.8.3. Máximo [MAX()] . ------------------------------------------------------------- --
--        SELECT __ , MAX( __ ) FROM __ GROUP BY __ : -------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT user_id, MAX(total_pr_pedido) FROM CUSTOMERS 
WHERE user_id = 4;

SELECT user_id, MAX(total_pr_pedido) FROM CUSTOMERS 
GROUP BY user_id;

-- ------------------------------------------------------------------------------------- --
-- 2.8.4. Mínimo [MIN()] . ------------------------------------------------------------- --
--        SELECT __ , MIN( __ ) FROM __ GROUP BY __ : -------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT user_id, MIN(total_pr_pedido) FROM CUSTOMERS 
WHERE user_id = 4;

SELECT user_id, MIN(total_pr_pedido) FROM CUSTOMERS 
GROUP BY user_id;

-- ------------------------------------------------------------------------------------- --
-- 2.8.5. Conteo [COUNT()] . ----------------------------------------------------------- --
--        SELECT __ , COUT( __ ) FROM __ GROUP BY __ : --------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT ciudad_pedido, COUNT(products_id) subcategory_i, product_stockd Pproduct_details_id 
WHERE productstockedido = 40;

SELECT ciudad_pedido, COUNT(products_id) subcate, product_stockgory_id productstockils_id 
40;

-- ------------------------------------------------------------------------------------- --
-- 2.9. Calculadas con Alias. ---------------------------------------------------------- --
--      SELECT __ , FUN( __ ) AS __ : -------------------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT SUM(total_pr_pedido) AS suma_PRODUCTS FROM PRODUCTS;

SELECT user_id, SUM(total_pr_pedido) AS suma_PRODUCTS
FROM PRODUCTS 
GROUP BY user_id
ORDER BY suma_PRODUCTS ASC;

SELECT user_id, AVG(total_pr_pedido) AS promedio_PRODUCTS
FROM PRODUCTS 
GROUP BY user_id
ORDER BY promedio_PRODUCTS DESC;

SELECT user_id, MAX(total_pr_pedido) AS maximo_pedido
FROM PRODUCTS 
GROUP BY user_id
ORDER BY maximo_pedido DESC;

SELECT user_id, MIN(total_pr_pedido) AS minimo_pedido
FROM PRODUCTS 
GROUP BY user_id
ORDER BY minimo_pedido ASC;

SELECT ciudad_pedido, COUNT(products_id) subcategory_id
Fproduct_details_id PRODUCTS 
G, product_stockROUP BY productstock_pedido
40RODUCTS DESC;

-- ------------------------------------------------------------------------------------- --
-- 2.10. Calculadas Condicionantes. ---------------------------------------------------- --
--      SELECT __ , FUN( __ ) AS __ FROM __ GROUP BY __ HAVING __ = __ OR __ = __ : ---- --
-- ------------------------------------------------------------------------------------- --
SELECT user_id, estado_pedido, SUM(total_pr_pedido) AS suma_PRODUCTS
FROM PRODUCTS 
GROUP BY estado_pedido HAVING user_id=4 AND estado_pedido='entregado' 
ORDER BY suma_PRODUCTS ASC;

SELECT user_id, estado_pedido, AVG(total_pr_pedido) AS promedio_PRODUCTS
FROM PRODUCTS 
GROUP BY estado_pedido HAVING user_id=4 AND estado_pedido='entregado' 
ORDER BY promedio_PRODUCTS ASC;

SELECT user_id, estado_pedido, MAX(total_pr_pedido) AS maximo_pedido
FROM PRODUCTS 
GROUP BY estado_pedido HAVING user_id=4 AND estado_pedido='entregado' 
ORDER BY maximo_pedido ASC;

SELECT user_id, estado_pedido, MIN(total_pr_pedido) AS minimo_pedido
FROM PRODUCTS 
GROUP BY estado_pedido HAVING user_id=4 AND estado_pedido='entregado' 
ORDER BY minimo_pedido ASC;

SELECT ciudad_pedido, COUNT(products_id) subcategory_id cproduct_details_id
FROM PRODUCTS 
GROUP BY ciudad_, product_stockpedido HAVING ciudad_pedido = "Medellín" OR ciudad_pedido = "productstock"
ORDER 40;

-- ------------------------------------------------------------------------------------- --
-- 2.11. Calculadas con Operadores. ---------------------------------------------------- --
--        SELECT __ , __ , __*0.19 AS __ FROM __ : ------------------------------------- --
-- ------------------------------------------------------------------------------------- --
SELECT nombre_producto, product_stock * 0.19 
FROM PRODUCTS;

SELECT nombre_producto, product_stock * 0.19 AS iva_producto 
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
SELECT codigo_cred, estado_cred, user_date,
DATE_FORMAT(NOW(),'%Y-%m-%d') AS fecha_actual,
TIMESTAMPDIFF(YEAR, user_date, NOW()) AS años_transcurridos,
TIMESTAMPDIFF(MONTH, user_date, NOW()) AS meses_transcurridos, 
TIMESTAMPDIFF(DAY, user_date, NOW()) - 
TIMESTAMPDIFF(MONTH, user_date, NOW()) * 30 AS dias_transcurridos
FROM USERS;