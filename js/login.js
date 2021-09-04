//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.






document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById("boton-login").addEventListener("click",function(){
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPassword");

        if(inputEmail.value ===''){

            alert("El campo Email esta vacio , Completelo para continuar");
        }
        else { 
        
         
            if(inputPassword.value ===''){
                
                alert("El campo Password esta vacio , Completelo para continuar");
            }
            else { 
                
                    window.location = 'inicio.html';
                    setUserLocalStorage();
                    
                
            
            }
            
        
        
        }
       
        
        
    
    })

});
function setUserLocalStorage(){
    let usuario={
      user: document.getElementById("inputEmail").value,
      password: document.getElementById("inputPassword").value
    }
    let usuarios_json =JSON.stringify(usuario);
    localStorage.setItem("local_users",usuarios_json);
    }
