--3. Group results using a group by

SELECT actor_id, count(film_id) from film_actor
where film_id < 50
GROUP BY actor_id