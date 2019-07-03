function slots(quaters, breakpoint) {
    while (quaters > 0 && quaters <= breakpoint) {}
    quaters--;
    if (Math.floor(Math.random() * 100 + 1) == 11) {
        quaters += Math.floor(Math.random() * 50 + 1);
        console.log("You won " + quaters + "quaters!");
    } else {
        console.log("You lost " + quaters + "quaters");
    }
    console.log(quaters);
}
console.log(slots(85, 150));