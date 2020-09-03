/*
     Scrip utilizado para efectuar cambio de voicemail password para todas las extensiones.
     PIN = VOICEMAIL PASSWORD.
*/

// Arreglo con todas las contraseñas.
var VoiceMailPasswords = [
      ['7460'],['2690'],['6133'],['6940'],['9991'],['4869'],['9989'],['6193'],['7175'],['5460'],['5210'],['1673'],['2304'],['9748'],['7413'],['9105'],['8876'],
      ['8167'],['5288'],['8433'],['2394'],['9648'],['7795'],['9068'],['5826'],['1809'],['9843'],['8521'],['9738'],['4653'],['2264'],['1263'],['1095'],['6032'],
      ['3505'],['7465'],['5762'],['1738'],['6011'],['5149'],['2046'],['4973'],['4105'],['4213'],['6537'],['5554'],['3535'],['8972'],['2253'],['4653'],['9903'],
      ['9704'],['1260'],['4727'],['7023'],['6786'],['5594'],['4971'],['3166'],['2969'],['7597'],['9391'],['6344'],['7449'],['6250'],['2438'],['3269'],['6461'],
      ['7831'],['9425'],['5888'],['5090'],['9580'],['9947'],['8442'],['3087'],['2603'],['9385'],['4745'],['8580'],['4372'],['9368'],['4389'],['1546'],['2825'],
      ['6893'],['2149'],['5590'],['9826'],['7555'],['2974'],['4904'],['4395'],['9834'],['8778'],['4161'],['2465'],['8908'],['9222'],['7318'],['2191'],['3421'],
      ['8351'],['9527'],['8582'],['6158'],['6011'],['6362'],['7473'],['7142'],['5513'],['8649'],['3901'],['1653'],['1777'],['9779'],['2364'],['3414'],['9779'],
      ['3651'],['2232'],['1511'],['5315'],['9251'],['5725'],['7034'],['7407'],['9717'],['4868'],['8476'],['9313'],['2137'],['1600'],['4697'],['2559'],['2389'],
      ['5712'],['2396'],['1940'],['7034'],['3377'],['5334'],['5046'],['8867'],['3604'],['5586'],['5047'],['5113'],['6780'],['7797'],['4401'],['5930'],['6349'],
      ['6144'],['3293'],['8798'],['5035'],['4344'],['5133'],['3455'],['2015'],['1083'],['2320'],['9899'],['8601'],['8822'],['9046'],['6330'],['4282'],['2524'],
      ['9448'],['4809'],['4820'],['8513'],['3112'],['5304'],['1664'],['2008'],['6727'],['1365'],['1223'],['2721'],['1639'],['8311'],
]

// Funcion encargada de realizar el cambio de contraseña.
function Process()
{
     if(Index < VoiceMailPasswords.length){
          var Interval = setInterval(function(){
               if(NewWindow.document.getElementById('ui-id-' + IdExtension) != null){
                    clearInterval(Interval);
                    NewWindow.document.getElementById('ui-id-' + IdExtension).click();

                    var VoiceMailPassword = null;

                    var ChangeVoiceMailPassword = setInterval(function(){
                         VoiceMailPassword = NewWindow.document.getElementById("vmpwd");

                         if(VoiceMailPassword != null && NewWindow.document.getElementsByName('Submit')[0] != null){

                              clearInterval(ChangeVoiceMailPassword);

                              // Estableciendo nueva contraseña
                              VoiceMailPassword.value = VoiceMailPasswords[Index][0];

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
// Para recorrer el arreglo de VoiceMailPasswords (VoiceMailPasswords)
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
