const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const billRoutes = require('./routes/billRoutes');

dotenv.config();


connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bills', billRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
