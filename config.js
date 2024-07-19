//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hangoeliah1@gmail.com";
global.location = "pwani ,Tanzania";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Eliahhango/EliTechWiz";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeEYF0BvvsZpaTPfL2s";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeEYF0BvvsZpaTPfL2s";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://mallucampaign.in/images/img_1714767949.jpg";
global.devs = "255688164510";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "255747420154";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJxZy9Vd3JDQXdoTU4rRzlrbFdzb0taQXJtUUNLSnpuajhvNklLeTNVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1p4dmNIbzBZVzdWb3pHZWJzZ3JBY0QxYzlwbU5iaVNzTXRDR0NGWURBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRWxlbDNTeEdYRWdsVGlRY0NKTW5IYUVVTEdtVDljV3ZOQTNNYUtadjFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqaVY0TnBtNFpRb1pLbTlyMGx3MUMvbEVvQ1E5SHN2ZThxeC9OSy9VZmtNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLUkNNaTBNSU9PMHNBeFRudFRzdnVIMXlZQkE1VUQ3M09yand1WVQrM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh6bWYzRm1vV05DWGhWRHExSEZGT1ZHSVVUVFhjVmxwUXVtZnpzT2g1UUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhyUTdzMitDSjdjS0JTSGVvUmtNSlhqTmsrMzRmYWJVRkNsYnBGT0psWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVRwbmhNWTBwODNzOFhSTXFZK3haUkgvNjRnRlhQQTlRMVZiVlFOMjh5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdjSHk1bEJKUkd0WGxhUXQwWU9mN0NkWFl3SWRmd0ZxU3FuSXFjTGJCNzR6T296YnV5Z25UOGRxRFdKUHpJVml6d0xBYWtCeFd3QVh4RWpOdFBudGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6InF0Z2JhRmRwNlVOdjVIM1VtUlhMSzIrYWd1VHdUTHh5UFdrYS94SWwvbzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imp4djNDT25OU0V1RkFMdFZDOUlYeUEiLCJwaG9uZUlkIjoiZTkyMTRiZmMtOWNiMC00MGRlLTk4NTQtZjY3NjE0NDY3ZmJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9xaHN0SmRQOUJ4dW56NW1qWlgzQ1pwU3V3Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1ajdHRmJBV0dxbXhSQ2tLTVpnUXN1bks2dGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUpSVjlNV0wiLCJtZSI6eyJpZCI6IjI1NTY4ODE2NDUxMDoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLYpdmE2YrYqtmK2KrYtCDZiNmK2LIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQNlZqS1FIRUp6LzVyUUdHQk1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxR282N3NmZ2xxRUJLN2dvbmcvdmFZZjBkUG1yaHNnVDZQSFhRVDhTRUdZPSIsImFjY291bnRTaWduYXR1cmUiOiJyYXFTZi9rVlJteUJxZUNCT3E1WmVpWUhZMklwY0JGd0YrbHFBRUJIaTRrMzJoRmVUdXdDdko1by8wSUlRRzBkclZUUHp3RkhuWnZJam9uSVUxSVZCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaytLVkZJdFBZZ2dOYldIWE54RkM0WllaYm5ScHhMUmtnclJ3aVpwaGVsQk03Z0lUR1JOUjJ1TnBud2JTMUxzOWtDaXVtWSt5Snl3RWI4VHMrQVNBalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2ODgxNjQ1MTA6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFJxT3U3SDRKYWhBU3U0S0o0UDcybUg5SFQ1cTRiSUUrangxMEUvRWhCbSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTM1MjEwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOaXcifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`EliTechWiz™`",
  author: process.env.PACK_AUTHER || "EliTechWiz",
  packname: process.env.PACK_NAME || "EliTechWiz",
  botname: process.env.BOT_NAME || "EliTechWiz",
  ownername: process.env.OWNER_NAME || "Eliahhango",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
