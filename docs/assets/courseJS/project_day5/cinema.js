
function recomendar(genero){
  let age = document.getElementById("age").value;
  let recomendation =  document.getElementById("textRecomendation");
  let img = document.getElementById("imgRecomendation");
    /*
    1. Verificar que se haya ingresado un dato y que este sea valido
    2. Crear funcion generadora de peliculas recomendadas
    if (){
        alert("Ingrese una edad");
    }*/
    switch(genero){
        case "comedy":
            //Recomendation about movie
            if(age<13){
              recomendation.textContent = "Los Pingüinos de Madagascar";
              img.src = "./src/comedy/pinguinos.jpg";
            }else if(age<16){
              recomendation.textContent = "Donde están las rubias";
              img.src = "./src/comedy/rubias.jpg";
            }else{
              recomendation.textContent = "No te metas con zohan";
              img.src = "./src/comedy/zohan.jpg";
            }
            break;
        case "drama":
          if(age<13){
            recomendation.textContent = "Casablanca";
            img.src = "./src/drama/casaBlanca.jpg";
          }else if(age<16){
            recomendation.textContent = "The Shawshank Redemption";
            img.src = "./src/drama/shawshank.jpg";
          }else{
            recomendation.textContent = "Taxi Driver";
            img.src = "./src/drama/taxiDriver.jpg";
          }
            break;
        case "musical":
          if(age<13){
            recomendation.textContent = "La La Land";
            img.src = "./src/musical/lalaLand.jpg";
          }else if(age<16){
            recomendation.textContent = "Les Miserables";
            img.src = "./src/musical/lesMiserables.jpg";
          }else{
            recomendation.textContent = "The Rocky Horror Picture Show";
            img.src = "./src/musical/theRocky.jpg";
          }
            break;
        case "crime":
          if(age<13){
            recomendation.textContent = "No hay opciones para esta edad";
          }else if(age<16){
            recomendation.textContent = "El Secreto de tus Ojos";
            img.src = "./src/crime/elSecretoDeTusOjos.webp";
          }else{
            recomendation.textContent = "The Godfather";
            img.src = "./src/crime/theGodfather.jpg";
          }
            break;
    }
}

