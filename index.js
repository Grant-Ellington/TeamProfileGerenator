//file requires
const inquirer = require('inquirer');
const fs = require('fs');
//question array

//empty card array that holds card data
const cards = [];

// Each below with ----Questions are question array that contain the questions for each 
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message:"What is the manager's name?",
    },
    {
        type: 'input',
        name: 'managerId',
        message:"What is the manager's employee id?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message:"What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message:"What is the manager's name?",
    },
    {
        type: 'list',
        name: 'managerChoices',
        message: "What team member position would you like to add?",
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'I am done adding team members.'
        ]
    }
    
];
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message:"What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'engineerId',
        message:"What is the engineer's employee id?",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message:"What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'engineerGit',
        message:"What is the manager's Github username?",
    },
    {
        type: 'list',
        name: 'engineerChoices',
        message: "What team member position would you like to add?",
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'I am done adding team members.'
        ]
    }
];
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message:"What is the intern's name?",
    },
    {
        type: 'input',
        name: 'internId',
        message:"What is the intern's employee id?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message:"What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'internGit',
        message:"What is the intern's Github username?",
    },
    {
        type: 'list',
        name: 'internChoices',
        message: "What team member position would you like to add?",
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'I am done adding team members.'
        ]
    }
]

// create------Card create the HTML for the cards and adds the HTML to the card array
const createManagerCard = (managerData) => {
    managerCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${managerData.managerName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">${managerData.managerId}</p>
      <a href="${managerData.managerEmail}" class="card-link">Email${managerData.managerEmail}</a>
      <a href="#" class="card-text">${managerData.managerOfficeNum}</a>
    </div>`
    cards.push(managerCard);
};

const createInternCard = (internData) => {
    internCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${internData.internName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">${internData.internId}</p>
      <a href="${internData.internEmail}" class="card-link">Email${internData.internEmail}</a>
      <a href="#" class="card-text">${internData.internGit}</a>
    </div>`
    cards.push(internCard);
};
const createEngineerCard = (engineerData) => {
    engineerCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineerData.engineerName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">${engineerData.engineerId}</p>
      <a href="${engineerData.engineerEmail}" class="card-link">Email${engineerData.engineerEmail}</a>
      <a href="#" class="card-text">${engineerData.engineerGit}</a>
    </div>`
    cards.push(engineerCard);
};

// create--------HTML excutes prompts and sends data to create cards
function createManagerHTML () {
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            const managerData = answers;
            createManagerCard(managerData);

            if(managerData.managerChoices === 'Manager') {
                createManagerHTML()
            } else if(managerData.managerChoices === 'Engineer') {
                createEngineerHTML()
            }else if (managerData.managerChoices === 'Intern') {
                createInternHTML()
            } else {
                createFile()
            }
        });
};
function createEngineerHTML () {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const engineerData = answers;
            createEngineerCard(engineerData);

        if(engineerData.engineerChoices === 'Manager') {
            createManagerHTML()
        } else if(engineerData.engineerChoices === 'Engineer') {
            createEngineerHTML()
        }else if (engineerData.engineerChoice === 'Intern') {
            createInternHTML()
        } else {
            createFile()
        }
    });
};

function createInternHTML () {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const internData = answers;
            createInternCard(internData);

            if(internData.internChoices === 'Manager') {
                createManagerHTML()
            } else if(internData.internChoices === 'Engineer') {
                createEngineerHTML()
            }else if (internData.internChoices === 'Intern') {
                createInternHTML()
            } else {
                createFile()
            }
        });
}
//HTMLGeneration
//writeFile
// Wrrite file will take the question prompts and add to the array 
//init section
// const fileHTML = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Generator</title>
//     <link rel = stylesheet href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//     <link rel = "stylesheet" type = "text/css" href="./style.css">
// </head>
// <body>
//     <div class="navbar-expand-sm">
//         <h1>Team Generator</h1>
//     </div>
//     <div class="conatianer-sm">
//         ${cards}
//     </div>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
// </body>
// </html>`
function createFile () { 
    const fileHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel = stylesheet href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel = "stylesheet" type = "text/css" href="./style.css">
    </head>
    <body>
        <div class="navbar-expand-sm">
            <h1>Team Generator</h1>
        </div>
        <div class="conatianer-sm">
            ${cards}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
    </html>`
//console.log(cards)
console.log(fileHTML);
 fs.writeFile('dist/index.html', fileHTML, (err) =>
    err ? console.log(err) :console.log('success'))
}
function init() {
    //console.log(card)

    createManagerHTML()
};

init();