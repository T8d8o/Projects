SELECT s.name, s.type, m.carbs_g, m.protein_g, m.fat_g
FROM snack AS s
LEFT JOIN macros AS m
ON s.id = m.id
WHERE type = 'vegetarian'