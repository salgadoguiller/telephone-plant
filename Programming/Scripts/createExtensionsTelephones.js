/*
     Scrip utilizado para crear extensiones para los telefonos fisicos.
*/

// Información de todas las extensiones adicionales a crear.
var Extensions = [
     ['1300', 'Telephone HR', '1300', '1300', 'Laureate1300', 'Enable', '1223'],
     ['1301', 'Telephone Finance', '1301', '1301', 'Laureate1301', 'Enable', '2721'],
     ['1302', 'Telephone Site Director', '1302', '1302', 'Laureate1302', 'Enable', '1639'],
     ['1303', 'Telephone Technology', '1303', '1303', 'Laureate1303', 'Enable', '8311'],
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
