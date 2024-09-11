var Student = {
    name: 'Tani',
    age: 20,
    grades: [20, 25, 28, 30],

    AvgMark: function() {
        let sum = 0;
        const total = this.grades.length;
 
        for (let grade of this.grades) {
            sum += grade;
        }
      
        const avg = sum / total;
        
        console.log(`Average grade is ${avg}`);
    }
};

Student.AvgMark(); 