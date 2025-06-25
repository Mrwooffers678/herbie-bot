const { SlashCommandBuilder } = require('discord.js');

module.exports = [
  new SlashCommandBuilder()
    .setName('calculate')
    .setDescription('Evaluates a math expression')
    .addStringOption(option =>
      option.setName('expression')
        .setDescription('Math expression like 2+2 or (3*7)-5')
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName('motivation')
    .setDescription('Receive a motivational quote from HERBIE'),

  new SlashCommandBuilder()
    .setName('tip')
    .setDescription('Get a random Marvel Rivals gameplay or character tip')
].map(command => command.toJSON());
