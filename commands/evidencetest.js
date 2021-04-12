const Discord = require('discord.js');

exports.run = async (bot,message,args) => {
    const images = ["https://www.court-records.net/evidence/suicide%20report.png", "https://www.court-records.net/evidence/lawyer%20badge.png", "https://www.court-records.net/evidence/autopsy%20report.png", "https://www.court-records.net/evidence/envelope.png", "https://www.court-records.net/evidence/en_phoenix_phone.gif", "https://www.court-records.net/evidence/ev_general_GS2GenericNewsClipping_e.png"];
    const image = images[Math.floor(Math.random() * images.length)];
    
        const random = new Discord.MessageEmbed()
          .setColor('847342')
          .setTitle('**Take that!**')
          .setAuthor('KnightleyBot', 'https://i.imgur.com/xtEi0sD.png', 'https://discord.com/api/oauth2/authorize?client_id=824018254812282881&permissions=0&scope=bot')
          .setImage(image)
          .setTimestamp()
          .setFooter('...Horace Knightley.', 'https://i.imgur.com/xtEi0sD.png');
    
        message.channel.send(random);
}

exports.help = {
    name: 'evidtest'
}