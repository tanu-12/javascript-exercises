const removeFromArray = function(newArray,...num) {
    newArray=newArray.filter(x=>!num.includes(x));
    
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
