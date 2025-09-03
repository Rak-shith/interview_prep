// ✅ Basic SQL Interview Queries
// Select  employees where department is 'Sales'
```
SELECT * FROM employees WHERE department = 'Sales'; 
```

// Count total number of employees
```SELECT COUNT(*) FROM employees;```

// Find the employee(s) with the highest salary
```
SELECT * FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);```

// List employees who joined after 2022
```
SELECT * FROM employees WHERE joining_date > '2022-01-01';```

// Find the number of employees in each department
```
SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department;```

// ✅ Intermediate-Level SQL Interview Queries
// Find duplicate employee names
```
SELECT name, COUNT(*)
FROM employees
GROUP BY name
HAVING COUNT(*) > 1;```

// Fetch the second highest salary
```
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);```

// List all employees who don’t have a manager
```SELECT * FROM employees WHERE manager_id IS NULL;```

// Find employees whose names start with 'A'
```SELECT * FROM employees WHERE name LIKE 'A%';```

// List departments with more than 5 employees
```SELECT department, COUNT(*) AS total
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;```


// ✅ Advanced-Level SQL Interview Queries
// JOIN two tables: Get employee names and their department names
```SELECT e.name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.id;```

// Find employees with salary above average
```SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);```

// Rank employees based on salary
```SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) AS rank
FROM employees;```

// Find top 3 salaries per department
```SELECT *
FROM (
  SELECT name, department, salary,
         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank
  FROM employees
) AS ranked
WHERE rank <= 3;```

// Delete duplicate rows from a table (keeping one)
```DELETE FROM employees
WHERE id NOT IN (
  SELECT MIN(id)
  FROM employees
  GROUP BY name, department, salary
);```


// ✅ Bonus: Data Manipulation Queries
// Insert new employee
```INSERT INTO employees (name, department, salary)
VALUES ('Alok', 'HR', 50000);```

// Update salary of an employee
```UPDATE employees SET salary = 60000 WHERE name = 'Alok';```

// Delete employees from Sales department
```DELETE FROM employees WHERE department = 'Sales';```