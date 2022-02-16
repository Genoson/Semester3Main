-- SQL create statements for exercise 1 part 3 - Monthly Publication Use

-- publication table

CREATE TABLE public.publication_table
(
    publication_id serial NOT NULL,
    publication_title character varying(64) NOT NULL,
    last_rev_date date NOT NULL,
    PRIMARY KEY (publication_id)
);

ALTER TABLE IF EXISTS public.publication_table
    OWNER to postgres;


-- usage table

CREATE TABLE public.usage_table
(
    usage_code character varying(16) NOT NULL,
    publication_id integer NOT NULL,
    usage_count integer,
    unique_users integer,
    PRIMARY KEY (usage_code, publication_id),
    CONSTRAINT publication_id FOREIGN KEY (publication_id)
        REFERENCES public.publication_table (publication_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.usage_table
    OWNER to postgres;