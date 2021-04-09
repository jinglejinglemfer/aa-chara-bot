const Discord = require('discord.js');

exports.run = async (bot,message,args) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#F8C300')
    .setTitle('*\"Hm? Whaddaya want?\"*')
    .setAuthor('KnightleyBot', 'https://i.imgur.com/xtEi0sD.png', 'https://discord.com/api/oauth2/authorize?client_id=824018254812282881&permissions=0&scope=bot')
    .setDescription('A generic Discord bot for Ace Attorney-themed servers. Includes content from AA1-AA6, AAI and AAI2.')
    .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'generate', value: 'Names a character.', inline: true },
        { name: 'horace', value: 'Quotes Horace Knightley.', inline: true },
        { name: 'dl-6', value: 'Says the thing.', inline: true },
        { name: 'mainsub', value: 'Fetches posts from r/AceAttorney.', inline: true },
        { name: 'circlejerk', value: 'Fetches posts from r/AceAttorneyCirclejerk.', inline: true },
        { name: 'fact', value: 'Says an Ace Attorney fact.', inline: true },
    )
    .setTimestamp()
    .setFooter('...Horace Knightley.', 'https://i.imgur.com/xtEi0sD.png');

    message.channel.send(exampleEmbed);
}

exports.help = {
    name: 'testembed'
}