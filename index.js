const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'z!'; 'Z!';

client.once('ready', () => {
    console.log('I am watching you fap!');
});

client.on('message', message =>{
 if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'fap'){
      message.channel.send('I\'\m watching you fap!');
  }
  if(command === 'alex'){
      message.channel.send('That\'\s the only command.. no need to start getting greedy : )');
  }
  if(command === 'smile'){
      message.channel.send(': )');
  }
  if(command === 'killzodd'){
      message.channel.send('Do not touch my baby >:(');
  }
  if(command === 'destroyeveryatominyasuda\'\sbodyfortryingtohurtzodd'){
      message.channel.send('No :)');
  }
  if(command === 'yes'){
      message.channel.send('yup :3');
  }
  if(command === 'no'){
      message.channel.send('nope, sowwy : (');
  }
});





client.login('Nzk0MjczOTA2OTA2NzU5MTk5.X-4bOA.wyvg_VfFeaRUBg5vC7PCrP5E9UA');