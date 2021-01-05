const express = require('express')
const {mongoose}=require('./db.js');
const app = express();
const dotenv=require('dotenv')
const bodyParser = require('body-parser');
const cors=require('cors')

//cors
const allowedOrigins = ['http://localhost:3000',
                      'http://localhost:3001'];
app.use(cors({credentials:true,
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })); 

//middlewares
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));


//routes importing

    //Routes
        const location=require('./routes/userLocation')
        const getsUserslocations=require('./routes/getsUserslocations')
     

app.use('/userlocation',location)
app.use('/getsUserslocations',getsUserslocations)
app.listen(5000, () => console.log('Started on 5000 port'))