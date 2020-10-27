const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {
  if (msg.content === "$poop") {
    msg.reply("you're a retard")
  }
  if (msg.content === "$help") {
	msg.reply("\nList of commands:\n- $poop\n- $roast")
  }
  if (msg.content === "$roast") {
	msg.reply("You're a poopy head.")
  }
  if (msg.conteent === "pog"){
    message.channel.send("pog", {files: ["Pogchamp.jpg"]});
  }
})
client.login("NzcwNjk1MzQ1MDk2ODg0MjY4.X5hT-Q.5zIXeOsuCEX_oCVUfewIygRI0Cc")