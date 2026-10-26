const express = require("express");

const app = express();

let students = [];

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.post("/add-student", function(req, res) {

    const name = req.body.name;
    const age = req.body.age;
    const course = req.body.course;

    students.push({
        name: name,
        age: age,
        course: course
    });

    console.log("Student added successfully!");

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);

    res.send("Student added successfully!");
});


app.get("/students", function(req, res) {

    let output = "<h1>Student List</h1>";

    if (students.length === 0) {
        output += "<p>No students found.</p>";
    }
    else {
        students.forEach(function(student) {
            output += "<p>";
            output += "Name: " + student.name + "<br>";
            output += "Age: " + student.age + "<br>";
            output += "Course: " + student.course;
            output += "</p>";

            output += "<hr>";
        });
    }

    res.send(output);
});


app.get("/search", function(req, res) {

    const searchName = req.query.name;

    let result = "<h1>Search Student</h1>";

    let found = false;

    students.forEach(function(student) {

        if (student.name.toLowerCase() === searchName.toLowerCase()) {

            result += "<p>";
            result += "Name: " + student.name + "<br>";
            result += "Age: " + student.age + "<br>";
            result += "Course: " + student.course;
            result += "</p>";

            found = true;
        }
    });

    if (found === false) {
        result += "<p>Student not found.</p>";
    }

    res.send(result);
});


app.listen(3000, function() {
    console.log("Server is running on http://localhost:3000");
});