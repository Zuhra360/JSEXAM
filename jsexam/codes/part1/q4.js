var Person ={
    name: 'haya',
    age:15,

    introduce: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};

Person.introduce();