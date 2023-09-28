# Write your MySQL query statement below
SELECT DISTINCT(a.num) as ConsecutiveNums
FROM Logs a, Logs b, Logs c
WHERE a.num = b.num AND b.num = c.num
AND b.id = a.id+1 AND c.id = a.id+2