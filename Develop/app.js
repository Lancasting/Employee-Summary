const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const questions = [
    {
        type: "list",
        name: "role",
        message: "What type of employee are you?",
        choices: ["manager", "intern", "engineer"]
    },
    {
        type: "input",
        name: "name",
        message: "What is their name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email"
    }
]

const initEmployee = async () => {
    const { role, name, id, email } = await inquirer.prompt(questions);

    switch (role) {
        case "Manager":
            const { promptManager } = await inquirer.prompt({
                message: "Office number?",
                name: "officenumber"
            })
            employees.push(new Manager(name, id, email, officeNumber))
            break;
        case "Intern":
            const { promptIntern } = await inquirer.prompt({
                message: "What School does this person attend?",
                name: "school"
            })
            employees.push(new Intern(name, id, email, school))
            break;
        case "Engineer":
            const { promptEngineer } = await inquirer.prompt({
                message: "What is their github username?",
                name: "github"
            })
            employees.push(new Manager(name, id, email, github))
            break;
    }
    const init = async (employees) => {
        const { newEmployee } = await inquirer.prompt({
            type: "confirm",
            name: "newEmployee",
            message: "Do you want to add another?"
        })
        if (newEmployee) {
            initEmployee();
        }
        else if (employees.length > 0) {
            if (fs.existsSync(OUTPUT_DIR)) {
                return fs.writeFile(outputPath, render(employees))
            } else {
                return fs.mkdir(OUTPUT_DIR); err => {
                    if (err) throw err
                }
            }
        }
    }
    init();
}
initEmployee();
// if (data.choices === "Manager") {
//     promptManager();
// }
// else if (data.choices === "Engineer") {
//     promptEngineer();
// }
// else if (data.choices === "Inter") {
//     promptIntern();
// }
// else {
//     return console.log("Something went wrong. Please try again");
// }

// function promptManager() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the managers name"
//         },
//         {
//             type: "input",
//             name: 'id',
//             message: "What is the managers I.D."
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is the managers email address?"
//         },
//         {
//             type: "input",
//             name: "officeNumber",
//             message: "What is the managers office number?"
//         }

//     ]).then(function (data) {
//         const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
//         renderManager(manager);
//     })
// }

// function promptEngineer() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the managers name"
//         },
//         {
//             type: "input",
//             name: 'id',
//             message: "What is the managers I.D."
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is the managers email address?"
//         },
//         {
//             type: "input",
//             name: "github",
//             message: "What is the managers office number?"
//         }

//     ]).then(function (data) {
//         const engineer = new Manager(data.name, data.id, data.email, data.github)
//         renderEngineer(engineer)
//     })
// }

// function promptIntern() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the managers name"
//         },
//         {
//             type: "input",
//             name: 'id',
//             message: "What is the managers I.D."
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is the managers email address?"
//         },
//         {
//             type: "input",
//             name: "School",
//             message: "What is the managers office number?"
//         }

//     ]).then(function (data) {
//         const intern = new Intern(data.name, data.id, data.email, data.school)
//     })
// }
// function createTeam() {

// }

//     function buildTeam() {
//         fs.writeFileSync("main.html", render,
//         (err) => {
//             if (err) throw err;
//         })

















//         promptUser();
// }
// // all functions should be in one massive function
// init();
// if answer = engineer then run engineer function for questions

// function init() {
//     function promptUser() {
//         inquirer.prompt([
//             {
//                 type: "list",
//                 name: "role",
//                 message: "What is the employees role?",
//                 choice: [
//                     "Manager",
//                     "Engineer",
//                     "Intern"
//                 ]
//             }
//         ]).then(function (data) {
//             switch (role) {

// if (fs.existsSync(OUTPUT_DIR)) {
//     fs.writeFile(outputPath, render(employees))
// } else {
//     fs.mkdir(OUTPUT_DIR).then
// }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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

// let employees = []
// push answers into array
// build teams function
// writefilesync (outputpath, render(employees))
