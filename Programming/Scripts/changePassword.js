/*
     Scrip utilizado para efectuar cambio de contraseña para todas las extensiones.
     Contraseña Anterior ITlaureate123.
     Nueva Contraseña Laureate[Extension].
*/

// Arreglo con todas las extensiones a las que se les actualizara la contraseña.
var Extensions = [
     ['1000'],['1001'],['1002'],['1003'],['1004'],['1005'],['1006'],['1007'],['1008'],['1009'],['1010'],['1011'],['1012'],['1013'],['1014'],['1015'],['1016'],
     ['1017'],['1018'],['1019'],['1020'],['1021'],['1022'],['1023'],['1024'],['1025'],['1026'],['1027'],['1028'],['1029'],['1030'],['1031'],['1032'],['1033'],
     ['1034'],['1035'],['1036'],['1037'],['1038'],['1039'],['1040'],['1041'],['1042'],['1043'],['1044'],['1045'],['1046'],['1047'],['1048'],['1049'],['1050'],
     ['1051'],['1052'],['1053'],['1054'],['1055'],['1056'],['1057'],['1058'],['1059'],['1060'],['1061'],['1062'],['1063'],['1064'],['1065'],['1066'],['1067'],
     ['1068'],['1069'],['1070'],['1071'],['1072'],['1073'],['1074'],['1075'],['1076'],['1077'],['1078'],['1079'],['1080'],['1081'],['1082'],['1083'],['1084'],
     ['1085'],['1086'],['1087'],['1088'],['1089'],['1090'],['1091'],['1092'],['1093'],['1094'],['1095'],['1096'],['1097'],['1098'],['1099'],['1100'],['1101'],
     ['1102'],['1103'],['1104'],['1105'],['1106'],['1107'],['1108'],['1109'],['1110'],['1111'],['1112'],['1113'],['1114'],['1115'],['1116'],['1117'],['1118'],
     ['1119'],['1120'],['1121'],['1122'],['1123'],['1124'],['1125'],['1126'],['1127'],['1128'],['1129'],['1130'],['1131'],['1132'],['1133'],['1134'],['1135'],
     ['1136'],['1137'],['1138'],['1139'],['1140'],['1141'],['1142'],['1143'],['1144'],['1145'],['1146'],['1147'],['1148'],['1149'],['1150'],['1151'],['1152'],
     ['1153'],['1154'],['1155'],['1156'],['1157'],['1158'],['1159'],['1160'],['1161'],['1162'],['1163'],['1164'],['1165'],['1166'],['1167'],['1168'],['1169'],
     ['1170'],['1171'],['1172'],['1173'],['1174'],['1175'],['1176'],['1177'],['1178'],['1179'],
];

// Funcion encargada de realizar el cambio de contraseña.
function Process()
{
     if(Index < Extensions.length){
          var Interval = setInterval(function(){
               if(NewWindow.document.getElementById('ui-id-' + IdExtension) != null){
                    clearInterval(Interval);
                    NewWindow.document.getElementById('ui-id-' + IdExtension).click();

                    var Secret = null;

                    var ChangePasswordInterval = setInterval(function(){
                         Secret = NewWindow.document.getElementById("devinfo_secret");

                         if(Secret != null && NewWindow.document.getElementsByName('Submit')[0] != null){

                              clearInterval(ChangePasswordInterval);

                              // Estableciendo nueva contraseña
                              Secret.value = 'Laureate' + Extensions[Index][0];

                              NewWindow.document.getElementsByName('Submit')[0].click();

                              var SubmitInterval = setInterval(function(){

                                   if(NewWindow.document.getElementById("button_reload") != null){

                                        clearInterval(SubmitInterval);

                                        Index++;
                                        IdExtension++;
                                        // Index = 22;
                                        // NewWindow.close();
                                        // NewWindow = null;
                                        Process();
                                   }
                              },500);
                         }
                    },500);
               }
          },500);
     }
}


// Estableciendo variables utilizadas
// Para recorrer el arreglo de Extensiones (Extensions)
var Index = 0;

// Para recorrer los enlaces dentro del sitio web.
var IdExtension = 4;

// Para ejecutar el escrip se necesitan 2 ventanas:
// Ventana controladora  ->   controla la ejecución del script.
// Ventana ejecutora     ->   ejecuta el script.
// Para referenciar la ventana donde se ejecuta el script.
var NewWindow = null;
NewWindow = window.open("https://172.20.33.33/config.php?type=setup&display=extensions");

// Esperando a que la ventana cargue.
NewWindow.onload = function(){
     // Ejecutando función principal.
     Process();
}
