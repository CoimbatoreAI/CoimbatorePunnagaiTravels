function submitForm()        
{
    console.log("validation section enter");
$(document).ready(function () {
    (function ($) {
        "use strict";
        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");
        jQuery.validator.addMethod('mobilecheck', function (value, element) {
            return this.optional(element) || /^[6-9]\d{9}$/.test(value);
        }, "Mobile number is invalid");
        jQuery.validator.addMethod('alphabetsOnly', function(value, element) {
            return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
        }, "Only alphabets are allowed for the name field");
        // validate contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                        alphabetsOnly:true
                    },
                    mobile: {
                        required: true,
                        mobilecheck: true
                    },
                    fromLocation: {
                        required: true,
                        minlength: 2,
                        alphabetsOnly:true
                    },
                    toLocation: {
                        required: true,
                        minlength: 2,
                        alphabetsOnly:true
                    },
                    days: {
                        required: true,
                        digits: true,
                        maxlength: 2
                    },
                    message: {
                        required: false,
                        minlength: 0
                    }
                },
                messages: {
                    name: {
                        required: "Please enter your Name",
                        minlength: "your name must consist of at least 2 characters",
                        alphabetsOnly: "Only alphabets are allowed"
                    },
                    mobile: {
                        required: "Please enter your Mobile number",
                        mobilecheck: "Mobile number is Invalid"
                    },
                    fromLocation: {
                        required: "Please enter From Location",
                        minlength: "From Location should be atleast 2 characters",
                        alphabetsOnly: "Only alphabets are allowed"
                    },
                    toLocation: {
                        required: "Please enter your Destination",
                        minlength: "To Location should be atleast 2 characters",
                        alphabetsOnly: "Only alphabets are allowed"
                    },
                    days: {
                        required: "Please enter No. of days",
                        digits: "Please enter only digits for No. of days",
                        maxlength: "No. of days should not exceed 2 digits"
                    },
                    message: {
                        required: "",
                        minlength: ""
                    }
                },
                submitHandler: function (form) {
                    var name = document.getElementById("name").value;
                    var mobileNo = document.getElementById("mobile").value;
                    var fromloc = document.getElementById("fromLocation").value;
                    var toloc = document.getElementById("toLocation").value;
                    var days = document.getElementById("days").value;
                    var msg = document.getElementById("message").value;
                   console.log("success")
    const body = "<div  style=\"font-family:tahoma,sans-serif\"><span style=\"color:rgb(19,79,92)\"><span style=\"font-weight:bold\">\r\n"
			+"<font color=\"#222222\"><span style=\"font-weight:400\"><br></span></font>\r\n"
			+"</span></span>Dear Sir / Madam ,<br>\r\n"
			+"<br>New Customer Booking Request <br>\r\n"
			+"<br>Full Name           : <b style=\"text-decoration:none\">"+name+"</b><br>\r\n"
			+"<br>Mobile Number       : <b style=\"text-decoration:none\">"+mobileNo+"</b><br>\r\n"
      +"<br>From Location    : <b style=\"text-decoration:none\">"+fromloc+"</b><br>\r\n"
      +"<br>To Location            : <b style=\"text-decoration:none\">"+toloc+"</b><br>\r\n"
      +"<br>How Many Days      : <b style=\"text-decoration:none\">"+days+"</b><br>\r\n"
      +"<br>Message        : <b style=\"text-decoration:none\">"+msg+"</b><br>\r\n"
			+ "<br>\r\n"
			+ "<br>\r\n"
			+ "<a></a> \r\n"
			+ "<br>\r\n"
			+ "\r\n"
			+ "<p style=\"font-family:tahoma,sans-serif\"> \r\n"
			+ "</p>\r\n" + "<br>\r\n" + "<br>\r\n" + "<br>\r\n"
			+ "<p style=\"margin-top:0;margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;!important\">Thanks&Regards, <br>\r\n"
			+ "\r\n" + "Punnagai tours and travels," + "<br>\r\n" + "Coimbatore,Tamil Nadu 641002.\r\n"
			+ "</p>\r\n" + "</div>";
            const ff =  Email.send({
                SecureToken : "49a8d6ab-25bb-44c5-b5f0-cbd2bdcefb09",
                To : "punnagaitourstravels@gmail.com",
                From : "mailto@punnagaitravels.com",
                Subject :  "New Booking Request",
                Body : body
              }).then(
              message => alert("Mail sent successfully. Our team will contact you shortly.")
              );
            console.log(ff);
            setTimeout(function(){
                window.location.reload(1);
             }, 6000);
                        }
                    })
                })
            })(jQuery)
        })
        }
