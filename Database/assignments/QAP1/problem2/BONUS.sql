--BONUS - all at once

SELECT film.film_id, film.title, actor.first_name, actor.last_name FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 2 or film.film_id = 17
GROUP BY film.film_id, actor.first_name, actor.last_name
ORDER BY film.title