const nodeMailer=require("nodemailer");

const sendEmail=async(options)=>{

    // let testAccount=await nodeMailer.createTestAccount();

    //connect with the smtp server
   
    const transporter=nodeMailer.createTransport({
        //service:process.env.SMTP_SERVICE,
        host:process.env.SMTP_HOST,
        port:587,
        auth:{
            user: 'ml7252373@gmail.com',
            pass: 'jjwynvbulhcsipqg'
        }
    });

    const mailOptions={
        from:"ml7252373@gmail.com",
        to:options.email,
        subject:options.subject,
        text:options.message,
    };

    await transporter.sendMail(mailOptions);

};

module.exports=sendEmail;