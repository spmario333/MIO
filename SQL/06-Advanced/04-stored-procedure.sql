delimiter //
CREATE PROCEDURE p_all_user()
BEGIN
SELECT *FROM user;
END//

CALL p_all_user


--los procedimientos son como consultas que puedes llamar directamente y ademas te dan la opcion de pasar parametros


delimiter //
CREATE PROCEDURE p_age_user(IN age_param int)
BEGIN
SELECT *FROM user WHERE age = age_param;
END//

CALL p_age_user(27)