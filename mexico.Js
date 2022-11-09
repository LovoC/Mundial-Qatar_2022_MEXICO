var array=["Los partidos de mexico son" , "{ México VS Polonia } { Va a ser el MARTES, NOVIEMBRE 22 a las 10:00 am } { la verdad creo que va a ganar México }" , 
           "{ México VS Argentina } { Va a ser el SABADO, NOVIEMBRE 26 a la 1:00 pm } { la verdad creo que va a ganar Argentina }" , 
           "{ México VS Arabia Saudi } { Va a ser el MIERCOLES, NOVIEMBRE 30 a la 1:00 pm } { la verdad no se quien vaya a ganar }" ]

var N_uno=0 ;

function update(){

N_uno++;

document.getElementById("family_member_name").innerHTML=array[N_uno];

if(N_uno==3){
   N_uno=0;
}




}