const express = require("express"); // Builds the REST API
const cors = require("cors");

const app = express();

// Block requests outside of origin
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Drop tables and resync
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Tables dropped. DB re-synced.");
});

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});