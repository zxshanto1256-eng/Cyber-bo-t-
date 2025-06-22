module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "RIFAT ☢️_𖣘 -SIZUKA ⚠️ 𝐁𝐎𝐓_ ☢️",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61567996770964", "61576357565998"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For RIFAT", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}
