const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require("fs");
const { brotliCompress } = require('zlib');
const prefix = 'aa!';
bot.commands = new Discord.Collection();


bot.on('ready', () => {
    console.log('Bot online')
    bot.user.setActivity('My prefix is \'aa!\'.', { type:'LISTENING'}).catch(console.error);

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() == 'js')

        if(jsfile.length == 0) {return console.log("Could not find any commands!")}

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = 'aa!';
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}

    if(cmd == 'help') {
        message.channel.send('**This bot was made to randomly name a character from the Ace Attorney series.**\n\nIt includes characters from *Ace Attorney, Justice for All, Trials & Tribulations, Apollo Justice, Dual Destinies, Spirit of Justice, Investigations* and *Investigations 2*.\nAs of now, characters from *DGS, DGS 2* and *PLvsPW* aren\'t included.\n\n__Commands:__\n\n**Generate**: Names a random character.\n**Horace**: Says a random quote from Horace Knightley. Self-indulgent nonsense on my part.\n**DL-6**: \"Almost Christmas\" means it wasn\'t Christmas!\n**Help**: This is the help command. Yeaaaah.\n**Circlejerk**: Awful, just terrible.\n**Mainsub**: The main Ace Attorney subreddit. Was suggested to me by Luke.\n\nIf you want to tell me how much my bot sucks, you can contact me via social media.\nMy Discord tag is ZOMBOTIC#0424, and my Twitter account is @onlydebeste.\nI\'ve never coded anything in my life, so that\'s why the bot looks \"like this\".')
    }
})

bot.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    switch(args[0]) {
        case 'horace':
            rndmessage(message);

            function rndmessage(message) {
                var messages = ['After all, adaptation is the most important principle in chess!', 'Hey, lady! You got something to say?', 'So shut up. Now.', 'You know Knights always strive to protect their King.', 'He was... kind of a poser.', 'Depending on your answer, I might take aim at your pretty lil\' head!', 'Hey, Mr. Prosecutor. Be a good boy and do as you\'re told.', '...Horace Knightley. The president\'s bodyguard.', 'If the canary doesn\'t sing, just shoot it! ...Or so the saying goes.', 'Something missing? You sure it\'s not your brain?', 'It\'s over if you lose the King. Checkmate. That\'s the first rule of chess.', 'EEEEEDGEWOOOOOORTH!!!', 'This game isn\'t over yet! You hear me!'];
                var rnd = Math.floor(Math.random() * messages.length);

                message.channel.send(messages[rnd]);
            }
        break;
    }
})

bot.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    switch(args[0]) {
        case 'generate':
            rndmessage(message);

            function rndmessage(message) {
                var messages = ['**Phoenix Wright**', '**Larry Butz**', '**Cindy Stone**', '**Winston Payne**', '**Frank Sahwit**', '**Mia Fey**', '**Maya Fey**', '**Dick Gumshoe**', '**Miles Edgeworth**', '**April May**', '**Marvin Grossberg**', '**Bellboy**', '**Redd White**', '**Will Powers**', '**Wendy Oldbag**', '**Jack Hammer**', '**Penny Nichols**', '**Sal Manella**', '**Cody Hackins**', '**Dee Vasquez**', '**Lotta Hart**', '**Robert Hammond**', '**Misty Fey**', '**Gregory Edgeworth**', '**Manfred von Karma**', '**Yanni Yogi**', '**Ema Skye**', '**Lana Skye**', '**Angel Starr**', '**Jake Marshall**', '**Bruce Goodman**', '**Damon Gant**', '**Mike Meekins**', '**Joe Darke**', '**Neil Marshall**', '**Charley**', '**Maggey Byrde**', '**Dustin Prince**', '**Richard Wellington**', '**Dr. Turner Grey**', '**Pearl Fey**', '**Morgan Fey**', '**Ini Miney**', '**Mimi Miney**', '**Franziska von Karma**', '**Ami Fey**', '**Director Hotti**', '**Max Galactica**', '**Regina Berry**', '**Russell Berry**', '**Benjamin Woodman**', '**Lawrence \"Moe\" Curls**', '**Ken \"Acro\" Dingling**', '**Sean \"Bat\" Dingling**', '**Juan Corrida**', '**Matt Engarde**', '**Adrian Andrews**', '**Celeste Inpax**', '**Shelly de Killer**', '**Doug Swallow**', '**Dahlia Hawthorne**', '**Mask☆DeMasque**', '**Luke Atmey**', '**Ron DeLite**', '**Desirée DeLite**', '**Godot**', '**Kane Bullard**', '**Jean Armstrong**', '**Glen Elg**', '**Victor Kudo**', '**Lisa Basil**', '**Viola Cadaverini**', '**Furio Tigre**', '**Bruto Cadaverini**', '**Terry Fawles**', '**Valerie Hawthorne**', '**Diego Armando**', '**Melissa Foster**', '**Bikini**', '**Elise Deauxnim**', '**Iris**', '**Laurice Deauxnim**', '**Steel Samurai**', '**Pink Princess**', '**Iron Infant**', '**Evil Magistrate**', '**Jammin\' Ninja**', '**Princess Misola**', '**Muromachi Five**', '**Plumed Punisher**', '**Nickel Samurai**', '**Captain Saipan**', '**The Starry School Students**', '**Global Hero Onyankopon**', '**Apollo Justice**', '**Kristoph Gavin**', '**Shadi Smith**', '**Olga Orly**', '**Trucy Wright**', '**Dr. Hickfield**', '**Guy Eldoon**', '**Plum Kitaki**', '**Alita Tiala**', '**Wocky Kitaki**', '**Klavier Gavin**', '**Pal Meraktis**', '**Winfred Kitaki**', '**Wesley Stickler**', '**Romein LeTouse**', '**Lamiroir**', '**Machi Tobaye**', '**Daryan Crescend**', '**Valant Gramarye**', '**Vera Misham**', '**Drew Misham**', '**Spark Brushel**', '**Zak Gramarye**', '**Magnifi Gramarye**', '**Thalassa Gramarye**', '**Juniper Woods**', '**Candice Arme**', '**Athena Cykes**', '**Gaspen Payne**', '**Ted Tonate**', '**Jinxie Tenma**', '**The Amazing Nine-Tails**', '**Damian Tenma**', '**Tenma Taro**', '**Rex Kyubi**', '**Phineas Filch**', '**Bobby Fulbright**', '**Florent L\'Belle**', '**Simon Blackquill**', '**Aristotle Means**', '**Constance Courte**', '**Hugh O\'Conner**', '**Robin Newman**', '**Myriam Scuttlebutt**', '**Clay Terran**', '**Solomon Starbuck**', '**Yuri Cosmos**', '**Ponco**', '**Aura Blackquill**', '**Clonco**', '**Metis Cykes**', '**Sasha Buckler**', '**Ora Shipley**', '**Jack Shipley**', '**Norma DePlume**', '**Marlon Rimes**', '**Rifle**', '**Sniper**', '**Herman Crab**', '**Azura Summers**', '**Ahlbi Ur\'gaid**', '**Paht Rohl**', '**Rayfa Padma Khura\'in**', '**Pees\'lubin Andistan\'dhin**', '**Bonny de Famme**', '**Roger Retinz**', '**The Great Mr. Reus**', '**Manov Mistree**', '**Nahyuta Sahdmadhi**', '**Betty de Famme**', '**Tahrust Inmee*', '**Puhray Zeh\'lot**', '**Datz Are\'bal**', '**A\'nohn Ihmus (TBD)**', '**Beh\'leeb Inmee**', '**Taifu Toneido**', '**Bucky Whet**', '**Geiru Toneido**', '**Uendo Toneido**', '**Dhurke Sahdmadhi**', '**Archie Buff**', '**Paul Atishon**', '**Armie Buff**', '**Inga Karkhuul Khura\'in**', '**Ga\'ran Sigatar Khura\'in**', '**Nayna**', '**Amara Sigatar Khura\'in**', '**Ellen Wyatt**', '**Dumas Gloomsbury**', '**Sorin Sprocket**', '**Pierce Nichody**', '**Selena Sprocket**', '**Buddy Faith**', '**Jacques Portsman**', '**Akbey Hicks**', '**Rhoda Teneiro**', '**Zinc Lablanc**', '**Cammy Meele**', '**Ernest Amano**', '**Lance Amano**', '**Kay Faraday**', '**Shi-Long Lang**', '**Shih-na**', '**Oliver Deacon**', '**Lauren Paups**', '**Byrne Faraday**', '**Deid Mann**', '**Mack Rell**', '**Yatagarasu**', '**The Judge**', '**The Judge\'s Younger Brother**', '**Calisto Yew**', '**Tyrell Badd**', '**Manny Coachen**', '**Colias Palaeno**', '**Quercus Alba**', '**Mask☆DeMasque II**', '**Ka-Shi Nou**', '**Di-Jun Huang**', '**Nicole Swift**', '**Horace Knightley**', '**Ethan Rooke**', '**Raymond Shields**', '**Jay Elbird**', '**Justine Courtney**', '**Sebastian Debeste**', '**Simon Keyes**', '**Patricia Roland**', '**Sirhan Dogen**', '**Jeffrey Master**', '**Isaac Dover**', '**Pierre Hoquet**', '**Katherine Hall**', '**Dane Gustavia**', '**Delicia Scones**', '**Karin Jenson**', '**Bonnie Young**', '**Jill Crane**', '**Blaise Debeste**', '**John Marsh**', '**Jack Cameron**'];
                var rnd = Math.floor(Math.random() * messages.length);

                message.channel.send(messages[rnd]);
            }
        break;
    }
})

bot.login(process.env.token);