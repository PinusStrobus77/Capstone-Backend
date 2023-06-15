const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, })

// Middleware
app.use(cors());
app.use(express.json());

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established succesfully");
})

// Routes

   const attractionsRouter = require('./routes/attractions')


   app.use('/attractions', attractionsRouter) 



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


