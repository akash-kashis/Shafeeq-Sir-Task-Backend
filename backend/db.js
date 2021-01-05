const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
mongoose.connect(process.env.dburl,
{useNewUrlParser :true,useUnifiedTopology:true,useFindAndModify: false},(err) =>
{
 if(!err)
  console.log('Mongo Connection Success');
  else
  console.log('Mongo Connection Error');

});
module.exports = mongoose;