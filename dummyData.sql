INSERT INTO employee (Name, Salary, Status, StartDate, Position, Manager, Address, WorkState, LivingState, Phone_Number, Email, SSN)
VALUES ('John Doe', '95,000', 1, '2021-08-16', 'Engineer', 0, '156B North Olive Street Lockport, NY 14094', 'NY', 'NY', '347-444-5555', 'John_Doe@gmail.com', '123-54-0987'),
('Cortney Pravin', '75,000', 1, '2021-05-26', 'Sales', 0, '2 Augusta Street Staten Island, NY 10312', 'NY', 'NY', '347-456-0000', 'Cortney_Pravin@gmail.com', '111-22-3333'),
('Mike Johnson', '105,000', 1, '2019-06-29', 'Manager', 0, '980 Wall Avenue Fresh Meadows, NY 11365', 'NY', 'NY', '555-123-4567', 'Mike_Johnson@gmail.com', '444-55-6666'),
('Hesham Snorri', '75,000', 1, '2020-08-19', 'Sales', 0, '16 Edgewood St. Brooklyn, NY 11220', 'NY', 'NY', '000-222-3333', 'Hesham_Snorri@gmail.com', '777-88-9999'),
('Amaury Posie', '95,000', 1, '2015-09-14', 'Repair Tech', 0, '5 Winchester St. Newburgh, NY 12550, 01234', 'NY', 'NY', '111-222-3333', 'Amaury_Posie@gmail.com', '101-09-8888'),
('Abram Liva', '95,000', 1, '2019-10-10', 'Driver', 0, '230 Gartner Drive Astoria, NY 11105', 'NY', 'NY', '444-555-6666', 'Abram_Liva@gmail.com', '888-89-6789');


INSERT INTO past_employee (Name, Salary, StartDate, Position, Phone_Number, Email, ReasonOfLeaving)
VALUES ('John Doe', '85,000', '2021-08-26', 'Sales', '347-444-5555', 'John_Doe@gmail.com', 'Quit'),
('Aldina Cathrine', '65,000', '2021-08-26', 'Sales', '123-545-0987', 'Aldina_Cathrine@gmail.com', 'Quit'),
('Eua Putri', '95,000', '2021-08-26', 'Driver', '123-545-0987', 'Eua_Putri@gmail.com', 'Fired'),
('Tena Hartwig', '75,000', '2021-08-26', 'Driver', '347-444-5555', 'Tena_Hartwig@gmail.com', 'Quit'),
('Jayadeva Lucky', '95,000', '2021-08-26', 'Sales', '347-444-5555', 'Jayadeva_Lucky@gmail.com', 'Fired'),
('Rakesh Tuor', '105,000', '2021-08-26', 'Manager', '347-444-5555', 'Rakesh_Tuor@gmail.com', 'Quit');

INSERT INTO employee_account (UserName, Password, Email, Phone_Number, SSN, User_Type)
VALUES ('JohnDoe123', 'Password123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'HR'),
('CortneyPravin', 'PCortney', 'Cortney_Pravin@gmail.com', '347-444-5555', '123-54-0987', 'Sales'),
('MikeJohnson', 'Password123', 'Mike_Johnson@gmail.com', '347-444-5555', '123-54-0987', 'Manager'),
('AbramLiva', 'Password123', 'Abram_Liva@gmail.com', '347-444-5555', '123-54-0987', 'Driver'),
('AmauryPosie', 'Password123', 'Amaury_Posie@gmail.com', '347-444-5555', '123-54-0987', 'Repair Tech'),
('Hesham Snorri', 'Password123', 'Hesham_Snorri@gmail.com', '347-444-5555', '123-54-0987', 'Sales');

INSERT INTO employee_benefits (Name, PTO, Health_Insurance, Food_Stipend, Dental_Insurance)
VALUES ('John Doe', '12', '600', '25', '500'),
('Cortney Pravin', '12', '600', '25', '500'),
('Mike Johnson', '12', '600', '25', '500'),
('Abram Liva', '12', '600', '25', '500');
