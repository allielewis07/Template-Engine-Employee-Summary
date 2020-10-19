const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer.js");
const Choices = require("inquirer/lib/objects/choices");
const teamMembers = []; 
// Start of function
// Inquirer team prompts:
function addManager (){
    inquirer.prompt([
        {
        type:"input",
        message: "what is your name?",
        name: "name"
        },
        {
        type:"input",
        message:"what is your office number?",
        name:"officeNumber"
        },
        {
        type:"input",
        message:"Enter team member's email address",
        name:"email" 
        },
        { 
        type:"input",
        message:"What is your Id number?",
        name: "id"
        }
        ])
    .then(function(response){
        const manager = new Manager(response.name,response.id,response.email,response.officeNumber)
        teamMembers.push(manager);
        fs.writeFileSync(outputPath,render(teamMembers),"utf-8")
    console.log("Team member has been created")
    teamRole();
        })
    }
    function addTeamMember(){
        inquirer.prompt([
        {type:"checkbox",
        message:"would you like to add a new team member?",
        choice:[yes,no],
        name:"addTeamMembers"
        }
        ])
        .then(function(addTeamMembers) {
            let newMember;
            if (newMember.choices === no) { return
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
                employees.push (newMember)
            } else if (role === "Manager") {
                newMember = new Manager(name, id, email, roleInfo)
                employees.push (newMember)
            }
            else if (role === "Engineer"){
                newMember = new Engineer (name, id, email, roleInfo)
            }
            addTeamMembers();
        })
    }
function teamRole(){
    inquirer.prompt([
        {type: "input",
        message: "What is your new team member's role?",
        name: 'role'
        }])
        .then(function(response){
            if (response.role === "Engineer"){
                addEngineer();
            }
            else if (response.role === "Intern"){
                addIntern();
            }
        })
}
function addEngineer (){
    inquirer
    .prompt([
    {
        type:"input",
        message:"What is your github?",
        name: "github"
        },
        {
        type:"input",
        message:"what is your name?",
        name:"name"
        },
        {
        type:"input",
        message:"Enter team member's email address",
        name:"email" 
        },
        { 
        type:"input",
        message:"What is your Id number?",
        name: "id"
        }
        ])
    .then(function(response){
        const newEngineer = new Engineer(response.name,response.id,response.email,response.github)
        teamMembers.push(newEngineer);
        fs.writeFileSync(outputPath,render(teamMembers),'utf-8')
    console.log("Team member has been created")
        })
    }
function addIntern(){
    inquirer.prompt([
        {
            type:"input",
            message:"what is your name?",
            name:"name"
            },
        { 
            type: "input",
            message: "What is your id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message:"What school are you attending?",
            name: "school"
        }
    ])
    .then(function(response){
        var newIntern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(newIntern);
        fs.writeFileSync(outputPath,render(teamMembers),'utf-8')
        console.log("Team member has been created")
    })
}
addManager();
addTeamMember();

