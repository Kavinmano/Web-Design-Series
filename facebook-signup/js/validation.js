$(document).ready(function() {
    $("#signup").validate({
        rules: {
             fname:{
                required: true,
                minlength: 5,
             },
             sname: {
                required: true,
                minlength: 5,
             },

             mobile:{
                required: true,
             },

             password:{
                required: true,
                minlength:8,
             },

             Day:{
                required: true,

             },

             Month:{
                required:true,
             },

             Year:{
                required:true,
             },

             gender:{
                required:true,
             }
        },
        messages:{
            fname:{
                required: "Please Enter The First Name",
                minlength: "Please Enter The Minimum Letter",
            }
        }
    })
});