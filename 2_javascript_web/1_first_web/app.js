let hobbies = ['Sports', 'Coding', 'Reading'];
let personalId = {
    title: 'Researcher',
    Age: 27,
    company: 'KT',
    salary: 6000
};

let adultAge;
function calculaterAdultAge(userAge) {
    return userAge - 18;
}

alert(calculaterAdultAge(personalId.Age));
alert(adultAge);