CREATE DATABASE ongc_safety;

USE ongc_safety;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role ENUM('user','admin','administration') NOT NULL,
    department VARCHAR(100),
    status VARCHAR(20) DEFAULT 'active'
);

INSERT INTO employees
(employee_id, full_name, email, password, role, department)
VALUES
('ONGC001','Rahul Sharma','rahul@ongc.com','rahul123','user','Drilling'),
('ONGC002','Priya Das','priya@ongc.com','priya123','user','Safety'),
('ONGC003','Amit Roy','amit@ongc.com','amit123','user','Production'),
('ONGC004','Sneha Gupta','sneha@ongc.com','sneha123','user','Operations'),
('ONGC005','Rakesh Singh','rakesh@ongc.com','rakesh123','user','Maintenance'),
('ONGC006','Ananya Paul','ananya@ongc.com','ananya123','user','Refinery'),
('ONGC007','Sourav Deb','sourav@ongc.com','sourav123','admin','Safety'),
('ONGC008','Karan Mehta','karan@ongc.com','karan123','admin','Operations'),
('ONGC009','Meera Nair','meera@ongc.com','meera123','admin','Management'),
('ONGC010','Vikram Rao','vikram@ongc.com','vikram123','administration','Head Office');