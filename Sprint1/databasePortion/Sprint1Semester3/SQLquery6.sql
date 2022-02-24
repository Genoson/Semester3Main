-- ALL APPOINTMENTS/INVOICES FEATURING A SPECIFIC SERVICE

SELECT last_name, service_id, total_cost, appt_date FROM public."Customer"
JOIN public."Appointments" ON public."Customer".customer_id = public."Appointments".customer_id
JOIN public."Invoices" ON public."Appointments".appt_id = public."Invoices".appt_id
JOIN public."Appointment Services" ON public."Appointments".appt_id = public."Appointment Services".appt_id
WHERE service_id = 2
ORDER BY last_name;


