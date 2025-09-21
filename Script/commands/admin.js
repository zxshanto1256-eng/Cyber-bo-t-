‎const axios = require("axios");
‎const request = require("request");
‎const fs = require("fs-extra");
‎const moment = require("moment-timezone");
‎
‎module.exports.config = {
‎    name: "admin",
‎    version: "1.0.0",
‎    hasPermssion: 0,
‎    credits: "NAHID", //don't change my credit 
‎    description: "Show Owner Info",
‎    commandCategory: "info",
‎    usages: "",
‎    cooldowns: 5
‎};
‎
‎module.exports.run = async function({ api, event }) {
‎    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");
‎
‎    var callback = () => api.sendMessage({
‎        body: `
‎┏━━━━━━━━━━━━━━━━━━━━━┓
‎┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 👤 𝐍𝐚𝐦𝐞      : 𝐍𝐀𝐇𝐈𝐃❦︎ ッ
‎┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
‎┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  :  𝗦𝗶𝗻𝗴𝗹𝗲
‎┃ 🎂 𝐀𝐠𝐞       : 21
‎┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
‎┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝗶𝗻𝘁𝗲𝗿 2𝗻𝗱 𝗬𝗲𝗮𝗿
‎┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝗦𝗜𝗥𝗔𝗝𝗚𝗢𝗡𝗝, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  :https://www.tiktok.com/@nahid_template_eddit?_t=ZS-8zvFhPyYnIO&_r=1
‎┃ 📢 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 : 01790454254
‎┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/profile.php?id=61581253550476 https://www.facebook.com/profile.php?id=61553630331866 https://www.facebook.com/profile.php?id=61579419327684 
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
‎┗━━━━━━━━━━━━━━━━━━━━━┛
‎        `,
‎        attachment: fs.createReadStream(__dirname + "/cache/1.png")
‎    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
‎  
‎    return request(encodeURI(`https://graph.facebook.com/61579913160355/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
‎        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
‎        .on('close', () => callback());
‎};
