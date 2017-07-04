$(document).ready(function(){
    //Evento click del botón registrar//
    $('.submit-btn').click(function(){
        validateForm();   
    });

    //Función que se ejecuta al presionar el botón registrar//
    function validateForm(){
        //Expresiones regulares para validar name, lastname y formato email//
        var nameReg = /^[A-Za-z]+$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        //Valores de los input//
        var names = $('#name').val();
        var lastname = $('#lastname').val();
        var email = $('#input-email').val();
        var password = $('#input-password').val();

        //Arreglo con los valores a usar en el ciclo//
        var inputVal = new Array(names, lastname, email, password);
        //Arreglo con las palabras a reemplazar en el if//
        var inputMessage = new Array("nombre", "apellido", "email", "contraseña");

         $('.error').hide();
         //Validación nombre vacío//
            if(inputVal[0] == ""){
                $('#name').after('<span class="error"> Por favor, ingresa tu ' + inputMessage[0] + '</span>');
            } //Validación nombre solo letras//
            else if(!nameReg.test(names)){
                $('#name').after('<span class="error"> Se aceptan letras solamente</span>');
            }
        //Validación apellido vacío//    
            if(inputVal[1] == ""){
                $('#lastname').after('<span class="error"> Por favor, ingresa tu ' + inputMessage[1] + '</span>');
            }//Validación apellido solo letras//
            else if(!nameReg.test(lastname)){
                $('#lastname').after('<span class="error"> Se aceptan letras solamente</span>');
            }
        //Validación email vacío//
            if(inputVal[2] == ""){
                $('#input-email').after('<span class="error"> Por favor, ingresa tu ' + inputMessage[2] + '</span>');
            } //Validación formato email correcto//
            else if(!emailReg.test(email)){
                $('#input-email').after('<span class="error"> Por favor, ingresa un email válido.</span>');
            }
         //Validación contraseña vacía//   
            if(inputVal[3] == ""){
            $('#input-password').after('<span class="error"> Por favor, ingresa una ' + inputMessage[3] + '</span>');
            } //Validación contraseña mayor o igual a 6 dígitos//
            else if(($('#input-password').val()).length <= 5){
            $('#input-password').after('<span class="error"> Se necesitan a lo menos 6 caracteres</span>');
            }//Validación contraseña no puede ser 123456//
            else if($('#input-password').val() == 123456){
                $('#input-password').after('<span class="error"> Por favor, intenta otra contraseña</span>');
            }//Validación contraseña no puede ser 098765//
            else if($('#input-password').val() == 098765){
                $('#input-password').after('<span class="error"> Por favor, intenta otra contraseña</span>');
            }//Validación contraseña no puede ser la palabra password//
            else if($('#input-password').val() == "password"){
            $('#input-password').after('<span class="error"> Por favor, intenta otra contraseña</span>');
            }
            //Validación del select no puede ser vacío//
            if($('select.form-control').val() == 0){
            $('select.form-control').after('<span class="error"> Por favor, escoge una opción.</span>');
            }
        }

});