/*const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//Código nuevo
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://dbUser:123#@cluster0-xc8r1.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri, {useUnifiedTopology: true }, (err, client) => {
  if (err) console.log("Error occurred connecting to MongoDB...");
  console.log("Connected to MongoDB!");
});
//Fin código nuevo
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/


var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  Entry = require("./api/models/leaderboardModel");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect( "mongodb+srv://uri:uri@clusteruri.ztnee.mongodb.net/?retryWrites=true&w=majority", );
var routes = require("./api/routes/leaderboardRoutes");


routes(app);
app.listen(port);console.log("API server started on " + port);