//Open Close Principle - классы  должны быть открыты для расширения, но закрыты для модификации.
// В классе есть набор методов, нужно отнаслеоавть класс и расширить методы.

class Shape {
  area() {
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return (this.radius ** 2) * Math.PI;
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.heaight = height;
  }

  area() {
    return this.width * this.heaight;
  }
}

class Triangle extends Shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  area() {
    return (this.a * this.b) / 2;
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, curr) => {
      acc += curr.area();
      return acc;
    }, 0);
  }
}

const calc = new AreaCalculator([
  new Square(10),
  new Circle(1),
  new Circle(5),
  new Rect(10, 20),
  new Triangle(10, 15)
]);

console.log(calc.sum()); //181.68140899333463

