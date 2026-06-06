function sendMail(params)
{
    console.log("success")
    // var tempParams ={
    //     from_name:document.getElementById("fromName").value,
    //     to_name:document.getElementById("toName").value,
    //     message:document.getElementById("msg").value,
    // };
    // emailjs.send('service_x52a6jj','template_f4z1f4k',tempParams)
    // .then(function(res){
    // console.log("success",res.status)
    //  } )
    const fullName="";
    const body = "<div  style=\"font-family:tahoma,sans-serif\"><span style=\"color:rgb(19,79,92)\"><span style=\"font-weight:bold\">\r\n"
			+"<font color=\"#222222\"><span style=\"font-weight:400\"><br></span></font>\r\n"
			+"</span></span>Dear Sir / Madam ,<br>\r\n"
			+"<br>New Customer Booking Request <br>\r\n"
			+"<br>Full Name           : <b style=\"text-decoration:none\">"+fullName+"</b><br>\r\n"
			+"<br>Mobile Number       : <b style=\"text-decoration:none\">"+fullName+"</b><br>\r\n"
      +"<br>Alternate Number    : <b style=\"text-decoration:none\">"+fullName+"</b><br>\r\n"
      +"<br>Email ID            : <b style=\"text-decoration:none\">"+fullName+"</b><br>\r\n"
      +"<br>From Location       : <b style=\"text-decoration:none\">"+fullName+"</b><br>\r\n"
      +"<br>To Location         : <b style=\"text-decoration:none\">"+fullName+"</b><br>\r\n"
      +"<br>How Many Days       : <b style=\"text-decoration:none\">"+fullName+"</b><br>\r\n"
      +"<br>Message             : <b style=\"text-decoration:none\">"+fullName+"</b><br>\r\n"
			+ "<br>\r\n"
			+ "<br>\r\n"
			+ "<a></a> \r\n"
			+ "<br>\r\n"
			+ "\r\n"
			+ "<p style=\"font-family:tahoma,sans-serif\"> \r\n"
			+ "</p>\r\n" + "<br>\r\n" + "<br>\r\n" + "<br>\r\n"
			+ "<p style=\"margin-top:0;margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;!important\">Thanks&Regards, <br>\r\n"
			+ "\r\n" + "Gomathi Travels," + "<br>\r\n" + "Coimbatore,Tamil Nadu.\r\n"
			+ "</p>\r\n" + "</div>";

    const ff =  Email.send({
        // SecureToken : "cd591091-763b-4feb-a9ff-025ee000e3cd",
        Host : "smtp.elasticemail.com",
        Username : "",
        Password : "4454DEB42FA71DF559F2D0853B52720CAD43",
        To : '',
        From : "",
        Subject : "New Booking Request",
        Body :body
    }).then(
      message => alert(message)
    );
    console.log(ff);
}