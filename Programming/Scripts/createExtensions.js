/*
     Scrip utilizado para crear las extensiones para todos los empleados de LNO-Honduras.
     Nota:     Contraseña [ITlaureate123] se cambio mediante el script changePassword.js.
*/

// Información de todas las extensiones a crear.
var Extensions = [
['1000', 'Adriana Vega', '1000', '1000', 'ITlaureate123', 'Enable', '7460'],
['1001', 'Alan Suazo', '1001', '1001', 'ITlaureate123', 'Enable', '2690'],
['1002', 'Alana Garcia', '1002', '1002', 'ITlaureate123', 'Enable', '6133'],
['1003', 'Alejandro Castillo', '1003', '1003', 'ITlaureate123', 'Enable', '6940'],
['1004', 'Alessandra Membreno', '1004', '1004', 'ITlaureate123', 'Enable', '9991'],
['1005', 'Alessia Lopez', '1005', '1005', 'ITlaureate123', 'Enable', '4869'],
['1006', 'Alexandra Arteaga', '1006', '1006', 'ITlaureate123', 'Enable', '9989'],
['1007', 'Alicia Medina', '1007', '1007', 'ITlaureate123', 'Enable', '6193'],
['1008', 'Allan Fiallos', '1008', '1008', 'ITlaureate123', 'Enable', '7175'],
['1009', 'Alvaro Irias', '1009', '1009', 'ITlaureate123', 'Enable', '5460'],
['1010', 'Ana Amato', '1010', '1010', 'ITlaureate123', 'Enable', '5210'],
['1011', 'Ana Diaz', '1011', '1011', 'ITlaureate123', 'Enable', '1673'],
['1012', 'Ana Karina Gonzalez', '1012', '1012', 'ITlaureate123', 'Enable', '2304'],
['1013', 'Ana Midence', '1013', '1013', 'ITlaureate123', 'Enable', '9748'],
['1014', 'Ana Morazan', '1014', '1014', 'ITlaureate123', 'Enable', '7413'],
['1015', 'Ana Riera', '1015', '1015', 'ITlaureate123', 'Enable', '9105'],
['1016', 'Andrea Aguilar', '1016', '1016', 'ITlaureate123', 'Enable', '8876'],
['1017', 'Andrea Escoto', '1017', '1017', 'ITlaureate123', 'Enable', '8167'],
['1018', 'Andrea Martinez', '1018', '1018', 'ITlaureate123', 'Enable', '5288'],
['1019', 'Angela Velasquez', '1019', '1019', 'ITlaureate123', 'Enable', '8433'],
['1020', 'Arlene Salgado', '1020', '1020', 'ITlaureate123', 'Enable', '2394'],
['1021', 'Belinda Torres', '1021', '1021', 'ITlaureate123', 'Enable', '9648'],
['1022', 'Camila Estrada', '1022', '1022', 'ITlaureate123', 'Enable', '7795'],
['1023', 'Candy Hernandez', '1023', '1023', 'ITlaureate123', 'Enable', '9068'],
['1024', 'Carlos Arita', '1024', '1024', 'ITlaureate123', 'Enable', '5826'],
['1025', 'Carlos Caceres', '1025', '1025', 'ITlaureate123', 'Enable', '1809'],
['1026', 'Carlos Claros', '1026', '1026', 'ITlaureate123', 'Enable', '9843'],
['1027', 'Carlos Ramirez', '1027', '1027', 'ITlaureate123', 'Enable', '8521'],
['1028', 'Carolina Boquin', '1028', '1028', 'ITlaureate123', 'Enable', '9738'],
['1029', 'Cesar Bonilla', '1029', '1029', 'ITlaureate123', 'Enable', '4653'],
['1030', 'Cindy Euceda', '1030', '1030', 'ITlaureate123', 'Enable', '2264'],
['1031', 'Cinthya Gonzalez', '1031', '1031', 'ITlaureate123', 'Enable', '1263'],
['1032', 'Clark Duque', '1032', '1032', 'ITlaureate123', 'Enable', '1095'],
['1033', 'Claudia Escoto', '1033', '1033', 'ITlaureate123', 'Enable', '6032'],
['1034', 'Claudia Rodriguez', '1034', '1034', 'ITlaureate123', 'Enable', '3505'],
['1035', 'Claudio Cáceres', '1035', '1035', 'ITlaureate123', 'Enable', '7465'],
['1036', 'Cristian Turcios', '1036', '1036', 'ITlaureate123', 'Enable', '5762'],
['1037', 'Cynthia Castro', '1037', '1037', 'ITlaureate123', 'Enable', '1738'],
['1038', 'Cynthia Lezama', '1038', '1038', 'ITlaureate123', 'Enable', '6011'],
['1039', 'Daniel Arita', '1039', '1039', 'ITlaureate123', 'Enable', '5149'],
['1040', 'Daniela Andino', '1040', '1040', 'ITlaureate123', 'Enable', '2046'],
['1041', 'Daniela Gamero', '1041', '1041', 'ITlaureate123', 'Enable', '4973'],
['1042', 'Daniella Ham', '1042', '1042', 'ITlaureate123', 'Enable', '4105'],
['1043', 'Dariela Lopez', '1043', '1043', 'ITlaureate123', 'Enable', '4213'],
['1044', 'Debbie Caballero', '1044', '1044', 'ITlaureate123', 'Enable', '6537'],
['1045', 'Deborah Corea', '1045', '1045', 'ITlaureate123', 'Enable', '5554'],
['1046', 'Diana Casasola', '1046', '1046', 'ITlaureate123', 'Enable', '3535'],
['1047', 'Dilcia Lagos', '1047', '1047', 'ITlaureate123', 'Enable', '8972'],
['1048', 'Douglas Guillen', '1048', '1048', 'ITlaureate123', 'Enable', '2253'],
['1049', 'Edgardo Duron', '1049', '1049', 'ITlaureate123', 'Enable', '4653'],
['1050', 'Eduardo Zepeda', '1050', '1050', 'ITlaureate123', 'Enable', '9903'],
['1051', 'Edy Lagos', '1051', '1051', 'ITlaureate123', 'Enable', '9704'],
['1052', 'Elder Godoy', '1052', '1052', 'ITlaureate123', 'Enable', '1260'],
['1053', 'Erick Izaguirre', '1053', '1053', 'ITlaureate123', 'Enable', '4727'],
['1054', 'Erick Yushan', '1054', '1054', 'ITlaureate123', 'Enable', '7023'],
['1055', 'Erika Heinemann', '1055', '1055', 'ITlaureate123', 'Enable', '6786'],
['1056', 'Esdras Varela', '1056', '1056', 'ITlaureate123', 'Enable', '5594'],
['1057', 'Fanny Flores', '1057', '1057', 'ITlaureate123', 'Enable', '4971'],
['1058', 'Fernando Molinero', '1058', '1058', 'ITlaureate123', 'Enable', '3166'],
['1059', 'Flor Reyes', '1059', '1059', 'ITlaureate123', 'Enable', '2969'],
['1060', 'Francisco Dominguez', '1060', '1060', 'ITlaureate123', 'Enable', '7597'],
['1061', 'Francisco Perez', '1061', '1061', 'ITlaureate123', 'Enable', '9391'],
['1062', 'Gabriel Medina', '1062', '1062', 'ITlaureate123', 'Enable', '6344'],
['1063', 'Gabriel Velasquez', '1063', '1063', 'ITlaureate123', 'Enable', '7449'],
['1064', 'Gabriela Zepeda', '1064', '1064', 'ITlaureate123', 'Enable', '6250'],
['1065', 'Gerardo Romero', '1065', '1065', 'ITlaureate123', 'Enable', '2438'],
['1066', 'Gerardo Solis', '1066', '1066', 'ITlaureate123', 'Enable', '3269'],
['1067', 'Gilberto Medina', '1067', '1067', 'ITlaureate123', 'Enable', '6461'],
['1068', 'Gina Almendares', '1068', '1068', 'ITlaureate123', 'Enable', '7831'],
['1069', 'Gloria Molina', '1069', '1069', 'ITlaureate123', 'Enable', '9425'],
['1070', 'Gloria Rodriguez', '1070', '1070', 'ITlaureate123', 'Enable', '5888'],
['1071', 'Gracia Castillo', '1071', '1071', 'ITlaureate123', 'Enable', '5090'],
['1072', 'Griselle Banegas', '1072', '1072', 'ITlaureate123', 'Enable', '9580'],
['1073', 'Guillermo Boquin', '1073', '1073', 'ITlaureate123', 'Enable', '9947'],
['1074', 'Guillermo Crescencio', '1074', '1074', 'ITlaureate123', 'Enable', '8442'],
['1075', 'Handerson Contreras', '1075', '1075', 'ITlaureate123', 'Enable', '3087'],
['1076', 'Horacio Gadamez', '1076', '1076', 'ITlaureate123', 'Enable', '2603'],
['1077', 'Ian Martinez', '1077', '1077', 'ITlaureate123', 'Enable', '9385'],
['1078', 'Isabella Cerrato', '1078', '1078', 'ITlaureate123', 'Enable', '4745'],
['1079', 'Jairo Velasquez', '1079', '1079', 'ITlaureate123', 'Enable', '8580'],
['1080', 'Jorge Baca', '1080', '1080', 'ITlaureate123', 'Enable', '4372'],
['1081', 'Jorge Caballero', '1081', '1081', 'ITlaureate123', 'Enable', '9368'],
['1082', 'Jorge Messen', '1082', '1082', 'ITlaureate123', 'Enable', '4389'],
['1083', 'Jorge Paz', '1083', '1083', 'ITlaureate123', 'Enable', '1546'],
['1084', 'Jose Donaldo Posas', '1084', '1084', 'ITlaureate123', 'Enable', '2825'],
['1085', 'Jose Eduardo Hernandez', '1085', '1085', 'ITlaureate123', 'Enable', '6893'],
['1086', 'Jose Pejuan', '1086', '1086', 'ITlaureate123', 'Enable', '2149'],
['1087', 'Jose Perdomo', '1087', '1087', 'ITlaureate123', 'Enable', '5590'],
['1088', 'Jose Sosa', '1088', '1088', 'ITlaureate123', 'Enable', '9826'],
['1089', 'Joshua Carbajal', '1089', '1089', 'ITlaureate123', 'Enable', '7555'],
['1090', 'Juan Andonie', '1090', '1090', 'ITlaureate123', 'Enable', '2974'],
['1091', 'Juan Hernandez', '1091', '1091', 'ITlaureate123', 'Enable', '4904'],
['1092', 'Julia Salazar', '1092', '1092', 'ITlaureate123', 'Enable', '4395'],
['1093', 'Julio Elgueta', '1093', '1093', 'ITlaureate123', 'Enable', '9834'],
['1094', 'Katy Lion', '1094', '1094', 'ITlaureate123', 'Enable', '8778'],
['1095', 'Kerlyn Bustillo', '1095', '1095', 'ITlaureate123', 'Enable', '4161'],
['1096', 'Kewyn Medina', '1096', '1096', 'ITlaureate123', 'Enable', '2465'],
['1097', 'Laura Gonzalez', '1097', '1097', 'ITlaureate123', 'Enable', '8908'],
['1098', 'Leda Arostegui', '1098', '1098', 'ITlaureate123', 'Enable', '9222'],
['1099', 'Leonardo Hernandez', '1099', '1099', 'ITlaureate123', 'Enable', '7318'],
['1100', 'Levi Donaire', '1100', '1100', 'ITlaureate123', 'Enable', '2191'],
['1101', 'Lily Romero', '1101', '1101', 'ITlaureate123', 'Enable', '3421'],
['1102', 'Lourdes Valladares', '1102', '1102', 'ITlaureate123', 'Enable', '8351'],
['1103', 'Luis Andino', '1103', '1103', 'ITlaureate123', 'Enable', '9527'],
['1104', 'Luis Miguel Robles', '1104', '1104', 'ITlaureate123', 'Enable', '8582'],
['1105', 'Luis Zuniga', '1105', '1105', 'ITlaureate123', 'Enable', '6158'],
['1106', 'Manuel Nunez', '1106', '1106', 'ITlaureate123', 'Enable', '6011'],
['1107', 'Marcela Raudales', '1107', '1107', 'ITlaureate123', 'Enable', '6362'],
['1108', 'Maria  Fernanda Romero', '1108', '1108', 'ITlaureate123', 'Enable', '7473'],
['1109', 'Maria Fernanda Lopez', '1109', '1109', 'ITlaureate123', 'Enable', '7142'],
['1110', 'Maria Jose Flores', '1110', '1110', 'ITlaureate123', 'Enable', '5513'],
['1111', 'Marianella Bustillo', '1111', '1111', 'ITlaureate123', 'Enable', '8649'],
['1112', 'Mario Rodriguez', '1112', '1112', 'ITlaureate123', 'Enable', '3901'],
['1113', 'Mario Zepeda', '1113', '1113', 'ITlaureate123', 'Enable', '1653'],
['1114', 'Marvin Chandias', '1114', '1114', 'ITlaureate123', 'Enable', '1777'],
['1115', 'Maryorie Pavon', '1115', '1115', 'ITlaureate123', 'Enable', '9779'],
['1116', 'Melissa Prudot', '1116', '1116', 'ITlaureate123', 'Enable', '2364'],
['1117', 'Michael Baruch', '1117', '1117', 'ITlaureate123', 'Enable', '3414'],
['1118', 'Mirna Zuniga', '1118', '1118', 'ITlaureate123', 'Enable', '9779'],
['1119', 'Monica Mayen', '1119', '1119', 'ITlaureate123', 'Enable', '3651'],
['1120', 'Nancy Oviedo', '1120', '1120', 'ITlaureate123', 'Enable', '2232'],
['1121', 'Natalia Venegas', '1121', '1121', 'ITlaureate123', 'Enable', '1511'],
['1122', 'Nicolas Jalil', '1122', '1122', 'ITlaureate123', 'Enable', '5315'],
['1123', 'Norma Servellon', '1123', '1123', 'ITlaureate123', 'Enable', '9251'],
['1124', 'Oscar Castro', '1124', '1124', 'ITlaureate123', 'Enable', '5725'],
['1125', 'Oscar Espirilla', '1125', '1125', 'ITlaureate123', 'Enable', '7034'],
['1126', 'Oscar Sanchez', '1126', '1126', 'ITlaureate123', 'Enable', '7407'],
['1127', 'Pablo Velasquez', '1127', '1127', 'ITlaureate123', 'Enable', '9717'],
['1128', 'Pamela Ayala', '1128', '1128', 'ITlaureate123', 'Enable', '4868'],
['1129', 'Pamela Barrientos', '1129', '1129', 'ITlaureate123', 'Enable', '8476'],
['1130', 'Paola Mendez', '1130', '1130', 'ITlaureate123', 'Enable', '9313'],
['1131', 'Paola Murillo', '1131', '1131', 'ITlaureate123', 'Enable', '2137'],
['1132', 'Paola Ortega', '1132', '1132', 'ITlaureate123', 'Enable', '1600'],
['1133', 'Ramon Calix', '1133', '1133', 'ITlaureate123', 'Enable', '4697'],
['1134', 'Raul Rivera', '1134', '1134', 'ITlaureate123', 'Enable', '2559'],
['1135', 'Renee Lorenzana', '1135', '1135', 'ITlaureate123', 'Enable', '2389'],
['1136', 'Reynaldo Narvaez', '1136', '1136', 'ITlaureate123', 'Enable', '5712'],
['1137', 'Ricardo Salgado', '1137', '1137', 'ITlaureate123', 'Enable', '2396'],
['1138', 'Ricardo Suazo', '1138', '1138', 'ITlaureate123', 'Enable', '1940'],
['1139', 'Ricardo Velasquez', '1139', '1139', 'ITlaureate123', 'Enable', '7034'],
['1140', 'Rolando Sierra', '1140', '1140', 'ITlaureate123', 'Enable', '3377'],
['1141', 'Ronald Zuniga', '1141', '1141', 'ITlaureate123', 'Enable', '5334'],
['1142', 'Samuel Andino', '1142', '1142', 'ITlaureate123', 'Enable', '5046'],
['1143', 'Sara Castillo', '1143', '1143', 'ITlaureate123', 'Enable', '8867'],
['1144', 'Scarlet Galeano', '1144', '1144', 'ITlaureate123', 'Enable', '3604'],
['1145', 'Sebastian Morales', '1145', '1145', 'ITlaureate123', 'Enable', '5586'],
['1146', 'Sergio Andino', '1146', '1146', 'ITlaureate123', 'Enable', '5047'],
['1147', 'Silvia Coello', '1147', '1147', 'ITlaureate123', 'Enable', '5113'],
['1148', 'Solangel Corpeno', '1148', '1148', 'ITlaureate123', 'Enable', '6780'],
['1149', 'Stephen Matute', '1149', '1149', 'ITlaureate123', 'Enable', '7797'],
['1150', 'Swamy Antunez', '1150', '1150', 'ITlaureate123', 'Enable', '4401'],
['1151', 'Tomas Carmona', '1151', '1151', 'ITlaureate123', 'Enable', '5930'],
['1152', 'Tulio Lagos', '1152', '1152', 'ITlaureate123', 'Enable', '6349'],
['1153', 'Uayeb Caballero', '1153', '1153', 'ITlaureate123', 'Enable', '6144'],
['1154', 'Vianney Reyes', '1154', '1154', 'ITlaureate123', 'Enable', '3293'],
['1155', 'Victor Aguila', '1155', '1155', 'ITlaureate123', 'Enable', '8798'],
['1156', 'Vienna Reyes', '1156', '1156', 'ITlaureate123', 'Enable', '5035'],
['1157', 'Violeta Farias', '1157', '1157', 'ITlaureate123', 'Enable', '4344'],
['1158', 'Walther Carrasco', '1158', '1158', 'ITlaureate123', 'Enable', '5133'],
['1159', 'Wendy Vargas', '1159', '1159', 'ITlaureate123', 'Enable', '3455'],
['1160', 'Wilfredo Mejia', '1160', '1160', 'ITlaureate123', 'Enable', '2015'],
['1161', 'Wilmer Murillo', '1161', '1161', 'ITlaureate123', 'Enable', '1083'],
['1162', 'Wilmer Solano', '1162', '1162', 'ITlaureate123', 'Enable', '2320'],
['1163', 'Wilson Sanchez', '1163', '1163', 'ITlaureate123', 'Enable', '9899'],
['1164', 'Yolany Alcantara', '1164', '1164', 'ITlaureate123', 'Enable', '8601'],
];

// Funcion encargada de crear todas las extensiones.
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
