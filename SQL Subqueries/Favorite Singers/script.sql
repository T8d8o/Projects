SELECT DISTINCT singer FROM songs
WHERE id IN 
(
SELECT song_id
FROM saved_playlist 
WHERE times_played > 
(
SELECT AVG(times_played) 
FROM saved_playlist
)
)