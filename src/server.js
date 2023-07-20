const express = require('express');
const app = express();

const PORT = 3001;
const HOST = 'localhost'; // Change this to the desired host address

app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});