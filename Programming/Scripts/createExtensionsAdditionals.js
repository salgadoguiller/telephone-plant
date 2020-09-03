/*
     Scrip utilizado para crear extensiones adicionales que se asignaran segun las necesidades (ej: nuevos empleados).
*/

// Información de todas las extensiones adicionales a crear.
var Extensions = [
     ['1165', 'Sin Asignar 1', '1165', '1165', 'Laureate1165', 'Enable', '8822'],
     ['1166', 'Sin Asignar 2', '1166', '1166', 'Laureate1166', 'Enable', '9046'],
     ['1167', 'Sin Asignar 3', '1167', '1167', 'Laureate1167', 'Enable', '6330'],
     ['1168', 'Sin Asignar 4', '1168', '1168', 'Laureate1168', 'Enable', '4282'],
     ['1169', 'Sin Asignar 5', '1169', '1169', 'Laureate1169', 'Enable', '2524'],
     ['1170', 'Sin Asignar 6', '1170', '1170', 'Laureate1170', 'Enable', '9448'],
     ['1171', 'Sin Asignar 7', '1171', '1171', 'Laureate1171', 'Enable', '4809'],
     ['1172', 'Sin Asignar 8', '1172', '1172', 'Laureate1172', 'Enable', '4820'],
     ['1173', 'Sin Asignar 9', '1173', '1173', 'Laureate1173', 'Enable', '8513'],
     ['1174', 'Sin Asignar 10', '1174', '1174', 'Laureate1174', 'Enable', '3112'],
     ['1175', 'Sin Asignar 11', '1175', '1175', 'Laureate1175', 'Enable', '5304'],
     ['1176', 'Sin Asignar 12', '1176', '1176', 'Laureate1176', 'Enable', '1664'],
     ['1177', 'Sin Asignar 13', '1177', '1177', 'Laureate1177', 'Enable', '2008'],
     ['1178', 'Sin Asignar 14', '1178', '1178', 'Laureate1178', 'Enable', '6727'],
     ['1179', 'Sin Asignar 15', '1179', '1179', 'Laureate1179', 'Enable', '1365'],
];

// Funcion encargada de crear todas las extensiones adicionales.
function Process()
{
     if(index < Extensions.length){
          var buttonInterval = setInterval(function(){
               if(NewWindow.document.getElementsByName('Submit') != null){
                    clearInterval(buttonInterval);
                    NewWindow.document.getElementsByName('Submit')[0].click();

                    var UserExt = null;
                    var DispName = null;
                    var CidAlias = null;
                    var SipAlias = null;
                    var CallWaiting = null;
                    var Secret = null;
                    var Status = null;
                    var VoicePass = null;

                    var NewSipInterval = setInterval(function(){

                         UserExt = NewWindow.document.getElementById("extension");
                         DispName = NewWindow.document.getElementById("name");
                         CidAlias = NewWindow.document.getElementById("cid_masquerade");
                         SipAlias = NewWindow.document.getElementById("sipname");
                         CallWaiting = NewWindow.document.getElementById("callwaiting");
                         Secret = NewWindow.document.getElementById("devinfo_secret");
                         Status = NewWindow.document.getElementById("vm");
                         VoicePass = NewWindow.document.getElementById("vmpwd");

                         if(UserExt != null && DispName != null && CidAlias != null && SipAlias != null && CallWaiting != null &&Secret != null && Status != null && VoicePass != null){

                              clearInterval(NewSipInterval);

                              UserExt.value = Extensions[index][0];
                              DispName.value = Extensions[index][1];
                              CidAlias.value = Extensions[index][2];
                              SipAlias.value = Extensions[index][3];
                              Secret.value = Extensions[index][4];

                              // Call Waiting enable
                              var CallWaitingOption = CallWaiting.getElementsByTagName("option")[1]
                              CallWaitingOption.removeAttribute("selected")

                              var CallWaitingOption = CallWaiting.getElementsByTagName("option")[0];
                              CallWaitingOption.setAttribute("selected","true");

                              var StatusOption = Status.getElementsByTagName("option")[1]
                              StatusOption.removeAttribute("selected")

                              var StatusOption = Status.getElementsByTagName("option")[0];
                              StatusOption.setAttribute("selected","true");

                              NewWindow.document.getElementById('vmpwd').disabled = false;

                              VoicePass.value = Extensions[index][6];

                              NewWindow.document.getElementsByName('Submit')[0].click();

                              var SubmitInterval = setInterval(function(){

                                   if(NewWindow.document.getElementById("button_reload") != null){

                                        clearInterval(SubmitInterval);

                                        index++;
                                        // index = 22;
                                        // NewWindow.close();
                                        // NewWindow = null;
                                        Process();

                                        /*
                                        NewWindow.document.getElementById("button_reload").click();

                                        var ApplyConfigInterval = setInterval(function(){

                                             if(document.getElementById("button_reload").style.display == "none"){

                                                  clearInterval(ApplyConfigInterval);

                                                  // index++;
                                                  index = 22;
                                                  NewWindow.close();
                                                  NewWindow = null;
                                                  Process();
                                             }
                                        },500);
                                        */
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
var index = 0;

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
