# Write your MySQL query statement below
SELECT ROUND(SUM(t3.is_immediate) * 100 / COUNT(t3.is_immediate), 2) AS immediate_percentage
FROM 
(
    SELECT t1.customer_id, t1.first_order_date, t2.is_immediate 
    FROM 
    (
        SELECT customer_id, MIN(order_date) AS first_order_date 
        FROM Delivery
        GROUP BY customer_id
    ) AS t1
    JOIN
    (
        SELECT customer_id, order_date, customer_pref_delivery_date,
        CASE
            WHEN order_date = customer_pref_delivery_date THEN 1
            ELSE 0
        END AS is_immediate
        FROM Delivery
    ) AS t2
    ON t1.customer_id = t2.customer_id
    AND t1.first_order_date = t2.order_date
) AS t3