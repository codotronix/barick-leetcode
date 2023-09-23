# Write your MySQL query statement below
SELECT user_id, name, mail
FROM Users
WHERE REGEXP_LIKE(mail, '^[A-Za-z]{1,}[A-Za-z0-9_.-]{0,}@leetcode\\.com$') 