function isPalindrome(str) {
    const new_str=str.split("").reduce((acc, char) => char + acc, ""); 
    return new_str === str
}
if (isPalindrome("level")) {
    console.log("Yes, A Palindrome String")
} else {
    console.log("Not a palindrome");
<<<<<<< HEAD
};
=======
};
>>>>>>> f4e2a8f396fdca131f60ee76fe24c478e3ab9430
