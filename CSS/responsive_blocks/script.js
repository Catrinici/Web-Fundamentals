// function print1to125() {
//     var num = 1;
//     while (num <= 255) {
//         console.log(num);
//         num++;
//     }
// }
// print1to125();

//Print Ints and Sum 0-255
// function printIntsAndSum0to255() {
//     var sum = 0;
//     for (var num = 0; num <= 255; num++) {
//         sum += num;
//         console.log("New Number: " + num + "SUM: " + sum);

//     }
// }
// printIntsAndSum0to255();

//Find and print Max;
// function printArrayMax(arr) {
//     if (arr.length == 0) {
//         console.log("Empty array! No max value.");
//         return;
//     }
//     var max = arr[0];
//     for (var idx = 1; idx < arr.length; idx++) {
//         if (arr[idx] > max) {
//             max = arr[idx];
//         }
//     }
//     console.log("Max value is: " + max);

// }
// function printOdds() {
//     var num = 1;
//     while (num <= 255) {
//         console.log(num);
//         num = num + 2;
//     }
// }
// printOdds();

function oddArray1to255() {
    var oddArray = [];
    for (var num = 1; num <= 25; num += 2) {
        oddArray.push(num);
    }
    return oddArray;
}
oddArray1to255();