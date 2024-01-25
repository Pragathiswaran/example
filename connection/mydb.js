const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the server
client.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to the database successfully');

  // Create a database
  const db = client.db(dbName);

  // Create a collection (optional)
  const collection = db.collection('mycollection');

  // Insert some data
  const data = { name: 'John Doe', age: 30, email: 'john@example.com' };
  collection.insertOne(data, function (err, result) {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log('Data inserted successfully:', result.ops);
    }

    // Close the connection
    client.close();
  });
});
