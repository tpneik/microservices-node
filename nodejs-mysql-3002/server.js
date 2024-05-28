require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT_NODE_MYSQL
const bodyParser = require('body-parser');
const db = require('./database/index')

app.use(bodyParser.json());
require('./Router/core.router')(app);
try {
  db.synchronizing();
} catch (error) {
  console.error("Error synchronizing models:", error);
  process.exit(1); 
}
app.get('/', (req, res) => {
  console.log('\x1b[36m%s\x1b[0m','[3002] Server2 works!')
  res.send("[3002] Server2 works!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//------------------------------------------------------------------------//
// (async () => {
//     try {
//       await db.synchronizing();
//     } catch (error) {
//       console.error("Error synchronizing models:", error);
//       process.exit(1); 
//     }
//     app.get('/', (req, res) => {
//       res.send("Hello boy!");
//     });
//     app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//   })(); 
//----------------------------------------// 