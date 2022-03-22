

const characterMatch = (str1, str2) => {
    const firstLength = str1.length;
    const secondLength = str2.length;
    let count = 0;
    for (let i = 0; i < firstLength; i++) {
        for (let j = 0; j < secondLength; j++) {
            if (str1[i] === str2[j]) {
                count++;
            }
        }
    }
    return count;

};

// same as above but with a different approach, lower big O

const characterMatch2 = (str1, str2) => {
    const firstLength = str1.length;
    const secondLength = str2.length;
    let count = 0;
    for (let i = 0; i < firstLength; i++) {
        if (str2.includes(str1[i])) {
            count++;
        }
    }
    return count;
}

// now the same again but using a hash table

const characterMatch3 = (str1, str2) => {
    const firstLength = str1.length;
    const secondLength = str2.length;
    let count = 0;
    let dictionary = {};
    for (let i = 0; i < firstLength; i++) {
        dictionary[str1[i]] = true;
    }
    for (let i = 0; i < secondLength; i++) {
        if (dictionary[str2[i]]) {
            count++;
        }
    }
    return count;
}


console.log(characterMatch('hello', 'goodbye'));
console.log(characterMatch2('hello', 'goodbye'));
console.log(characterMatch3('hello', 'goodbye'));
