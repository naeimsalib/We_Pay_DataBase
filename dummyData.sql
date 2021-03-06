INSERT INTO employee (Name, Salary, Status, StartDate, Position, Manager, EmployeeType, Hourly_Rate, Hours_Worked, Working_Hours, Address, WorkState, LivingState, Phone_Number, Email, SSN)
VALUES ('John Doe', 95000, 1, '2021-08-16', 'Engineer', 0, 'FT', 29, 80, 80, '156B North Olive Street Lockport, NY 14094', 'NY', 'NY', '347-444-5555', 'John_Doe@gmail.com', '123-54-0987'),
('Cortney Pravin', 75000, 1, '2021-05-26', 'Sales', 0, 'FT', 26, 80, 80, '2 Augusta Street Staten Island, NY 10312', 'NY', 'NY', '347-456-0000', 'Cortney_Pravin@gmail.com', '111-22-3333'),
('Mike Johnson', 105000, 1, '2019-06-29', 'Manager', 0, 'FT', 20, 80, 80, '980 Wall Avenue Fresh Meadows, NY 11365', 'NY', 'NY', '555-123-4567', 'Mike_Johnson@gmail.com', '444-55-6666'),
('Hesham Snorri', 75000, 1, '2020-08-19', 'Sales', 0, 'PT', 24, 5, 5, '16 Edgewood St. Brooklyn, NY 11220', 'NY', 'NY', '000-222-3333', 'Hesham_Snorri@gmail.com', '777-88-9999'),
('Amaury Posie', 95000, 1, '2015-09-14', 'Repair Tech', 0, 'PT', 80, 13, 13, '5 Winchester St. Newburgh, NY 12550, 01234', 'NY', 'NY', '111-222-3333', 'Amaury_Posie@gmail.com', '101-09-8888'),
('Abram Liva', 95000, 1, '2019-10-10', 'Driver', 0, 'FT', 12, 80, 160, '230 Gartner Drive Astoria, NY 11105', 'NY', 'NY', '444-555-6666', 'Abram_Liva@gmail.com', '888-89-6789');


INSERT INTO past_employee (Name, Salary, StartDate, Position, Phone_Number, Email, ReasonOfLeaving)
VALUES ('John Doe', 85000, '2021-08-26', 'Sales', '347-444-5555', 'John_Doe@gmail.com', 'Quit'),
('Aldina Cathrine', 65000, '2021-08-26', 'Sales', '123-545-0987', 'Aldina_Cathrine@gmail.com', 'Quit'),
('Eua Putri', 95000, '2021-08-26', 'Driver', '123-545-0987', 'Eua_Putri@gmail.com', 'Fired'),
('Tena Hartwig', 75000, '2021-08-26', 'Driver', '347-444-5555', 'Tena_Hartwig@gmail.com', 'Quit'),
('Jayadeva Lucky', 95000, '2021-08-26', 'Sales', '347-444-5555', 'Jayadeva_Lucky@gmail.com', 'Fired'),
('Rakesh Tuor', 105000, '2021-08-26', 'Manager', '347-444-5555', 'Rakesh_Tuor@gmail.com', 'Quit');

INSERT INTO employee_account (Name, UserName, Password, Email, Phone_Number, SSN, User_Type)
VALUES ('John Doe', 'JohnDoe', '123', 'John_Doe@gmail.com', '347-444-5555', '123-54-0987', 'Engineer'),
('Cortney Pravin', 'CortneyPravin', '123', 'Cortney_Pravin@gmail.com', '347-444-5555', '111-22-3333', 'Sales'),
('Mike Johnson', 'MikeJohnson', '123', 'Mike_Johnson@gmail.com', '347-444-5555', '444-55-6666', 'Manager'),
('Abram Liva', 'AbramLiva', '123', 'Abram_Liva@gmail.com', '347-444-5555', '888-89-6789', 'Driver'),
('Amaury Posie', 'AmauryPosie', '123', 'Amaury_Posie@gmail.com', '347-444-5555', '101-09-8888', 'Repair Tech'),
('Hesham Snorri', 'Hesham Snorri', '123', 'Hesham_Snorri@gmail.com', '347-444-5555', '777-88-9999', 'Sales'),
('Part Timer', 'PartTimer', '123', 'Part_Timer@gmail.com', '347-444-5555', '000-00-0000', 'Engineer'),
('Giselle Domingo', 'GiselleDomingo', '123', 'Giselle_Domingo@gmail.com', '347-444-5555', '123-54-0987', 'HR');

INSERT INTO employee_benefits (Name, PTO, Health_Insurance, Food_Stipend, Dental_Insurance)
VALUES ('John Doe', '12', '100', '50', '15'),
('Cortney Pravin', '12', '0', '50', '0'),
('Mike Johnson', '12', '0', '0', '0'),
('Hesham Snorri', '12', '100', '0', '0'),
('Amaury Posie', '12', '100', '0', '0'),
('Abram Liva', '12', '100', '50', '15');


INSERT INTO payroll (Name, HoursWorked, Salary, PaycheckDate, GrossPay, Taxes, Benefits, Total)
VALUES ('John Doe', 80, 95000, '2021-11-01 00:00:00', 3846.15, 713.81, 0, 3132.34),
('Cortney Pravin', 80, 75000, '2021-11-01 00:00:00', 2884.62, 432.96, 0, 2451.66),
('Mike Johnson', 80, 105000, '2021-11-01 00:00:00', 4038.46, 740.69, 0, 3297.77),
('Hesham Snorri', 5, 75000, '2021-11-01 00:00:00', 2884.62, 432.96, 0, 2451.66),
('Amaury Posie', 5, 95000, '2021-11-01 00:00:00', 3653.85, 686.92, 0, 2966.93),
('Abram Liva', 80, 95000, '2021-11-01 00:00:00', 3653.85, 686.92, 0, 2966.93);
