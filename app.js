const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
const Employee = require('./lib/employee');
const Manager = require('./lib/Manager');


const managerPrompts = [
    {
        type: "input",
        message: "Manager Name: ",
        name: "managerName"
    },
    {
        type: "input",
        message: "Manager E-mail: ",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Manager Office Number:",
        name: "managerOffice"
    }
];

async function main(){
    const managerRequest = await inquirer.prompt(managerPrompts);
    console.log(managerRequest);
}

main();