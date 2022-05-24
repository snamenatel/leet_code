# Write your MySQL query statement below
SELECT employee_id,
CASE
    WHEN ((employee_id % 2) = 0 or name like 'M%')
        THEN 0
    ELSE salary
END AS bonus
FROM Employees