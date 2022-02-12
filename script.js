// const signUpForm = document.getElementById('sign-up-form');



// signUpForm.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const formData = new FormData(this);

//     fetch('https://www.carnmotion.gr/api/sign_up_form', {
//         method: 'POST',
//         body: formData
//     }).then(function (response){
//         return response.text();
//     }).then(function (text){
//         console.log(text);
//     }).catch(function(error){
//         console.error(error);
//     })
// })



$(document).ready(function() {

    $("#sign-up-form").validate({
    rules: {
    firstname : {
    required: true,
    minlength: 3
    },
    lastname : {
    required: true,
    minlength: 3
    },
    password : {
    required: true,
    minlength: 6
    },
    confirmpass : {
    required: true,
    equalTo : "#password"
    },
    age: {
    required: true,
    number: true,
    min: 23,
    max: 75
    },
    email: {
    required: true,
    email: true
    },
    agree: {
    required: true,
    },
    afm : {
    required: true,
    minlength: 9
    },
    number:{
    required: true,
    minlength: 10
    },
    },
    messages : {
            firstname : "Παρακαλώ εισάγετε όνομα.",
            lastname : "Παρακαλώ εισάγετε επίθετο.",
            afm :{
            required : "Παρακαλώ συμπληρώστε το ΑΦΜ σας.",
            minlength : "Το ΑΦΜ σας πρεπει να είναι αποτελείται απο 9 αριθμούς."
            },
            password : {
            required : "Παρακαλώ εισάγετε έναν κωδικό πρόσβασης",
            minlength : "Ο κωδικός πρόσβασης πρέπει να είναι τουλάχιστον 6 χαρακτήρες"
            },
            confirmpass : {
            equalTo : "Ο κωδικός δεν είναι ίδιος."
            },
            number : {
            required : "Παρακαλώ εισάγεται το κινητό σας.",
            minlength : "Το κινητό έχει 10 αριθμούς."
            },
            email : {
            email : "Παρακαλώ εισάγετε σωστό email."
            },
            agree : "Παρακαλώ αποδεχτήτε τους όρους και προυποθέσεις."
            }
    });
    });

// $().ready(function(){
 
//     $("#sign-up-form").validate({
//       // in 'rules' user have to specify all the constraints for respective fields
//     rules : {
//     firstname : "required",
//     lastname : "required",
//     afm : "required",
//     username : {
//     required : true,
//     minlength : 2  //for length of lastname
//     },
//     password : {
//     required : true,
//     minlength : 5
//     },
//     confirm_password : {
//     required : true,
//     minlength : 5,
//     equalTo : "#password" //for checking both passwords are same or not
//     },
//     email : {
//     required : true,
//     email : true
//     },
//     agree : "required"
//     },
//         // in 'messages' user have to specify message as per rules
//     messages : {
//     firstname : "Please enter your firstname",
//     lastname : "Please enter your lastname",
//     afm :{
//     required : "Please enter a afm",
//     minlength : "Your username must consist of at least 2 characters"
//     },
//     password : {
//     required : "Please enter a password",
//     minlength : "Your password must be consist of at least 5 characters"
//     },
//     confirm_password : {
//     required : "Please enter a password",
//     minlength : "Your password must be consist of at least 5 characters",
//     equalTo : "Please enter the same password as above"
//     },
//     agree : "Please accept our policy"
//     }
//     });
//     });