const mysql = require('mysql2');
const inquirer = require('inquirer');

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
      message: "Hello, please select from the following list.",
      name:"content",
      type:"list",
      choices:[
        "View Departments",
        "Add a Department",
        "View All Roles",
        "View one Role",
        "Add Role",
        "Update Employee Role",
        "View Employees",
        "View One Employee",
        "Quit App"
      ],
    },
  ]).then((response)=>{
    switch (response.content) {
      case "View Departments":
        viewDepartment();
        break;
      case "Add A Department":
        addDepartment();
        break;
      case "View All Roles":
        // viewRoles();
        break;
      case "View One Role":
        // viewSingleRole();
        break;
      case "Add Role":
        // addRole();
        break;
      case "Update Employee Role":
        // updateRole();
        break;
      case "View Employees":
        // viewEmployee();
        break;
      case "View One Employee":
        // viewSingleEmployee();
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

function viewDepartment(){
  db.query('SELECT * FROM department', function (err, results) {
    if (err) throw (err);
    console.log(results); 
  });
};

function addDepartment(){

}