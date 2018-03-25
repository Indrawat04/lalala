const r = require('rethinkdb')
const express = require('express')
const socket = require('socket.io')

const app = express()
const io = socket.listen(app.listen(1911))


io.sockets.on('connection',(socket)=>{
    console.log('connected to socket')
})



app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/client.html')
})

app.get('/selective',(req,res)=>{
    res.sendFile(__dirname + '/client.html')
})


// var nsp = io.of('/selective')
// nsp.on('connection', (socket)=>{
//   console.log('someone connected');
// });

var connection = null
var data = {
    key :' we will be entering large string fields here'
}


r.connect({ host: 'localhost', port: 28015 }, (err, conn)=> {
  if(err) throw err;
    connection = conn

    //create table

    // r.db('test').tableCreate('realTime').run(connection,(err,res)=>{
    //     if(err) throw err
    //     console.log('result',JSON.stringify(res))
    // })

    // r.table('realTime').insert(data).run(connection,(err,result)=>{
    //     if (err) throw err
    //     console.log(JSON.stringify(result))
    // })

    // r.table('realTime').run(connection , (err,results)=>{
    //     if(err) throw err;
    //     results.toArray((err,res)=>{
    //         if (err) throw err;
    //         console.log(JSON.stringify(res, null, 2));
    //     })
    // })
    
    // show data per key
    // r.table('realTime').get('481fce20-1ceb-4fa6-8431-3a909ab41e4d').
    // run(connection, (err, result)=> {
    //     if (err) throw err;
    //     console.log(result.key)
    // });

    r.table('realTime').get('481fce20-1ceb-4fa6-8431-3a909ab41e4d').changes().run(conn, (err, cursor) =>{
        cursor.each((err,res)=>{
            console.log(res)
        io.emit('changes',res.new_val.key)
        // nsp.emit('changes',res.new_val.key)
        });
      })



})