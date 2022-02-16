--  for this exersize i will be creating the simplest 3 table version of a solution to this problem

-- create the students table

CREATE TABLE public.students_table
(
    student_id serial NOT NULL,
    student_name character varying(64) NOT NULL,
    student_phone character varying(24) NOT NULL,
    student_email character varying(64) NOT NULL,
    PRIMARY KEY (student_id)
);

ALTER TABLE IF EXISTS public.students_table
    OWNER to postgres;

-- create the classes table

CREATE TABLE public.class_table
(
    class_id serial NOT NULL,
    class_name character varying(64) NOT NULL,
    instructor character varying(64)
    , -- ^^able to be null in case of special cases such that student can enroll in a course while instruction is figured out
    PRIMARY KEY (class_id)
);

ALTER TABLE IF EXISTS public.class_table
    OWNER to postgres;

-- create the student grades table

CREATE TABLE public.student_grades
(
    student_id integer NOT NULL,
    class_id integer NOT NULL,
    semester_code character varying(16) NOT NULL,
    grade integer NOT NULL,
    PRIMARY KEY (student_id, class_id, semester_code),
    CONSTRAINT student_id FOREIGN KEY (student_id)
        REFERENCES public.students_table (student_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT class_id FOREIGN KEY (class_id)
        REFERENCES public.class_table (class_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public.student_grades
    OWNER to postgres;