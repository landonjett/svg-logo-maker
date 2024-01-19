const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function createLogo() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hex):'
        }
    ]);

    const shapeMap = {
        Circle: Circle,
        Triangle: Triangle,
        Square: Square
    };

    const shape = new shapeMap[answers.shape](answers.shapeColor);
    const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                            ${shape.render()}
                            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
                        </svg>`;

    fs.writeFileSync('examples/logo.svg', svgContent);
    console.log('Generated logo.svg');
}

createLogo();

