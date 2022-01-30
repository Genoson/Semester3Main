CREATE TABLE public."user"
(
    user_id serial NOT NULL,
    first_name character varying(32) NOT NULL,
    last_name character varying(64) NOT NULL,
    email character varying(128) NOT NULL,
    PRIMARY KEY (user_id)
);

ALTER TABLE IF EXISTS public."user"
    OWNER to postgres;