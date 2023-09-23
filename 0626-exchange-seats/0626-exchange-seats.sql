# Write your MySQL query statement below
(
    (
        SELECT s1.id, s2.student
        FROM Seat s1, Seat s2
        WHERE (s1.id % 2 != 0 AND s2.id = s1.id+1)
        OR (s1.id % 2 = 0 AND s2.id = s1.id-1)
    )
    UNION 
    (
        SELECT id, student
        FROM Seat
        WHERE (SELECT COUNT(*) FROM Seat) % 2 != 0
        ORDER BY id DESC
        LIMIT 1
    )
)
ORDER BY id

