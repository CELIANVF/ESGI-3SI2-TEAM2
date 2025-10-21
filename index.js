require('dotenv').config(); // charge le .env
const { Client, GatewayIntentBits } = require('discord.js');

// Crée le client Discord avec les intents nécessaires
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

// Blagues et citations
const jokes = [
    "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau !",
    "Qu’est-ce qu’une chauve-souris avec une perruque ? Une souris !",
    "Où est-ce que l’homme invisible part en vacances ? Chez ses transparents.",
    "Que fait une vache quand elle a les yeux fermés ? Elle fabrique du lait concentré.",
    "Une femme discute avec une amie : j’ai un mari en or. L’autre lui répond : le mien, il est en taule."
];

const quotes = [
    "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès. – Albert Schweitzer",
    "Fais de ta vie un rêve, et d’un rêve, une réalité. – Antoine de Saint-Exupéry",
    "Je sais que je ne sais rien. – Socrate",
    "Ceux qui ne font rien ne se trompent jamais. – Théodore de Banville",
    "Je ne perds jamais. Soit je gagne, soit j'apprends. – Nelson Mandela",
    "Je préfèrerais regretter les choses que j'ai faites plutôt que celles que je n'ai pas faites. – Lucille Ball"
];


client.on('messageCreate', message => {
    if (message.author.bot) return; // ignore les messages des bots

    if (message.content === '!joke') {
        // choisir une blague aléatoire
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        message.reply(randomJoke);
    } else if (message.content === '!quote') {
        // choisir une citation aléatoire
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        message.reply(randomQuote);
    }
});


// Connexion avec le token du .env
client.login(process.env.DISCORD_TOKEN);
