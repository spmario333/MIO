--left join muestra todos los datos de la tabla de la izquierda asi no tenga asociado ningun dni en este caso, lo q hace es q representa con null los q esten vacios 

SELECT * FROM user 
LEFT JOIN dni
ON user.user_id = dni.user_id;

SELECT user.name,language.name FROM user_language 
LEFT JOIN user ON user.user_id=user_language.user_id
LEFT JOIN language ON user_language.language_id=language.language_id

SELECT user.name,language.name FROM user_language 
RIGHT JOIN user ON user.user_id=user_language.user_id
RIGHT JOIN language ON user_language.language_id=language.language_id

