//file requires
const inquirer = require('inquirer')
const fs = require('fs')
//question array
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
        message:"What is the manager's email address",
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message:"What is the manager's name",
    },
    
]
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
        message:"What is the engineer's email address",
    },
    {
        type: 'input',
        name: 'engineerGit',
        message:"What is the manager's Github username",
    },
]
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
        message:"What is the intern's email address",
    },
    {
        type: 'input',
        name: 'internGit',
        message:"What is the intern's Github username",
    },
]
//HTMLGeneration
//writeFile
// Wrrite file will take the question prompts and add to the array 
//init section