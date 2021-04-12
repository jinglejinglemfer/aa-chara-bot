const Discord = require('discord.js');

exports.run = async (bot,message,args) => {
    const randomAnswer = (['**Phoenix Wright**', '**Larry Butz**', '**Cindy Stone**', '**Winston Payne**', '**Frank Sahwit**', '**Mia Fey**', '**Maya Fey**', '**Dick Gumshoe**', '**Miles Edgeworth**', '**April May**', '**Marvin Grossberg**', '**Bellboy**', '**Redd White**', '**Will Powers**', '**Wendy Oldbag**', '**Jack Hammer**', '**Penny Nichols**', '**Sal Manella**', '**Cody Hackins**', '**Dee Vasquez**', '**Lotta Hart**', '**Robert Hammond**', '**Misty Fey**', '**Gregory Edgeworth**', '**Manfred von Karma**', '**Yanni Yogi**', '**Ema Skye**', '**Lana Skye**', '**Angel Starr**', '**Jake Marshall**', '**Bruce Goodman**', '**Damon Gant**', '**Mike Meekins**', '**Joe Darke**', '**Neil Marshall**', '**Charley**'] ('and') ['**Phoenix Wright**', '**Larry Butz**', '**Cindy Stone**', '**Winston Payne**', '**Frank Sahwit**', '**Mia Fey**', '**Maya Fey**', '**Dick Gumshoe**', '**Miles Edgeworth**', '**April May**', '**Marvin Grossberg**', '**Bellboy**', '**Redd White**', '**Will Powers**', '**Wendy Oldbag**', '**Jack Hammer**', '**Penny Nichols**', '**Sal Manella**', '**Cody Hackins**', '**Dee Vasquez**', '**Lotta Hart**', '**Robert Hammond**', '**Misty Fey**', '**Gregory Edgeworth**', '**Manfred von Karma**', '**Yanni Yogi**', '**Ema Skye**', '**Lana Skye**', '**Angel Starr**', '**Jake Marshall**', '**Bruce Goodman**', '**Damon Gant**', '**Mike Meekins**', '**Joe Darke**', '**Neil Marshall**', '**Charley**']);
    const randomAnswer = answer[Math.floor(Math.random() * images.length)];
    
        const random = new Discord.MessageEmbed()
          .setColor('847342')
          .setTitle('**Take that!**')
          .setAuthor('KnightleyBot', 'https://i.imgur.com/xtEi0sD.png', 'https://discord.com/api/oauth2/authorize?client_id=824018254812282881&permissions=0&scope=bot')
          .addField('Test', randomAnswer, false)
          .setTimestamp()
          .setFooter('...Horace Knightley.', 'https://i.imgur.com/xtEi0sD.png');
    
        message.channel.send(random);
}

exports.help = {
    name: 'frtest'
}