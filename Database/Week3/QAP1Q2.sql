-- PROBLEM 2: SELECT, SELECT, SELECT
--1. Reduce the number of columns to 4 or fewer

SELECT title, rating, length FROM film;

--2. Reduce the number of rows using WHERE

SELECT actor_id FROM film_actor
WHERE film_id = 3

--3. Group results using a group by

SELECT actor_id, count(film_id) from film_actor
where film_id < 50
GROUP BY actor_id

--4. ORDER results using order by

SELECT first_name, last_name FROM customer
ORDER BY last_name DESC

--5. join 2 or more table using a join

SELECT film.film_id, film.title, actor.first_name, actor.last_name FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 2

--BONUS - all at once

SELECT film.film_id, film.title, actor.first_name, actor.last_name FROM film
INNER JOIN film_actor ON film.film_id = film_actor.film_id
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 2 or film.film_id = 17
GROUP BY film.film_id, actor.first_name, actor.last_name
ORDER BY film.title



