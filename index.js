const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const axios = require('axios');
app.post("/", async(req,res) => {
  try {
  var body = JSON.stringify(req.body);
  var data = [];
  for(i of body){
   var value = (await axios(body[i])).data;
  data.push(value);
  };
  res.json(data);
  }catch(e) {
  res.json({error: `${e}`});
  }
})

app.get('*', (req,res) => res.redirect(`https://github.com/codingstudios/Fetch-Relay`))

app.listen(3000);
