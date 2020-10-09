module.exports = {
    name:  'kick',
    description: "Rias loves Bhagi",
    execute(message,args){

        let role=message.guild.roles.cache.find(r =>r.name==="DADDY");

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You have the permission to kick members.Whom do you wanna kick babe?');

        } else {
            message.channel.send("You cannot kick members.Wanna get your ass kicked by me?");
        }
    }
}