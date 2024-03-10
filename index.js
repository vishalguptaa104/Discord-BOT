import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if(message.author.bot) return;
  else{
  message.reply({
    content: "Hi This is bot"
  })
}
});

client.on('interactionCreate', interaction => {
  // console.log(interaction);
  interaction.reply("Pong!")
})

client.login(
  "MTIxNjA1MzIzMDg4NzUwNjExMg.G_M2ah.TK1FlvCFcBoOQi1WJSkT3WvFVYtxYA6J263KTc"
);
