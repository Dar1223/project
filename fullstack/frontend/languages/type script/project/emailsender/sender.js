// import nodemailer from 'nodemailer'
let nodremailer1=require('nodemailer')
console.log("im running",nodremailer1)

let transport=nodremailer1.createTransport({
    service:'gmail',
    auth:{
        user:'darshan0106gowda@gmail.com',
        pass:'vitvqkqmlpmdvmgf'
    }
    
},{
    tls:{
        rejectUnauthorized: false
    }
})

let mailoption={
    from:'darshan0106gowda@gmail.com',
    to:'raghojiharish@gmail.com',
    subject:'testing mail',
    text:'hello how r u'

}

transport.sendMail(mailoption,(err,res)=>{
if(err)throw err;
console.log("mail sent")
})