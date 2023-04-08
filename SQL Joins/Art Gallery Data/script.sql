SELECT artist.name AS artist, artwork.title AS title_of_piece, 
artwork.year_created AS year, artwork.type AS type_of_artwork
FROM artist 
JOIN artwork
ON artist.name = artwork.artist_name
WHERE type_of_artwork = 'Painting'
AND title_of_piece = 'Love Line'