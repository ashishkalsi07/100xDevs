function isAnagram(str1, str2) {
    const newstr1 = str1.toLowerCase().replace(" /[\, ' '");
    const newstr2 = str2.toLowerCase().replace(" /[\, ' '");
    const word1=newstr1.split('').sort().join('')
    const word2=newstr2.split('').sort().join('')
    return word1 === word2
}
console.log(isAnagram("Ashish","Silent"));