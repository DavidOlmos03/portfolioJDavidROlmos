function recomendar(genero){
    var age = document.getElementById("age").value;

    /*
    1. Verificar que se haya ingresado un dato y que este sea valido
    2. Crear funcion generadora de peliculas recomendadas
    if (){
        alert("Ingrese una edad");
    }*/
    switch(genero){
        case "comedy":
            //Recomendation about movie
            typeMovieRecomendation(age);
            break;
        case "drama":
            typeMovieRecomendation(age);
            break;
        case "musical":
            typeMovieRecomendation(age);
            break;
        case "crime":
            typeMovieRecomendation(age);
            break;
    }
}

function typeMovieRecomendation(age){
    if(age<13){
        alert("Se recomienda pelicula ATP");
    }else if(age<16){
        alert("Se recomienda pelicula +13");
    }else{
        alert("Se recomienda pelicula +16");
    }
}

function chooseMovie(){

}