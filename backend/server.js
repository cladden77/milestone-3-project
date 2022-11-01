require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("../backend/routes/userRouter");
const noteRouter = require("../backend/routes/noteRouter");
const path = require("path");

const app = express();
app.use(express.json());

// initialize cookie-parser to allow us access the cookies stored in the browser.
// app.use(cookieParser());

// Routes
app.use("/user", userRouter);
app.use("/api/notes", noteRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});

//Cors Configuration - Start
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, PATCH, GET, DELETE"
    )
    return res.status(200).json({})
  }
  next()
})
//Cors Configuration - End

//app.use(cors());

//Heroku attachment

if (process.env.NODE_ENV === "production") {
  const root = require('path').join(__dirname, '../frontend', 'build')
  app.use(express.static(root));
  app.get("*", (req, res) => {
      res.sendFile('index.html', { root });
  });
}

// Listen for Connections
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});