const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {
  if (msg.content === "it is literally tuesday bruv" || msg.content === "it is literally tuesday") {
    msg.reply("IT IS LITERALLY FUCKING TUESDAY BRUV.")
  }
  if (msg.content === "poop") {
    msg.reply("you're a retard")
  }

  if (msg.content === "pog") {
    msg.reply("pog", {files: ["pogchamp.png"]});
  }
})
client.login("NzcwNjk1MzQ1MDk2ODg0MjY4.X5hT-Q.o5AIRrBf7T2Jv1zJX8eI0VnmDsc")