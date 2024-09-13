//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNPcFJXNWxVY0JwMGNkUC9iWTl4VXhGb1JjZG05WUlLUUxMTHI3SXZYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUdHOTk3Y2xkNHByUjlBWDY2MVN3TEZkTVdEYnBQWW5BSldnZHRldVN4dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQWZJYytkS2JlVDhVOFQxcENHMmdhRjMzUzNHNmpIeVZyaHdjckhQTDE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXbjVQZGJIRzNlYVArZFJPNVdsbndQdHgrd09hRSsxdlNxSy9pa0VFZEdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjROZ1JBZ2tUYU9FRjNscTcrcjZiU21kbnNWZWI2aGJ3V2swb2FpTGIwWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxCMkxVaTdwZXJhcEpJbThEODQya3ZlQTk5aTVtK1YxUGI0bEFoMEM0SEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUllTTNVSXVjcEZmYytPaEVpZGNLOGdSbHVNZ2VSK2VLRGVDQVlWY28yQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1VWZThFVWhzY01sUTJ5YjY4UFFFOHRDZjJzVXd2MnNqNnFweGFpSStqTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkxZDBwQy9wUWxubXpSemx4dkRUUVcxTVRYSjNTZVg2NzYyeHBZejZIeEUydk1vdUcvK2QzK0ROeko5bDZFbml0bHd3L0VYQnhBOU11Rm84VWd6S0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJ6UUVsellNbE4yRTh0ZWE4OCtvb041dGlDYnBWemhNbFE0NjBmQ0dvcnVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3ODMzMjExMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM4NkIwNjYyOUI1MjdEQjQ0QkZDOTFEQkJDMjAyMjhDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYyMjIyMzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODMzMjExMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ3QkQwMzM3OTQ5MTdCNkI4QzA2OEVGNTY3NEM3QTY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYyMjIyMzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODMzMjExMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE2OEIyMzZGMjFCNjhBOTY0OTg4QTU5MDJBMDI3QjI3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYyMjIyNDB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3ODMzMjExMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlFNzNCQkJFMzRBMzNCNDNCNzk3MjBFQUY5RjdEMDE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjYyMjIyNDB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IngySU1wbG5WU29hdEFub1YzREpkeWciLCJwaG9uZUlkIjoiNzNhZDJhYzAtZGY0Yy00NzVhLWJlODYtN2Y2NGQwZmJjODMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklUZGRlcUVVckJGMmR2dFZzL2IxSmh2bmlzWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMNjZEZTFpWEV2VkdLeUIyKzdkdDNMeWU3UTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1JDSkMyWE0iLCJtZSI6eyJpZCI6IjI3ODMzMjExMDcwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGFraSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXJDdXFFR0VJK2ZrTGNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTEgzd0lpUjQ5VjEwNWNieXBGQ2ZGazRkOGNEUVB6UU9iS2NyRWY1aUpIaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMWtpZ0VQRjlZYW44RjBMVWxtaENMd3Zrb2NUdldPRkE1M3crZ1N4U3J3Qi9UZWpCWW5nckZoWGxIeitxOWdoRmU0QXAvQjBtSjRTc3h6S1BRTnFTQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Imx3S01JcEc1ZHhjQlovbnh2Q0wzZE1UQzh1Q0NZVHR6WWNTR1hZR0UvSTFKdlJLc2VYQnNxTkdmdmxPMER0VHZ4aUxCbThIQmorZ05VVHpWcTIzY0FBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc4MzMyMTEwNzA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTeDk4Q0lrZVBWZGRPWEc4cVJRbnhaT0hmSEEwRDgwRG15bkt4SCtZaVI1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MjIyMjM2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURMQiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
