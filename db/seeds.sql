INSERT INTO department (id,name)
    VALUES (1,"Cook"),
    (2,"Host"),
    (3,"Cleaner"),
    (4,"Owner");

INSERT INTO role (id,title, salary, department_id)
    VALUES (1, "Head Chef", 80000, 1),
    (2,"server",60000, 2),
    (3,"Dish Washer", 35000, 3),
    (4,"CEO", 100000, 4);

INSERT INTO employee (id,first_name,last_name,role_id,manager_id)
    VALUES (1,'Robert','Willis', 1, 2),
    (2,'Samatha', 'Rock', 2, NULL),
    (3,'Chris', 'Newman', 3, NULL),
    (4,'Randy', 'Middleton', 4, 1),
    (5, 'Rack', 'Sheet', 2, NULL),
    (6, 'Western', 'Sockman',3,NULL),
    (7, 'Black', 'Smith', 1, NULL),
    (8, 'Charles', 'Digs', 2, NULL),
    (9, 'Simon', 'Smiley', 1, NULL);