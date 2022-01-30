--problem 3 add a family
-- first have a look at the table

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


--the family now moves

update public.customer
	set address_id = 7
	where customer.last_name = 'alexander'

select * from customer
where last_name = 'alexander'

--DELETE the old family address
-- this will leave a customer whose address id i stole for this purpose homeless... with a NULL value?

DELETE FROM public.address
	WHERE address_id = 5;

-- wont run because a customer still is using address_id 5
-- below should fix this
update public.customer
	set address_id = 7
	where address_id = 5

--testing deletion
select * from address
where address_id = 5