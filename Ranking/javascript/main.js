//Obtener los elementos de la clase .close

let links = document.querySelectorAll (".close");

//Recorrerlos

links.forEach(function(link){
    
   //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        
        //Quitarle las clases de animacion q ya tiene
        content.classList.remove("zoomIn");
        content.classList.remove("animated");

        //Agregar clases para animar su salida zoomOut
        content.classList.add("zoomOut");
        content.classList.add("animated");

        //Agrego timer
        setTimeout(function(){
            location.href = "/ranking";    
        },600)
        

        return false;
    });
});
 