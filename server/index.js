const express = require('express')
 const cors = require('cors')
const app = express();
const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'roots',
    password:'Root@123',
    database:'crud',
    insecureAuth : true

});
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));
// check conction
   // connection.connect(function(err) {
    //     if (err) {
    //       return console.error('error: ' + err.message);
    //     }
        // res.send("hello jjjj");

    //     console.log('Connected to the MySQL server.');
    //   });

// app.get('/', (req, res) => {
 
// const sqlInsert = "INSERT INTO movie(id,mname,review) VALUES ('2','Insection','good');"
// db.query(sqlInsert,(err, result)=>{
//  console.log(err);
//  console.log('Connected to the MySQL server.');
//     res.send("hello jjjj");
// })
//  });

// app.listen(3001,() =>{


//     console.log("running on port 3001");
// });



/* insert data to database  */
app.post('/api/insert', (req, res) => {
    console.log(req.body.moviename);
 const moviename = req.body.moviename
 const moviereview = req.body.moviereview
    const sqlInsert = "INSERT INTO movie(id,mname,review) VALUES ('12',?,?);"
    db.query(sqlInsert,[moviename,moviereview],(err, result)=>{
  
        console.log(result);
        console.log(moviename);
         console.log(moviereview);

      console.log('sucesss.');
        // res.send("hello jjjj");
    })
     });

     app.get('/api/get', (req, res) => {
        const sqlGet = "SELECT * FROM movie";
        db.query(sqlGet, (err, result) => {
            res.send(result);
            console.log(result);
        });
         })
    
         app.delete('/api/delete', (req, res) => {
            const name = req.body.moviename
            const sqldel = "DELETE FROM movie WHERE mname = ? ";
            db.query(sqldel,name, (err, result) => {

                console.log(err);

         })
        });

    app.listen(3001,() =>{
    
        console.log("running on port 3001");
    });