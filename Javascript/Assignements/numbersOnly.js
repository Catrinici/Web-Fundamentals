function numbersOnly(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "number") {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}
numbersOnly([1, "apple", -3, "orange", 0.5]);

function numbersOnlyRemove(arr) {
    for (var i = 0; i < arr.length; i++) {
        while (typeof(arr[i]) != "number") {
            for (var k = i; k < arr.length; k++) {
                arr[k] = arr[k + 1]
            }
            arr.pop();
        }
    }
    console.log(arr);

}
numbersOnlyRemove([1, "apple", -3, "orange", 0.5, "gjhxgcjhg", 34])