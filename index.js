// Your code here

// this is a function declaration
// it is declared directly with the function command
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// this is a function expression
// the variable has the function assigned as it's value.
const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

// this is a function expression
// the variable has a function assigned as it's value.
// the assigned function returns a second child(?) function to return 
// the full response string. 
// to call it is wrapAdjective("&")("something motivational")
const wrapAdjective = function(wrap="*") {
    return function(adj) {
        return `You are ${wrap}${adj}${wrap}!`
    }
}
