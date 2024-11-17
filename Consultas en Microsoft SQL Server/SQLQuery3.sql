/*SESION 2
ORDEN DE SENTENCIAS
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY
*/
use Northwind
go

select * from Customers
where Country = 'USA' and Region = 'OR'
go

select CustomerID, CompanyName, ContactName, ContactTitle, Address, Country from Customers where CustomerID = 'lonep'
go

/*Cuando se ejecuta el group by no se puede usar la sentencia where se usa la sentencia having*/
select Country, count(*) as contar
from Customers
group by Country 
having count(*)> 10
order by Country
go

select CustomerID, CompanyName, ContactName, ContactTitle, Address, Country 
from Customers 
where Country in ('Mexico','Argentina')
go

select CustomerID, CompanyName, ContactName, ContactTitle, Address, Country 
from Customers 
where CompanyName like 's%'
go

select ProductName, UnitPrice from Products
where UnitPrice between 15 and 20
order by ProductName
go

sp_help Customers

/*Sesion 3*/

select top 10 * from Customers 

--hacer consultas de todos los datos de la tabla
select * from Suppliers
go

-- limintar las columnas a mostrar
select CompanyName, ContactName, ContactTitle, ContactName, [Address], Phone, Country 
from Suppliers
go

-- valores unicos
select CustomerID, CompanyName, Country 
from Customers

--realizar calculos, de la tabla productos
select ProductName, UnitPrice, round(UnitPrice * 0.12,1) as Impuesto_IVA from Products
go


select ProductName, UnitPrice, format(UnitPrice *0.12,'N2') as Impuesto_IVA from Products
go

select CustomerID, OrderID, OrderDate, 
YEAR(orderdate) as Anio, 

MONTH(orderdate) as Mes from Orders
go

SELECT OrderID, ProductID, UnitPrice, Quantity, Discount, (UnitPrice*Quantity) - (UnitPrice-Quantity* Discount) as Parcial from [Order Details]

--Valores unicos

Select CustomerID, CustomerID, Country  from Customers
order by Country


select distinct Country from Customers
order by Country