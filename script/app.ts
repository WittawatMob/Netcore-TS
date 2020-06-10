function TSButton() {
    let name: string = "Fred";
    document.getElementById("ts-example").innerHTML = greeter(user);
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Person {
    firstName: string;
    middleName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.middleName} ${person.lastName}`;
}

let user = new Student("Fred", "M.", "Smith");