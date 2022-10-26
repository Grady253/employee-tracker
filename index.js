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
    console.log(`Connected to the movies_db database.`)
);

db.query = utils.promisfy(db.query);


const createPost = async () => {

   const department = await db.query('SELECT * FROM department');

    console.log(department);
}

createPost();
// view all department 

//SELECT * FROM department 

//view all roles

//SELECT * FROM ROLE

//view all employees

//SELECT * EMPLOYEE

