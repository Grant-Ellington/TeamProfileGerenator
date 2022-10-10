class Manager{
    constructor(managerName, managerId, managerOfficeNumber, managerChoice) {
      this.managerName = managerName;
      this.managerId = managerId;
      this.managerOfficeNumber = managerOfficeNumber;
      this.managerChoice = managerChoice;
    }
  };
 let m = new Manager ('Grant', '1234', '1234', 'Intern')
 console.log(m)
module.exports = Manager