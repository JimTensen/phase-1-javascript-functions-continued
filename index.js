// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(plan = 'go to the office') {
    return `This Monday, I will ${plan}.`;
}

function wrapAdjective(flair = '*', word) { 
    return function (word = 'special') {
        return `You are ${flair}${word}${flair}!`;
    }
}