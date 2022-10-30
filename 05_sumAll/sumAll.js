const sumAll = function(lower,upper) {
    let max=upper;
    let min=lower;
    let sum=0;
    if(typeof(lower)!="number"||typeof(upper)!="number"||lower<0||upper<0)
    return "ERROR";
    if(lower>upper)
    {max=lower;
    min=upper;}
    for(let i=max;i>=min;i--)
    sum+=i;

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
