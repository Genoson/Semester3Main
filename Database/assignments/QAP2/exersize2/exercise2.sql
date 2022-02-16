-- SQL create statements for the tables in this problem

-- creating the weekly sale table

CREATE TABLE public.weekly_sale_table
(
    sale_id serial NOT NULL,
    sale_date date NOT NULL,
    attendee_count integer NOT NULL,
    PRIMARY KEY (sale_id)
);

ALTER TABLE IF EXISTS public.weekly_sale_table
    OWNER to postgres;

-- create the table table

CREATE TABLE public.table_table
(
    table_id serial NOT NULL,
    vendor_name character varying(64) NOT NULL,
    vendor_email character varying(64) NOT NULL,
    PRIMARY KEY (table_id)
);

ALTER TABLE IF EXISTS public.table_table
    OWNER to postgres;


-- create the weekly table traffic table

CREATE TABLE public.weekly_table_traffic_table
(
    sale_id integer NOT NULL,
    table_id integer NOT NULL,
    table_traffic integer NOT NULL,
    PRIMARY KEY (sale_id, table_id),
    CONSTRAINT sale_id FOREIGN KEY (sale_id)
        REFERENCES public.weekly_sale_table (sale_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT table_id FOREIGN KEY (table_id)
        REFERENCES public.table_table (table_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);