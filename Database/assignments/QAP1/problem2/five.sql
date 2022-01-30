--5. join 2 or more table using a join

SELECT film.film_id, film.title, actor.first_name, actor.last_name FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 2