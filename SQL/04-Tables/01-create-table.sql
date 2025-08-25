CREATE TABLE persons(
id int,
name varchar(100),
age int,
email varchar(50),
created date
);

-- TABLA CON RESTRICCIONES (NOT NULL)

CREATE TABLE persons2(
id int NOT NULL,
name varchar(100) NOT NULL,
age int,
email varchar(50),
created date
);

--UNIQUE el dato tiene q ser unico no se puede repetir se asemeja a primary key 

CREATE TABLE persons3(
id int NOT NULL,
name varchar(100) NOT NULL,
age int,
email varchar(50),
created date,
UNIQUE(id)
);


--PRIMARY KEY
CREATE TABLE persons4(
id int NOT NULL,
name varchar(100) NOT NULL,
age int,
email varchar(50),
created date,
UNIQUE(id),
PRIMARY KEY (id)
);


--CHECK(para ponerle una restriccion al campo cuando se introduzca en este caso q la edad sea mayor o igual q 18)

CREATE TABLE persons5(
id int NOT NULL,
name varchar(100) NOT NULL,
age int,
email varchar(50),
created date,
UNIQUE(id),
PRIMARY KEY (id),
CHECK(age>=18)
);

--DEFAULT (valor por defecto en caso q no se llene en este caso se usa la funcion time_stamp() que te pone la hora del sistema hay mas funciones pero esta cumple con el tipo de dato q se necesita)

CREATE TABLE persons6(
id int NOT NULL,
name varchar(100) NOT NULL,
age int,
email varchar(50),
created datetime DEFAULT CURRENT_TIMESTAMP(),
UNIQUE(id),
PRIMARY KEY (id),
CHECK(age>=18)
);

--AUTO_INCREMENT 

CREATE TABLE persons7(
id int NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
age int,
email varchar(50),
created datetime DEFAULT CURRENT_TIMESTAMP(),
UNIQUE(id),
PRIMARY KEY (id),
CHECK(age>=18)
);





--trigger table
CREATE TABLE email_history(
email_history_id int NOT NULL AUTO_INCREMENT,
user_id int NOT NULL,
email varchar(100),
PRIMARY KEY (email_history_id)
);