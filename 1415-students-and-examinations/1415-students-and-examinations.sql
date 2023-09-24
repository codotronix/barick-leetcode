# Write your MySQL query statement below
SELECT s.student_id, s.student_name, s.subject_name, 
    COALESCE(e.attended_exams, 0) AS attended_exams
FROM 
(
    SELECT student_id, student_name, subject_name
    FROM Students, Subjects
) AS s
LEFT JOIN 
(
    SELECT student_id, subject_name, COUNT(*) AS attended_exams
    FROM Examinations
    GROUP BY student_id, subject_name
) AS e
ON s.student_id = e.student_id
AND s.subject_name = e.subject_name
ORDER BY s.student_id, s.subject_name

