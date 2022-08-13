const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const axios = require('axios');
app.post("/", async(req,res) => {
  try {
  var body = JSON.parse(req.body);
  var data = [];
  if(!Array.isArray(body))return res.json({ message: "Body must be an array" });
  for(i in body){
  data.push((await axios(body[i])).data);
  };
  res.json(data);
  }catch(e) {
  res.json({error: `${e}`});
  }
})

app.get('*', (req,res) => res.redirect(`https://github.com/codingstudios/Fetch-Relay`))

app.listen(3000);
