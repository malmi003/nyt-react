// Dependencies
// ===================================
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

// Initialize Express
// =====================================
const app = express();
const PORT = process.env.PORT || 3001;

// Configure middleware
// =====================================
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
        // Use express.static to serve the public folder as a static directory
        // app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view
  app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Routes
// =====================================
require("./routes/routes.js")(app);


// Start the server
// =====================================
app.listen(PORT, function() {
  console.log("App running on //localhost:" + PORT);
});