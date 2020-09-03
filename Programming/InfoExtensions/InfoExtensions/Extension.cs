using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfoExtensions
{
    // ------------------------------------------------------------------------------
    // Funcion: almacenar informacion de una extension.
    // Propiedades:
    //          UserExtension
    //          DisplayName
    //          CIDNumAlias
    //          SIPAlias
    //          CallWaiting
    //          Secret
    //          StatusVoiceMail
    //          VoiceMailPass
    //          PIN
    //          Team
    //          Department
    // Metodos: 
    //          Constructor
    //          ToString
    // ------------------------------------------------------------------------------
    class Extension
    {
        public string UserExtension { get; set; }
        public string DisplayName { get; set; }
        public string CIDNumAlias { get; set; }
        public string SIPAlias { get; set; }
        public string CallWaiting { get; set; }
        public string Secret { get; set; }
        public string StatusVoiceMail { get; set; }
        public string VoiceMailPass { get; set; }

        public string PIN { get; set; }

        public string Team { get; set; }
        public string Department { get; set; }

        public Extension(string userExtension, string displayName, string cidNumAlias, string sipAlias, string voiceMailPass, string pin, string team, string department )
        {
            this.UserExtension = userExtension;
            this.DisplayName = displayName;
            this.CIDNumAlias = cidNumAlias;
            this.SIPAlias = sipAlias;
            this.CallWaiting = "Enable";
            this.Secret = "Laureate" + userExtension;
            this.StatusVoiceMail = "Enable";
            this.VoiceMailPass = voiceMailPass;

            this.PIN = pin;

            this.Team = team;
            this.Department = department;
        }

        public override string ToString()
        {
            return "[" +
                        "'" + this.UserExtension + "', " +
                        "'" + this.DisplayName + "', " +
                        "'" + this.CIDNumAlias + "', " +
                        "'" + this.SIPAlias + "', " +
                        "'" + this.Secret + "', " +
                        "'" + this.StatusVoiceMail + "', " +
                        "'" + this.VoiceMailPass + "'" +
                    "]";
        }
    }
}
