--problem 3 add a family
-- first have a look at the table
--editted the look to check additions
select * from customer
where last_name = 'alexander'

INSERT INTO public.customer(
	store_id, first_name, last_name, email, address_id, activebool, create_date, active)
	VALUES (1, 'paul', 'alexander', 'paul@alexander.com', 5, true, '2022-01-29', 1);
	
INSERT INTO public.customer(
	store_id, first_name, last_name, email, address_id, activebool, create_date, active)
	VALUES (1, 'lucy', 'alexander', 'lucy@alexander.com', 5, true, '2022-01-29', 1);

INSERT INTO public.customer(
	store_id, first_name, last_name, email, address_id, activebool, create_date, active)
	VALUES (1, 'max', 'alexander', 'max@alexander.com', 5, true, '2022-01-29', 1);