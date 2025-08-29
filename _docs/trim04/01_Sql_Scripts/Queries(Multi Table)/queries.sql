SELECT
    c.category_name,
    S.subcategory_name
    FROM SUBCATEGORIES AS s
    INNER JOIN CATEGORIES AS c
    ON c.category_id = s.category_id;

SELECT
    r.rol_name,
    u.user_name,
    u.user_first_surname
    FROM USERS AS u
    INNER JOIN ROLES AS r
    ON u.rol_id = r.rol_id;

    SELECT
    u.user_id,
    u.user_name,
    c.out_order_id,
    u.user_address,
    customer_requirements
    FROM USERS AS u
    INNER JOIN CUSTOMERS AS c
    ON u.user_id = c.user_id
    INNER JOIN OUTPUT_ORDERS AS o
    ON c.out_order_id = o.out_order_id;

    SELECT * FROM PRODUCTS;

SELECT
    c.category_name,
    s.subcategory_name,
    p.products_id,
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

