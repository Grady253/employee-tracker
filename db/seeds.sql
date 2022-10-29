INSERT INTO department (name)
    VALUES ("Cook"),
    ("Host"),
    ("Cleaner"),
    ("Owner");

INSERT INTO role (title, salary, department_id)
    VALUES ("Head Chef", 80000, 1),
    ("server",60000, 2),
    ("Dish Washer", 35000, 3),
    ("CEO", 100000, 4);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
    VALUES ("Robert","Willis", 1,NULL),
    ("Samatha", "Rock", 2,NULL),
    ('Chris', 'Newman', 3,NULL),
    ('Randy', 'Middleton', 4,NULL),
    ('Rack', 'Sheet', 2, NULL);