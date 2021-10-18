/*Data Base for all current Employees*/
CREATE DATABASE wepay;
USE wepay;

CREATE TABLE employee (
eID int NOT NULL PRIMARY KEY AUTO_INCREMENT, /* Holds the Person ID*/
Name VarChar(255), /* holds the Employee Name*/
Salary VarChar(255),/*Holds the Employee Salary*/
Status int, /* Holds the Employee Work Status, 0 for not working , 1 for working*/
StartDate DATE, /*Holds the employee hiring date*/
Position VarChar(255), /*Holds there position*/
Manager int, /* 0 for False, and 1 for True*/
Address VarChar(255), /*Holds there address*/
WorkState VarChar(255), /*Holds there work station*/
LivingState VarChar(255),/*Holds were does the employee works from(State)*/
Phone_Number VarChar(255), /*Holds the employee Phone Number*/
SSN VarChar(255) /*Holds the Employee SSN*/
);

/*Holds data for past employees, and why they Left(Fired or Quit)*/

CREATE TABLE past_employee (
peID int NOT NULL PRIMARY KEY AUTO_INCREMENT, /* Holds the Person ID*/
Name VarChar(255), /* holds the Employee Name*/
Salary VarChar(255),/*Holds the Employee Salary*/
StartDate DATE, /*Holds the employee hiring date*/
Position VarChar(255), /*Holds there position*/
Phone_Number VarChar(255), /*Holds the employee Phone Number*/
ReasonOfLeaving VarChar(255) /*Holds Reason for Leaving the Company*/
);

/*Employee Login DataBase and there account Information*/
CREATE TABLE employee_account(
UserName VarChar(255) PRIMARY KEY,
Password VarChar(255),
Email VarChar(255),
Phone_Number VarChar(255),
SSN VarChar(255),
User_Type VarChar(255)
);
