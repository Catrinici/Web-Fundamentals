function birthdayCount(daysUntilMyBirthday) {

    for (var i = daysUntilMyBirthday; i >= 0; i--) {
        if (i > 30) {
            console.log(i + "days until my birthday. Such a long time... :(");
        }
        if (i < 30) {
            console.log(i + "Days until my Birthday...excited!!!");
        }
        if (i < 5) {
            console.log(i + "DAYS UNTIL MY BIRTHDAY!!!!!");
        }

    }
    return ("done!");
}
console.log(birthdayCount(60));