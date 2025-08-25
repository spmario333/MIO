SELECT * FROM user WHERE email IS NOT NULL;
SELECT * FROM user WHERE email IS NULL;


SELECT name, surname, IFNULL(age,0) AS age FROM user