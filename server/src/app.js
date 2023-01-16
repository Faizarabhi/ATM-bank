const express = require('express');
require("dotenv").config();
const cors = require("cors");
const { ErrorHandler } = require("./Middleware/ErrorHandler");
const connectDB = require("./Config/db");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

connectDB();
//Globle Route (subroute)
app.use("/api/auth/client/", require("./Routes/Client/auth"));
app.use("/api/account", require("./Routes/Account/account"));
app.use("/api/transaction", require("./Routes/Transaction/transaction"));

//Run server
app.use(ErrorHandler);
app.listen(PORT,()=>{console.log("Server running in :" + PORT)})
