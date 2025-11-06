-- Vista para obtener todos los usuarios
CREATE VIEW get_all_users AS
SELECT
    r.rol_name,
    u.user_id,
    u.user_name,
    u.user_first_surname,
    u.user_second_surname,
    u.user_phone,
    u.user_email,
    u.user_address,
    u.user_city,
    u.user_date
FROM USERS AS u
INNER JOIN ROLES AS r
ON u.rol_id = r.rol_id;

-- Vista para obtener todos los productos con sus categorias y subcategorias
CREATE VIEW get_all_products AS
SELECT
    c.category_name,
    sc.subcategory_name,
    p.product_id,
    io.input_order_id,
    pd.product_detail_model,
    pd.product_detail_description,
    pb.product_brand_name,
    s.supplier_name
    FROM SUPPLIERS AS s
    INNER JOIN INPUT_ORDERS AS io
    ON s.supplier_id = io.supplier_id
    INNER JOIN PRODUCT_SERIALS AS ps
    ON io.input_order_id = ps.input_order_id
    INNER JOIN PRODUCTS AS p
    ON ps.product_id = p.product_id
    INNER JOIN PRODUCT_DETAILS AS pd
    ON p.product_details_id = pd.product_details_id
    INNER JOIN PRODUCT_BRANDS AS pb 
    ON pd.product_brand_id = pb.product_brand_id
    INNER JOIN SUBCATEGORIES AS sc
    ON p.subcategory_id = sc.subcategory_id
    INNER JOIN CATEGORIES AS c
    ON sc.category_id = c.category_id
    ORDER BY p.product_id ASC;

-- Vista para obtener todas subcategorias con su categoria
CREATE VIEW get_all_subcategories AS
	SELECT
	c.category_name,
	sc.subcategory_name,
	sc.subcategory_id
	FROM categories AS c
	INNER JOIN subcategories AS sc
	ON c.category_id=sc.category_id;