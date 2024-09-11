function countVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let ch of str.toLowerCase()) {
      if (vowels.includes(ch)) {
        count++;
      }
    }
  
    return count;
}
  const result = countVowels("Hello World");
  console.log(result); 