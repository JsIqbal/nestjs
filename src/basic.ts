class User {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  printDetails() {
    console.log(this.firstName, ' ', this.lastName, ' ', this.age);
  }
}

class Employee {
  user: User;

  constructor(user: User) {
    this.user = user;
  }

  print() {
    this.user.printDetails();
  }
}

const obj: User = new User('habibur', 'rahman', 30);

const emp: Employee = new Employee(obj);
emp.print();
