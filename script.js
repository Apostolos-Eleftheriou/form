const signUpForm = document.getElementById('sign-up-form');



signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://www.carnmotion.gr/api/sign_up_form', {
        method: 'post',
        body: formData
    }).then(function (response){
        return response.text();
    }).then(function (text){
        console.log(text);
    }).catch(function(error){
        console.error(error);
    })
}) 