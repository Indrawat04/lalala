const express = require('express');
const router = express();
const r = require('rethinkdb')


router.get('*',  (request, response)=> {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

router.post('/updateData',(req,res)=>{
    let updatedData = req.body.data

    //let pKey = req.body.id
    r.connect({ host: 'localhost', port: 28015}, (err, conn)=> {
        if(err) throw err;
          connection = conn
          r.table('realTime').get('test').update(
              
            {  key : updatedData }
              
          ).run(connection, (err, result)=> {
              if (err) {
                res.status(500).json({err :err})
                  throw err;
              }else{
                // emitChanges('realTime','test')
                 res.status(200).json({success : 'Data Upadated'})
                //  changefeed(conn)
              }
             
          })       
      })

})


// changefeed = (conn)=>{
//     r.table('realTime').get('test').changes().run(conn, (err, cursor) =>{

//         cursor.each((err,resp)=>{
//             if(err){
//                 console.log('?')
//                 console.log('err',err)
//             }else{
//                  // io.emit('changes',res.new_val.key)      
//                  console.log('change received',resp)
//             }
//        })
//     })
// }

module.exports = router