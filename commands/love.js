module.exports = {
    name:  'love',
    description: "Rias loves Bhagi",
    execute(message,args){

        let role=message.guild.roles.cache.find(r =>r.name==="Tharki Bhadva");

        if(message.member.roles.cache.some(r =>r.name==="DADDY")){
            message.channel.send('Love you babes 😚 ');

        } else {
            message.channel.send("Pehle aukat banale bsdk");
            message.member.roles.add(role);
        }
    }
}