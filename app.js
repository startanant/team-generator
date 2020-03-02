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
        message: "Manager Office Number: ",
        name: "managerOffice"
    }
];

function readCard(cardInfo) {
    const filename = cardInfo.role.toLowerCase();
    let html = fs.readFileSync(`templates/${filename}.html`, 'UTF8');
    
    // replace any {{ field }} from template and return
    // regex match: {{ field }}, extract substr: field
    html = html.replace(/{{([^}]*)}}/g, function(match) {
        const name = match.substr(3,match.length-6);
        return cardInfo[name] ? cardInfo[name] : ''; 
    });

    return html;
}

async function main(){
    const managerRequest = await inquirer.prompt(managerPrompts);
    console.log(managerRequest);

    const manager = new Manager(managerRequest.managerName, managerRequest.managerEmail, managerRequest.managerOffice);

    //generate html
    let team = '';
    team += readCard( manager );
    console.log(team);



}

main();