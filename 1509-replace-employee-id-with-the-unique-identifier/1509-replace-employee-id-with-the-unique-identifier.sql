# Write your MySQL query statement below

# USING LEFT JOIN
SELECT eu.unique_id, e.name
FROM Employees e LEFT JOIN EmployeeUNI eu
ON e.id = eu.id

# USING RIGHT JOIN
# SELECT eu.unique_id, e.name
# FROM EmployeeUNI eu RIGHT JOIN Employees e
# ON e.id = eu.id