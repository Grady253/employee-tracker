const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
);

function start () {
  inquirer.prompt([
    {
      message: "Hello, please select from the following list.",
      name:"content",
      type:"list",
      choices:[
        "View Departments",
        "Add Department",
        "View All Roles",
        "Add Role",
        "Update Role",
        "View Employee",
        "Add Employee",
        "Quit App"
      ],
    },
  ]).then((response)=>{
    switch (response.content) {
      case "View Departments":
        viewDepartment();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "Add Role":
        addRole();
        break;
      case "Update Role":
        // updateRole();
        break;
      case "View Employee":
        viewEmployee();
        break;
      case "Add Employee":
        // addEmployee();
        break;
      case "Quit App":
        db.end();
        break;
      default:
        db.end();
        break;
    }
  });
};

start();

function addDepartment(){
 inquirer.prompt([
   {
     message:"Name of new department?",
     name:"departmentName",
     type:"input" 
   }
 ]).then((response)=>{
   db.query('INSERT INTO department (name) VALUES (?)', response.departmentName, (err, results)=>{
     if (err) throw (err);
   });
   start();
 });
}

function viewDepartment(){
  db.query('SELECT * FROM `department`', function (err, results) {
    if (err) throw (err);
    console.table(results); 
  });
  start();
};

function addRole(){
  db.query('SELECT * FROM department', function (err, results){
    if (err) throw err;
    const data = results.map(department => ({ 
        name: department.name,
        value: department.id
    }));
    inquirer.prompt([
      {
        message:"What's the name of the new role?",
        name:"title",
        type:"input"
      },
      {
        message:"How much will this position make per year?",
        name:"Salary",
        type:"input"
      },
      {
        message:"Which department does this role belong to?",
        name:"department",
        type:"list",
        choices:data
      }
    ]).then((response)=>{
      db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",[results.title, results.Salary, results.department], function (err, results){
        if (err) throw (err);
      });
      console.table(response);
      start();
    })
  });
}

function viewRoles(){
  db.query('SELECT * FROM `role`', function (err, results) {
    if (err) throw (err);
    console.table(results); 
  });
  start();
};


function viewEmployee(){
  db.query('SELECT * FROM `employee`', function (err, results) {
    if (err) throw (err);
    console.table(results); 
  });
  start();
};
