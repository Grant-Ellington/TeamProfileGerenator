class Intern{
    constructor(internName, internId, internEmail, internGit, internChoice) {
      this.internName = internName;
      this.internId = internId;
      this.internEmail = internEmail;
      this.internGit = internGit;
      this.internChoice = internChoice;
    }
  };

  let newIntern = new Intern ('Grant', '1234', 'test@test.com', 'name-name', 'Intern')
  console.log(newIntern)