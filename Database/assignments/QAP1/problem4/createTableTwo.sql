CREATE TABLE public.advertisements
(
    advert_id serial NOT NULL,
    advertiser character varying(64) NOT NULL,
    description character varying(500),
    PRIMARY KEY (advert_id)
);

ALTER TABLE IF EXISTS public.advertisements
    OWNER to postgres;