-- ALL APPOINTMENTS FOR A SPECIFIC DATE FOR A SPECIFIC EMPLOYEE

SELECT appt_date, appt_id, employee_id
FROM public."Appointments"
WHERE appt_date = '2021-09-09'
ORDER BY employee_id;