-- SQL statement file for the commands used in this QAP

-- SELECT statement identifying the data for the view for story 2
SELECT fm.title,
	concat(ct.first_name, ' ', ct.last_name) AS customer_name,
	st.store_id
FROM store AS st
	JOIN customer AS ct ON st.store_id = ct.store_id
	JOIN rental AS rt ON rt.customer_id = ct.customer_id	
	JOIN inventory AS inv ON rt.inventory_id = inv.inventory_id
	JOIN film AS fm ON inv.film_id = fm.film_id
-- WHERE statement to filter the data for story 2
WHERE rt.return_date IS null AND st.store_id = 2

-- the query to create the view
CREATE OR REPLACE VIEW public.vw_returns
AS
SELECT fm.title,
	concat(ct.first_name, ' ', ct.last_name) AS customer_name,
	st.store_id
FROM store AS st
	JOIN customer AS ct ON st.store_id = ct.store_id
	JOIN rental AS rt ON rt.customer_id = ct.customer_id	
	JOIN inventory AS inv ON rt.inventory_id = inv.inventory_id
	JOIN film AS fm ON inv.film_id = fm.film_id
WHERE rt.return_date IS null;

ALTER TABLE public.vw_returns
	OWNER TO postgres;


-- slight modified peters example for sql on story 3
SELECT fm.title
,SUM(pm.amount) AS revenue,
inv.store_id
FROM payment AS pm
INNER JOIN rental AS rt ON pm.rental_id = rt.rental_id
INNER JOIN inventory AS inv ON rt.inventory_id = inv.inventory_id
INNER JOIN film AS fm ON inv.film_id = fm.film_id
-- WHERE inv.store_id = 2
GROUP BY fm.title, inv.store_id
ORDER BY revenue DESC
-- LIMIT 10

-- the statement to define the view for story 3

CREATE OR REPLACE VIEW public.vw_revenue
AS
SELECT fm.title
,SUM(pm.amount) AS revenue,
inv.store_id

FROM payment AS pm
INNER JOIN rental AS rt ON pm.rental_id = rt.rental_id
INNER JOIN inventory AS inv ON rt.inventory_id = inv.inventory_id
INNER JOIN film AS fm ON inv.film_id = fm.film_id

GROUP BY fm.title, inv.store_id
ORDER BY revenue DESC;

ALTER TABLE public.vw_revenue
	OWNER TO postgres;