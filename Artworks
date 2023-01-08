const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const querystring = require('querystring');
const axios = require('axios');
const { send } = require('process');
const { url } = require('inspector');

module.exports =
{

name: "sf",
admin: false,

invoke: async (args, message, bot) => {

const response = await fetch(`https://api2.sofurry.com/browse/all/art?format=json`);
const data = await response.json();
console.log(data)
var result = Math.floor((Math.random() * 10) + 1)

const embed = new MessageEmbed()
.setColor("202225")
.setImage(`https://www.sofurryfiles.com/std/preview?page=${data.items[result].id}`)
.setDescription(`Titre : ${data.items[result].title}\n ID : ${data.items[result].id}\nArtist or Published by : [${data.items[result].author}](https://${data.items[result].author}.sofurry.com/)\nTags : ${data.items[result].tags}\nLink : [Click here](${data.items[result].link})\n[**If the image is not displayed, click here**](https://www.sofurryfiles.com/std/preview?page=${data.items[result].id})`)
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
