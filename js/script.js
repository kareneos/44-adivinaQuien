$(document).ready(function(){
    //contador en 0
    var count = 0;
    //Base de Alumnas
    var alumnas = [];
    var alumna1 = [];
    alumna1["nombre"]="natasha";
    alumna1["foto"]="img/Natasha.jpg";
    alumnas.push (alumna1);
    var alumna2 = []
    alumna2["nombre"]="veronica";
    alumna2["foto"]="img/Veronica.jpg";
    alumnas.push (alumna2);
    var alumna3 = []
    alumna3["nombre"]="edith";
    alumna3["foto"]="img/Edith.jpg";
    alumnas.push (alumna3);
    var alumna4 = []
    alumna4["nombre"]="valeria";
    alumna4["foto"]="img/Valeria.jpg";
    alumnas.push (alumna4);
    var alumna5 = []
    alumna5["nombre"]="karen";
    alumna5["foto"]="img/Karen.jpg";
    alumnas.push (alumna5);
    
    //foto aleatoria
    var alumnaAleatoria = numAleatorio();
    function numAleatorio() {
        return Math.floor((Math.random() * 5) + 0);        
    }
    //agregar foto al img
    $('#foto').attr('src', alumnas[alumnaAleatoria]["foto"]);
    //contador de errores
    var i = 0;
    //nombre
    $(".btn").click(function(){
         var nombre = $('#nombre').val().trim().toLowerCase();
        if(nombre == alumnas[alumnaAleatoria]["nombre"]){
            var sumaPuntos = count+=5;
            $("#puntos").html(count);
            $("#mensaje").html("¡Excelente acertaste!");
            $("#nombre").val("");
            alumnaAleatoria = numAleatorio();
            $('#foto').attr('src', alumnas[alumnaAleatoria]["foto"]);
        }else{
            i++;
            if(i == 5){
                var restaPuntos = count--;
                $("#puntos").html(count);
                alumnaAleatoria = numAleatorio();
                $('#foto').attr('src', alumnas[alumnaAleatoria]["foto"]);
                i = 0;
            }
            $("#mensaje").html("¡Sigue intentando!");
        }
    });
                 
});