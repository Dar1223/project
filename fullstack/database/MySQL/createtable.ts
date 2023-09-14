
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
    let query="CREATE TABLE student(name VARCHAR(255), hero varchar(255))"
        con.query(query,(err:any,res:any)=>{
        if(err)throw err
        console.log("table created")
    })
})



INSERT INTO `student`(`name`, `hero`) VALUES ('[value-1]','[value-2]')