# Write your MySQL query statement below
SELECT S.product_id, T.first_year, S.quantity, S.price 
FROM Sales S 
JOIN
(
    SELECT product_id, MIN(year) AS first_year
    FROM Sales
    GROUP BY product_id
) AS T
ON S.product_id = T.product_id
AND S.year = T.first_year