function validAnagram(str1, str2) {
    // not an anagram, when different length
    if ( str1.length !== str2.length ) return false;

    const obj = {};
    for (char in str1) {
        let letter = str1[char];
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }
    console.log(obj)


    for (char in str2) {
        let letter = str2[char];
        if (!obj[letter]) return false 
        else obj[letter] -= 1
    }

    console.log(obj)
    return true
}

console.log(validAnagram("tes", "set"))