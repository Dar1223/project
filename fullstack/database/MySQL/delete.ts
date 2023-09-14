
var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'gowda',
})
con.connect((err:any)=>{
    if(err) throw err;
    console.log('db connected')
    let query="DELETE FROM student WHERE name='faizul'"
        con.query(query,(err:any,res:any)=>{
        if(err)throw err
        console.log("deleted")
    })
})



//INSERT INTO `student`(`name`, `hero`) VALUES ('[value-1]','[value-2]')