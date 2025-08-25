SELECT * FROM user 
INNER JOIN dni;

--inner join solo muestra los campos q contengan dni y usuarios o sea intercepcion entre tablas

SELECT * FROM user 
INNER JOIN dni
ON user.user_id = dni.user_id

--IGUAL INNER JOIN Q JOIN
SELECT * FROM user 
JOIN dni
ON user.user_id = dni.user_id
ORDER BY age ASC

--n:1

SELECT * FROM companies 
JOIN user
ON user.company_id = companies.company_id

--n:m

SELECT user.name,language.name FROM user_language 
JOIN user ON user.user_id=user_language.user_id
JOIN language ON user_language.language_id=language.language_id


