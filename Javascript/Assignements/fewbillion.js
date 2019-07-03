function fewBillion() {
    var money = 0.01;
    var sum = 0.01;

    for (var i = 2; i <= 30; i++) {
        money = money * 2;
        sum = sum + money;
        console.log("The amount of money in the ", i + "day will be ", money);
        console.log("The total amount in ", i + "day will be : SUM- ", sum);

    }
}
fewBillion();