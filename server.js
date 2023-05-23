const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('dotenv').config();
require('./connection')
const server = http.createServer(app);




const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require('./routes/imageRoutes');



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);


const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log('server running at port', port)
})
