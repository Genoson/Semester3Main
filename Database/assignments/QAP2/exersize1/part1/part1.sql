-- sql create code for exercize 1 part 1

-- create provinces table

CREATE TABLE public.province_table
(
    province_id serial NOT NULL,
    province_name character varying(32) NOT NULL,
    population integer,
    PRIMARY KEY (province_id)
);

ALTER TABLE IF EXISTS public.province_table
    OWNER to postgres;

-- create city table

CREATE TABLE public.city_table
(
    city_id serial NOT NULL,
    province_id integer NOT NULL,
    city_population integer,
    PRIMARY KEY (city_id),
    CONSTRAINT province_id FOREIGN KEY (province_id)
        REFERENCES public.province_table (province_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.city_table
    OWNER to postgres;