
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
    let query="UPDATE student SET name='darshan gowda' WHERE name='darshan'"
        con.query(query,(err:any,res:any)=>{
        if(err)throw err
        console.log("updated")
    })
})



//INSERT INTO `student`(`name`, `hero`) VALUES ('[value-1]','[value-2]')