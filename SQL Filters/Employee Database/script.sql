SELECT * FROM employees
WHERE first_name LIKE 'h%' 
OR request_ot = 'yes'
AND hours_worked BETWEEN 20 AND 30
AND availability IN ('any', 'weekend')
AND additional IN ('none', 'pto')