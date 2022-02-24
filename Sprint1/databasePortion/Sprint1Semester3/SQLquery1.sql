-- QUERY ALL APPOINTMENTS FOR A SPECIFIC EMPLOYEE

SELECT appt_id 
FROM public."Appointments"
WHERE employee_id = 5
ORDER BY appt_id;