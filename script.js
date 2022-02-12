document.getElementById('formFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
  
    if (!file) {
      return;
    }
  
    new Compressor(file, {
      quality: 0.6,
  
      success(result) {
        const formData = new FormData();
  
        formData.append('file', result, result.name);
        console.log('Upload success');
      },
      error(err) {
        console.log(err.message);
      },
    });
  });



$(document).ready(function(){
    $("#sign-up-form").submit(function(event){

        event.preventDefault();

        let afm = btoa($('#afm').val());
        let email = btoa($('#email').val());
        let password = btoa($('#password').val());
        let firstName = btoa($('#firstname').val());
        let lastName = btoa($('#lastname').val());
        let bDay = btoa($('#sign-up-bday').val());
        let cellPhone = btoa($('#cellPhone').val());
        let country = btoa($('#country').val());
        let city = btoa($('#city').val());
        let tk = btoa($('#tk').val());
        let drLicenseNumber = btoa($('#drLicenseNumber').val());
        let drLicenseDate = btoa($('#drLicenseDate').val());
        let formFile = btoa($('#formFile').val());        
        
        let afmResponse ;
        let emailResponse ;
        let formResponse ;

        $.post('https://www.carnmotion.gr/api/afm_check', 
        {
            afm: afm
        },  function (data) {
                afmResponse = data.exists;
            }, 'json');

        $.post("https://www.carnmotion.gr/api/email_check", 
        {
            email: email
        },  function (data) {
                emailResponse = data.exists;
            }, 'json');

        if(!(afmResponse && emailResponse)) {
            $.post( "https://www.carnmotion.gr/api/sign_up_form", 
        { 
            afm: afm,
            name: firstName,
            lastname: lastName, 
            email: email,
            password: password,
            birthday: bDay,
            cellphone: cellPhone,
            country: country,
            city: city,
            tk: tk,
            driverLicenseNumber: drLicenseNumber,
            driverLicenseDate: drLicenseDate,
            formFile: formFile
        }, function(data) {
            formResponse = data.sucess;
            if(formResponse) {
                let p = document.querySelector(".success");
                p.innerText = "Η εγγραφή έγινε με επιτυχία.";
            }
        } );
        
      }

    });

})


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
    drlicense : {
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
            required : "Παρακαλώ εισάγετε έναν κωδικό πρόσβασης.",
            minlength : "Ο κωδικός πρόσβασης πρέπει να είναι τουλάχιστον 6 χαρακτήρες."
            },
            confirmpass : {
            required : "Παρακαλώ εισάγετε έναν κωδικό πρόσβασης.",
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
            age : "Παρακαλώ εισάγετε Ημ/νία Γέννησης. Πρέπει να είστε τουλάχιστον 23 ετών η κάτω τον 75.",
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
            drlicense : "Το δίπλωμα πρέπει να έχει εκδοθεί τουλάχιστον πριν 1 έτος και να λήγει το λιγότερο σε 1 έτος από τώρα.",
            }
    });
    });

