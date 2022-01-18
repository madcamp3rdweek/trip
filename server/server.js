const express = require('express'); 
const app = express(); 
const api = require('../src/setProxy');
const {createProxyMiddleware} = require('http-proxy-middleware'); 
app.use('/api', createProxyMiddleware('/api',{ 
    target :'http://localhost:3000/' 
}) ); 
const port = 80; 
app.listen(port, () => { console.log(`현재 동작 Port on ${port}`); })

