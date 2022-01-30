CREATE TABLE public.mail_list
(
    user_id integer NOT NULL,
    advert_id integer NOT NULL,
    CONSTRAINT mail_id PRIMARY KEY (user_id, advert_id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public."user" (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT advert_id FOREIGN KEY (advert_id)
        REFERENCES public.advertisements (advert_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.mail_list
    OWNER to postgres;