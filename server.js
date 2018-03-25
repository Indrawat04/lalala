const express = require('express')
const path = require('path')
const socket = require('socket.io')
const port = process.env.PORT || 5000
const app = express()
const morgan = require('morgan')
const r = require('rethinkdb')

const routes = require('./routes.js')

const bodyParser = require('body-parser');

app.use(morgan('dev'))
app.use(bodyParser.json());


const io = socket.listen(app.listen(port))
console.log("server started on port " + port)
io.sockets.on('connection',(socket)=>{
    console.log('connected to socket')
})

//selective sockets will be created like this , and the client will listen to theses
// var nsp = io.of('/selective')
// nsp.on('connection', (socket)=>{
//   console.log('someone connected');
// });



// serve static assets normally
app.use(express.static('public'))

var data = {
    id : 'test',  //this is the uniue key , which will also be the endpoint for our urls
    key : 'key'
}


// Handles all routes so you do not get a not found error

app.use('/',routes);

r.connect({ host: 'localhost', port: 28015 }, (err, conn)=> {
    if(err) throw err;
    var connection = conn
    //  1. create table
    // 2. add a document 
    // 3. Comment these 2 out and see changes in the doc

    //   r.db('test').tableCreate('realTime').run(connection,(err,res)=>{
    //       if(err) throw err
    //       console.log('result',JSON.stringify(res))
    //   })
  
    //   r.table('realTime').insert(data).run(connection,(err,result)=>{
    //       if (err) throw err
    //       console.log(JSON.stringify(result))
    //   })
  
    //   r.table('realTime').run(connection , (err,results)=>{
    //       if(err) throw err;
    //       results.toArray((err,res)=>{
    //           if (err) throw err;
    //           console.log(JSON.stringify(res, null, 2));
    //       })
    //   })
      
  
    //   chnage feed , emitting
      r.table('realTime').get('test').changes().run(conn, (err, cursor) =>{
          cursor.each((err,res)=>{
              console.log('change received',res)
          io.emit('changes',res.new_val.key)
          // nsp.emit('changes',res.new_val.key)
          });
        })
  })
