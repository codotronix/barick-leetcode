# Write your MySQL query statement below
SELECT ROUND((
    SELECT COUNT(*) FROM
    (
        SELECT a.player_id, t1.first_date, event_date
        FROM Activity a JOIN
        (
            SELECT player_id, MIN(event_date) as first_date
            FROM Activity
            GROUP BY player_id
        ) AS t1
        WHERE a.player_id = t1.player_id
        AND DATEDIFF(event_date, t1.first_date) = 1
    ) AS t2
) / (SELECT COUNT(DISTINCT(player_id)) FROM Activity), 2) AS fraction
