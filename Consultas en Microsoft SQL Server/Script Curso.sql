--modulo 4 
use Northwind

select * from Orders

-- Inner Join
select C.CustomerID, C.CompanyName, C.ContactName, C.Country, O.OrderID, O.OrderDate,p.ProductName, d.UnitPrice,d.Quantity
from Customers as C inner join Orders as O on C.CustomerID = O.CustomerID inner join [Order Details] as D
on o.OrderID = D.OrderID
inner join Products as p on d.ProductID = p.ProductID