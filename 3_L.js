//Liskov substitution principle - функции которые ипользуют базовый тип, они должны уметь с ним взаимодействовать,
// плюс взаимодействовать с подтипами данного базового типа при этом не зная ничего про это


//=========================Primer 1 =============================

// class Person {
//
// }
//
// class Member extends Person{
//   access(){
//     console.log('у тебя есть доступ');
//   }
// }
//
// class Guest extends Person {
//   isGuest = true
// }
//
// class Frontend extends Member {
//   canCreateWebApp() {
//
//   }
// }
//
// class Backend extends Member {
//   canCreateServer(){
//
//   }
// }
//
// class PersonFromDifferentCompany extends Guest {
//   access(){
//     throw new Error('У теья нет доступа')
//   }
// }
//
// function openSecretDoor(member){
//   member.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // here should be member

//================================Primer 2==============================

class Component {
  constructor(name) {
    this.name = name;
  }

}

class ComponentWithTemplate extends Component {
  constructor() {
    super();
  }

  render() {
    return `<div>${this.name}</div> `;
  }
}

class HigherOderComponent extends Component {
  constructor() {
    super();
  }
}

class HeaderComponent extends ComponentWithTemplate {
  constructor() {
    super();
    this.name = 'Header';
  }

  onInit() {
  }
}


class FooterComponent extends ComponentWithTemplate {
  constructor() {
    super();
    this.name = 'Footer';
  }

  afterInit() {
  }
}

//Hire oder component - компонент вышсшего порядка, в данном случае принимают другой класс на вход и возвращают
// другой модифицированный класс. Поэтому метода render у него не должно быть
class HOC extends HeaderComponent {
  constructor() {
    super();
    this.name = 'HOC';
  }

  render() {
    throw new Error('Render is impossible');
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }

}

function renderComponent(component) {
  console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
