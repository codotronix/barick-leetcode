# Write your MySQL query statement below
(
    SELECT num FROM MyNumbers
    GROUP BY num HAVING COUNT(*) = 1
    ORDER BY num DESC 
    LIMIT 1
)
UNION
(SELECT NULL)
LIMIT 1