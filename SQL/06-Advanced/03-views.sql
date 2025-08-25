CREATE VIEW v_adult_users AS 
SELECT name, age 
FROM user
WHERE age >= 18;

SELECT * FROM v_adult_users;