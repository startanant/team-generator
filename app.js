const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
const Employee = require('./lib/employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const managerPrompts = [
    {
        type: "input",
        message: "Manager Name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Manager E-mail: ",
        name: "email"
    },
    {
        type: "input",
        message: "Manager Office Number: ",
        name: "officeNumber"
    },
    {
        type: "input",
        message: "Team Size?: ",
        name: "teamSize"
    }
];

const engineerPrompts = [
    {
        type: "input",
        message: "Engineer Name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Engineer E-mail: ",
        name: "email"
    },
    {
        type: "input",
        message: "GitHub username: ",
        name: "github"
    }
];

const internPrompts = [
    {
        type: "input",
        message: "Intern Name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Intern E-mail: ",
        name: "email"
    },
    {
        type: "input",
        message: "School: ",
        name: "school"
    }
];

const typePrompts = [
    {
        type: "list",
        message: "Type of employee?",
        name: "choice",
        choices: ['Engineer', 'Intern']
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

    const manager = new Manager(managerRequest.name, managerRequest.email, managerRequest.officeNumber);

    //generate html
    let team = '';
    
    //generate manager card
    team += readCard( manager );
    //console.log(team);

    for( let userCnt=1; userCnt <= managerRequest.teamSize; userCnt++ ){
        const typeRequest = await inquirer.prompt(typePrompts);
        if (typeRequest.choice == 'Engineer') {
            const engineerRequest = await inquirer.prompt(engineerPrompts);
            const engineer = new Engineer(engineerRequest.name, engineerRequest.email, engineerRequest.github);
            team += readCard( engineer );

        }
        if (typeRequest.choice == 'Intern') {
            const internRequest = await inquirer.prompt(internPrompts);
            const intern = new Intern(internRequest.name, internRequest.email, internRequest.school);
            team += readCard( intern );
        }

       
    }


    //generate final output
    const html = readCard( { role: 'main', team: team } );
    console.log(html)
    fs.writeFileSync( 'output/team.html', html );

}

main();