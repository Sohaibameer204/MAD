// String length
function customLength(str) {
    return str.length;
  }
  
  // String slice()
  function customSlice(str, start, end) {
    return str.slice(start, end);
  }
  
  // String substring()
  function customSubstring(str, start, end) {
    return str.substring(start, end);
  }
  
  // String substr()
  function customSubstr(str, start, length) {
    return str.substr(start, length);
  }
  
  // String replace()
  function customReplace(str, oldStr, newStr) {
    return str.replace(oldStr, newStr);
  }
  
  // String replaceAll()
  function customReplaceAll(str, oldStr, newStr) {
    return str.replaceAll(oldStr, newStr);
  }
  
  // String toUpperCase()
  function customToUpperCase(str) {
    return str.toUpperCase();
  }
  
  // String toLowerCase()
  function customToLowerCase(str) {
    return str.toLowerCase();
  }
  
  // String concat()
  function customConcat(str1, str2) {
    return str1.concat(str2);
  }
  
  // String trim()
  function customTrim(str) {
    return str.trim();
  }
  
  // String trimStart()
  function customTrimStart(str) {
    return str.trimStart();
  }
  
  // String trimEnd()
  function customTrimEnd(str) {
    return str.trimEnd();
  }
  
  // String padStart()
  function customPadStart(str, length, padStr) {
    return str.padStart(length, padStr);
  }
  
  // String padEnd()
  function customPadEnd(str, length, padStr) {
    return str.padEnd(length, padStr);
  }
  
  // String charAt()
  function customCharAt(str, index) {
    return str.charAt(index);
  }
  
  // String charCodeAt()
  function customCharCodeAt(str, index) {
    return str.charCodeAt(index);
  }
  
  // String split()
  function customSplit(str, delimiter) {
    return str.split(delimiter);
  }
  
  // Example usage
  const sampleString = "Hello, World!";
  console.log(customLength(sampleString));
  console.log(customSlice(sampleString, 0, 5));
  console.log(customSubstring(sampleString, 0, 5));
  console.log(customSubstr(sampleString, 0, 5));
  console.log(customReplace(sampleString, "World", "Universe"));
  console.log(customReplaceAll(sampleString, "l", "X"));
  console.log(customToUpperCase(sampleString));
  console.log(customToLowerCase(sampleString));
  console.log(customConcat("Hello, ", "Universe!"));
  console.log(customTrim("  Hello, World!  "));
  console.log(customTrimStart("  Hello, World!"));
  console.log(customTrimEnd("Hello, World!  "));
  console.log(customPadStart("5", 4, "0"));
  console.log(customPadEnd("42", 5, "0"));
  console.log(customCharAt(sampleString, 7));
  console.log(customCharCodeAt(sampleString, 7));
  console.log(customSplit(sampleString, ","));
  