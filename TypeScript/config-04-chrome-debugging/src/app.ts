class Department {
  private id: string | undefined;
  name: string;
  employees: string[] = []

  constructor(n: string){
    this.name = n;
  }

  describ() {
    console.log('Deparment: ' + this.name);
  }


  addEmployee(employees: string){
    this.employees.push(employees);
  }
}

class ITDepartment extends Department{
  constructor(id: string) {
    super(id);
  }
}

const accounting = new Department('Accounting');
accounting.describ();
accounting.addEmployee('Max');


const accountingCopy = {name: 'DUMMY' ,describe: accounting.describ}
accountingCopy.describe();