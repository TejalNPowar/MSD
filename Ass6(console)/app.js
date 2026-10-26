const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let students = [];

function showMenu() {
    console.log("\n================================");
    console.log("     Node.js Console Program");
    console.log("================================");
    console.log("1. Add Student");
    console.log("2. View Students");
    console.log("3. Search Student");
    console.log("4. Exit");

    rl.question("Enter your choice: ", function(choice) {

        if (choice === "1") {

            rl.question("Enter student name: ", function(name) {

                rl.question("Enter student age: ", function(age) {

                    rl.question("Enter student course: ", function(course) {

                        students.push({
                            name: name,
                            age: age,
                            course: course
                        });

                        console.log("Student added successfully!");

                        showMenu();
                    });
                });
            });

        }
        else if (choice === "2") {

            if (students.length === 0) {
                console.log("No students found.");
            }
            else {
                console.log("\n----- Student List -----");

                students.forEach(function(student) {
                    console.log("Name:", student.name);
                    console.log("Age:", student.age);
                    console.log("Course:", student.course);
                    console.log("------------------------");
                });
            }

            showMenu();
        }

        else if (choice === "3") {

            rl.question("Enter student name to search: ", function(searchName) {

                let found = false;

                students.forEach(function(student) {

                    if (student.name.toLowerCase() === searchName.toLowerCase()) {

                        console.log("\nStudent Found!");
                        console.log("Name:", student.name);
                        console.log("Age:", student.age);
                        console.log("Course:", student.course);

                        found = true;
                    }
                });

                if (found === false) {
                    console.log("Student not found.");
                }

                showMenu();
            });
        }

        else if (choice === "4") {
            console.log("Program exited.");
            rl.close();
        }

        else {
            console.log("Invalid choice!");
            showMenu();
        }
    });
}

showMenu();