let getTip = function(total, tipPercent = 0.2){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

console.log(getTip(100))
console.log(getTip(1000, 0.5))