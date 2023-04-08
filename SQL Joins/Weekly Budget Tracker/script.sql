SELECT e.description, e.spent , w.net 
FROM weekly_income AS w
LEFT JOIN expenditure AS e
ON w.week_no = e.due_week
WHERE e.due_week = '2'