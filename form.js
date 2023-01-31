function captura (){
    var nom_ape=document.getElementById("nombre_apellido").value;
    var email=document.getElementById("email").value;
    var telefono=document.getElementById("telefono").value;
    if (nom_ape== "") {
        alert ("el Nombre y Apellido es obligatorio");
        document.getElementById("nombre_apellido").focus();
    } else {
        if (email== "") {
            alert ("el registro del correo es obligatorio");
            document.getElementById("email").focus();
        } 
     else {
        if (email== "") {
            alert ("el registro del correo es obligatorio");
            document.getElementById("email").focus();
        } 
     else {
        if (telefono== "") {
            alert ("llenar campo telefono es obligatorio");
            document.getElementById("telefono").focus();
        }

     else{
        console.log ("nombre del contacto es " + nom_ape +  " , su correo es "+ email+ " y su telefono es " + telefono);
            document.getElementById("nombre_apellido").value="";
            document.getElementById("email").value="";
            document.getElementById("telefono").value="";
           
    }
    }
    }
}


       
    
    

}