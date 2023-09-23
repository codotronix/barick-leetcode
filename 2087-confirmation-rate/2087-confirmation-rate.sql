# Write your MySQL query statement below
SELECT s.user_id, ifnull(tabl3.confirmation_rate, 0) AS confirmation_rate
FROM Signups s LEFT JOIN
(
    SELECT conf_table.user_id, ROUND(conf_table.confirmaction / total_req.totals, 2) AS confirmation_rate
    FROM
    (
        SELECT user_id, COUNT(*) AS confirmaction
        FROM Confirmations
        WHERE action = 'confirmed'
        GROUP BY user_id
    ) AS conf_table
    JOIN
    (
        SELECT user_id, COUNT(*) as totals
        FROM Confirmations
        GROUP BY user_id
    ) AS total_req
    ON conf_table.user_id = total_req.user_id
) AS tabl3
ON s.user_id = tabl3.user_id
