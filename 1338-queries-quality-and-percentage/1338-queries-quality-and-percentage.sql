# Write your MySQL query statement below
SELECT query_name, 
    ROUND(SUM(t.quality) / COUNT(*), 2) AS quality,
    ROUND(SUM(t.is_poor_rating) * 100 / COUNT(*), 2) AS poor_query_percentage
FROM
(
    SELECT query_name, result, (rating/position) as quality, 
        (CASE 
            WHEN rating<3 THEN 1
            ELSE 0
        END) AS is_poor_rating
    FROM Queries
) AS t
GROUP BY query_name