const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const LoginModel = require('./Login_Credentials')


mongoose.connect(process.env.FinanceDb_URL).then(res => console.log("DB Connected"));
const personSchema = new mongoose.Schema({
  name: String,
  year: String,
  jan: String,
  feb: String,
  mar: String,
  apl: String,
  may: String,
  june: String,
  july: String,
  aug: String,
  sep: String,
  oct: String,
  nov: String,
  dcm: String
})
const Person = mongoose.model('Persons', personSchema);
app.use(cors())
app.use(bodyParser.json());

//Login Credentials
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  LoginModel.find({})
    .then(users => {
      if (users[0].userName === username && users[0].password === password) {
        res.json({ success: true, message: "Login Successfull" })
      } else {
        res.json({ success: false, message: "Login Failed" })
      }
    })
    .catch(err => res.json(err))
});

//Display
app.get('/details/:year?', async (req, res) => {
  const { year } = req.params;
  if (year !== "all") {
    try {
      let query = {};
      if (year) {
        query.year = (year);
      }
      const persons = await Person.find(query);
      res.json(persons);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    try {
      const persons = await Person.find({});
      res.json(persons);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});

//Post
app.post('/addPerson', async (req, res) => {
  const { name, year, jan, feb, mar, apl, may, june, july, aug, sep, oct, nov, dcm } = req.body;
  
  try {
    const newItems = new Person({ name, year, jan, feb, mar, apl, may, june, july, aug, sep, oct, nov, dcm });
    await newItems.save();
    res.status(201).json(newItems);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Edit
app.get('/editPerson/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Person.findById(id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put('/editPerson/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const { name, year, jan, feb, mar, apl, may, june, july, aug, sep, oct, nov, dcm } = req.body;

  try {
    const updatedItem = await Person.findByIdAndUpdate(id, { name, year, jan, feb, mar, apl, may, june, july, aug, sep, oct, nov, dcm }, { new: true });
    res.json(updatedItem);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
app.delete('/deletePerson/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await Person.findByIdAndDelete(id);
    res.json(deletedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));