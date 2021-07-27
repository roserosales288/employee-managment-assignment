USE employee_db;
INSERT INTO department(name) values('sales'),
('engineering'),
('finance'),
('legal');


INSERT INTO role(title,salary,department_id) values
('sales lead',100000,1),
('salesperson',80000,1),
('lead engineer',150000,2),
('software engineer',120000,2),
('accountant',125000,3),
('legal team lead',250000,4),
('lawyer',190000,4),
('lead engineer',150000,2);


INSERT INTO employee(first_name,last_name,role_id) values
('John','Doe',1),
('Mike','Chan',2),
('Ashley','Rodriguez',3),
('Kevin','Tupik',4),
('Malia','Brown',5),
('Sarah','Lourd',6),
('Tom','Allen',7),
('Christian','Eckenrode',8);