# Write your MySQL query statement below
(
    SELECT salary AS SecondHighestSalary
    FROM Employee
    WHERE salary != (
        SELECT MAX(salary) FROM Employee
    )
    ORDER BY salary DESC
    LIMIT 1
)
UNION
(
    SELECT NULL AS SecondHighestSalary
)
LIMIT 1
