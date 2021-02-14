const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generate.HTML.js');
const writeToFile = require('./src/generate.site.js')

let manager = [];
let engineer = [];
let intern = [];


function Prompt() {
    
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?"
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"What is the Manager's office number?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEmployee',
                        message: "Do you want to add another employee?",
                        default: false
                    }])
                    .then(({office, anotherEmployee}) => {
                        manager.push(new Manager(employee, id, email, office))
                        
                        if (anotherEmployee) {
                            return Prompt();
                        }
                        processPrompts(manager,engineer,intern);
                    })
            } 
            else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's Github username?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEmployee',
                        message: "Do you want to add another employee?",
                        default: false
                    }])
                    .then(({github, anotherEmployee}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        if (anotherEmployee) {
                            return Prompt();
                        }
                        processPrompts(manager,engineer,intern);
                    })
            } 
            else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "What is the Intern's school?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEmployee',
                        message: "Do you want to add another employee?",
                        default: false
                    }])
                    .then(({school, anotherEmployee}) => {
                        intern.push(new Intern(employee, id, email, school))
                        if (anotherEmployee) {
                            return Prompt();
                        }
                        processPrompts(manager,engineer,intern);
                    })
            }
            
    });
         
        
}

function processPrompts(manager,engineer,intern){

    var fileName = "dist/index.html";
    // genrate HTML text
    var htmlText = generateHtml(manager, engineer, intern);
    // write markdown text to file
    writeToFile(fileName, htmlText);
}

Prompt();

