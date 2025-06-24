// Define the Students class
class Students {
    constructor(firstName, lastName, age, grade) {
        this.firstName = firstName; // Student's first name
        this.lastName = lastName;   // Student's last name
        this.age = age;             // Student's age
        this.grade = grade;         // Student's grade or school level
        this.scores = 0;            // Initial score set to 0
    }

    // Method to mark attendance
    attendClass() {
        console.log(`${this.firstName} is present`);
    }

    // Method for student to raise hand and ask for permission
    raiseHand(reason) {
        console.log(`${this.firstName} is raising their hand to ask for permission to ${reason}`);
    }
}

// Define the Teachers class
class Teachers {
    constructor(firstName, lastName, subject) {
        this.firstName = firstName; // Teacher's first name
        this.lastName = lastName;   // Teacher's last name
        this.subject = subject;     // Subject the teacher teaches
    }

    // Method to add points to a student's score
    addPoints(student, points) {
        student.scores += points;
        console.log(`Teacher ${this.firstName} gave ${points} points to ${student.firstName}. Total score: ${student.scores}`);
    }

    // Method to remove points from a student's score
    subtractPoints(student, points) {
        student.scores -= points;
        console.log(`Teacher ${this.firstName} took away ${points} points from ${student.firstName}. Current score: ${student.scores}`);
    }

    // Method to view a student's current score
    viewScores(student) {
        console.log(`${student.firstName}'s current score is ${student.scores}`);
    }

    // Method to explain a topic
    explainTopic(topic) {
        console.log(`Teacher ${this.firstName} is explaining the topic: ${topic}`);
    }
}

// Create instances of Students
const John = new Students("John", "Smith", 15, "5th grade");
const Peter = new Students("Peter", "Brown", 16, "5th grade");

// Create an instance of Teachers
const Anna = new Teachers("Anna", "Johnson", "Math");

// Simulate interactions
John.attendClass(); // John is present
John.raiseHand("participate in class"); // John wants to participate

Anna.explainTopic("Fractions"); // Teacher explains topic
Anna.addPoints(John, 100); // Teacher adds points
Anna.subtractPoints(John, 5); // Teacher subtracts points
Anna.viewScores(John); // View current score
