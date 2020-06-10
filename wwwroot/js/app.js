function TSButton() {
    let name = "Fred";
    document.getElementById("ts-example").innerHTML = greeter(user);
}
class Student {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}
function greeter(person) {
    return `Hello ${person.firstName} ${person.middleName} ${person.lastName}`;
}
let user = new Student("Fred", "M.", "Smith");
//# sourceMappingURL=app.js.map