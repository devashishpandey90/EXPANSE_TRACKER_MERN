const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/sheymoney-expanse").then(()=>{
    console.log("Connected to Mongodb succefully")
  }).catch((err)=>{
      console.error(err)
  })