import {Person, Student} from "./generated/messages_pb";                 


class StudentImpl{
    private stud: Student;
    constructor(firstName: string, lastName: string, middleName: string ){
        this.stud = new Student();
        this.stud.setFirstname(firstName);
        this.stud.setLastname(lastName);
        this.stud.setMiddlename(middleName);
    }
    greetStudent(){
        console.log("Hello student "+this.stud.getFirstname()+" "+this.stud.getMiddlename()+" "+this.stud.getLastname());
    }
}

function greetPerson(person: Person){
    console.log("Hello "+person.getFirstname()+" "+person.getLastname());
}

// let user = {"firstName": "Vishnu", "lastName": "Nimmagadda"};
let user = new Person();
user.setFirstname("Vishnu");
user.setLastname("Nimmagadda");
greetPerson(user);


var studIm = new StudentImpl("Vishnu","Nimmagadda","Nony");
studIm.greetStudent();