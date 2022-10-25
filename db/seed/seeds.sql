USE traker_db;
INSERT INTO department (name)
    VALUES("Cook"),
    ("Host"),
    ("Cleaner"),
    ("Owner")

INSERT INTO roles (title, salary, department_id)
    VALUES("Head Chef",80000,1),
    ("server",60000,2),
    ("Dish Washer",35000,3),
    ("CEO",100000,4)

INSERT INTO employee (first_name,last_name,roles_id,manager_id)
    VALUES('Robert','Willis', 1, 2),
    ('Samatha', 'Rock', 2),
    ('Chris', 'Newman', 3),
    ('Randy', 'middleton', 4,1)
    