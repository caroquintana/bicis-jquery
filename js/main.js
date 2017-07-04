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

            if(inputVal[3] == ""){
            $('#input-password').after('<span class="error"> Por favor, ingresa una ' + inputMessage[3] + '</span>');
            } 
            else if(($('#input-password').val()).length <= 5){
            $('#input-password').after('<span class="error"> Se necesitan a lo menos 6 caracteres</span>');
            }
            else if($('#input-password').val() == 123456){
                $('#input-password').after('<span class="error"> Por favor, intenta otra contraseña</span>');
            }
            else if($('#input-password').val() == 098765){
                $('#input-password').after('<span class="error"> Por favor, intenta otra contraseña</span>');
            }
            else if($('#input-password').val() == "password"){
            $('#input-password').after('<span class="error"> Por favor, intenta otra contraseña</span>');
            }

            if($('select.form-control').val() == 0){
            $('select.form-control').after('<span class="error"> Por favor, escoge una opción.</span>');
            }
        
         
       

});