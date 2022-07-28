// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃I WROTE THIS SCRIPT BY MYSELF THIS SCRIPT IS FOR EVERYONE DONT SELL IT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//

const { WAConnection, MessageType } = require('@adiwajshing/baileys').default
const makeWASocket = require("@adiwajshing/baileys").default
const { exec, spawn, execSync } = require("child_process")
const pino = require('pino')
const fs = require('fs')
const fetch = require('node-fetch')
const qrcode = require("qrcode-terminal")
const { delay, useSingleFileAuthState } = require("@adiwajshing/baileys")
exec('rm -rf session.json')
const { state, saveState } = useSingleFileAuthState(`./session.json`)


function Drips() {
  let ZimBotInc = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    browser: ["ZIM-BOT-INC", "OPERA", "3.0.0"]
  })
  ZimBotInc.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s
    if (connection == "open") {
      await delay(1000 * 10)
      const session = fs.readFileSync('./session.json')


      /**
       * 
       * @param {*} jid 
       * @param {*} text 
       * @param {*} quoted 
       * @param {*} options 
       * @returns 
       */
      ZimBotInc.sendText = (jid, text, quoted = '', options) => ZimBotInc.sendMessage(jid, { text: text, ...options }, { quoted })

      await ZimBotInc.sendMessage(ZimBotInc.user.id, { document: session, mimetype: 'application/json', fileName: `session.json` })
      await ZimBotInc.sendMessage(ZimBotInc.user.id, {
        text: `*ZIM-BOT-INC: SESSION*\n\n*NB: DONT SHARE THIS SESSION FILE*\n*Fork this repo* https://github.com/zim-bot/zimbot-v4/fork\n\n*Fork and upload this json file to your repo, and change deploy link in README.*\n\n*DONT FORGET TO GIVE IT A STAR BRO ENJOY*`, contextInfo: {
          externalAdReply: {
            title: "ZIM BOT V4",
            body: "DRIPS",
            showAdAttribution: true,
            mediaType: 2,
            thumbnail: fs.readFileSync(`./drips.jpg`),
            mediaUrl: `https://youtu.be/ww4z2m3uORU`,
            sourceUrl: `https://youtu.be/ww4z2m3uORU`
          }
        }
      })

      process.exit(0)
    }
    if (
      connection === "close" &&
      lastDisconnect &&
      lastDisconnect.error &&
      lastDisconnect.error.output.statusCode != 401
    ) {
      Drips()
    }
  })
  ZimBotInc.ev.on('creds.update', saveState)
  ZimBotInc.ev.on('messages.upsert', () => { })
}
Drips()