SELECT * FROM user 
LEFT JOIN dni
ON user.user_id = dni.user_id
UNION 
SELECT * FROM user
RIGHT JOIN dni 
ON user.user_id =dni.user_id