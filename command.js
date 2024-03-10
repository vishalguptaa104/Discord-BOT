import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken("MTIxNjA1MzIzMDg4NzUwNjExMg.G_M2ah.TK1FlvCFcBoOQi1WJSkT3WvFVYtxYA6J263KTc");

  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1216053230887506112'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }