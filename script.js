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
    age : {
    required: true,
    min: 23,
    max: 75
    },
    country : {
    required: true
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
    number : {
    required: true,
    minlength: 10
    },
    city : {
    required: true
    },
    tk : {
    required: true,
    maxlength: 10
    },
    licnum : {
    required: true
    },
    foto : {
    required: true
    },
    },
    messages : {
            firstname : "Παρακαλώ εισάγετε όνομα.",
            lastname : "Παρακαλώ εισάγετε επίθετο.",
            afm : {
            required : "Παρακαλώ συμπληρώστε το ΑΦΜ σας.",
            minlength : "Το ΑΦΜ σας πρεπει να αποτελείται απο 9 αριθμούς."
            },
            password : {
            required : "Παρακαλώ εισάγετε έναν κωδικό πρόσβασης",
            minlength : "Ο κωδικός πρόσβασης πρέπει να είναι τουλάχιστον 6 χαρακτήρες"
            },
            confirmpass : {
            required : "Παρακαλώ εισάγετε έναν κωδικό πρόσβασης",
            equalTo : "Ο κωδικός δεν είναι ίδιος."
            },
            number : {
            required : "Παρακαλώ εισάγεται το κινητό σας.",
            minlength : "Το κινητό έχει 10 αριθμούς."
            },
            email : {
            email : "Παρακαλώ εισάγετε σωστό email.",
            required: "Παρακαλώ εισάγετε email."
            },
            agree : "Παρακαλώ αποδεχτήτε τους όρους και προϋποθέσεις.",
            age : "Παρακαλώ εισάγετε Ημ/νία Γέννησης.",
            country : "Παρακαλώ εισάγετε Χώρα.",
            city : "Παρακαλώ εισάγετε Πόλη.",
            tk : {
            required: "Παρακαλώ εισάγεται ΤΚ.",
            maxlength : "Ο ΤΚ είναι μέχρι 10 αριθμούς."
            },
            licnum: "Παρακαλώ εισάγεται αριθμό διπλώματος.",
            foto : {
                required: "Παρακαλώ προσθέστε φωτογραφία διπλώματος."
                },
            }
    });
    });

