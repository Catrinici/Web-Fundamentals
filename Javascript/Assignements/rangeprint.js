function printRange(startPoint, endPoint, skipAmount) {
    for (var i = startPoint; i < endPoint; i += skipAmount) {
        if ((skipAmount == null)) {
            skipAmount = 1;
        }
        console.log("trecem");

        if ((endPoint == null) && (skipAmount == null)) {
            console.log("beggin of the else if loop")
            skipAmount = 1;
            temp = startPoint;
            startPoint = 0;
            endPoint = temp;
            console.log("end of the else if loop")
        }

        console.log(i);
    }

}
// console.log(printRange(2, 10, 2));
// console.log(printRange(2, 10));
console.log(printRange(8));