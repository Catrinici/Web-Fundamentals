var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}

function printThings() {

    for (var key in users) {
        console.log(key);
        var object = users[key];
        for (var i = 0; i < object.length; i++) {
            console.log(i + 1 + "-" + object[i].first_name + "-" + object[i].last_name + "-" + object[i].first_name.length + object[i].last_name.length);
        }

    }
}
console.log(printThings());