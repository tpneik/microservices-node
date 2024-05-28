const mysql = require('mysql'); // Import the mysql library

// Create a connection object
const connection = mysql.createConnection({
    host: 'mysql', 
    user: 'mysqldata',
    password: 'mysqlpasswd',
});

// Connect to the database
connection.connect(function(err) {
    if (err) throw err;

    // Execute the query to show all databases
    connection.query('SHOW DATABASES', function (error, results, fields) {
        if (error) throw error;

        // Process and display the results
        const databaseNames = results.map(row => row.Database);
        console.log('Databases:', databaseNames);
        connection.query('USE credential_and_orderservice', function (error, results, fields) {
          connection.query('USE credential_and_orderservice', function (error, results, fields) {
          
          })
        })
        // Close the connection
        connection.end();
    });
    
});