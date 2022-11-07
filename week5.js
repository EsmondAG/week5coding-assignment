class Employee {
    constructor(name, title ) {
        this.name = name;
        this.title = title;
    }

    describe() {
        return '${this.name} is a ${this.title}.';
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.employees =[];
    }

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        }else {
         throw new Error(`You can only add an instance of Employee. Argument is not a employee: ${employee}`);
        
        }
    }
    describe() {
        return `$(this.name) has ${this.employees.length} employee.`;

    }
}

class Menu {
    constructor() {
        this.company =[];
        this.selectedCompany = null;
    }
start() {
    let selection = this.showMainMenuOptions();
    while(selection != 0) {
        switch (selection) {
            case `1`:
                this.createCompany();
                break;
            case `2`:
                this.viewCompany();
                break;
            case `3`:
                this.deleteCompany():
            case `4`:
                this.displayCompany();
                break;
            default:
                selection = 0;

        }
        selection = this.showMainMenuOptions();

        alert (`See you later !`);
}
showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new Company
    2) view a Company
    3) display a Company
    `);
}

showCompanyMenuOpions(companyInfo) {
    return prompt(`
        0) back
        1) create employee
        2) delete employee
        ------------------------
        ${teamInfo}
    `);
}

displayCompany() {
    let compnayString = '';
    for (let i = 0; i < this.company.length; i++) {
       companyString += i + ')' + this.company[i].name + '\n';
       this.Company.push(new Company(name)); 
    }
    alert(companyString);
}
createCompany() {
    let name = prompt('Enter name for new Company:');
    this.company.push(new Company(name));

}
viewCompany() {
    let index = prompt('Enter the index of the Company you wish to view:');
    if (index > -1 && index < this.Company.length) {
        this.selectedCompany = this,company[index];
        let description = 'Company Name: ' +this.selectedCompany.name + '/n';

        for (let i = 0; i < this.selectedCompany.employee.length; i++) {
            description += i + ') ' + this.selectedCompany.employee[i].name
             + ' - ' + this.selectedCompany.employee[i].title + '\n';
        }

        let selection = this.showCompanyMenuOpions(description);
        switch (selection) {
          case '1': 
            this.createEmployee();
            break;
          case '2':
            this.deleteEmployee();


        }
    }
}

let menu = new Menu()
menu.start();
