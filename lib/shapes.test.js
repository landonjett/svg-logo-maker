const { Triangle, Circle, Square } = require('./shapes');

describe('Shape tests', () => {
    // Triangle Tests
    describe('Triangle', () => {
        test('renders correctly with blue color', () => {
            const triangle = new Triangle('blue');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
  