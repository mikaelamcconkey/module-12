const mysql = require('mysql');
const inquirer = require('inquirer');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'company_db'
});

// Connect to the database
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the database.');
});
inquirer
  .prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all employees',
      'Add a new employee',
      'Update an existing employee',
      'Exit'
    ]
  })
  .then(answer => {
    switch (answer.action) {
      case 'View all employees':
        // Code to view all employees
        break;
      case 'Add a new employee':
        // Code to add a new employee
        break;
      case 'Update an existing employee':
        // Code to update an existing employee
        break;
      case 'Exit':
        // Code to exit the application
        break;
    }
  });
  connection.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;
    console.table(results);
    connection.end();
  });
  