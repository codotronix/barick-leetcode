# Write your MySQL query statement below
SELECT t.product_id, 
    COALESCE( ROUND( SUM(total_price) / SUM(units), 2), 0) AS average_price
FROM
(
    SELECT p.product_id, u.units, p.price, (u.units*p.price) AS total_price
    FROM UnitsSold u RIGHT JOIN Prices p
    ON u.product_id = p.product_id
    AND u.purchase_date BETWEEN p.start_date AND p.end_date
) AS t
GROUP BY t.product_id
ORDER BY t.product_id
