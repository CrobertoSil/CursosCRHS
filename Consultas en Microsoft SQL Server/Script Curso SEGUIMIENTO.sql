----- inner join
select * from  Customers
select * from Orders


select c.CustomerID, c.CompanyName, c.CompanyName, c.ContactName, c.Country, o.OrderID, o.OrderDate  
from Customers c inner join Orders o
on c.CustomerID = o.CustomerID
where c.Country = 'USA'

-----CONSULTA DE MAS DE DOS TABLAS 
select c.CustomerID, c.CompanyName, c.CompanyName, c.ContactName, c.Country, o.OrderID, o.OrderDate, p.ProductName, d.UnitPrice, d.Quantity  
from Customers c inner join Orders o
on c.CustomerID = o.CustomerID
inner join [Order Details] d on o.OrderID = d.OrderID
inner join Products p on d.ProductID = p.ProductID


----UNIR LA TABLA SUPPLIERS CON PRUDUCT
SELECT * FROM Suppliers
SELECT * FROM Products
SELECT * FROM Categories

SELECT P.ProductName, S.CompanyName, C.CategoryName
FROM Products P INNER JOIN Suppliers S
ON P.SupplierID = S.SupplierID
INNER JOIN Categories C ON P.CategoryID = C.CategoryID


----LEFT Y RIGHT OUTER JOIN
select * from  Customers
select * from Orders

select c.CustomerID, c.CompanyName, c.CompanyName, c.ContactName, c.Country, o.OrderID, o.OrderDate  
from Customers c LEFT OUTER JOIN Orders o
on c.CustomerID = o.CustomerID
WHERE O.OrderID IS NULL

----GENERAR NUEVAS TABLAS A PARTIR DE LOS DATOS DE CUSTOMERS Y ORDERS

SELECT * 
INTO CLIENTES
FROM Customers

SELECT *
INTO ORDENES
FROM Orders

DELETE CLIENTES WHERE CustomerID = 'ANTON'

SELECT C.CustomerID,C.CompanyName, C.ContactName, C.Country, O.OrderID, O.OrderDate
FROM CLIENTES C RIGHT OUTER JOIN ORDENES O
ON C.CustomerID = O.CustomerID
WHERE C.CustomerID IS NULL

---CROSS JOIN
SELECT * FROM CLIENTES
SELECT * FROM ORDENES

SELECT C.CustomerID,C.CompanyName, C.ContactName, C.Country, O.OrderID, O.OrderDate
FROM CLIENTES C CROSS JOIN ORDENES O


---SELFT JOIN
SELECT * FROM Employees

SELECT E.EmployeeID, E.FirstName, E.LastName, E.ReportsTo FROM Employees E

SELECT J.FirstName, J.LastName, S.FirstName, S.LastName
FROM Employees J INNER JOIN Employees S
ON J.EmployeeID = S.ReportsTo

----CONCATENAR 
SELECT J.FirstName +' '+ J.LastName AS JEFE, S.FirstName +' '+ S.LastName AS SUBALTERNO
FROM Employees J INNER JOIN Employees S
ON J.EmployeeID = S.ReportsTo


----------ORDERNAR Y FILTRAR DATOS----------------
---SE PUEDE FILTRAR POR NOMBRE DE COLUMNA, POR NUMERO DE LA COLUMNA Y POR ALIAS 
SELECT CompanyName, ContactName, ContactName, Country
FROM Suppliers
ORDER BY Country

-----INSTRUCCION WHERE
SELECT CompanyName, ContactName, Country 
FROM Suppliers
WHERE Country LIKE 'Japan'

SELECT S.CompanyName, C.CategoryName, P.ProductName, P.UnitPrice
FROM Products P INNER JOIN Suppliers S
ON P.SupplierID = S.SupplierID
INNER JOIN Categories C
ON P.CategoryID = C.CategoryID
WHERE P.UnitPrice BETWEEN 20 AND 25


SELECT S.CompanyName, C.CategoryName, P.ProductName, P.UnitPrice
FROM Products P INNER JOIN Suppliers S
ON P.SupplierID = S.SupplierID
INNER JOIN Categories C
ON P.CategoryID = C.CategoryID
WHERE C.CategoryName IN ('Condiments','Dairy Products','Grains/Cereals')

---------TOP---------
