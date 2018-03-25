const r = require('rethinkdb')
const express = require('express')

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
    r.table('realTime').get('test').update(
        
      {  key : 'Phil Dunphy'}
        
    ).run(connection, (err, result)=> {
        if (err) throw err;
        console.log(result)
    })  ;


    // r.table('realTime').get('481fce20-1ceb-4fa6-8431-3a909ab41e4d').replace(r.row.without('contact'))
    // .run(connection, (err, result)=> {
    //         if (err) throw err;
    //         console.log(result)
    //     }) 


    // r.table('realTime').get('481fce20-1ceb-4fa6-8431-3a909ab41e4d').changes().run(conn, (err, cursor) =>{
    //     console.log('cursor')
    //     cursor.each(console.log);
    //   })



})