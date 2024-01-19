class Shape {
    constructor(color) {
        this.color = this.validateColor(color) ? color : 'black'; // Default to black if invalid
    }

    validateColor(color) {
        // Simple validation: a color is valid if it's a non-empty string.
        return typeof color === 'string' && color.trim() !== '';
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="85" y="60" width="130" height="130" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
