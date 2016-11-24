$(document).ready(function(){
    //contador en 0
    var count = 0;
    //contador de errores
    var i = 0;
    //variables
    var $nombre = $('#nombre');
    
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
    var alumna6 = []
    alumna6["nombre"]="alejandra";
    alumna6["foto"]="img/Alejandra.jpg";
    alumnas.push (alumna6);
    var alumna7 = []
    alumna7["nombre"]="alejandra";
    alumna7["foto"]="img/Alejandrabb.jpg";
    alumnas.push (alumna7);
    var alumna8 = []
    alumna8["nombre"]="adriana";
    alumna8["foto"]="img/Adriana.jpg";
    alumnas.push (alumna8);
    var alumna9 = []
    alumna9["nombre"]="adriana";
    alumna9["foto"]="img/Adriana2.jpg";
    alumnas.push (alumna9);
    var alumna10 = []
    alumna10["nombre"]="paola";
    alumna10["foto"]="img/AnaPaola.jpg";
    alumnas.push (alumna10);
    var alumna11 = []
    alumna11["nombre"]="berencie";
    alumna11["foto"]="img/Berenice.jpg";
    alumnas.push (alumna11);
    var alumna12 = []
    alumna12["nombre"]="carmen";
    alumna12["foto"]="img/Carmen.jpg";
    alumnas.push (alumna12);
    var alumna13 = []
    alumna13["nombre"]="claudia";
    alumna13["foto"]="img/Claudia.jpg";
    alumnas.push (alumna13);
    var alumna14 = []
    alumna14["nombre"]="cristina";
    alumna14["foto"]="img/Cristina.jpg";
    alumnas.push (alumna14);
    var alumna15 = []
    alumna15["nombre"]="flor";
    alumna15["foto"]="img/Flor.jpg";
    alumnas.push (alumna15);
    var alumna16 = []
    alumna16["nombre"]="hasel";
    alumna16["foto"]="img/Hasel.jpg";
    alumnas.push (alumna16);
    var alumna17 = []
    alumna17["nombre"]="iana";
    alumna17["foto"]="img/Iana.jpg";
    alumnas.push (alumna17);
    var alumna18 = []
    alumna18["nombre"]="irene";
    alumna18["foto"]="img/Irene.jpg";
    alumnas.push (alumna8);
    var alumna19 = []
    alumna9["nombre"]="irma";
    alumna19["foto"]="img/Irma.jpg";
    alumnas.push (alumna19);
    var alumna20 = []
    alumna20["nombre"]="isabel";
    alumna20["foto"]="img/Isabel.jpg";
    alumnas.push (alumna20);
     var alumna21 = [];
    alumna21["nombre"]="isolda";
    alumna21["foto"]="img/Isolda.jpg";
    alumnas.push (alumna21);
    var alumna22 = []
    alumna22["nombre"]="jaqueline";
    alumna22["foto"]="img/Jaqueline.jpg";
    alumnas.push (alumna22);
    var alumna23 = []
    alumna23["nombre"]="karem";
    alumna23["foto"]="img/Karem.jpg";
    alumnas.push (alumna23);
    var alumna24 = []
    alumna24["nombre"]="liliana";
    alumna24["foto"]="img/Liliana.jpg";
    alumnas.push (alumna24);
    var alumna25 = []
    alumna25["nombre"]="linda";
    alumna25["foto"]="img/Linda.jpg";
    alumnas.push (alumna25);
    var alumna26 = []
    alumna26["nombre"]="lizbeth";
    alumna26["foto"]="img/Liz.jpg";
    alumnas.push (alumna26);
    var alumna27 = []
    alumna27["nombre"]="mariana";
    alumna27["foto"]="img/Mariana.jpg";
    alumnas.push (alumna27);
    var alumna28 = []
    alumna28["nombre"]="mariana";
    alumna28["foto"]="img/Mariana2.jpg";
    alumnas.push (alumna28);
    var alumna29 = []
    alumna29["nombre"]="monica";
    alumna29["foto"]="img/Monica.jpg";
    alumnas.push (alumna29);
    var alumna30 = []
    alumna30["nombre"]="nayeli";
    alumna30["foto"]="img/Nayeli.jpg";
    alumnas.push (alumna30);
     var alumna31 = [];
    alumna31["nombre"]="okaidy";
    alumna31["foto"]="img/Okaidy.jpg";
    alumnas.push (alumna31);
    var alumna32 = []
    alumna32["nombre"]="oliva";
    alumna32["foto"]="img/Oliva.jpg";
    alumnas.push (alumna32);
    var alumna33 = []
    alumna33["nombre"]="Oriana";
    alumna33["foto"]="img/Oriana.jpg";
    alumnas.push (alumna33);
    var alumna34 = []
    alumna34["nombre"]="paola";
    alumna34["foto"]="img/Paola.jpg";
    alumnas.push (alumna34);
    var alumna35 = []
    alumna35["nombre"]="sandra";
    alumna35["foto"]="img/Sandra.jpg";
    alumnas.push (alumna35);
    var alumna36 = []
    alumna36["nombre"]="shantal";
    alumna36["foto"]="img/Shantal.jpg";
    alumnas.push (alumna36);
    var alumna37 = []
    alumna37["nombre"]="tania";
    alumna37["foto"]="img/Tania.jpg";
    alumnas.push (alumna37);
    var alumna38 = []
    alumna38["nombre"]="valeria";
    alumna38["foto"]="img/Valeria.jpg";
    alumnas.push (alumna38);
    var alumna39 = []
    alumna39["nombre"]="vannia";
    alumna39["foto"]="img/Vannia.jpg";
    alumnas.push (alumna39);
    var alumna40 = []
    alumna40["nombre"]="varinia";
    alumna40["foto"]="img/Varinia.jpg";
    alumnas.push (alumna40);
     var alumna41 = [];
    alumna41["nombre"]="yaredi";
    alumna41["foto"]="img/Yaredi.jpg";
    alumnas.push (alumna41);
    var alumna42 = []
    alumna42["nombre"]="yasury";
    alumna42["foto"]="img/Yasury.jpg";
    alumnas.push (alumna42);
    var alumna43 = []
    alumna43["nombre"]="yesenia";
    alumna43["foto"]="img/Yesenia.jpg";
    alumnas.push (alumna43);
    
    //foto aleatoria
    var alumnaAleatoria = numAleatorio();
    function numAleatorio() {
        return Math.floor((Math.random() * 43) + 0); 
        return $('#mensaje').html(" ");
    }
    //agregar foto al img
    $('#foto').attr('src', alumnas[alumnaAleatoria]["foto"]);
    
    //nombre
    $(".btn").click(function(){
         var nombre = $('#nombre').val().trim().toLowerCase();
        if(nombre == alumnas[alumnaAleatoria]["nombre"]){
            var sumaPuntos = count+=5;
            $("#puntos").html(count);
            $("#mensaje").fadeIn().html("¡Excelente acertaste!");
            setTimeout(function(){
               $("#nombre").val("");
                alumnaAleatoria = numAleatorio();
                $('#foto').attr('src', alumnas[alumnaAleatoria]["foto"]);
                $("#mensaje").fadeOut();
            },2000);
        }else{
            i++;
            if(i == 5){
                var restaPuntos = count--;
                $("#nombre").val("");
                $("#puntos").html(count);
                alumnaAleatoria = numAleatorio();
                $('#foto').attr('src', alumnas[alumnaAleatoria]["foto"]);
                i = 0;
                $("#mensaje").fadeOut();
            }else{
                $("#mensaje").fadeIn().html("¡Sigue intentando!").delay(300).fadeOut();
            }
        }
    });             
});