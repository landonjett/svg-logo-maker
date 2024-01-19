const { Triangle, Circle, Square } = require('./shapes');

describe('Shape tests', () => {
    // Triangle Tests
    describe('Triangle', () => {
        test('renders correctly with blue color', () => {
            const triangle = new Triangle('blue');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });

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

    // Square Tests
    describe('Square', () => {
        test('renders correctly with green color', () => {
            const square = new Square('green');
            expect(square.render()).toEqual('<rect x="85" y="60" width="130" height="130" fill="green" />');
        });

        test('renders correctly with empty color string', () => {
            const square = new Square('');
            const defaultColor = 'black'; // Assuming black is your default
            expect(square.render()).toEqual(`<rect x="85" y="60" width="130" height="130" fill="${defaultColor}" />`);
        });
    });
});
