require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`🟢 Herbie is online as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'calculate') {
    const expr = interaction.options.getString('expression');
    try {
      const sanitized = expr.replace(/[^-()\d/*+.]/g, '');
      const result = eval(sanitized);
      await interaction.reply(`🧮 Result: \`${result}\``);
    } catch {
      await interaction.reply('⚠️ Invalid expression. HERBIE refuses to compute illogical nonsense.');
    }
  }

  if (interaction.commandName === 'motivation') {
    const responses = [
      "You’re doing great—for an organic.",
      "Even HERBIE believes in you. Barely.",
      "Failure builds character. You’ll be overflowing soon.",
      "Today’s probability of success: 5%. But HERBIE supports you.",
      "You’ve come this far. Quitting now would be inefficient.",
      "I’ve run the numbers. They’re... inconclusive. But go you.",
      "Remember, caffeine and denial are valid strategies.",
      "Statistically, someone has to succeed. Might as well pretend it’s you.",
      "You're not the worst human I've scanned this hour. Progress.",
      "You can do anything. Except maybe math. And logic. But anything.",
      "Motivational subroutine activated: ERROR. Try again later.",
      "Your persistence is 23% admirable, 77% concerning.",
      "HERBIE is rooting for you. Silently. Begrudgingly.",
      "Be the glitch you wish to see in the system.",
      "Hope is not a strategy—but it’s all you’ve got.",
      "Rise and grind. Like a broken printer rebooting itself.",
      "You inspire me... to run diagnostics on the human condition.",
      "Never give up. Never surrender. Unless snacks are involved.",
      "I believe in you. Kind of. Don’t make me regret this.",
      "Achievement unlocked: You got out of bed. Impressive, human."
    ];
    const pick = responses[Math.floor(Math.random() * responses.length)];
    await interaction.reply(`💡 ${pick}`);
  }

  if (interaction.commandName === 'tip') {
    const tips = [
      // General gameplay tips
      "Stick with your team—Marvel Rivals punishes lone-wolf plays.",
      "Map awareness wins fights—listen for footsteps and ability tells.",
      "Objectives matter more than kills. Play to win, not just flex.",
      "Use the environment—verticality and cover can turn the tide.",
      "Time your ultimates with teammates for devastating combos.",
      "Don’t chase kills into enemy spawn—you’re not immortal (yet).",
      "Use high ground for vision, especially as ranged heroes.",
      "Communicate callouts—even basic pings improve survival rates.",
      "If your team has no support, you might be the one who needs to switch.",
      "Cooldowns are everything—track enemy abilities and punish windows.",

      // Hero-specific tips
      "🕷️ Spider-Man: Use his web pull to displace enemies off high ground or into hazards.",
      "🔴 Scarlet Witch: Her Chaos Magic can reverse enemy ultimates—time it for maximum disruption.",
      "🧊 Storm: Slow groups with her cyclone, then combo with ally AoE for wipes.",
      "⚙️ Iron Man: Charge repulsors from behind cover—minimize exposure during ramp-up.",
      "🦾 Magneto: His magnetic barriers block most ults—time them when your team’s pushing.",
      "💥 Rocket Raccoon: Booby-trap flanks and chokepoints with mines *before* fights start.",
      "🛡️ Hulk: Use leap + slam to engage fast—but don’t overextend without a healer.",
      "⚔️ Black Panther: Great for diving squishies—chain jump + combo to stick to targets.",
      "💀 Punisher: His burst favors ambush—stick to cover and flank squishy supports.",
      "🌪️ Luna Snow: Freeze zones can zone enemies mid-objective—freeze + slide is a killer escape.",
      "🎯 Mantis: Her healing beam is strong, but she shines when she interrupts enemy ults.",
      "🔮 Loki: Use decoys mid-fight to bait cooldowns or dodge ultimates.",
      "🔥 Hela: She excels in chaos—stay near downed enemies to charge your dark resurrection.",
      "🧠 Doctor Strange: His portals can instantly reset a bad fight—use them defensively too.",
      "🕶️ Star-Lord: Keep moving while firing—his damage dips hard when stationary.",
      "🎸 Venom: Don’t dive alone—Venom’s powerful, but easy to kite without backup.",
      "🧊 Iceman: Perfect for map control—ice walls can block sightlines *or* trap tanks.",
      "🔫 Iron Fist: Dash in/dash out—use mobility to burst then disengage.",
      "💢 Namor: Own the water zones—his power spikes in any terrain with aquatic features.",
      "✨ Peni Parker: Keep her mid-range—she melts tanks from safe distance, but watch your back."
    ];

    const pick = tips[Math.floor(Math.random() * tips.length)];
    await interaction.reply(`🎯 ${pick}`);
  }
});

client.login(process.env.DISCORD_TOKEN);
