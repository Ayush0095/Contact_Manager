const express = require("express");
const dns = require("dns");

// Force Node to use Google DNS instead of 127.0.0.1
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

connectDb();

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`SERVER IS RUNNING On ${port}`);
});