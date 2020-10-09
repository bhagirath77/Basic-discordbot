module.exports = {
    name:  'hey',
    description: "This is a Hey command",
    execute(message,args){
        message.channel.send('Hey babygirl');
    }
}