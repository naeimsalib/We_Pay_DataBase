
/*Fetch all Data in specific Tables*/

SELECT * FROM Employee_Table; /*Fitches allof Employee_table*/

SELECT * FROM Past_Employee_Table; /*Fitches allof Past_Employee_Table*/

SELECT * FROM Employee_Login_Table; /*Fitches allof Employee_Login_Table*/

/*--------------------------------------------*/
/*Look Up some specific Names in Tables*/

/*Look up a Name in the Employee Table*/
/*Using there Name*/
SELECT * FROM Employee_Table
WHERE Name = "";
/*Using there SSN*/
SELECT * FROM Employee_Table
WHERE SSN = "";
/*Using there ID*/
SELECT * FROM Employee_Table
WHERE ID = 1;

/*--------------------------------------------*/
/*Look up a Name in the Past_Employee_Table*/
SELECT * FROM Past_Employee_Table
WHERE Name = "";
/*Using there ID*/
SELECT * FROM Employee_Table
WHERE ID = 1;
/*Using there SSN*/
SELECT * FROM Employee_Table
WHERE Phone_Number = "";

/*--------------------------------------------*/
/*Look up a UserName in the Employee_Login_Table*/
/*Using there Username*/
SELECT * FROM Employee_Login_Table
WHERE UserName = "";

/*Using there Email*/
SELECT * FROM Employee_Login_Table
WHERE Email = "";

/*Using there SSN*/
SELECT * FROM Employee_Login_Table
WHERE SSN = "";

/*Get all Information from UserLogin Table for a spicific type of User*/
SELECT * FROM Employee_Login_Table
WHERE User_Type = "";
