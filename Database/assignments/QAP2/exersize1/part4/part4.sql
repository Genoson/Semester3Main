
-- SQL create statements for exercise 1 part 4 - Simple Normalization

-- create user table

CREATE TABLE public.user_table
(
    user_id serial NOT NULL,
    user_name character varying(32) NOT NULL,
    user_home_email character varying(64),
    user_work_email character varying(64),
    user_school_email character varying(64),
    PRIMARY KEY (user_id)
);

ALTER TABLE IF EXISTS public.user_table
    OWNER to postgres;


-- create genre table

CREATE TABLE public.genre_table
(
    genre_id serial NOT NULL,
    genre_name character varying(32) NOT NULL,
    PRIMARY KEY (genre_id)
);

ALTER TABLE IF EXISTS public.genre_table
    OWNER to postgres;


-- create author table

CREATE TABLE public.author_table
(
    author_id serial NOT NULL,
    author_name character varying(64) NOT NULL,
    PRIMARY KEY (author_id)
);

ALTER TABLE IF EXISTS public.author_table
    OWNER to postgres;


-- create user genre table

CREATE TABLE public.user_genre
(
    user_id integer NOT NULL,
    genre_id integer NOT NULL,
    notify_status boolean NOT NULL,
    PRIMARY KEY (user_id, genre_id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.user_table (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT genre_id FOREIGN KEY (genre_id)
        REFERENCES public.genre_table (genre_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.user_genre
    OWNER to postgres;


-- create user author table

CREATE TABLE public.user_author
(
    user_id integer NOT NULL,
    author_id integer NOT NULL,
    notify_status boolean NOT NULL,
    PRIMARY KEY (user_id, author_id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.user_table (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT author_id FOREIGN KEY (author_id)
        REFERENCES public.author_table (author_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);