# Write your MySQL query statement below
select distinct employee_id from 
(
    select e.employee_id from 
    Employees e LEFT JOIN Salaries s
    ON e.employee_id = s.employee_id
    where s.salary IS NULL
    UNION
    select s.employee_id from 
    Employees e RIGHT JOIN Salaries s
    ON e.employee_id = s.employee_id
    where e.name IS NULL
) as t
order by employee_id


# SELECT e.employee_id
# FROM Employees e 
# LEFT JOIN Salaries s
# ON e.employee_id = s.employee_id
# WHERE e.name IS NULL OR s.salary IS NULL
# UNION ALL
# SELECT e.employee_id
# FROM Employees e 
# RIGHT JOIN Salaries s
# ON e.employee_id = s.employee_id
# WHERE e.name IS NULL OR s.salary IS NULL
