-- ALL INVOICES FOR ALL CUSTOMERS

SELECT last_name, appt_date, total_cost FROM public."Customer"
JOIN public."Appointments" ON public."Customer".customer_id = public."Appointments".customer_id
JOIN public."Invoices" ON public."Appointments".appt_id = public."Invoices".appt_id
ORDER BY last_name;