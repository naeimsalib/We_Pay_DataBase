INSERT INTO employee (Name, Salary, Status, StartDate, Position, Manager, Address, WorkState, LivingState, Phone_Number, SSN)
VALUES ('John Doe', 95000, 1, '2021-08-16', 'Engineer', 0, '123 Main STreet, NewYork, NY, 01234', 'NY', 'NY', '347-444-5555', '123-54-0987'),
('Cortney Pravin', 75000, 1, '2021-05-26', 'Sales', 0, '123 first STreet, NewYork, NY, 01234', 'NY', 'NY', '347-456-0000', '111-22-3333'),
('Mike Johnson', 105000, 1, '2019-06-29', 'Manager', 0, '200 second STreet, NewYork, NY, 01234', 'NY', 'NY', '555-123-4567', '444-55-6666'),
('Hesham Snorri', 75000, 1, '2020-08-19', 'Sales', 0, '123 Main STreet, NewYork, NY, 01234', 'NY', 'NY', '000-222-3333', '777-88-9999'),
('Amaury Posie', 95000, 1, '2015-09-14', 'Repair Tech', 0, '123 Main STreet, NewYork, NY, 01234', 'NY', 'NY', '111-222-3333', '101-09-8888'),
('Abram Liva', 95000, 1, '2019-10-10', 'Driver', 0, '123 Main STreet, NewYork, NY, 01234', 'NY', 'NY', '444-555-6666', '888-89-6789');


INSERT INTO past_employee (Name, Salary, StartDate, Position, Phone_Number, ReasonOfLeaving)
VALUES ('John Doe', 85000, '2021-08-26', 'Sales', '347-444-5555', 'Quit'),
('Aldina Cathrine', 65000, '2021-08-26', 'Sales', '123-545-0987', 'Quit'),
('Eua Putri', 95000, '2021-08-26', 'Driver', '123-545-0987', 'Fired'),
('Eua Putri', 75000, '2021-08-26', 'Driver', '347-444-5555', 'Quit'),
('Jayadeva Lucky', 95000, '2021-08-26', 'Sales', '347-444-5555', 'Fired'),
('Rakesh Tuor', 105000, '2021-08-26', 'Manager', '347-444-5555', 'Quit');

INSERT INTO employee_account (UserName, Password, Email, Phone_Number, SSN, User_Type)
VALUES ('JohnDoe123', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'HR'),
('CortneyPravin', 'PCortney', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Sales'),
('MikeJohnson', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Manager'),
('AbramLiva', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Driver'),
('AmauryPosie', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Repair Tech'),
('Hesham Snorri', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Sales');

INSERT INTO employee_benefits (Name, PTO, Health_Insurance, Food_Stipend, Dental_Insurance)
VALUES ('John Doe', '12', '600', '25', '500'),
('Cortney Pravin', '12', '600', '25', '500'),
('Mike Johnson', '12', '600', '25', '500'),
('Abram Liva', '12', '600', '25', '500');
