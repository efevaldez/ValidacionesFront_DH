function qs(element){
    return document.querySelector(element)
}


    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastname'),
    $lastnameErrors = qs('#lastnameErrors'),
    $form = qs('#form'),
    $dni = qs('#dni'),
    $dniErrors = qs('#dniErrors'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    $fecha = qs('#fecha'),
    $fechaErrors = qs('#dateErrors'),
    $sexo = qs('#sexo'),
    $sexErrors = qs('#sexErrors'),
    $terms = qs('#flexCheckDefault'),
    $termsErrors = qs('#termsErrors'),
    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    $inputName.addEventListener('blur', function(){
        console.log($inputName.value.trim())
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputName.classList.add('is-invalid') 
                break;
                case !regExAlpha.test($inputName.value):
                    $nameErrors.innerHTML = 'Ingresa un nombre válido'
                    $inputName.classList.add('is-invalid') 
                    break;
        
            default:
                $inputName.classList.remove('is-invalid')
                $inputName.classList.add('is-valid')
                $nameErrors.innerHTML = ''
                break;
        }
    })
    $inputLastname.addEventListener('blur', function(){
        console.log($inputLastname.value.trim())
        switch (true) {
            case !$inputLastname.value.trim():
                $lastnameErrors.innerHTML = 'El campo apellido es obligatorio'
                $inputLastname.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputLastname.value):
                $lastnameErrors.innerHTML = 'Ingresa un apellido válido'
                $inputLastname.classList.add('is-invalid')
                break;    
            default:
                $inputLastname.classList.remove("is-invalid");
                $inputLastname.classList.add('is-valid')
                $lastnameErrors.innerHTML = ""
                break;
        }
    })
    $dni.addEventListener('blur', function(){
        switch (true) {
            case !$dni.value.trim():
                $dniErrors.innerHTML = 'El campo DNI es obligatorio'
                $dni.classList.add('is-invalid')
                break;
            case !regExEmail.test($dni.value):
                $dniErrors.innerHTML = 'Debe ingresar un DNI válido'
                $dni.classList.add('is-invalid')
                break;    
            default:
                $dni.classList.remove("is-invalid");
                $dni.classList.add('is-valid')
                $dniErrors.innerHTML = ""
                break;
        }
    })
    $email.addEventListener('blur', function(){
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio'
                $email.classList.add('is-invalid')
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debe ingresar un email válido'
                $email.classList.add('is-invalid')
                break;    
            default:
                $email.classList.remove("is-invalid");
                $email.classList.add('is-valid')
                $emailErrors.innerHTML = ""
                break;
        }
    })
    $pass.addEventListener('blur', function(){
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio'
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $pass.classList.add('is-invalid')
                break;    
            default:
                $pass.classList.remove("is-invalid");
                $pass.classList.add('is-valid')
                $passErrors.innerHTML = ""
                break;
        }
    })
    $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'Reingresa la contraseña'
                $pass2.classList.add('is-invalid')           
            break;

            
            case $pass2.value !== $pass.value:
                $pass2Errors.innerHTML = 'las contraseñas no coinciden'
                $pass2.classList.add('is-invalid')           
            break;
                
            default:
                $pass2.classList.remove('is-invalid')
                $pass2.classList.add('is-valid')
                $pass2Errors.innerHTML = ""
            break;
        }
    })
    $fecha.addEventListener('blur', function(){
        switch (true) {
            case !$fecha.value.trim():
                $fechaErrors.innerHTML = 'El campo fecha de nacimiento es obligatorio'
                $fecha.classList.add('is-invalid')
                break;
            case moment($fecha.value) > moment():
                $fechaErrors.innerHTML = 'Fecha inválida';
                $fecha.classList.add('is-invalid')
                break;
                case moment().diff(moment($fecha.value), 'years') < 18:
                $fechaErrors.innerHTML = 'Debes ser mayor de 18 años';
                $fecha.classList.add('is-invalid')
                break;        
            default:
                $fecha.classList.remove("is-invalid");
                $fecha.classList.add('is-valid')
                $fechaErrors.innerHTML = ""
                break;
        }
    })
    $sexo.addEventListener('blur', function(){
        if(!$sexo.value.trim()){
             $sexErrors.innerHTML = 'Campo requerido';
             $sexo.classList.add('is-invalid')
         }else {
             $sexo.classList.remove('is-invalid');
             $sexo.classList.add('is-valid');
             $sexErrors.innerHTML = ''
         }
     })
     $terms.addEventListener('click', function(){
         $terms.value = 'on'
         $terms.classList.toggle('is-valid')
         $terms.classList.remove('is-invalid')
         $termsErrors.innerHTML = ''
     })
     $file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
        })
