///////////////////////////////////////
// Lecture: Hoisting

/*
calculateAge(1965); // works here since it is a declaration

function calculateAge(year) {
  console.log(2020 - year);
}

//retirement(1956); // does not work here because it is an expression
let retirement = function(year) {
  console.log(65 - (2016 - year));
}


// Variables

// console.log(age); // does not work here because it is not initialized through the variable
let age = 23;


function foo() {
  let age = 65;
  console.log(age); // works here
}
foo();
console.log(age); // works here for the age 23
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
let a = 'Hello! ';
first();

function first() {
    let b = 'Hi! ';
    second();

    function second() {
        let c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
let a = 'Hello! ';
first();

function first() {
    let b = 'Hi! ';
    second();

    function second() {
        let c = 'Hey! ';
        third()
    }
}

function third() {
    let d = 'John';
    console.log(a + d); // Can only access variable a and d since b and c are out of scope
}
*/



///////////////////////////////////////
// Lecture: The this keyword

/*
calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}

let john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth)

    function innerFunction() {
      console.log(this)
    }
    innerFunction();
  }
}

john.calculateAge();

let mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/






