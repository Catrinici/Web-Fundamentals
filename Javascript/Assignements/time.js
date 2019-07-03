function time(hour, minute, period) {
    if ((minute == 15) && (period == 'AM')) {
        return ("It is quarter after " + hour + "in the morning");
    } else if ((minute < 15) && (period == 'AM')) {
        return ("It is " + minute + "minutes past " + hour + "in the morning");
    } else if ((minute < 15) && (period == 'PM')) {
        return ("It is " + minute + " minutes past " + hour + " in the evening");
    } else if ((minute == 15) && (period == 'PM')) {
        return ("It is quarter after " + hour + "in the evening");
    } else if ((minute > 15) && (minute < 30) && (period == 'AM')) {
        return ("It is " + minute + " minutes past " + hour + " in the morning");
    } else if ((minute > 15) && (minute < 30) && (period == 'PM')) {
        return ("It is " + minute + " minutes past " + hour + " in the evening");
    } else if ((minute == 30) && (period == 'AM')) {
        return ("It is half past" + hour + "in the morning");
    } else if ((minute == 30) && (period == 'PM')) {
        return ("It is half past" + hour + "in the evening");
    } else if ((minute > 30) && (minute < 59) && (period == 'AM')) {
        hour = hour + 1;
        return ("It is almost " + hour + " in the morning");
    } else if ((minute > 30) && (minute < 59) && (period == 'PM')) {
        hour = hour + 1;
        return ("It is almost " + hour + " in the evening");
    } else if ((minute == 00) && (period == 'PM')) {
        return ("It is  " + hour + " o clock in the evening");
    } else if ((minute == 00) && (period == 'AM')) {
        return ("It is  " + hour + " o clock in the morning");
    }
}
console.log(time(7, 35, 'AM'));
console.log(time(7, 15, 'PM'));
console.log(time(10, 00, "AM"));