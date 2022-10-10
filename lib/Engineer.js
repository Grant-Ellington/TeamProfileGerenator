class Engineer{
    constructor(engineerName, engineerId, engineerEmail, engineerGit, engineerChoice) {
      this.engineerName = engineerName;
      this.engineerId = engineerId;
      this.engineerEmail = engineerEmail;
      this.engineerGit = engineerGit;
      this.engineerChoice = engineerChoice;
    }
  };

  let newEngineer = new Engineer('Grant,', '1234', 'gellingtonem6@gmail.com', '1234', 'Intern')

  console.log(newEngineer)

  module.exports = Engineer