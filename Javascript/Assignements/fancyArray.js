function fancyArray(arr) {


    for (var i = arr[0]; i < arr.length; i++) {
        console.log(arr[arr[i]] + "->" + arr[i]);
    }
}
console.log(fancyArray(["James", "Jill", "Jana", "Jack"]));