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

bot.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    switch(args[0]) {
        case 'fact':
            rndmessage(message);

            function rndmessage(message) {
                var messages = ['>>> Soon after the release of Apollo Justice: Ace Attorney, many players theorized that Apollo Justice was the son of Damon Gant.\n\nDespite the latest main series entry revealing Apollo\'s biological father and foster father, it didn\'t reveal who took care of him in the U.S. leading up to the events of Apollo Justice: Ace Attorney. Due to this, Damon Gant could theoretically still be one of Apollo\'s fathers.', '>>> In the original release of Gyakuten Saiban on Game Boy Advance, the courtroom was fully modeled in 3D. In all future games until Professor Layton vs. Phoenix Wright: Ace Attorney, including re-releases of Gyakuten Saiban, this was changed to a 2D background to save memory space.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2019/02/celebrating-release-of-gyakuten-saiban.html)', '>>> According to his development blog, Shu Takumi wrote most of the script for Phoenix Wright: Ace Attorney - Justice for All while extremely drunk. To explain why, he claimed that \"the more he drinks, the stronger he becomes\".\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2017/02/gyakuten-saiban-2-blog-entry-4.html)', '>>> Dick Gumshoe was considered as an option for the main detective in Phoenix Wright: Ace Attorney - Spirit of Justice. He ultimately didn\'t make it into the final game, though, because the developers couldn\'t imagine that he would still be an active police detective at his age.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2020/04/looking-back-at-episode-2-turnabout.html)', '>>> Winston Payne has maintained a perfect win record for a longer duration of time than both Miles Edgeworth and Franziska von Karma.', '>>> A proposed concept for the plot of Phoenix Wright: Ace Attorney - Dual Destinies was an \"immoral female prosecutor\" seducing Apollo Justice, turning him to the dark side of the law. While this was scrapped, the prosecutor character was eventually developed into Aura Blackquill.', '>>> To date, Turnabout Succession is the only final case in the entire Ace Attorney series to show the true culprit\'s face in its opening cutscene.', '>>> One of the proposed ideas for how the camera could move in Gyakuten Saiban was zooming in on a character at the witness stand. While this use of the camera was never featured in the final game, it did eventually make its debut in Professor Layton vs. Phoenix Wright: Ace Attorney.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2020/06/from-surviban-to-gyakuten-saiban-2017.html)', '>>> During the events of the games they appear in, Maya Fey and Trucy Wright will occasionally steal pieces of evidence. This makes them more accomplished thieves than Kay Faraday by default, despite the fact that a large part of Faraday\'s character revolves around being a thief.', '>>> In an interview conducted in 2013, Motohide Eshiro stated that he would be interested in creating 3D remakes of the games featured in the Phoenix Wright: Ace Attorney Trilogy.\n\n(Source: https://famitsu.com/news/201307/20036974.html)', '>>> As part of the release of the Phoenix Wright: Ace Attorney Trilogy on Steam, its original soundtrack was released, marking the first time the song titles were officially translated into English. Translations include \"Pursuit ~ Corner the Culprit\" and \"Simple Folk\", among others.\n\n(Sources: https://store.steampowered.com/app/1335140/Phoenix_Wright_Ace_Attorney_Original_Soundtrack/, https://store.steampowered.com/app/1335150/Phoenix_Wright_Ace_Attorney__Justice_for_All_Original_Soundtrack/, https://store.steampowered.com/app/1335160/Phoenix_Wright_Ace_Attorney__Trials_and_Tribulations_Original_Soundtrack/)', '>>> Phoenix Wright: Ace Attorney - Dual Destinies is the first game in the main series to not feature the song \"Pursuit ~ Cornered\". Aside from the more well-known instances, it plays during a flashback in Reunion and Turnabout, and during another flashback in Turnabout Succession.', '>>> Based on the way he is portrayed in concept sketches in the Gyakuten Kenji Official Investigation Book, Raymond Shields may have originally been planned to be a much older and more aggressive character.', '>>> During the development of Gyakuten Kenji 2, the official Ace Attorney Twitter account released Tweets made to look like they were being sent by the characters from the game.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/08/portraying-mitsurugi-reijis-conflict.html)', '>>> The design on Simon Keyes\' shirt features the in-universe fictional character Global Hero Onyankopon. Additionally, the mask Blaise Debeste wears in black market dealings is of Onyankopon\'s sworn enemy Zurvan. This serves as foreshadowing for Simon and Blaise\'s relationship.', '>>> When Gyakuten Kenji 2 character designer Tatsuro Iwamoto presented his initial design for Sebastian Debeste to producer Motohide Eshiro, he was told to completely remake it. The only remaining element of Debeste\'s original design in his final design was his gloves.\n\n(Source: https://dengekionline.com/elem/000/000/356/356450/index-3.html)', '>>> In an interview conducted in 2011, Motohide Eshiro stated that a theoretical Gyakuten Kenji 3 could be made if enough players wished for a sequel to Gyakuten Kenji 2. The amount of planning that was done for Gyakuten Kenji 3 is unknown.\n\n(Source: https://dengekionline.com/elem/000/000/356/356450/index-4.html)', '>>> The design for Justine Courtney was something that Gyakuten Kenji 2 director Takeshi Yamazaki and producer Motohide Eshiro disagreed upon. Yamazaki wanted a design that \"emphasized her gentleness\", and Eshiro wanted a design that was more \"awe-inspiring and imposing\".\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2018/03/gyakuten-kenji-2-blog-entry-12-director.html)', '>>> Interestingly, not one of the three witnesses in Gyakuten Kenji 2 who are shown to enjoy playing chess (Horace Knightley, Simon Keyes, and Sirhan Dogen) are ever interrogated using the game\'s Logic Chess mechanic.'];
                var rnd = Math.floor(Math.random() * messages.length);

                message.channel.send(messages[rnd]);
            }
        break;
    }
})

bot.login(process.env.token);