function textAnalyzer(text) {
    if (typeof text !== 'string') {
      console.log(
        "Cannot analyze text. Provided input is not valid. Please pass a string."
        );
      return;
    }
    if (text.trim().length < 1) {
      console.log(
        "Cannot analyze text. Your text must include at least one character.");
      return;
    }
    let shortestWord = '';
    let longestWord = '';
    const wordsArray = convertTextToWords(text);
    longestWord = findLongestWord(wordsArray);
    console.log("Longest Word: " + longestWord);
    shortestWord = findShortestWord(wordsArray, longestWord);
    console.log("Shortest Word: " + shortestWord);
    let vowelWords = [];
    vowelWords = findVowelWords(wordsArray);
    console.log("Vowel Words: " + vowelWords);
    console.log("Words List: " + wordsArray);
    console.log("Total Words Count: " + wordsArray.length);
  }
  
  function convertTextToWords(text) {
    const lowerCaseText = text.toLowerCase();
    const words = lowerCaseText.split(' ');
    return words;
  }
  
  function findLongestWord(words) {
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      if (currentWord.length >= longestWord.length) {
        longestWord = currentWord;
      }
    }
    return longestWord;
  }
  
  function findShortestWord(words, longestWord) {
    let shortestWord = longestWord;
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      if (currentWord.length < shortestWord.length) {
        shortestWord = currentWord;
      }
    }
    return shortestWord;
  }
  
  function findVowelWords(words) {
    const vowels = ['a', 'i', 'e', 'o', 'u'];
    let vowelWords = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      for (let j = 0; j < vowels.length; j++) {
        let vowel = vowels[j];
        if (word.startsWith(vowel)) {
          vowelWords.push(word);
        }
      }
    }
    return vowelWords;
  }