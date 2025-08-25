SELECT MAX(age) FROM user GROUP BY age;

SELECT COUNT(age), age FROM user GROUP BY age;

SELECT COUNT(age), age FROM user GROUP BY age ORDER BY age ASC;

SELECT COUNT(age), age FROM user WHERE age > 15 GROUP BY age ORDER BY age ASC;