const express = require('express')
const app = express()
const port = 3000


//Connect mongodb
require('./configs/db')();
app.use(require('./routes'))

app.listen(port,()=>{
    console.log(`Server run at http://localhost:${port}`);
})