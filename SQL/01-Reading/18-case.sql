SELECT *,
CASE 
 WHEN age > 17 THEN 'Es mayor de edad'
 ELSE 'Es menor de edad'
END AS agetext 
FROM user 