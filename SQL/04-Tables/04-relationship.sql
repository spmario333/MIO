-- creando una relacion de 1 a 1 

CREATE TABLE dni(
dni_id int AUTO_INCREMENT PRIMARY KEY,
dni_number int NOT NULL,
user_id int,
UNIQUE(dni_id),
FOREIGN KEY (user_id) REFERENCES user(user_id)
);

--creando una relacion de 1 a n como ya estaba creado la tabla usuario q era 1 y necesitaba la de muchos se creo la tabla companies

CREATE TABLE companies(
company_id int AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL
)

--ya creada se crea la llave principal en la tabla usuarios 

ALTER TABLE user 
ADD COLUMN company_id int

-- para poder modificar la columna añadida se crea una restriccion(constraints) al mismo tiempo q se modifica la columna

ALTER TABLE user
ADD CONSTRAINT fk_companies
FOREIGN KEY(company_id) REFERENCES companies(company_id)


-- cuando se crea  la relacion de N:M o de mucho a mucho es mas optimo crear una tabla intermedia q guarde dicha relacion creando una tabla con un id no tan importante y dos id foraneos de la relacion q se esta guardando 
-- primero se crea la tabla language de programacion  para establecer la relacion entre usuarios 
CREATE TABLE language(
language_id int AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL
)

--luego la tabla q guardo las relaciones 

CREATE TABLE user_language(
user_language_id int AUTO_INCREMENT PRIMARY KEY,
user_id int,
language_id int,
FOREIGN KEY (user_id) REFERENCES user(user_id),
FOREIGN KEY (language_id) REFERENCES language(language_id)
UNIQUE(user_id, language_id)
)






--INSERT

insert into dni (dni_number , user_id) values (11111111 , 1);
insert into dni (dni_number , user_id) values (22222222 , 2);
insert into dni (dni_number , user_id) values (33333333 , 3);
insert into dni (dni_number ) values (44444444 );




insert into companies (name) values ('MoureDev');
insert into companies (name) values ('Apple');
insert into companies (name) values ('Google');



insert into user_language (user_id , language_id) values (1,1);
insert into user_language (user_id , language_id) values (1,2);
insert into user_language (user_id , language_id) values (1,5);
insert into user_language (user_id , language_id) values (2,3);
insert into user_language (user_id , language_id) values (2,5);

insert into language (name) values ('Swift');
insert into language (name) values ('Kotlin');
insert into language (name) values ('JavaScript');
insert into language (name) values ('Java');
insert into language (name) values ('Python');
insert into language (name) values ('C#');
insert into language (name) values ('COBOL');

--UPDATE

update user set company_id = 1 where user_id =1 ;
update user set company_id = 2 where user_id =3 ;
update user set company_id = 3 where user_id =4 ;
update user set company_id = 1 where user_id =7 ;


