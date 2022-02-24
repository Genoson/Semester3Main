-- SUM OF INVOICES FOR EACH & ALL CUSTOMERS

SELECT last_name, SUM(total_cost) FROM public."Customer"
JOIN public."Appointments" ON public."Customer".customer_id = public."Appointments".customer_id
JOIN public."Invoices" ON public."Appointments".appt_id = public."Invoices".appt_id
GROUP BY last_name
ORDER BY last_name;