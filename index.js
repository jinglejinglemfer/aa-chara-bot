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
        message.channel.send('**This bot was made to randomly name a character from the Ace Attorney series.**\n\nIt includes characters from *Ace Attorney, Justice for All, Trials & Tribulations, Apollo Justice, Dual Destinies, Spirit of Justice, Investigations* and *Investigations 2*.\nAs of now, characters from *DGS, DGS 2* and *PLvsPW* aren\'t included.\n\n__Commands:__\n\n**Generate**: Names a random character.\n**Horace**: Says a random quote from Horace Knightley. Self-indulgent nonsense on my part.\n**DL-6**: \"Almost Christmas\" means it wasn\'t Christmas!\n**Help**: This is the help command. Yeaaaah.\n**Circlejerk**: Awful, just terrible.\n**Mainsub**: The main Ace Attorney subreddit. Was suggested to me by Luke.\n**Fact**: Says an Ace Attorney fact. Taken from @AA_Facts on Twitter.\n\nIf you want to tell me how much my bot sucks, you can contact me via social media.\nMy Discord tag is ZOMBOTIC#0424, and my Twitter account is @onlydebeste.\nI\'ve never coded anything in my life, so that\'s why the bot looks \"like this\".')
    }
})

bot.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    switch(args[0]) {
        case 'horace':
            rndmessage(message);

            function rndmessage(message) {
                var messages = ['After all, adaptation is the most important principle in chess!', 'Hey, lady! You got something to say?', 'So shut up. Now.', 'You know Knights always strive to protect their King.', 'He was... kind of a poser.', 'Depending on your answer, I might take aim at your pretty lil\' head!', 'Hey, Mr. Prosecutor. Be a good boy and do as you\'re told.', '...Horace Knightley. The president\'s bodyguard.', 'If the canary doesn\'t sing, just shoot it! ...Or so the saying goes.', 'Something missing? You sure it\'s not your brain?', 'It\'s over if you lose the King. Checkmate. That\'s the first rule of chess.', 'EEEEEDGEWOOOOOORTH!!!', 'This game isn\'t over yet! You hear me!', 'Hey, hey! Hold on a sec! THAT\'S your next move!?', 'Isn\'t that the sort of thing you\'d leave to the courts!?', 'S-Sorry, sir...', 'Hey, you in the fancy suit.', 'But... it looks like you\'re the wrong guy for the job.', 'Hold on a sec. It\'s a little too early for the endgame.', 'Haven\'t you been jumping the gun ever since your opening move?', 'Whoa, I guess I should introduce myself first. My name is...', 'Second-in-command of his personal security unit.', 'Whoa, my bad. She just wants to come out and play. I can\'t seem to help it.', 'She\'s a lady of Zheng Fa. Only the President\'s bodyguards are authorized to use it.', 'Anyway, back to business. I\ve got some news for you.', 'There\'s good news and bad news. Which do you wanna hear first?', 'You sure? I\'m giving you the first move.', 'Alright. I got you. I\'ll start with my pawn.', 'You play too, Mr. Fancy-Suit?', 'Is that so? Well then, Master Edgeworth, I\'ll start with the good news.', 'The President\'s safe. Not even a scratch on him.', 'Whoa there. Don\'t forget, there\'s still the bad news.', 'The President is safe because his bodyguards protected him.', 'Actually... I had nothing to do with it. It was the leader who protected him.', 'At the cost of his own life...', 'Yeah. That\'s right. Rooke died to protect the President...', 'It means that the little lady killed him. My brother in arms.', 'Whoa there. Pipe down, Little Miss Murderer.', 'Geez. Even if we had to make a sacrifice to protect the King...', 'It was a pretty bad move. That castling...', 'Hm? Whaddaya want?', 'Sorry, but... I can\'t let you do that.', 'I got another piece of news for you. And this one\'s a doozy.', 'From here on out, this investigation will be handled by the Zheng Fa Police.', 'You\'re Prosecutor Edgeworth, right?', 'The President knows about you solving the Yatagarasu case.', 'That\'s why the Chief Prosecutor designated you to be in charge of the case...', 'I didn\'t know you\'d have this kind of reaction.', '...It\'s the President\'s orders. If you oppose you\'ll cause an international incident. Capisce?', 'Hey, little lady! Get over here!', 'We\'ll continue your questioning inside the President\'s plane.', 'Hey now, don\'t be a baby. You scared of a little Zheng Fa justice?', 'Gaaaaaaaaahhh!!', 'Wh-What the... You...!', 'N-No...! Not you, not now!', 'S-Stop! Stay out of this! He\'s out of your league!', 'H-He\'s a professional assassin. His name is...', 'Shelly de Killer...', '...What are your demands?', 'Wh-What are you playing at?', 'Why you... You\'re just using the investigation to get close to the President...!'];
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
                var messages = ['**Phoenix Wright**', '**Larry Butz**', '**Cindy Stone**', '**Winston Payne**', '**Frank Sahwit**', '**Mia Fey**', '**Maya Fey**', '**Dick Gumshoe**', '**Miles Edgeworth**', '**April May**', '**Marvin Grossberg**', '**Bellboy**', '**Redd White**', '**Will Powers**', '**Wendy Oldbag**', '**Jack Hammer**', '**Penny Nichols**', '**Sal Manella**', '**Cody Hackins**', '**Dee Vasquez**', '**Lotta Hart**', '**Robert Hammond**', '**Misty Fey**', '**Gregory Edgeworth**', '**Manfred von Karma**', '**Yanni Yogi**', '**Ema Skye**', '**Lana Skye**', '**Angel Starr**', '**Jake Marshall**', '**Bruce Goodman**', '**Damon Gant**', '**Mike Meekins**', '**Joe Darke**', '**Neil Marshall**', '**Charley**', '**Maggey Byrde**', '**Dustin Prince**', '**Richard Wellington**', '**Dr. Turner Grey**', '**Pearl Fey**', '**Morgan Fey**', '**Ini Miney**', '**Mimi Miney**', '**Franziska von Karma**', '**Ami Fey**', '**Director Hotti**', '**Max Galactica**', '**Regina Berry**', '**Russell Berry**', '**Benjamin Woodman**', '**Lawrence \"Moe\" Curls**', '**Ken \"Acro\" Dingling**', '**Sean \"Bat\" Dingling**', '**Juan Corrida**', '**Matt Engarde**', '**Adrian Andrews**', '**Celeste Inpax**', '**Shelly de Killer**', '**Doug Swallow**', '**Dahlia Hawthorne**', '**Mask☆DeMasque**', '**Luke Atmey**', '**Ron DeLite**', '**Desirée DeLite**', '**Godot**', '**Kane Bullard**', '**Jean Armstrong**', '**Glen Elg**', '**Victor Kudo**', '**Lisa Basil**', '**Viola Cadaverini**', '**Furio Tigre**', '**Bruto Cadaverini**', '**Terry Fawles**', '**Valerie Hawthorne**', '**Diego Armando**', '**Melissa Foster**', '**Bikini**', '**Elise Deauxnim**', '**Iris**', '**Laurice Deauxnim**', '**Steel Samurai**', '**Pink Princess**', '**Iron Infant**', '**Evil Magistrate**', '**Jammin\' Ninja**', '**Princess Misola**', '**Muromachi Five**', '**Plumed Punisher**', '**Nickel Samurai**', '**Captain Saipan**', '**The Starry School Students**', '**Global Hero Onyankopon**', '**Apollo Justice**', '**Kristoph Gavin**', '**Shadi Smith**', '**Olga Orly**', '**Trucy Wright**', '**Dr. Hickfield**', '**Guy Eldoon**', '**Plum Kitaki**', '**Alita Tiala**', '**Wocky Kitaki**', '**Klavier Gavin**', '**Pal Meraktis**', '**Winfred Kitaki**', '**Wesley Stickler**', '**Romein LeTouse**', '**Lamiroir**', '**Machi Tobaye**', '**Daryan Crescend**', '**Valant Gramarye**', '**Vera Misham**', '**Drew Misham**', '**Spark Brushel**', '**Zak Gramarye**', '**Magnifi Gramarye**', '**Thalassa Gramarye**', '**Juniper Woods**', '**Candice Arme**', '**Athena Cykes**', '**Gaspen Payne**', '**Ted Tonate**', '**Jinxie Tenma**', '**The Amazing Nine-Tails**', '**Damian Tenma**', '**Tenma Taro**', '**Rex Kyubi**', '**Phineas Filch**', '**Bobby Fulbright**', '**Florent L\'Belle**', '**Simon Blackquill**', '**Aristotle Means**', '**Constance Courte**', '**Hugh O\'Conner**', '**Robin Newman**', '**Myriam Scuttlebutt**', '**Clay Terran**', '**Solomon Starbuck**', '**Yuri Cosmos**', '**Ponco**', '**Aura Blackquill**', '**Clonco**', '**Metis Cykes**', '**Sasha Buckler**', '**Ora Shipley**', '**Jack Shipley**', '**Norma DePlume**', '**Marlon Rimes**', '**Rifle**', '**Sniper**', '**Herman Crab**', '**Azura Summers**', '**Ahlbi Ur\'gaid**', '**Paht Rohl**', '**Rayfa Padma Khura\'in**', '**Pees\'lubin Andistan\'dhin**', '**Bonny de Famme**', '**Roger Retinz**', '**The Great Mr. Reus**', '**Manov Mistree**', '**Nahyuta Sahdmadhi**', '**Betty de Famme**', '**Tahrust Inmee**', '**Puhray Zeh\'lot**', '**Datz Are\'bal**', '**A\'nohn Ihmus (TBD)**', '**Beh\'leeb Inmee**', '**Taifu Toneido**', '**Bucky Whet**', '**Geiru Toneido**', '**Uendo Toneido**', '**Dhurke Sahdmadhi**', '**Archie Buff**', '**Paul Atishon**', '**Armie Buff**', '**Inga Karkhuul Khura\'in**', '**Ga\'ran Sigatar Khura\'in**', '**Nayna**', '**Amara Sigatar Khura\'in**', '**Ellen Wyatt**', '**Dumas Gloomsbury**', '**Sorin Sprocket**', '**Pierce Nichody**', '**Selena Sprocket**', '**Buddy Faith**', '**Jacques Portsman**', '**Akbey Hicks**', '**Rhoda Teneiro**', '**Zinc Lablanc**', '**Cammy Meele**', '**Ernest Amano**', '**Lance Amano**', '**Kay Faraday**', '**Shi-Long Lang**', '**Shih-na**', '**Oliver Deacon**', '**Lauren Paups**', '**Byrne Faraday**', '**Deid Mann**', '**Mack Rell**', '**Yatagarasu**', '**The Judge**', '**The Judge\'s Younger Brother**', '**Calisto Yew**', '**Tyrell Badd**', '**Manny Coachen**', '**Colias Palaeno**', '**Quercus Alba**', '**Mask☆DeMasque II**', '**Ka-Shi Nou**', '**Di-Jun Huang**', '**Nicole Swift**', '**Horace Knightley**', '**Ethan Rooke**', '**Raymond Shields**', '**Jay Elbird**', '**Justine Courtney**', '**Sebastian Debeste**', '**Simon Keyes**', '**Patricia Roland**', '**Sirhan Dogen**', '**Jeffrey Master**', '**Isaac Dover**', '**Pierre Hoquet**', '**Katherine Hall**', '**Dane Gustavia**', '**Delicia Scones**', '**Karin Jenson**', '**Bonnie Young**', '**Jill Crane**', '**Blaise Debeste**', '**John Marsh**', '**Jack Cameron**', '**Blue Badger**', '**Pink Badger**', '**Proto Badger**', '**Bad Badger**', '**Léon the lion**', '**Manuel**', '**Polly Jenkins**', '**Polly**', '**Missile**', '**Mr. Monkey**', '**Money the monkey**', '**Regent the tiger**', '**Chief**', '**Astique the elephant**', '**Spoon**', '**Bum Rap Rhiny**', '**Phony Phanty**', '**Azuki Kozo**', '**Holy Mother**', '**Jugemu**', '**Shah\'do**', '**Ives Shineto**', '**Patches**', '**Kisegawa**', '**Owen**', '**Lady Kee\'ra**', '**Ihmsan**', '**Lah\'kee**', '**Abraham \"Abe\" Atishon**', '**Captain of Flight I-390**', '**Hugo Ifly**', '**Cece Yew**', '**Mr. iFly**', '**Ally the alligator**', '**Moozilla**', '**Rip Lacer**', '**Rocky the polar bear**', '**Amy Marsh**', '**Anubis**', '**Dai-Long Lang**', '**Gourdy**', '**The Phantom**'];
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
                var messages = ['>>> Soon after the release of Apollo Justice: Ace Attorney, many players theorized that Apollo Justice was the son of Damon Gant.\n\nDespite the latest main series entry revealing Apollo\'s biological father and foster father, it didn\'t reveal who took care of him in the U.S. leading up to the events of Apollo Justice: Ace Attorney. Due to this, Damon Gant could theoretically still be one of Apollo\'s fathers.', '>>> In the original release of Gyakuten Saiban on Game Boy Advance, the courtroom was fully modeled in 3D. In all future games until Professor Layton vs. Phoenix Wright: Ace Attorney, including re-releases of Gyakuten Saiban, this was changed to a 2D background to save memory space.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2019/02/celebrating-release-of-gyakuten-saiban.html)', '>>> According to his development blog, Shu Takumi wrote most of the script for Phoenix Wright: Ace Attorney - Justice for All while extremely drunk. To explain why, he claimed that \"the more he drinks, the stronger he becomes\".\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2017/02/gyakuten-saiban-2-blog-entry-4.html)', '>>> Dick Gumshoe was considered as an option for the main detective in Phoenix Wright: Ace Attorney - Spirit of Justice. He ultimately didn\'t make it into the final game, though, because the developers couldn\'t imagine that he would still be an active police detective at his age.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2020/04/looking-back-at-episode-2-turnabout.html)', '>>> Winston Payne has maintained a perfect win record for a longer duration of time than both Miles Edgeworth and Franziska von Karma.', '>>> A proposed concept for the plot of Phoenix Wright: Ace Attorney - Dual Destinies was an \"immoral female prosecutor\" seducing Apollo Justice, turning him to the dark side of the law. While this was scrapped, the prosecutor character was eventually developed into Aura Blackquill.', '>>> To date, Turnabout Succession is the only final case in the entire Ace Attorney series to show the true culprit\'s face in its opening cutscene.', '>>> One of the proposed ideas for how the camera could move in Gyakuten Saiban was zooming in on a character at the witness stand. While this use of the camera was never featured in the final game, it did eventually make its debut in Professor Layton vs. Phoenix Wright: Ace Attorney.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2020/06/from-surviban-to-gyakuten-saiban-2017.html)', '>>> During the events of the games they appear in, Maya Fey and Trucy Wright will occasionally steal pieces of evidence. This makes them more accomplished thieves than Kay Faraday by default, despite the fact that a large part of Faraday\'s character revolves around being a thief.', '>>> In an interview conducted in 2013, Motohide Eshiro stated that he would be interested in creating 3D remakes of the games featured in the Phoenix Wright: Ace Attorney Trilogy.\n\n(Source: https://famitsu.com/news/201307/20036974.html)', '>>> As part of the release of the Phoenix Wright: Ace Attorney Trilogy on Steam, its original soundtrack was released, marking the first time the song titles were officially translated into English. Translations include \"Pursuit ~ Corner the Culprit\" and \"Simple Folk\", among others.\n\n(Sources: https://store.steampowered.com/app/1335140/Phoenix_Wright_Ace_Attorney_Original_Soundtrack/, https://store.steampowered.com/app/1335150/Phoenix_Wright_Ace_Attorney__Justice_for_All_Original_Soundtrack/, https://store.steampowered.com/app/1335160/Phoenix_Wright_Ace_Attorney__Trials_and_Tribulations_Original_Soundtrack/)', '>>> Phoenix Wright: Ace Attorney - Dual Destinies is the first game in the main series to not feature the song \"Pursuit ~ Cornered\". Aside from the more well-known instances, it plays during a flashback in Reunion and Turnabout, and during another flashback in Turnabout Succession.', '>>> Based on the way he is portrayed in concept sketches in the Gyakuten Kenji Official Investigation Book, Raymond Shields may have originally been planned to be a much older and more aggressive character.', '>>> During the development of Gyakuten Kenji 2, the official Ace Attorney Twitter account released Tweets made to look like they were being sent by the characters from the game.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/08/portraying-mitsurugi-reijis-conflict.html)', '>>> The design on Simon Keyes\' shirt features the in-universe fictional character Global Hero Onyankopon. Additionally, the mask Blaise Debeste wears in black market dealings is of Onyankopon\'s sworn enemy Zurvan. This serves as foreshadowing for Simon and Blaise\'s relationship.', '>>> When Gyakuten Kenji 2 character designer Tatsuro Iwamoto presented his initial design for Sebastian Debeste to producer Motohide Eshiro, he was told to completely remake it. The only remaining element of Debeste\'s original design in his final design was his gloves.\n\n(Source: https://dengekionline.com/elem/000/000/356/356450/index-3.html)', '>>> In an interview conducted in 2011, Motohide Eshiro stated that a theoretical Gyakuten Kenji 3 could be made if enough players wished for a sequel to Gyakuten Kenji 2. The amount of planning that was done for Gyakuten Kenji 3 is unknown.\n\n(Source: https://dengekionline.com/elem/000/000/356/356450/index-4.html)', '>>> The design for Justine Courtney was something that Gyakuten Kenji 2 director Takeshi Yamazaki and producer Motohide Eshiro disagreed upon. Yamazaki wanted a design that \"emphasized her gentleness\", and Eshiro wanted a design that was more \"awe-inspiring and imposing\".\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2018/03/gyakuten-kenji-2-blog-entry-12-director.html)', '>>> Interestingly, not one of the three witnesses in Gyakuten Kenji 2 who are shown to enjoy playing chess (Horace Knightley, Simon Keyes, and Sirhan Dogen) are ever interrogated using the game\'s Logic Chess mechanic.', '>>> Due to the presence of several unused lines in Gyakuten Kenji 2 that were intended to be spoken by Winston Payne, it can be assumed that he was intended to have a larger role in the game\'s first case.\n\n(Source: https://tcrf.net/Gyakuten_Kenji_2)', '>>> According to an interview conducted in 2012, when Shu Takumi was working on the first game in the Ace Attorney series during a summer holiday, Shinji Mikami (a producer of previous games of Takumi\'s) called him to tell him to \"give up on the whole idea\". Additionally, it was due to this phone call that Shu Takumi came up with the idea for the core gameplay of the Ace Attorney series.\n\n(Source: https://nintendo.co.uk/Iwata-Asks/Iwata-Asks-Professor-Layton-vs-Phoenix-Wright-Ace-Attorney/Professor-Layton-vs-Phoenix-Wright-Ace-Attorney/2-Ace-Attorney-Born-from-a-Backlash/2-Ace-Attorney-Born-from-a-Backlash-850346.html)', '>>> According to the Gyakuten Saiban 2 Shinsō Manual, Franziska von Karma has an older sister who is also the mother of Manfred von Karma\'s granddaughter (mentioned in Turnabout Goodbyes).\n\n(Source: https://cdjapan.co.jp/product/NEOBK-225665)', '>>> In a 2014 interview, Motohide Eshiro and Takeshi Yamazaki expressed interest in the idea of a live-action Ace Attorney TV series, as well as an anime adaptation. Though an anime adaptation was released in 2016, there has not been a live-action Ace Attorney TV series to date.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/07/a-drama-as-next-step-for-gyakuten.html)', '>>> Victor Kudo is one of only two named characters in the Ace Attorney series who is known to have had a birthday during the events of a game (the other being Dustin Prince), though the date of Kudo\'s birthday is unknown.', '>>> According to Shu Takumi, the reason Dahlia Hawthorne became such an elegant character was because Winston Payne\'s breakdown in Turnabout Memories was so grand, it made her \"[lose] her place beneath the spotlight.\" This also gave Takumi an idea of the game\'s overarching story.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/11/gyakuten-saiban-3-blog-entry-9.html)', '>>> Due to the presence of several unused lines in Gyakuten Kenji 2 that were intended to be spoken by Winston Payne, it can be assumed that he was intended to have a larger role in the game\'s first case.\n\n(Source: https://tcrf.net/Gyakuten_Kenji_2)', '>>> According to an interview conducted in 2012, when Shu Takumi was working on the first game in the Ace Attorney series during a summer holiday, Shinji Mikami (a producer of previous games of Takumi\'s) called him to tell him to \"give up on the whole idea\". Additionally, it was due to this phone call that Shu Takumi came up with the idea for the core gameplay of the Ace Attorney series.\n\n(Source: https://nintendo.co.uk/Iwata-Asks/Iwata-Asks-Professor-Layton-vs-Phoenix-Wright-Ace-Attorney/Professor-Layton-vs-Phoenix-Wright-Ace-Attorney/2-Ace-Attorney-Born-from-a-Backlash/2-Ace-Attorney-Born-from-a-Backlash-850346.html)', '>>> According to the Gyakuten Saiban 2 Shinsō Manual, Franziska von Karma has an older sister who is also the mother of Manfred von Karma\'s granddaughter (mentioned in Turnabout Goodbyes).\n\n(Source: https://cdjapan.co.jp/product/NEOBK-225665)', '>>> In a 2014 interview, Motohide Eshiro and Takeshi Yamazaki expressed interest in the idea of a live-action Ace Attorney TV series, as well as an anime adaptation. Though an anime adaptation was released in 2016, there has not been a live-action Ace Attorney TV series to date.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/07/a-drama-as-next-step-for-gyakuten.html)', '>>> Victor Kudo is one of only two named characters in the Ace Attorney series who is known to have had a birthday during the events of a game (the other being Dustin Prince), though the date of Kudo\'s birthday is unknown.', '>>> According to Shu Takumi, the reason Dahlia Hawthorne became such an elegant character was because Winston Payne\'s breakdown in Turnabout Memories was so grand, it made her \"[lose] her place beneath the spotlight.\" This also gave Takumi an idea of the game\'s overarching story.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/11/gyakuten-saiban-3-blog-entry-9.html)', 
'>>> One of the original concepts for the purpose of Apollo Justice\'s jacket in Phoenix Wright: Ace Attorney - Dual Destinies was to have the jacket bear the symbol of a mysterious organization that Apollo had joined.\n\n(Source: https://amazon.com/Art-Phoenix-Wright-Attorney-Destinies/dp/1927925444/ref=sr_1_1?dchild=1&field-isbn=9781927925447&qid=1609607661&refinements=p_66%3A9781927925447&sr=8-1)', '>>> In an interview conducted in 2016, Takeshi Yamazaki stated that \"all heroines in [the Ace Attorney series] definitely must become defendants at one point or another.\"\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2020/04/looking-back-at-episode-2-turnabout.html)', '>>> To create a sound effect used in Apollo Justice: Ace Attorney during a cutscene where Klavier Gavin falls over while holding a guitar, Shu Takumi made Yoshiki Sandō, the game\'s sound designer, destroy his own guitar by suggesting things such as throwing it and setting it on fire.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2020/08/gyakuten-saiban-4-se-sando-2007.html)', '>>> Although Christmas is widely recognized to be celebrated on December 25th, some celebrate the holiday on January 7th. Thus, the phrase \"almost Christmas\" could be taken to mean \"almost January 7th\", meaning that it could be Christmas for those who celebrate it on December 25th.', '>>> One of the original concepts for Pearl Fey\'s character design was a girl with a disdainful attitude who would be of the same age as Maya Fey. She was originally designed to be a rival to Maya and planned to only appear in Reunion, and Turnabout.\n\n(Source: https://capcom-unity.com/zeroobjections/blog/2014/10/31/ace-attorney-trilogy---surprising-tidbits-you-never-knew)', '>>> The word \"carp\" has only been used in one Ace Attorney case to date: The Cosmic Turnabout, wherein Bobby Fulbright tells Phoenix Wright that he owns a pet carp which killed all of his pet goldfish. However, due to Fulbright\'s deceptive nature, this carp may not actually exist.', '>>> Since the western localization of Ace Attorney takes place in California, Gourd Lake (a recurring location in the series) is likely populated with grass carp, an invasive species not native to California but instead introduced to the ecosystem by pet owners over several decades.', '>>> In the Nintendo 3DS and HD versions of the Phoenix Wright: Ace Attorney Trilogy, one of the lines in Rise from the Ashes was changed from the DS version to reference a popular fan-made video. https://youtube.com/watch?v=vFldBVWFgWo', '>>> According to Shu Takumi, the reason for Kristoph Gavin\'s creation was because―while developing Klavier Gavin―he decided that Klavier\'s outgoing and laid-back nature needed a \"shadow\".\n\n(Source: https://capcom-unity.com/zeroobjections/blog/2017/11/18/the-making-of-apollo-justice-ace-attorney-feat-shu-takumi)', '>>> Zak Gramarye shares several character traits with Misty Fey. Both disappeared after being involved in a trial (leaving an assistant character orphaned), returned years later under an alias, and were then murdered with their real identities being undiscovered until later.', '>>> According to Ace Attorney Investigations: Miles Edgeworth producer Motohide Eshiro, the game\'s development team considered making the game in 3D. However, the idea was abandoned because director Takeshi Yamazaki wanted to preserve \"the feeling of the artwork\".\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/07/gyakuten-kenji-staff-special-discussion.html)', '>>> The initial sales of Phoenix Wright: Ace Attorney were reportedly not enough to warrant a sequel. However, according to Shu Takumi, \"[his] boss liked the game, so he ignored what the people around him told him and decided on his own to greenlight a sequel.\"\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2020/12/creator-interview-takumi-shu-2012.html)', '>>> Klavier Gavin and Manfred von Karma are the only returning prosecutors in the Ace Attorney series to date who do not participate in trials other than in their games of debut.', '>>> Phoenix Wright: Ace Attorney, Ace Attorney Investigations: Miles Edgeworth, and Dai Gyakuten Saiban: Naruhodō Ryūnosuke no Bōken are the only games in the series to feature only one playable character. Incidentally, they are all the first entries in their respective stories.', '>>> Quercus Alba was the first character in the Ace Attorney series who wasn\'t a defense attorney or prosecutor to have a unique \"Objection\" voice clip.', '>>> At one point during localization of the game that would later be named Phoenix Wright: Ace Attorney, the protagonist\'s English name was planned to be Roger Wright. The reasoning behind this name choice was that \"heroes... like to have alliteration.\"\n\n(Source: https://usgamer.net/articles/expert-witness-an-interview-with-alex-smith-the-writer-behind-ace-attorneys-english-debut)', '>>> Dick Gumshoe was originally intended to be an avid fan of horse racing. The red pencil behind his ear is a leftover design choice from when his outfit was being designed around this trait.\n\n(Source: https://capcom-unity.com/zeroobjections/blog/2014/10/31/ace-attorney-trilogy---surprising-tidbits-you-never-knew)', '>>> Not counting the Dai Gyakuten Saiban duology, Gregory Edgeworth and Sebastian Debeste are the only two playable characters in the Ace Attorney games to date who do not have a direct relationship with Phoenix Wright.', '>>> \"Elegance and Excellence\", a song from the Dai Gyakuten Saiban duology, is mostly associated with Jezail Brett. However, the first game\'s files suggest it was once intended to be William Pretency\'s theme, implying he was planned to be a major character in the first game\'s story.\n\n(Source: https://zophar.net/music/nintendo-3ds-3sf/dai-gyakuten-saiban-naruhodou-ryuunosuke-no-bouken)', '>>> A common misconception about the Ace Attorney series is that its legal system is intended to be a parody of the Japanese legal system. This, however, is not true; Shu Takumi has openly stated that he knew almost nothing about Japan\'s legal system while writing the first game.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/08/gyakuten-saiban-blog-entry-6-lecture-on.html)', '>>> In 2005, an unused early version of Damon Gant\'s theme titled \"Damon Gant ~ Sketch\" was released as part of a soundtrack CD for Phoenix Wright: Ace Attorney. https://www.youtube.com/watch?v=OtKxjp6be88&ab_channel=IkoShark\n\n(Source: https://vgmdb.net/album/7622)', '>>> An unused song exists in both the files of the original Gyakuten Saiban for Game Boy Advance and its remake on the Nintendo DS. It sounds similar to the credits theme, suggesting it could possibly have been an early version of that song. https://www.youtube.com/watch?v=qQ30ZEsRBjU&ab_channel=Musictendo\n\n(Source: https://tcrf.net/Phoenix_Wright:_Ace_Attorney#Unused_Music)', '>>> Many unused cutscenes exist in the files of Phoenix Wright: Ace Attorney - Dual Destinies, suggesting that its story and structure underwent many revisions while in development. One such revision is that, in the files, Turnabout Reclaimed is listed as the game\'s third episode.', '>>> One of the developer illustrations in the Phoenix Wright: Ace Attorney - Dual Destinies art book features Miles Edgeworth dressed as Klavier Gavin.\n\nImage: https://pbs.twimg.com/media/EmdqqlmWEAAXP95?format=png&name=small', '>>> Kristoph Gavin is the only culprit in Apollo Justice: Ace Attorney who does not use a gun as a murder weapon.', '>>> In an interview conducted in 2017, Motohide Eshiro stated that one of the \"rules\" of the Ace Attorney series is \"no references to popular fads.\" However, this contradicts the fact that there are many references to popular culture in Ace Attorney.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2017/04/15th-anniversary-gyakuten-saiban_17.html)\nImages: https://pbs.twimg.com/media/El6P8AyXgAgZQd_?format=jpg&name=360x360 https://pbs.twimg.com/media/El6P9DUWkAAuVCC?format=jpg&name=360x360 https://pbs.twimg.com/media/El6U7PcW0AA5-sd?format=jpg&name=360x360 https://pbs.twimg.com/media/El6WFjdXIAcj9pr?format=png&name=360x360', '>>> There are parallels between Phoenix Wright and Furio Tigre\'s Japanese names 成歩堂 龍一 (\"Naruhodō Ryuichi\") and 芝九蔵 虎ノ助 (\"Shibakuzō Toranosuke\"). They contain the character for dragon (龍) and tiger (虎) respectively, which are eternal rivals in Japanese folklore.\n\nAdditionally, their last names are both plays on Japanese phrases: 成歩堂 (\"Naruhodō\") is a play on なるほど (\"naruhodo\") meaning \"I understand\", and 芝九蔵 (\"Shibakuzō\") is a play on しばくぞ (\"shibakuzo\") meaning \"I\'ll kick your ass!\"', '>>> Godot was originally intended to be obsessed with smoking and drinking whiskey, but this character trait was changed to an obsession with drinking coffee in order to avoid being a bad influence on children.\n\n(Source: https://capcom-unity.com/zeroobjections/blog/2014/10/31/ace-attorney-trilogy---surprising-tidbits-you-never-knew)', '>>> \"Apollo Justice ~ A New Chapter of Trials!\" has had its main melody featured in the most variations across all pieces of media out of all the Objection themes to date. Apart from the variations used in the games, it was also used in the \"Gyakuten Saiban\" movie.', '>>> According to Takeshi Yamazaki, the original concept for the Mood Matrix was much more \"complex\" than the final version. \"You\'d collect psychological information like you do with evidence, like \'This person likes this,\' or \'They get angered by this\', and then use it in court.\"\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/09/3ds-gyakuten-saiban-5-special-long.html)', '>>> When attempting to come up with a name for the character that would later be named Kizuki Kokone (Athena Cykes), 202 names were created. While nearly all of these names were scrapped, producer Motohide Eshiro eventually said that the initially proposed name was the best one.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2016/09/3ds-gyakuten-saiban-5-special-long.html)', '>>> Larry Butz was originally intended to be an unpleasant office worker who would only appear in Turnabout Goodbyes. Upon the later creation of The First Turnabout, Larry was reused as its defendant to save memory space. Due to this, his personality and background were changed.\n\n(Source: https://capcom-unity.com/zeroobjections/blog/2014/10/31/ace-attorney-trilogy---surprising-tidbits-you-never-knew)', '>>> One of Nahyuta Sahdmadhi\'s animations has a butterfly land on his hand. The appearance of the butterfly changes depending on the location Nahyuta is in: in Khura\'in, it is magenta with a white mitamah mark on its left wing, and in Japan/California, it is a translucent pink.', '>>> Phoenix Wright was originally planned to be a detective with a pet hamster who decided to become an attorney \"because of a certain case\". This version of Wright was created without his friendship with Miles Edgeworth in mind, so his motivation likely didn\'t involve Edgeworth.\n\n(Source: https://gyakutensaibanlibrary.blogspot.com/2020/06/from-surviban-to-gyakuten-saiban-2017.html)\nImage: https://pbs.twimg.com/media/EkJmQ4OXkAMu--D?format=jpg&name=small', '>>> Including cases in which she is channeled by a spirit medium, Mia Fey appears in more cases in the Phoenix Wright: Ace Attorney Trilogy than Maya Fey. Mia appears in 12 cases, whereas Maya appears in 10 cases.', '>>> With the exception of Lotta Hart, none of the characters in Phoenix Wright: Ace Attorney that use the song \"Happy People\" as their musical theme are generally happy people.', '>>> According to Janet Hsu, the name of \"Taka\" (Simon Blackquill\'s pet hawk) is actually a \"holdover from a scrapped plot point\". This signifies that Taka was likely somehow intended to play a more important role in the story of Phoenix Wright: Ace Attorney - Dual Destinies.\n\n(Source: https://capcom-unity.com/2013/10/02/phoenix-wright-ace-attorney-dual-destinies-localization-trivia-time/)', '>>> In Turnabout Corner, Phoenix Wright says that he was raised in a barn. While this could be interpreted as a joke, in Rise from the Ashes, Wright also mentions breaking into a cattle ranch and tipping over cows as a child, which could support the idea that he was raised in a barn.', '>>> Apollo Justice: Ace Attorney is the only game in the main Ace Attorney series to have every case title follow the same format (with all cases being formatted as \"Turnabout [word]\").'];
                var rnd = Math.floor(Math.random() * messages.length);

                message.channel.send(messages[rnd]);
            }
        break;
    }
})

bot.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    switch(args[0]) {
        case 'evidence':
            rndmessage(message);

            function rndmessage(message) {
                var messages = ['>>> __**Attorney\'s Badge**__\nType: Other\nOne of my possessions.\n\nNo one would believe I was a defense attorney if I didn\'t carry this.', '>>> __**Cindy\'s Autopsy Report**__\nType: Reports\nReceived from Mia Fey.\n\nTime of death: 7/31, 4PM-5PM\nCause of death: loss of blood due to blunt trauma.', '>>> __**Statue**__\nType: Weapons\nSubmitted as evidence by Prosecutor Payne.\n\nA statue in the shape of \"The Thinker\". It\'s rather heavy.', '>>> __**Passport**__\nType: Evidence\nSubmitted as evidence by Prosecutor Payne.\n\nThe victim apparently arrived home from Paris on 7/30, the day before the murder.', '>>> __**Blackout Record**__\nType: Documents\nSubmitted as evidence by Prosecutor Payne.\n\nElectricity to Ms. Stone\'s building was out from noon to 6 PM on the day of the crime.', '>>> __**The Thinker**__\nType: Weapons\nRetrieved at the Fey Law Office.\n\nThe murder weapon. Looks like a statue, but it\'s actually a clock. Made by Larry Butz.', '>>> __**The Thinker**__\nType: Weapons\nRetrieved at the Fey Law Office.\n\nClock in the form of a statue. The clock\'s gears have been removed. Made by Larry Butz.', '>>> __**Glass Shards**__\nType: Evidence\nRetrieved at the Fey Law Office.\n\nThe broken remains of a glass light stand. Broken beyond all recognition.', '>>> __**Receipt**__\nType: Evidence\nRetrieved at the Fey Law Office.\n\nA department store receipt with letters written in blood on the back.', '>>> __**Receipt**__\nType: Evidence\nRetrieved at the Fey Law Office.\n\nReceipt for a glass light stand. The date of purchase is the day before the murder.', '>>> __**Maya\'s Memo**__\nType: Documents\nReceived from Maya Fey.\n\n\"A conversation I had with my sister is recorded on my cell phone.\"', '>>> __**Mia\'s Autopsy Report**__\nType: Reports\nReceived from Detective Dick Gumshoe.\n\nTime of death: 9/5 at 9:00PM.\nCause: single blunt force trauma. Death was instantaneous.', '>>> __**Mia\'s Autopsy Report**__\nType: Reports\nReceived from Detective Dick Gumshoe.\n\nDied from a blow by a blunt object. May have lived for a few minutes after being hit.', '>>> __**Maya\'s Cell Phone**__\nType: Other\nReceived from Detective Dick Gumshoe.\n\nHolds a conversation between Chief and Maya.', '>>> __**Wiretap**__\nType: Evidence\nRetrieved at Gatewater Hotel.\n\nFound in Miss May\'s hotel room.', '>>> __**Floor Plans**__\nType: Map\nSubmitted as evidence during the trial.\n\nThe murder scene, the Fey & Co. Law Offices.', '>>> __**May Testimony**__\nType: Documents\nReceived from Miss April May.\n\n\"The victim dodged an attack then ran to the right, but she was caught and struck.\"', '>>> __**Photograph**__\nType: Photographs\nRetrieved at Grossberg Law Offices.\n\nOn the back the words \"DL-6 Incident - Exhibit A\" are written in pencil.', '>>> __**Photograph**__\nType: Photographs\nRetrieved at Grossberg Law Offices.\n\nOn the back the words \"DL-6 Incident - Exhibit B\" are written in pencil.', '>>> __**Bellboy\'s Affidavit**__\nType: Documents\nReceived from the bellboy.\n\nDescribes the man who stayed with Miss May in the hotel on the night of the murder.', '>>> __**Newspaper Clipping**__\nType: Other\nRetrieved at Fey Law Offices.\n\nArticle about politician\'s suicide. The word \"White\" is written in pen at the top.', '>>> __**Mia\'s Memo**__\nType: Documents\nReceived from Mia Fey.\n\nA list of people\'s names in Mia\'s handwriting.'];
                var rnd = Math.floor(Math.random() * messages.length);

                message.channel.send(messages[rnd]);
            }
        break;
    }
})

bot.login(process.env.token);