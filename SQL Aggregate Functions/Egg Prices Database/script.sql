SELECT brand, qty,  AVG(price)
FROM eggs
GROUP BY brand, qty