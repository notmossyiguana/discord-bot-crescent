// super cool index file WOW
import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// logs
client.once('ready', () => {
  console.log(`logged in: ${client.user.tag}`);
});
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

// roll logic
  if (interaction.commandName === 'roll') {
    const roll = Math.floor(Math.random() * 6) + 1; // 1‑6
    await interaction.reply(`you rolled a **${roll}**! :3`);
  }
  
// ping logic
  if (interaction.commandName === 'ping') {
    await interaction.reply(`pong! **${client.ws.ping} ms** :3`);
    return;
  }
});
client.login(process.env.DISCORD_TOKEN);