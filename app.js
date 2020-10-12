const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer.js");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer.js");
const Choice = require("inquirer/lib/objects/choice");

const employees = []; 

// Start of function
function initApp (){
    startHtml();
    addMember();
}

    //Inquirer team prompts:
    function addMember(){
    inquirer.prompt([{
        message:"Enter team member's name",
        name:"name"
    },
    {
        type:"list",
        message: "choose team members role",
        choices: [
            "Intern",
            "Manager",
            "Engineer"
        ],
        name: "role"
    
    },
    {
        message:"Enter team member's Id",
        name:"id"
    },
    {
        message:"Enter team member's email address",
        name:"email" 
    }])
    .then(function({name,role,id,email}){
        let roleInfo= "";
        if (roleInfo === Engineer){
            roleInfo = "github username";
        }
        else if (roleInfo === Intern){
            roleInfo = "school name"
        }
        else {
            roleInfo ="office phone number"
    }
    }),
    inquirer.prompt([{
        message:"Enter team member's ${roleInfo}",
        name:"roleInfo"
    },
    {
        type:Checkbox,
        message:"Would you like to add another team member?",
        name:"moreMembers"
    }
    .then(function({roleInfo, moreMembers}){
        let addNewMember;
        if (role === "Engineer"){
            addNewMember = new Engineer (name , id , email , roleInfo); 
        } else if (role === "Intern"){
        addNewMember = new Intern (name, id, email ,roleInfo);
    } else (role === "Manager"){
        addNewMember = new Manager (name, Id , email ,roleInfo);
    }
    employees.push(addMember);
    addHtml(addMember)
    then (function(){
        if (moreMembers === "yes"){
            addNewMember();
        } else {
            finishHtml();
        }
    })
    })   
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
