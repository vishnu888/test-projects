"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages_pb_1 = require("./generated/messages_pb");
var StudentImpl = /** @class */ (function () {
    function StudentImpl(firstName, lastName, middleName) {
        this.stud = new messages_pb_1.Student();
        this.stud.setFirstname(firstName);
        this.stud.setLastname(lastName);
        this.stud.setMiddlename(middleName);
    }
    StudentImpl.prototype.greetStudent = function () {
        console.log("Hello student " + this.stud.getFirstname() + " " + this.stud.getMiddlename() + " " + this.stud.getLastname());
    };
    return StudentImpl;
}());
function greetPerson(person) {
    console.log("Hello " + person.getFirstname() + " " + person.getLastname());
}
// let user = {"firstName": "Vishnu", "lastName": "Nimmagadda"};
var user = new messages_pb_1.Person();
user.setFirstname("Vishnu");
user.setLastname("Nimmagadda");
greetPerson(user);
var studIm = new StudentImpl("Vishnu", "Nimmagadda", "Nony");
studIm.greetStudent();
