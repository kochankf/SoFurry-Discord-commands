const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const querystring = require('querystring');
const axios = require('axios');
const { send } = require('process');
const { url } = require('inspector');

module.exports =
{ name: "sfs",
admin: false,

invoke: async (args, message, bot) => {
var argt = args.toString().replace(/,/g, ',');
const response = await fetch(`https://api2.sofurry.com/browse/search?search=${argt}&filter=artwork&format=json`);
const so = await response.json();
console.log(so.data)
if (so.data.entries.length === 0) {
return message.channel.send('No results :wolf:');
}
var result = Math.floor((Math.random() * 15) + 1)
const embed = new MessageEmbed()
.setColor("202225")
.setImage(so.data.entries[result].full)
.setDescription(`Titre : ${so.data.entries[result].title}\n ID : ${so.data.entries[result].id}\nArtist or Published by : [${so.data.entries[result].artistName}](https://${so.data.entries[result].artistName}.sofurry.com/)\nTags : ${so.data.entries[result].tags}\nLink : [Click here](https://www.sofurry.com/view/${so.data.entries[result].id})\n[**If the image is not displayed, click here**](${so.data.entries[result].full})`)
.setAuthor(
"FurryBot",
"https/cdn.discordapp.com/avatars/813148376941199401/442a13229a409ba2c6439c5b6266130a.png?width=538&height=538",)



.setFooter(
"Powered by Ko-chan - Site : SoFurry.com",
"https://www.sofurry.com/std/avatar?user=715181&character=0&clevel=0"
)

message.channel.send({ embeds: [embed]});
}
};
