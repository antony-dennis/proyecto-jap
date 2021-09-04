document.addEventListener("DOMContentLoaded", function(e){


    if (localStorage.getItem("local_users")) {

            
        mis_datos_json = localStorage.getItem("local_users");

        
        mis_datos = JSON.parse(mis_datos_json);

        
        document.getElementById("navUserName").innerHTML = mis_datos.user;
        
    

    }else{
        alert("Debe iniciar secion");
        window.location = 'index.html';
    }
});