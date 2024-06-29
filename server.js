const express = require("express");
const dbconnect = require('./dbconnect')
 
const app = express();
app.use(express.json())
const userroute = require('./routes/Userroutes')
app.use('/api/users/',userroute)
const PORT = 5000;
 
app.listen(PORT, () => {
  console.log(`Node server started on ${PORT}`);
});
