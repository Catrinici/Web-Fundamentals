function randomChance(quaters, breakpoint) {

    var winNum = 15;
    var winammount = Math.trunc(Math.random() * 50) + 51;
    sum = 0;


    while (quaters > 0) {

        if (Math.floor(Math.random() * 100 + 1) == winNum) {
            console.log(" Congratulations! You won " + winammount + " quaters");
            sum = winammount + quaters;
            quaters = sum;
            console.log("Your total ammount is " + quaters);


        } else if (quaters >= breakpoint) {
            return ("You now have riched the ammount you wanted! Congrats!");

        } else(console.log("Sorry! Not this time! "));

        quaters--;
    }

}
console.log(randomChance(35, 120));