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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxmUE9yeWFsbmtlZURhQ0gxNGwycHBOQTROOVVJZHJnSFZPTk41MEtrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM284dkpIMjUxYmt6MFAyQWMydEM2K3RFakdiTlhwcldLVk9ZT2tmTU1raz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUDlBQnBiQXZhMStJMjRnNkZmSktnL2ZDYzVQTVNLOVJ5YWNpOC9wY1YwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUOWZqVGU0eUJDcXl1YzlRRTY3WE5zR0hjaEF0RGhYYmlLNkUvUCtsQW53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHZmlXcEZING0rVndlc3YyYTBnMDRDakRtRGtsckZFSmhyWFBybWhhRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtSK2tGY3pqendPYm5ubitRSHRZa0lXVTVNTmRWUjhXNmhsV1VOMENVQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZtZHhYbXY4UjhOZjFNWWVsQk1DK1pIR0VGSVFwU1U3WC9VZWRkNFBHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTThzckdlMVNqYWJBME5tT01vWmQrRmFUQ2FsTkhMenZsM0llSFl2TU5TST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpRcHNxTFNZZ0JFNVozb1d3cm4zSHcvd2xFUnp3VUhES1dwcEVCRmtVbFRUWVRwSWdMTjhNbmtYVzhYSkREcjB2MmNlWGdmUlk3VktqN3YzUGFhd2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6InNlRk1ET3NSdCt1b2pqYWdoYlFST3NmNENYNlk2QXFUNVl6VVM3eGFyTTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRKVThFSkhTVGpLOTRybDZsa1Q0NnciLCJwaG9uZUlkIjoiZTAxNTZhYTItM2Y3MC00NjBhLTg4ZmYtYjcwOTFmMWE2NTNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImorbE1qUEc2SmkzNjdWZkF3cDM2QXVlQnJiYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLeFlhTEEvY0JqRERyNHZpeGZ5WVFMR1YrNkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFRLWU1XNTkiLCJtZSI6eyJpZCI6IjI1NTc0NzQyMDE1NDo2OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0wyb2dRUTJJMlp0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaVNuYlE2Y1BTMVByODJ6a0tmVFZScGlETGhWUXZ2dGNONUcwU3BqWGx4cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS1laZXB0Si9FQWVrOGV6a2RqeEZtZEtCZFJTeXJBd3FINEZNU1hMcmF6VXNtaWdkek1vVGdzTlpKS2ZGdGVpSXlrUmtiRmhZSnAyZnZKY3ZOWGNpQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjFab3YvQis5N3pqV0dlNEROenpSOXcyWGtPVllUazFvdWNFUEpFRWpWWGVNSldiQklDbGJCNnFQRlRmYXc1cEo2ZWZSYTF3YzNNOFJRdUNQUElDNWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzQ3NDIwMTU0OjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllrcDIwT25EMHRUNi9OczVDbjAxVWFZZ3k0VlVMNzdYRGVSdEVxWTE1Y2IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxNzMxNTd9"
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
