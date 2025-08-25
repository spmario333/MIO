SELECT name, init_date AS 'fecha de inicio a la programacion' FROM user WHERE age BETWEEN 15 AND 50; --alias para cambiar el nombre a la columna 

SELECT CONCAT(name,surname) FROM user ;
SELECT CONCAT(name,' ',surname) FROM user ;
SELECT CONCAT('Nombre:',name,' | ','Apellido:',surname) FROM user ; --une varios campos y puede modificarlos