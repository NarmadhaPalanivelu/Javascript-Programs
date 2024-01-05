const express = require('express')
const upload = require('express-fileupload')

const app =  express()

app.use(upload())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => { 
    if (!req.files) {
      return res.status(400).send('No files were uploaded.');
    }
  
    console.log(req.files);
    res.send('File uploaded!');
  });
app.listen(5000)

