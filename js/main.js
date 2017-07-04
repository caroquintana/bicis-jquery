$(document).ready(function(){

    $('.submit-btn').click(function(){
        validateForm();   
    });

    function validateForm(){

        var nameReg = /^[A-Za-z]+$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var names = $('#name').val();
        var lastname = $('#lastname').val();
        var email = $('#input-email').val();
        var password = $('#input-password').val();

        var inputVal = new Array(names, lastname, email, password);

        var inputMessage = new Array("nombre", "apellido", "email", "contraseña");

         $('.error').hide();

            if(inputVal[0] == ""){
                $('#name').after('<span class="error"> Por favor, ingresa tu ' + inputMessage[0] + '</span>');
            } 
            else if(!nameReg.test(names)){
                $('#name').after('<span class="error"> Se aceptan letras solamente</span>');
            }

            if(inputVal[1] == ""){
                $('#lastname').after('<span class="error"> Por favor, ingresa tu ' + inputMessage[1] + '</span>');
            }
            else if(!nameReg.test(lastname)){
                $('#lastname').after('<span class="error"> Se aceptan letras solamente</span>');
            }

            if(inputVal[2] == ""){
                $('#input-email').after('<span class="error"> Por favor, ingresa tu ' + inputMessage[2] + '</span>');
            } 
            else if(!emailReg.test(email)){
                $('#input-email').after('<span class="error"> Por favor, ingresa un email válido.</span>');
            } 
        }   

});