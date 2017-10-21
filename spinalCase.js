function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var spacesUscores = /\s+|\_+/g;

    var newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    var final = newStr.replace(spacesUscores, '-');

    return final.toLowerCase();
}

spinalCase('This Is Spinal Tap');