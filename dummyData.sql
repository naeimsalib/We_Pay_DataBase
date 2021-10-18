INSERT INTO employee (ID, Name, Salary, Status, StartDate, Position, Manager, Address, WorkState, LivingState, Phone_Number, SSN)
VALUES ('John Doe', '95,000', 1, '08-26-2021', 'Engineer', 0, '123 Main STreet, NewYork, NY, 01234', 'NY', 'NY', '347-444-5555', '123-54-0987'),
VALUES ('Cortney Pravin', '75,000', 1, '05-26-2021', 'Sales', 0, '123 first STreet, NewYork, NY, 01234', 'NY', 'NY', '347-456-0000', '111-22-3333'),
VALUES ('Mike Johnson', '105,000', 1, '06-20-2019', 'Manager', 0, '200 second STreet, NewYork, NY, 01234', 'NY', 'NY', '555-123-4567', '444-55-6666'),
VALUES ('Hesham Snorri', '75,000', 1, '08-19-2020', 'Sales', 0, '123 Main STreet, NewYork, NY, 01234', 'NY', 'NY', '000-222-3333', '777-88-9999'),
VALUES ('Amaury Posie', '95,000', 1, '09-14-2015', 'Repair Tech', 0, '123 Main STreet, NewYork, NY, 01234', 'NY', 'NY', '111-222-3333', '101-09-8888'),
VALUES ('Abram Liva', '95,000', 1, '10-10-2019', 'Driver', 0, '123 Main STreet, NewYork, NY, 01234', 'NY', 'NY', '444-555-6666', '888-89-6789');


INSERT INTO past_employee (ID, Name, Salary, StartDate, Position, Phone_Number, ReasonOfLeaving)
VALUES ('John Doe', '85,000', '08-26-2021', 'Sales', '347-444-5555', 'Quit'),
VALUES ('Aldina Cathrine', '65,000', '08-26-2021', 'Sales', '123-545-0987', 'Quit'),
VALUES ('Eua Putri', '95,000', '08-26-2021', 'Driver', '123-545-0987', 'Fired'),
VALUES ('Eua Putri', '75,000', '08-26-2021', 'Driver', '347-444-5555', 'Quit'),
VALUES ('Jayadeva Lucky', '95,000', '08-26-2021', 'Sales', '347-444-5555', 'Fired'),
VALUES ('Rakesh Tuor', '105,000', '08-26-2021', 'Manager', '347-444-5555', 'Quit');


INSERT INTO employee_account (UserName, Password, Email, Phone_Number, SSN, User_Type)
VALUES ('JohnDoe123', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'HR'),
VALUES ('CortneyPravin', 'PCortney', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Sales'),
VALUES ('MikeJohnson', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Manager'),
VALUES ('AbramLiva', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Driver'),
VALUES ('AmauryPosie', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Repair Tech'),
VALUES ('Hesham Snorri', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Sales');
