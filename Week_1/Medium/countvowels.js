function countvowels(str) {
    const vowelstring = ["a", "e", "i", "o", "u"]
    const new_str = str.toLowerCase();
    const uniqvowel=[];

    for (let char of new_str){
        if(vowelstring.includes(char) && !uniqvowel.includes(char)){
            uniqvowel.push(char)
        }
    }
    console.log("No. of Vowels in String [Without Duplicates] is "+uniqvowel.length)
}
countvowels("AshishKalsi")
