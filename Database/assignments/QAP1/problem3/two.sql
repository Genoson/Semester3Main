--the family now moves

update public.customer
	set address_id = 7
	where customer.last_name = 'alexander'

--testing the update

select * from customer
where last_name = 'alexander'