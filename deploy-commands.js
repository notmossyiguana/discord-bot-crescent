// bleh :0
import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import 'dotenv/config';

// register slash commands
// dice
const commands = [
  new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Roll a six sided dice')
    .toJSON(),
  // ping
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check latency')
    .toJSON()
];

// setup rest
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

await rest.put(
  Routes.applicationCommands(process.env.CLIENT_ID),
  { body: commands },
);

console.log('slash command registered');
