--ALTER viene siendo el update o modificar
--ADD adiciona el campo 

ALTER TABLE persons8
ADD surname VARCHAR(150)

-- RENAME renombrar
ALTER TABLE persons8
RENAME COLUMN surname TO description

--MODIFY modificar el tipo de dato 
ALTER TABLE persons8
MODIFY COLUMN description VARCHAR(250)

--DROP eliminar
ALTER TABLE persons8
DROP COLUMN description