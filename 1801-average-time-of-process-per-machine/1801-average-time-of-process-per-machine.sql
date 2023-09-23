# Write your MySQL query statement below
SELECT t.machine_id, ROUND(SUM(t.difftime) / COUNT(t.difftime), 3) AS processing_time
FROM
(
    SELECT machine_id, process_id, (MAX(timestamp)-MIN(timestamp)) AS difftime
    FROM Activity
    GROUP BY machine_id, process_id
) AS t
GROUP BY t.machine_id
