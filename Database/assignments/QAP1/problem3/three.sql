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