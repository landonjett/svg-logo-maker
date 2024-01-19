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

    test('renders correctly with invalid color', () => {
        const triangle = new Triangle();
        const defaultColor = 'black'; // Assuming black is your default
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${defaultColor}" />`);
    });
});

// Circle Tests
describe('Circle', () => {
    test('renders correctly with red color', () => {
        const circle = new Circle('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    test('renders correctly with no color (default)', () => {
        const circle = new Circle();
        const defaultColor = 'black'; // Assuming black is your default
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${defaultColor}" />`);
    });
});
