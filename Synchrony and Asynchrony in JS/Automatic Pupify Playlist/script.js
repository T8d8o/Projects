const usersDataBase = [{
    username: 'john98',
    password: '123'
  }, {
    username: 'hero12',
    password: '124'
  }, {
    username: 'liz223',
    password: '456'
  }, ];
  const songsDataBase = ["My Dog & me", "A Dog's life", "Hound Dog",
    "I Love My Dog", "He's A Good Dog", "The Dog Song", "Canis Lupus",
    "Salty Dog", "If Dogs Run Free"
  ];
  
  function logIn(username, password) {
    return new Promise(function(resolve, reject) {
      const userSelected = usersDataBase.filter(word => word.username ===
        username);
      const passwordSelected = userSelected.filter(word => word.password ===
        password);
      if (userSelected.length && passwordSelected.length) {
        resolve(true);
      } else {
        reject(
          "Try again! Your username (or/and) your password could be wrong!");
      }
    });
  }
  
  function setPlaylist(qtySongs) {
    return new Promise(function(resolve, reject) {
      if (qtySongs <= songsDataBase.length) {
        const songsSelected = songsDataBase.filter((song, index) => index <
          qtySongs);
        resolve(songsSelected);
      } else {
        reject("We're sorry! Please try with fewer songs!");
      }
    });
  }
  
  function playlistStatus(songs) {
    return new Promise(function(resolve) {
      console.log("Pupify App");
      console.log("Automatic Playlist");
      songs.map(song => console.log(song));
      resolve(`Playlist created:  ${songs.length} songs`);
    });
  }
  async function playListCreationProcess(username, password, qtySongs) {
    try {
      const isLoggedIn = await logIn(username, password);
      const songsSelectedComplete = await setPlaylist(qtySongs);
      const status = await playlistStatus(songsSelectedComplete);
      console.log(status);
    } catch (err) {
      console.log(err);
    }
  }
  playListCreationProcess('john98', '123', 5);