function isPalindrome(str) {
    const new_str=str.split("").reduce((acc, char) => char + acc, ""); 
    return new_str === str
}
if (isPalindrome("level")) {
    console.log("Yes, A Palindrome String")
} else {
    console.log("Not a palindrome");
};
