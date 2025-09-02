/* ¿Cuáles son las categorías y sus subcategorías asociadas? */
SELECT
    c.category_name,
    S.subcategory_name
    FROM SUBCATEGORIES AS s
    INNER JOIN CATEGORIES AS c
    ON c.category_id = s.category_id;

/* ¿Qué usuarios existen y cuál es el rol asignado a cada uno? */
SELECT
    r.rol_name,
    u.user_name,
    u.user_first_surname
    FROM USERS AS u
    INNER JOIN ROLES AS r
    ON u.rol_id = r.rol_id;

/* ¿Qué transformaciones a solicitado cada usuario, con su dirección y los requerimientos del cliente? */
SELECT
    u.user_id,
    u.user_name,
    u.user_address,
    c.out_order_id
    FROM USERS AS u
    INNER JOIN CUSTOMERS AS c
    ON u.user_id = c.user_id
    INNER JOIN OUTPUT_ORDERS AS o
    ON c.out_order_id = o.out_order_id;

/* ¿Qué productos existen junto con su categoría, subcategoría, marca, modelo y descripción? */
SELECT
    c.category_name,
    s.subcategory_name,
    p.product_id,
    pd.product_detail_model,
    pd.product_detail_description,
    pb.product_brand_name
    FROM PRODUCTS AS p
    INNER JOIN PRODUCT_DETAILS AS pd
    ON p.product_details_id = pd.product_details_id
    INNER JOIN PRODUCT_BRANDS AS pb
    ON pd.product_brand_id = pb.product_brand_id
    INNER JOIN SUBCATEGORIES AS s
    ON p.subcategory_id = s.subcategory_id
    INNER JOIN CATEGORIES AS c
    ON s.category_id = c.category_id;

/* ¿Qué productos tienen stock bajo (por ejemplo, menor a 5) y a qué categoría pertenecen? (PRODUCTS, SUBCATEGORIES, CATEGORIES) */
SELECT
    s.subcategory_name,
    c.category_name,
    pd.product_detail_model,
    p.product_stock
    FROM PRODUCTS AS p
    INNER JOIN PRODUCT_DETAILS AS pd
    ON p.product_details_id = pd.product_details_id
    INNER JOIN SUBCATEGORIES AS s
    ON p.subcategory_id = s.subcategory_id
    INNER JOIN CATEGORIES AS c
    ON s.category_id = c.category_id
    WHERE product_stock <= 15;

/* ¿Qué proveedores abastecen productos de una marca específica? (SUPPLIERS, INPUT_ORDERS, PRODUCT_SERIALS, PRODUCTS, PRODUCT_DETAILS, PRODUCT_BRANDS) */
/* ¿Qué proveedor entregó los productos que aparecen en una orden de salida específica? (SUPPLIERS, INPUT_ORDERS, PRODUCT_SERIALS, OUTPUT_DETAILS, OUTPUT_ORDERS) */
/* ¿Qué clientes reportaron incidentes de garantía y qué producto estaba asociado? (WARRANTY_INCIDENTS, OUTPUT_DETAILS, PRODUCT_SERIALS, PRODUCTS) */
/* ¿Qué técnicos resolvieron garantías de productos de la marca X? (TECHNICAL, USERS, WARRANTY_INCIDENTS, OUTPUT_DETAILS, PRODUCT_SERIALS, PRODUCTS, PRODUCT_DETAILS, PRODUCT_BRANDS) */
/* ¿Qué empleados de almacén recibieron órdenes de entrada de un proveedor en particular? (USERS, WAREHAUSEMAN, INPUT_ORDERS, SUPPLIERS) */
/* ¿Qué proveedor ha enviado más productos a través de órdenes de entrada? (SUPPLIERS, INPUT_ORDERS, PRODUCT_SERIALS) */
/* ¿Qué clientes realizaron más de 3 órdenes de salida en un mismo mes? (CUSTOMERS, OUTPUT_ORDERS) */
/* ¿Qué clientes reportaron más de 2 incidentes de garantía en un mismo año? (CUSTOMERS, OUTPUT_ORDERS, WARRANTY_INCIDENTS) */
/* ¿Qué proveedores tuvieron más productos con incidentes de garantía? (SUPPLIERS, INPUT_ORDERS, PRODUCT_SERIALS, OUTPUT_DETAILS, WARRANTY_INCIDENTS) */
/* ¿Qué clientes compraron más productos de la marca Dell y cuál fue el total gastado? (CUSTOMERS, OUTPUT_ORDERS, OUTPUT_DETAILS, PRODUCT_SERIALS, PRODUCTS, PRODUCT_DETAILS, PRODUCT_BRANDS) */
/* ¿Qué clientes nunca reportaron incidentes de garantía? (CUSTOMERS LEFT JOIN OUTPUT_ORDERS, WARRANTY_INCIDENTS) */
/* ¿Qué proveedor tiene más diversidad de productos (por categorías)? (SUPPLIERS, INPUT_ORDERS, PRODUCT_SERIALS, PRODUCTS, SUBCATEGORIES, CATEGORIES) */
/* ¿Qué encargado de almacén nunca participó en una orden de salida? (WAREHAUSEMAN LEFT JOIN OUTPUT_ORDERS) */
/* ¿Qué técnicos atendieron más de 10 incidentes en 2025? (TECHNICAL, WARRANTY_INCIDENTS) */
/* ¿Qué proveedores no han vendido productos desde 2024? (SUPPLIERS, INPUT_ORDERS) */
/* ¿Qué técnicos atendieron incidentes de más de 5 clientes distintos? (TECHNICAL, WARRANTY_INCIDENTS, CUSTOMERS) */
/* ¿Qué encargados de almacén registraron más de 50 productos en un solo día? (WAREHAUSEMAN, INPUT_ORDERS, PRODUCT_SERIALS) */