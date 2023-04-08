SELECT state, AVG(age) AS average_age, COUNT(*) AS customer_count
FROM customer
WHERE address LIKE '%#%'
AND email LIKE '%.org'
GROUP BY state
HAVING age > 18