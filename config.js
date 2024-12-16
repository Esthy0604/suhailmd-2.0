const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349046710814";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_40_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU3LFxuICAgICAgICA1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyLFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY5LFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtcFBlN2ZHLzZIbmkzOWd2NnJFdEdGc09VUk5SejVKSGgzYVBlVzFHdCswPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNZy15VU5BTVFteW9TMkdjSDRRNmFnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU4OWMxMDZjLTUzMWYtNGJhMy1hNmRmLWFiNzU4MjNjNzMyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxMDQsXG4gICAgICAxMDQsXG4gICAgICAxNixcbiAgICAgIDMwLFxuICAgICAgNjMsXG4gICAgICAyLFxuICAgICAgMTE2LFxuICAgICAgMTc3LFxuICAgICAgNDYsXG4gICAgICAxNTcsXG4gICAgICAzLFxuICAgICAgMTczLFxuICAgICAgMTM3LFxuICAgICAgMTkxLFxuICAgICAgMTU1LFxuICAgICAgMjEyLFxuICAgICAgMTY3LFxuICAgICAgMjM1LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMTEzLFxuICAgICAgNDcsXG4gICAgICAyMDMsXG4gICAgICA3NCxcbiAgICAgIDQzLFxuICAgICAgMzgsXG4gICAgICAxMDEsXG4gICAgICA2NixcbiAgICAgIDk2LFxuICAgICAgMjMwLFxuICAgICAgMTA0LFxuICAgICAgMTkxLFxuICAgICAgODIsXG4gICAgICAyMzAsXG4gICAgICA4OSxcbiAgICAgIDExLFxuICAgICAgMTMyLFxuICAgICAgMjQzLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY2Q0xRRVFMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ2NzEwODE0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGFkeSBQcmVjaW91c1wiLFxuICAgIFwibGlkXCI6IFwiMjAxODUwOTYzOTE0ODU0OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0syd2phVUJFTks4Z3JzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOEcwblRxbkZiOW13cXpMQUlrUkJaa2h0VFhGM2svMm0vdERiWGdkdVlFWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpRmVTN0lrWEZDZzVPd1RXN3cxRDROaXBMNkhmb0xlUklYMGhRVytUN3dRa0FrQXh2YjVpaEVLYmdHNnhjWTRkMzZGOUpmcGJuSW1zZ0JDVzRQaTVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2ckxwY1FkdkJ6QXVJNmZzZEhodVdPM1RCOWlIT0J3a1Y4eTdyd2FwclYxWnVaUGxMRE5YOUM2bVgyZWxaNmFjc1JTZ0MzeUhjN01KVTI1UGg2d1podz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ2NzEwODE0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQzODUyMzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Lady precious",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
