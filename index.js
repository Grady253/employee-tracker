const mysql = require('mysql2');
const inquirer = require('inquirer');
const utils = require('util');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);

// view all department 

//SELECT * FROM department 

//view all roles

//SELECT * FROM ROLE

//view all employees

//SELECT * EMPLOYEE

function start () {
  inquirer.prompt([
    {
      Type: list,
      message: "Hello, please select from the following list.",
      name:content,
      choice:[
        "View Departments",
        "Add a Department",
        "View All Roles",
        "View one Role",
        "Add Role",
        "Update Employee Role",
        "View Employees",
        "View One Employee",
        "Quit App"
      ]
    }
  ]).then((response)=>{

  })
}

start();