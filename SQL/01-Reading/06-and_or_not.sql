SELECT * FROM user WHERE NOT email LIKE 'sara@gmail.com';
SELECT * FROM user WHERE NOT email LIKE 'sara@gmail.com' AND age = 15;
SELECT * FROM user WHERE NOT email LIKE 'sara@gmail.com' OR age = 15;