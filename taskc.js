function checkSimilarity(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    if (str1 === str2) return true;
  
    if (str1.split("").every((char) => str2.includes(char))) {
      return true;
    }
    if (str2.split("").every((char) => str1.includes(char))) {
      return true;
    }
    return false;
  }
  
  console.log(checkSimilarity("laepp", "apple"));
  console.log(checkSimilarity("nodejs", "jsnode"));
  console.log(checkSimilarity("nojsde", "jsnode"));
  console.log(checkSimilarity("nodejs", "jsnodee"));
  console.log(checkSimilarity("nodejs", "hellojs"));