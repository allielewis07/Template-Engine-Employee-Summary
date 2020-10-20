const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamMembers = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer.js");
const Choice = require("inquirer/lib/objects/choice");
const employees = [];
// questions function
function questions() {
    // inquirer prompts for repeat
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        message: "Enter team member's Id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    },
    { message: "Enter Your office Number:",
    name: "officeNumber"
    } ,
    {
        type: "list",
        name: "membersChoice",
        message: "Would you like to add another team member? If so which type?",
        choices: [
            "Intern",
            "Engineer",
            "No, Thank you."
        ],
    }])
        // different credentials per role
        .then(function (answer) {
            let roleInfo = "";
            if (answer.membersChoice === "Engineer") {
                addEngineer();
            }
            else if (answer.membersChoice === "Intern"){ 
                addIntern();
            } else if (answer.memberChoice === "No, Thank you."){
                return; 
            }
        })
    }
    function addEngineer (){
        inquirer
        .prompt([
        {
            type:"input",
            message: "What is your github?",
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
            questions();
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
                message: "What school are you attending?",
                name: "school"
            }
        ])
        .then(function(response){
            var newIntern = new Intern(response.name, response.id, response.email, response.school);
            teamMembers.push(newIntern);
            fs.writeFileSync(outputPath,render(teamMembers),'utf-8')
            console.log("Team member has been created")
            questions();
        })
    }
//             inquirer.prompt([{
//                 message:`What is your ${roleInfo}`,
//                 name: "membersChoice"
//             }])
//                 // function to add more team members
//                 .then(function ({ moreMembers }) {
//                     let newMember;
//                     if (role === "Engineer") {
//                         newMember = new Engineer(name, id, email, github);
//                         employees.push (newMember)
//                     } else if (role === "Intern") {
//                         newMember = new Intern(name, id, email, roleInfo);
//                         employees.push (newMember)
//                     } else if (role === "Manager") {
//                         newMember = new Manager(name, id, email, officeNumber)
//                         employees.push (newMember)
//                     };
//                     // if yes: repeat file, if no: render to html
//                     if (moreMembers) {
//                         questions () 
//                     } else {
//                         var fs = require('fs')
//                         fs.writeFileSync (outputPath, render (employees), "utf8")
//                     }
//                 })
//         })
// }
questions ();