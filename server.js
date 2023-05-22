const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();
require('./connection')
const server = http.createServer(app);

const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require('./routes/imageRoutes');

// Specify the allowed origins
app.use(cors({
    origin: 'https://ecommern-3pwp.onrender.com' // Replace with the appropriate origin
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);

server.listen(8000, () => {
    console.log('server running at port', 8000)
});
