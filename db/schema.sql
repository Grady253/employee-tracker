DROP DATABASE IF EXISTS tracker_db;

CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    Foreign Key (department_id)
    REFERENCES department (id)
);

CREATE TABLE employee (
   id INT AUTO_INCREMENT,
   first_name VARCHAR(30),
   last_name VARCHAR(30),
   role_id INT,
   manager_id INT,
   PRIMARY KEY (id),
   Foreign Key (role_id)
   REFERENCES role (id)
   ON DELETE CASCADE,
   FOREIGN KEY (manager_id)
   REFERENCES employee (id)
);