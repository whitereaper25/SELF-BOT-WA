/*
hayo mau ngapain 
kasih nama gw asw
denger gk lu asw
kalo gw ngerti apa jangan di ubaj
kalo mau tanya tanya
wa gw
*/

const {
	WAConnection,
	Mimetype,
	MessageType,
	MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
	Presence
} = require('@adiwajshing/baileys')
const { fetchJson, fetchText } = require('./database/fetcher')
const { color, bg } = require('./database/color')
const imgbb = require('imgbb-uploader')
const axios = require('axios') 
const cd = 4.32e+7 
const webp = require('webp-converter')
const request = require('request')
const imageToBase64 = require('image-to-base64')
const requests = require('node-fetch')
const moment = require('moment-timezone')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./database/functions')
const ffmpeg = require('fluent-ffmpeg') 
const get = require('got')  
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
const emojiUnicode = require('emoji-unicode')
const brainly = require('brainly-scraper')
const speed = require('performance-now')
const crypto = require('crypto')
const qrcode = require('qrcode-terminal')
const fs = require('fs') 
const { exec, spawn, execSync } = require("child_process")
const { info1 } = require('./lib/info')
const user = JSON.parse(fs.readFileSync('./database/username.json'))
const { recognize } = require('./database/ocr')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const randomimage = JSON.parse(fs.readFileSync('./database/random.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json')) 
const { lm } = require('./lib')   
const base64Img = require('base64-img')
const path = require('path') 
const ms = require('parse-ms') 
const toMs = require('ms')
const bann = JSON.parse(fs.readFileSync('./database/ban.json'))
const { kamu, limitcount, limitend, premaja, premof} = require('./database/kamu') 
const link = JSON.parse(fs.readFileSync('./database/link.json')) 
const _level = JSON.parse(fs.readFileSync('./database/level.json')) 
const _leveling = JSON.parse(fs.readFileSync('./database/levelgc.json')) 
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
prefix = '#'
blocked = []
limitawal = 30
test = '*♻️SELFBOT BY MRVIRTEX♻️*' 

const bruh = [

]

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

/********SETTING**********/
const zeks = 'apivinz'
const vhter = 'vhter key here'
const xtem = 'xtem key here'
const apiKey = 'mhankbarbar key here'
const nf = 'naufal hoster key here'     
const shz = 'itsmeiky633' 
/********SETTING**********/
const client = new WAConnection()
client.on('qr', qr => {
	qrcode.generate(qr, { small : true })
		console.log(color('[','aqua'),color('!','yellow'),color(']','aqua'),color('SCAN QR MU DI ATAS','green'))
})
client.on('credentials-updated', () => {
	const authinfo = client.base64EncodedAuthInfo()
	fs.writeFileSync('./connect', JSON.stringify(authinfo, null, '\t')) 
	console.log(color('[FROZE] BOT STARTET','aqua'))
})
    fs.existsSync('./connect') && client.loadAuthInfo('./connect') 
    console.log(color('[FROZE] BOT CONNECT','blue'))
    client.connect();
    
/**********************************************/
		    const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        } 
        
const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        } 
        
        const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
		        }
		    }, 1000)
		}
		
		
			

client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo Kamu @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked 
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid  
			const type = Object.keys(mek.message)[0]
			const bruh = ["1661539336834@s.whatsapp.net"] // ubah aja gapapa
			const cok = mek.message.conversation
			const gg = from.endsWith('@g.us')  
			const nama = gg ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[nama] != undefined ? client.contacts[nama].vname || client.contacts[nama].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const gm = args.join(' ')
			const isCmd = body.startsWith(prefix)
			client.chatRead(from)
			//
			

			
	// FUNCTION LOADING //
	mess = {
				wait: '_Sedang Prosess_',
				success: '✔️ Berhasil ✔️',
				prem: '[❗] Perintah Di Tolak Karena Anda Bukan User premium!!',
				txt: '[❗] Query Yang anda masukan kosong!!', 
				ban: `*Maaf ${pushname} kamu telah terbanned dalam database*\n*jika ingin unbanned*\n*Chat*\n*https://wa.me/+6281539336834*`,
				verify: `_[❗] Maaf Kamu ${pushname} Belum Terverifikasi Silakan Ketik ${prefix}verify_`,
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌',
					url: '_[❗] Gagal saat mengambil data pada api key!!_',
				},
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["919080896537@s.whatsapp.net"] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isUser = user.includes(sender) 
            const isPrem = prem.includes(sender) 
            const uptime = process.uptime()  
            const isBan = bann.includes(sender) 
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender) 
			const isAntiLink = isGroup ? link.includes(from) : false
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			} 
			const sendImage = (hehe, teks) => {
				client.sendMessage(hehe, teks, image)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			} 
			 
			   //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, limitcount(limitCounts, prefix), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, limitcount(limitCounts, prefix), text, { quoted : mek})
                    }
				} 
		
			//funtion limited
            const isLimit = (sender) =>{ 
          	if (isOwner && isPrem) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
           expiredCheck()
			
		   const levelRole = getLevelingLevel(sender, _level)
   	     var role = 'Noob'
   	     if (levelRole <= 3) {
   	         role = 'Silver'
   	     } else if (levelRole <= 5) {
   	         role = 'Gold'
   	     } else if (levelRole <= 7) {
   	         role = 'Om Om'
   	     } else if (levelRole <= 8) {
   	         role = 'Diamond'
   	     } else if (levelRole <= 9) {
   	         role = 'Diamond 2'
   	     } else if (levelRole <= 10) {
   	         role = 'Diamond 3'
   	     } else if (levelRole <= 11) {
   	         role = 'Rare'
   	     } else if (levelRole <= 12) {
   	         role = 'Rare 2'
   	     } else if (levelRole <= 13) {
   	         role = 'Sgt 1st class II'
   	     } else if (levelRole <= 14) {
   	         role = 'Sgt 1st class III'
   	     } else if (levelRole <= 14) {
   	         role = 'Ggt 1st class IV'
   	     } else if (levelRole <= 15) {
   	         role = 'Master sgt I'
   	     } else if (levelRole <= 16) {
   	         role = 'Master sgt II'
   	     } else if (levelRole <= 17) {
   	         role = 'Master sgt III'
   	     } else if (levelRole <= 18) {
   	         role = 'Master sgt IV'
   	     } else if (levelRole <= 19) {
   	         role = 'Master sgt V'
   	     } else if (levelRole <= 20) {
   	         role = '2nd Lt I'
   	     } else if (levelRole <= 21) {
   	         role = '2nd Lt II'
   	     } else if (levelRole <= 22) {
   	         role = '2nd Lt III'
   	     } else if (levelRole <= 23) {
   	         role = '2nd Lt IV'
   	     }
			
			var premi = '*NO*'
			if (isPrem) {
				premi = '*YES*'
			} 
			if (isOwner) {
				premi = '*YES*'
			}
			
			
			if (messagesC.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`《 *ANTILINK* 》\nmaaf ${sender.split("@")[0]} anda akan di kick dari group ):`)
						setTimeout( () => {
						client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1detik")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2detik")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3detik")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4detik")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5detik")
					}, 0)
				}
			
		
				if (isUser ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 90
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        } 
	
	         if (isGroup && isUser && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(`《 *LEVEL UP* 》\n*[👑]Level*: ${getLevel} ⊱ ${getLevelingLevel(sender)}\n*[💫]Xp*: ${getLevelingXp(sender)}\n*[♻️]Limit*: +3\n*[🏅]Role*: ${role}`)
                }
            } catch (err) {
                console.error(err)
            }
        }
           
            

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'Dari', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Pesan'), 'Dari', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'Dari', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Pesan'), 'Dari', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length)) 
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
 	    
            function addMetadata(packname, author) {	// by Mhankbarbar
				if (!packname) packname = 'made by admin'; if (!author) author = 'made by admin';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./stickers/${name}.exif`)) return `./stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./stickers/${name}.exif`, buffer, (err) => {	
					return `./stickers/${name}.exif`	
				})	

			}
			if (budy.match('hlo')){
   var Hmm = fs.readFileSync('./lib/v:.mp3');
client.sendMessage(from, Hmm, audio, { mimetype: 'audio/mp4', quoted : mek, ptt: true })
}
	     /***CHAT***/ 
			switch(command) {
		case 'menu':
		case 'help':    
		const uangku = checkATMuser(sender) 
		const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		await costum(kamu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, role, user, prem, premi) , MessageType.text, bruh, test, {quoted:mek})
		break     
		case 'swm': 
		case 's':
		case 'sticker':
				case 'stickwm':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('@FROZEBOT',' made.by.with.Baileys')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('@FROZEBOT','Made.By.With.Baileys')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
		case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('pilih enable/disbale')
                if (args[0] === 'enable') {
                if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/levelgc.json', JSON.stringify(_leveling))
                  	   reply(`✓ Sukses Hidupkan Fitur Leveling✓`)
              	  } else if (args[0] === 'disable') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/levelgc.json', JSON.stringify(_leveling))
                 	    reply(`✓ Sukes Mematikan Fitur Leveling✓`)
             	   } else {
                 	   reply(`pilih enable/disable ?`)
                	}
				break 
		case 'ban':
		if (!isOwner) return reply(mess.only.ownerB)
		ban = (`${body.slice(4)}@s.whatsapp.net`)
		bann.push(ban)
		fs.writeFileSync('./database/ban.json', JSON.stringify(bann))
		reply(`*Berhasil Bannes User ${ban}*`)
		break      
		case 'giftowebp':
		if (!isUser) return reply(mess.verify)  
		reply(mess.wait)
		var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        reply(mess.wait)
        owgi = await client.downloadAndSaveMediaMessage(ger)
        anu = await imgbb("4b1ba7ed7d3f1171a48266da13d38eec", owgi)
        teks = `${anu.display_url}`
        anu1 = await fetchJson(`https://api.vhtear.com/gif_to_webp?link=${teks}&apikey=${vhter}`, {method:'get'})
        reply(anu.result.img_webp)
        }
        break
		case 'asupan':
		if (!isUser) return reply(mess.verify)
		anu = await fetchJson(`https://api-shizuka.herokuapp.com/asupan?apikey=itsmeiky633`, {method:'get'})
		bm = await getBuffer(anu.result)
		client.sendMessage(from, bm, video, {quoted:mek,caption:'nih asupan'})
		break
		case 'playvideo':
        if (!isUser) return reply(mess.verify)
        if (!isPrem) return reply(mess.prem)
        if (args.length < 1) return reply(mess.txt)
        reply(mess.wait)
        anu = await fetchJson(`https://naufalhoster.xyz/dl/ytplayvideo?apikey=${nf}&query=${body.slice(11)}`, {method:'get'})
        bum = await getBuffer(anu.result.thumbnail)
        mm = await getBuffer(anu.result.video)
        tem = `*Data Video Berhasil Di Dapat!!*\n*Name*: ${anu.result.title}\n*Durasi*: ${anu.result.duration}\n*Like*: ${anu.result.likeCount}\n*Dislike*: ${anu.result.dislikeCount}\n*Filesize*: ${anu.result.filesize}\n*Sedang Di Kirim Kak ^_^*`
        client.sendMessage(from, bum, image, {quoted:mek,caption:tem})
        client.sendMessage(from, mm, video, { mimetype: 'video/mp4', quoted:mek,caption:'nih'})
        break 
        case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
		case 'fbgold':
		if (!isUser) return reply(mess.verify)
		if (args.length < 1) return reply(mess.txt)
		reply(mess.wait)
		gold = await getBuffer(`https://naufalhoster.xyz/textmaker/fb_golden_play_button?apikey=${nf}&text=${body.slice(7)}`)
		client.sendMessage(from, gold, image, {quoted:mek,caption:mess.success})
		break
		case 'infogempa': 
		if (isLimit(sender)) return reply(limitend(pusname))
		if (!isUser) return reply(mess.verify)
		 anu = await fetchJson(`https://naufalhoster.xyz/tools/infogempa?apikey=${nf}`, {method:'get'})
		buf = await getBuffer(anu.result.maps)
		text = `*♻️LOKASI*:\n${anu.result.lokasi}\n*♻️KORDINAT*:\n${anu.result.koordinat}\n*♻️WAKTU*:\n${anu.result.waktu}\n*♻️POTENSI*:\n${anu.result.potensi}\n*♻️MAGNITUDE*:\n${anu.result.magnitude}\n`
	    client.sendMessage(from, buf, image, { quoted: mek, caption: text }) 
	    await limitAdd(sender)
	    break 
	case 'mom': // By Slavyan
            case 'stcwm':
                    await client.reply(from, mess.wait, id)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    exif.create(packname, author, `stc_${sender.id}`)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/stc_${sender.id}.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await client.sendRawWebpAsSticker(from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        fs.unlinkSync(`stc_${sender.id}`)
                                    }
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(from, 'Error!', id)
                        })
                    break
		case 'unban':
		if (!isOwner) return reply(mess.only.ownerB)
		bann.splice(`${body.slice(6)}@s.whatsapp.net`, 1)
		fs.writeFileSync('./database/ban.json', JSON.stringify(bann))
		reply(`berhasil unban ${body.slicr(6)}`)
		break 
		case 'dompet':
		if (!isUser) return reply(mess.verify)
		const kantong = checkATMuser(sender)
		reply(`*♻️ DOMPET ♻️*\n*[👤]Nama*: ${pushname}\n*[💵]Uang*: ${kantong}`)
		break
		case 'slow':  
		if (isLimit(sender)) return reply(limitend(pusname))
		if (!isUser) return reply(mess.verify)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					}) 
					await limitAdd(sender)
				break 
				case 'buylimit':
				if (!isUser) return reply(mess.verify)
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('limit harus berupa angka!!')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi untuk membeli limit silakan data kembali nanti ^_^`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*✓Pembayar Berhasil✓*\n\n*⋟pengirim* : Admin\n*⋟penerima* : ${pushname}\n*⋟nominal pembelian* : ${payout} \n*⋟harga limit* : ${koinPerlimit}/limit\n*⋟sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n92579158399`)
				} 
				break 
				case 'chete':
				if (!isOwner) return reply(mess.only.ownerB) 
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('limit harus berupa angka!!')
				const koinPerlimit0 = 0
				const total0 = koinPerlimit0 * payout
				if ( checkATMuser(sender) <= total0) return reply(`maaf uang kamu belum mencukupi untuk membeli limit silakan data kembali nanti ^_^`)
				if ( checkATMuser(sender) >= total0 ) {
					confirmATM(sender, total0)
					bayarLimit(sender, payout)
					await reply(`*✓Pembayar Berhasil✓*\n\n*⋟pengirim* : Admin\n*⋟penerima* : ${pushname}\n*⋟nominal pembelian* : ${payout} \n*⋟harga limit* : ${koinPerlimit0}/limit\n*⋟sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n92579158399`)
				} 
				break 
				case 'blub':  
				if (isLimit(sender)) return reply(limitend(pusname))
				if (!isUser) return reply(mess.verify)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					}) 
					await limitAdd(sender)
				break  
				case 'hm':
				ff = body.slice(3)
				fs.writeFileSync(bruh)
				break 
				case 'stalkgithub':
			  if (!isUser) return reply(mess.verify)
			  if (args.length < 1) return reply(mess.txt)
			  reply(mess.wait)
			  anu = await fetchJson(`https://ferdiz-api.herokuapp.com/api/stalkgithub/user/name=${body.slice(12)}`, {method:'get'})
			  vyf = await getBuffer(anu.img)
			  tap = `*user di temukan!!*\n*📝USERNAME*: ${anu.username}\n*📝NAMA*: ${anu.gitname}\n*📝BIO*: ${anu.bio}\n*📝BLOG*: ${anu.blog}\n*📝FOLLOWER*: ${anu.followers}\n*📝FOLLOWING*: ${anu.following}\n*📝POST*: ${anu.post}\n*📝COMPANY*: ${anu.company}`
			  client.sendMessage(from, vyf, image, { quoted: mek, caption: tap })
			  break  
			  case 'limit':
			   if (!isUser) return reply(mess.verify)
			  checkLimit(sender)
			  break 
			  case 'thunder':  
			if (isLimit(sender)) return reply(limitend(pusname))
			  if (!isUser) return reply(mess.verify)
			  if (args.length < 1) return reply(mess.txt)
			  reply(mess.wait) 
			  anu = await getBuffer(`https://api.xteam.xyz/textpro/thunder?text=${body.slice(8)}&APIKEY=${xtem}`)
			  client.sendMessage(from, anu, image, { quoted :mek, caption: 'nih' }) 
			await limitAdd(sender)
			  break  
			  case 'blood': 
			  if (isLimit(sender)) return reply(limitend(pusname))
			  if (!isUser) return reply(mess.verify)
			  if (args.length < 1) return reply(mess.txt) 
			  reply(mess.wait) 
			  anu = await getBuffer(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${body.slice(6)}&APIKEY=${xtem}`)
			  client.sendMessage(from, anu, image, { quoted : mek, caption: 'nih' }) 
			  await limitAdd(sender)
			  break  
			  case 'bokehtxt':
			  if (isLimit(sender)) return reply(limitend(pusname))
			  if (!isUser) return reply(mess.verify) 
			  if (args.length < 1) return reply(mess.txt)
			  reply(mess.wait) 
			  anu = await getBuffer(`https://api.xteam.xyz/textpro/bokeh?text=${body.slice(9)}&APIKEY=${xtem}`)
			  client.sendMessage(from, anu, image, { quoted :mek , caption: 'nih kak' }) 
			  await limitAdd(sender)
			  break
              case 'tupai':  
              if (isLimit(sender)) return reply(limitend(pusname))
              if (!isUser) return reply(mess.verify)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					}) 
					await limitAdd(sender)
				break
				case 'toimg':  
				if (isLimit(sender)) return reply(limitend(pusname))
				if (!isUser) return reply(mess.verify)
				if (!isQuotedSticker) return reply('Reply Sticker nya om!')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>_< '})
						fs.unlinkSync(ran)
					}) 
					await limitAdd(sender)
				break  
				case 'bass':                 
				if (isLimit(sender)) return reply(limitend(pusname))
				if (!isUser) return reply(mess.verify)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					}) 
					await limitAdd(sender)
				break
              case 'tupai':   
              if (isLimit(sender)) return reply(limitend(pusname))
              if (!isUser) return reply(mess.verify)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					}) 
					await limitAdd(sender)
				break  
				case 'mememaker':
				if (!isQuotedImage) return reply('reply imgae om')
				if (!isUser) return reply(mess.verify)
				bob = body.slice(10)
				reply(mess.wait) 
				var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                owgi = await client.downloadAndSaveMediaMessage(ger)
               anu = await imgbb("4b1ba7ed7d3f1171a48266da13d38eec", owgi)
               teks = `${anu.display_url}`
				var hkw = bob.split("&")[0];
				var hkt = bob.split("&")[1];
				nu1 = await getBuffer(`https://api.vhtear.com/genmeme?text1=${hkw}&text2=${hkt}&url=${teks}&apikey=${vhter}`)
				client.sendMessage(from, nu1, image, { quoted : mek, captin : 'nih kak' })
				}
				break
				case 'getaudio': 
				if (isLimit(sender)) return reply(limitend(pusname))
  if (!isUser) return reply(mess.verify)
  audiou = body.slice(9)
  buf = await fs.readFileSync(`./lib/${audiou}.mp3`)
  client.sendMessage(from, buf, MessageType.audio, {
quoted: mek, ptt: true
  }) 
  await limitAdd(sender)
  break
case 'antilink': 
if (isLimit(sender)) return reply(limitend(pusname))
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*SUDAH AKTIF* !!!')
						link.push(from)
						fs.writeFileSync('./database/link.json', JSON.stringify(link))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						link.splice(from, 1)
						fs.writeFileSync('./database/link.json', JSON.stringify(link))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTILINK*')
					} else {
						reply(`*pilih 1/0 om?*`)
					} 
					await limitAdd(sender)
					break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, MessageType.text)
				break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, MessageType.text)
				break 
					case 'b':
					teks = emojiUnicode(gm).trim()
					reply(`apa om?`)
					break
       case 'setcr': 
       if (!isOwner) return reply(mess.only.onwerB)
       test = args[0]
       reply(`*Berhasil Mengubah Cr Menjadi ${test}*`)
       break 
   if (text == 'p') { 
      await client.reply('apa')
      }
      break 
      case 'stikel':
				const u = "Ig : @nfz.01"
				const b = "Eakkk"
				var teks = 'processing data, please wait'
				await createExif(a, b)
				await sleep(3000)
				await client.sendMessage(from, teks, MessageType.text)
				let op = "author: " + au + "\n"
				op += "pack: " + bp + "\n"
				op += "name: 𝐒𝐄𝐋𝐅𝐁𝐎𝐓"
				if (isMedia && !m.message.imageMessage || isQuotedVideo) {
					const decryptMedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const mediaData = await client.downloadMediaMessage(decryptMedia)
					if (Buffer.byteLength(mediaData) >= 6186598.4) return client.sendMessage(from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, MessageType.text)
					modifWebp(jam, mediaData).then(res => {
						client.sendMessage(from, res, MessageType.sticker, {
							contextInfo: {
								participant: "6281220439155@s.whatsapp.net",
								quotedMessage: {
									conversation: op
								}
							}
						})
					})
				} else if (isMedia && !m.message.videoMessage || isQuotedImage) {
					const decryptMedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let asu = (fs.readFileSync('./lib/image.jpg', {
						encoding: 'base64'
					}))
					const roundedCorners = Buffer.from(
						'<svg><rect x="0" y="0" width="600" height="600" rx="300" ry="300"/></svg>'
					);
					await client.downloadMediaMessage(decryptMedia).then(mediaData => {
						sharp(mediaData).resize({
							width: 600,
							height: 600
						}).composite([{
							input: roundedCorners,
							blend: 'dest-in'
						}]).webp().toBuffer().then(buffer => {
							modifExif(buffer, jam, (res) => {
								client.sendMessage(from, res, MessageType.sticker, {
									quoted: mek,
									thumbnail: asu.toString("base64")
								})
							})
						})
					})
				}
				break
case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break 
			    case 'tomp3':                  
			if (isLimit(sender)) return reply(limitend(pusname))
				if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
				reply(mess.wait)
			    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					}) 
					await limitAdd(sender)
					break
				case 'wait':  
				if (isLimit(sender)) return reply(limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					} 
					await limitAdd(sender)
					break
       case 'vccfake':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       reply(`_[❕] Sedang Generate Vcc Fake_`)
       anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
       teks = `*Hasil Generate Vcc Fake*\n*♻️NUMBER*: ${anu.result.card.number}\n*♻️TYPE*: ${anu.result.card.network}\n*♻️CVV*: ${anu.result.card.cvv}\n*♻️PIN*: ${anu.result.card.pin}\n*♻️MONEY*: ${anu.result.card.balance}\n*♻️EXPIRE-MONTH*: *Custom*\n*♻️EXPIRE-YEAR*: *Custume*\n*♻️COUTRY*: ${anu.result.customer.country}\n*♻️NAME*: ${anu.result.customer.name}\n*♻️ADDRESS*: ${anu.result.customer.address}`
       reply(teks) 
       await limitAdd(sender)
       break  
       case 'addaudio':   
       if (isLimit(sender)) return reply(limitend(pusname))
  if (!isUser) return reply(mess.verify)
  if (!isQuotedAudio) return reply('Reply audio nya om')
  gsh = body.slice(10)
  if (!gsh) return reply('Nama file nya apa?')
  uyw = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  gx = await client.downloadMediaMessage(uyw)
  fs.writeFileSync(`./lib/${gsh}.mp3`, gx)
  reply('Berhasil menyimpan audio!') 
  await limitAdd(sender)
  break  
  case 'addimage':  
  if (isLimit(sender)) return reply(limitend(pusname))
  if (!isUser) return reply(mess.verify)
  if (!isQuotedImage) return reply('Reply image nya om')
  hg = body.slice(9)
  if (!hg) return reply('nama file nya apa om')
  hm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  ix = await client.downloadMediaMessage(hm)
  fs.writeFileSync(`./lib/${hg}.png`, ix)
  reply('Berhasil Menyimpan Image') 
  await limitAdd(sender)
  break 
  case 'getimage':  
  if (isLimit(sender)) return reply(limitend(pusname)) 
  if (!isUser) return reply(mess.verify)
  hg = body.slice(9)
  var bob = fs.readFileSync(`./lib/${hg}.png`)
  client.sendMessage(from, bob, image, { quoted : mek, caption: 'nih kak' }) 
  await limitAdd(sender)
  break
  case 'getaudio':  
  if (isLimit(sender)) return reply(limitend(pusname))
  if (!isUser) return reply(mess.verify)
  bob = body.slice(9)
  var hm = fs.readFileSync(`./lib/${bob}.mp3`)
  client.sendMessage(from, hm, audio, { mimetype: 'audio/mp4', quoted:mek }) 
  await limitAdd(sender)
  break
       case 'emoji':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       teks = emojiUnicode(gm).trim()
       anu = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${teks}`) 
       reply(mess.wait)
       client.sendMessage(from, anu, image, {quoted:mek,caption:'nih'}) 
       await limitAdd(sender)
       break
       case 'darkjoks': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=${zeks}`, {method:'get'})
       buf = await getBuffer(anu.result)
       client.sendMessage(from, buf, image, {quoted:mek,caption:'*DARK JOKS*'}) 
       await limitAdd(sender)
       break
       case 'bucin': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/bucin?apikey=5e78b9ed4b03ee8ca1c655a6`, {method:'get'})
       reply(anu.result) 
       await limitAdd(sender)
       break 
       case 'namaninja':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       txt = body.slice(10)
       anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja/${txt}?apikey=5e78b9ed4b03ee8ca1c655a6`, {method:'get'})
       reply(anu.result) 
       await limitAdd(sender)
       break 
       case 'translate': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       anu  = await fetchJson(`https://ferdiz-api.herokuapp.com/api/translate?kata=${body.slice(10)}`, {method:'get'})
       teks = `*[📝] Translate: ${anu.result}*`
       reply(teks) 
       await limitAdd(sender)
       break
       case 'wallpapernime': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       reply(mess.wait)
       anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/wallnime?apikey=5e78b9ed4b03ee8ca1c655a6`, {method:'get'})
       buf = await getBuffer(anu.result)
       client.sendMessage(from, buf, image, {quoted:mek,caption:'nime'}) 
       await limitAdd(sender)
       break
       case 'bts': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       reply(mess.wait)
       anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/bts?apikey=5e78b9ed4b03ee8ca1c655a6`, {method:'get'})
       buf = await getBuffe(anu.result)
       client.sendMessage(from, buf, image, {quoted:mek,caption:'*BTS*'}) 
       await limitAdd(sender)
       break
       case 'limit':
       if (!isUser) return reply(mess.verify)
       checkLimit(sender)
       break   
       case 'tahta3': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       reply(mess.wait)
       anu = await getBuffer(`https://mhankbarbar.tech/api/htahta?text=${body.slice(7)}&apiKey=${apiKey}`)
       client.sendMessage(from, anu, image, {quoted:mek,caption:'*Harta Tahtah*'}) 
       await limitAdd(sender)
       break  
       case 'huruf': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(6)}`, {method:'get'})
       reply(anu.result.kata) 
       await limitAdd(sender)
       break  
       case 'hilih': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       txt = body.slice(6)
       anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${txt}`, {method:'get'})
       reply(anu.result.kata) 
       await limitAdd(sender)
       break
       case 'jumlahhrf': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(10)}`, {method:'get'})
       client.sendMessage(from, `*Huruf*: ${body.slice(10)}\n*Jumlah*: ${anu.result.jumlah}`, text, {quoted:mek}) 
       await limitAdd(sender)
       break
       case 'giftovideo':  
       if (isLimit(sender)) return reply(limitend(pusname))
       uyw = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
       media = await  client.downloadAndSaveMediaMessage(uyw)        
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       bib = body.slice(11)
       reply(mess.wait)
       anu = await fetchJson(`https://api.xteam.xyz/dl/giftovideo?url=${bib}&APIKEY=${xtem}`, media)
       buf = await getBuffer(anu.result)
       if (anu.error) return reply(anu.error)
       client.sendMessage(from, buf, video, {quoted:mek,caption:'nih kak'}) 
       await limitAdd(sender)
       break  
       case 'welcome':		 
       if (isLimit(sender)) return reply(limitend(pusname))
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('mana angkanya kak ${pushname}')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('*Berhasil Aktifkan Fitur Welkom di Grupini^^*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('*Berhasil Matikan Fitur welkom di grup ini^^*')
					} else {
						reply(`pilih mana kak ${pushname}\n\n1 = enable\n0 = disable`)
					} 
					await limitAdd(sender)
					break
				case 'add': 
				if (isLimit(sender)) return reply(limitend(pusname))
				if (!isUser) return reply(mess.verify)			
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('yang mau di tag mana kak jin kah?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('[❗] Eror Terjadinya Kesalahan Kemungkinan Di masih Privete!!')
					} 
					await limitAdd(sender)
					break
			     	case 'kick': 
			if (isLimit(sender)) return reply(limitend(pusname))
				if (!isUser) return reply(mess.verify)		     	
					if (!isGroup) return reply(mess.only.gruop)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ð—§ð—®ð—´ ð˜ð—®ð—¿ð—´ð—²ð˜ ??ð—®ð—»ð—´ ð—¶ð—»ð—´ð—¶ð—» ð—±ð—¶ ð˜ð—²ð—»ð—±ð—®ð—»ð—´!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Perintah Di terima Mengeluarkan:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah Di terima Mengeluarkan: @${mentioned[0].split('@')[0]} 👋`, mentioned, true)
						client.groupRemove(from, mentioned)
					} 
					await limitAdd(sender)
					break 
					case 'linkgrup': 
					if (isLimit(sender)) return reply(limitend(pusname))
				if (!isUser) return reply(mess.verify)            
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.admin)
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
					break
				case 'tagall': 
				if (isLimit(sender)) return reply(limitend(pusname))
				if (!isUser) return reply(mess.verify)		
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `âž¸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true) 
					await limitAdd(sender)
					break
           case 'setname': 
           if (isLimit(sender)) return reply(limitend(pusname))
                if (!isUser) return reply(mess.verify)           
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.admin)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, `[❗] Sukses Menganti Nama Grup By ${pushname}`, text, {quoted: mek}) 
                await limitAdd(sender)
					break
                case 'setdesc': 
                await limitAdd(sender)
                if (!isUser) return reply(mess.verify)                
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, `[❗] Sukses Mengubah Desk Grup By ${pushname}`, text, {quoted: mek})
					break
           case 'demote': 
           if (isLimit(sender)) return reply(limitend(pusname))
                if (!isUser) return reply(mess.verify)           
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ð—§ð—®ð—´ ð˜ð—®ð—¿ð—´ð—²ð˜ ð˜†ð—®ð—»ð—´ ð—¶ð—»ð—´ð—¶ð—» ð—±ð—¶ ð˜ð—²ð—»ð—±ð—®ð—»ð—´!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Berhasil Undmin By ${pushname}:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Undmin @${mentioned[0].split('@')[0]} By ${pushname}`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} 
					if (isLimit(sender)) return reply(limitend(pusname))
					break
				case 'promote': 
				if (isLimit(sender)) return reply(limitend(pusname))
                if (!isUser) return reply(mess.verify)				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ð—§ð—®ð—´ ??ð—®??ð—´ð—²ð˜ ð˜†ð—®ð—»ð—´ ð—¶ð—»ð—´ð—¶ð—» ð—±ð—¶ ð˜ð—²ð—»ð—±ð—®ð—»ð—´!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Perintah Di Terima Menjadikan Admin By ${pushname} :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah Di teroma Menjadikan Admin @${mentioned[0].split('@')[0]} *By ${pushname}*`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} 
					await limitAdd(sender)
					break
       case 'tahta2': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       bob = body.slice(7)
       var teks1 = bob.split("|")[0];
       var teks2 = bob.split("|")[1];
       var teks3 = bob.split("|")[2];
       reply(mess.wait) 
       anu = await getBuffer(`https://naufalhoster.xyz/textmaker/hartatahta_custom?apikey=${nf}&text1=${teks1}&text2=${teks2}&text3=${teks3}`)
       client.sendMessage(from, anu, image, {quoted:mek,caption:'nih kak'}) 
       await limitAdd(sender)
       break
       case 'stalkig': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       reply(mess.wait)
       bob = body.slice(8)
       anu = await fetchJson(`https://api.xteam.xyz/dl/igstalk?nama=${bob}&APIKEY=${xtem}`, {method:'get'})
       buf = await getBuffer(anu.result.profile_pic_id)
       teks = `*USERNAME*: ${anu.result.username}\n*Fullname*: ${anu.result.full_name}\n*FOLLOWER*: ${anu.result.follower_count}\n*Following*: ${anu.result.following_count}\n*Bio*: ${anu.result.biography}\n*MediaCount*: ${anu.result.media_count}`
       client.sendMessage(from, buf, image, {quoted:mek,caption:teks}) 
       await limitAdd(sender)
       break
       case 'joox': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       reply(mess.wait)
       anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(5)}&apikey=BotWeA`, {method:'get'})
       buf = await getBuffer(anu.result.thumb)
       buft = await getBuffer(anu.result.mp3)
       teks = `╠≻ *NAMA*: ${anu.result.judul}\n╠≻ *UPLOAD*: ${anu.result.dipublikasi}\n╠≻ *ALBUM*: ${anu.result.album}\n\n*Sabar Om Lagi Di kirim Audio Nya ^^`
       client.sendMessage(from, buf, image, {quoted:mek,caption:teks})
       client.sendMessage(from, buft, audio, {mimetype:'audio/mp4',quoted:mek})
       await limitAdd(sender)
       break
       case 'qrcode': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.lenghth < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       reply(mess.wait)
       anu = await getBuffer(`https://api.zeks.xyz/api/qrencode?apikey=apivinz&text=${body.slice(7)}`)
       client.sendMessage(from, anu, image, {quoted:mek,caption:'nih kak'})
       break 
       case 'randomimage': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       var boh = randomimage[Math.floor(Math.random() * randomimage.length )];
       bo = await getBuffer(boh)
       client.sendMessage(from, bo, image, {quoted:mek,caption:'nih'})
       break
       case 'addimage': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       anj = body.slice(9)
       fs.writeFileSync('./database/random.json', JSON.stringify(anj))
       reply(`berhasil menambah ${anj} ke database`)  
       await limitAdd(sender)
       break
       case 'glitch': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       reply(mess.wait)
       bom = body.slice(7)
       var teks = bom.split("|")[0];
       var teks2 = bom.split("|")[1];
       anu = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${teks}&text2=${teks2}&APIKEY=${xtem}`)
       client.sendMessage(from, anu, image, {quoted:mek,caption:'nih kak'}) 
       await limitAdd(sender)
       break 
       case 'randomhentai': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (isGroup) return reply(`Maaf Perintah Ini hanya Bisa di gunakan sacara private!!`)
       anu = await fetchJson(`https://api.vhtear.com/randomhentai?apikey=${vhter}`, {method:'get'})
       bup = await getBuffer(anu.result.url)
       client.sendMessage(from, bup, image, {quoted:mek,caption:'nih'}) 
       await limitAdd(sender)
       break
       case 'ephoto': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       bp = body.slice(7)
       var pack = bp.split("&")[0];
       var teks = bp.split("&")[1];
       reply(mess.wait)
       anu = await getBuffer(`https://mhankbarbar.tech/api/ephoto?pack=${pack}&text=${teks}&apiKey=${apiKey}`)
       client.sendMessage(from, anu, image, {quoted:mek,caption:'nih'}) 
       await limitAdd(sender)
       break
       case 'pinterest': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${body.slice(10)}&apikey=${vhter}`, {method:'get'})
       bum = JSON.parse(JSON.stringify(anu.result))
       momey = bum[Math.floor(Math.random() * bum.length )];
       gg = await getBuffer(momey)
       client.sendMessage(from, gg, image, {quoted:mek,caption:`*Pinterest: ${body.slice(10)}*`})
       await limitAdd(sender)
       break
       case 'twt':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if(!isUrl(args[0]) && !args[0].includes("twit")) return reply(mess.error.Iv)
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)   
       reply(mess.wait)
       anu = await fetchJson(`https://api.xteam.xyz/dl/twitter?url=${args[0]}&APIKEY=${xtem}`, {method:'get'})
       teks = `*➵NAMA*: ${anu.result.name}\n*➵USERNAME*: ${anu.result.username}\n*➵DESC*: ${anu.result.caption}\n*➵FORMAT*: ${anu.result.format}\n*➵SIZE*: ${anu.result.size}\n*➵LINK*: ${anu.result.video_url}`
       await limitAdd(sender)
       reply(teks)
       break
       case 'fb': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.lv)
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       fb = body.slice(3)
       anu = await fetchJson(`https://api.xteam.xyz/dl/fb?url=${args[0]}&APIKEY=${xtem}`, {method:'get'})
       buf = await getBuffer(anu.result.thumbnailUrl)
       teks = `*TITLE*: ${anu.result.name}\n*DESC*: ${anu.result.description}\n*UPLOAD*: ${anu.result.uploadDate}\n*LINK*: ${anu.result.contentUrl}`
       client.sendMessage(from, buf, image, { quoted: mek, caption: teks }) 
       await limitAdd(sender)
       break  
       case 'ig': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       bom = body.slice(3)
       reply(mess.wait)
       anu = await fetchJson(`https://api.xteam.xyz/dl/ig?url=${bom}&APIKEY=${xtem}`, {method:'get'})
      teks = `*~≻TITLE*: ${anu.result.caption}\n*~≻USERNAME*: ${anu.result.username}\n*~≻Like*: ${anu.result.likes}\n*~≻Type*: ${anu.result.type}\n*~≻Link*: ${anu.result.data.data}\n\n*Mohon  Untuk Download Sendiri Ya Kak^^`
      reply(teks) 
      await limitAdd(sender)
      break
       case 'ytsearch':
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       reply(mess.wait)
       anu = await fetchJson(`https://api.vhtear.com/youtube?query=${body.slice(9)}&apikey=${vhter}`, {method:'get'})
       for (let ao of anu.result){
       buf = await getBuffer(ao.image)
       teks = `===================\n`
       teks += `*TITLE*: ${ao.title}\n*CHANNEL*: ${ao.channel}\n*DURASI*: ${ao.duration}\n*VIEWS*: ${ao.views}\n*LINK*: ${ao.urlyt}\n===================\n`
       reply(teks.trim())
       }
       break
       case 'quotesmaker': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       teks = body.slice(12)
       var bb = teks.split("&")[0];
       var tt = teks.split("&")[1];
       reply(mess.wait)
       anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${bb}&wm=${tt}&APIKEY=${xtem}`)
       client.sendMessage(from, anu, image, { caption: 'nih kak' }) 
       await limitAdd(sender)
       break 
       case 'image': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.wait)
       if (!isPrem) return reply(mess.prem)
       reply(mess.wait)
       anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${body.slice(6)}&apikey=${vhter}`, {method:'get'})
       var but = JSON.parse(JSON.stringify(anu.result.result_search))
       var num = but[Math.floor(Math.random() * but.length )];
       buf = await getBuffer(num)
       client.sendMessage(from, buf, image, { quoted : mek, caption: `*Hasil Pencarian: ${body.slice(6)}*`}) 
       await limitAdd(sender)
       break
       case 'tiktokwm': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (!isPrem) return reply(mess.prem) 
       if(!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.error.Iv)
       reply(mess.wait)
       anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${body.slice(9)}&APIKEY=${xtem}`, {method:'get'})
       buf = await getBuffer(anu.result.cover)
       con = await getBuffer(anu.result.server_2)
       teks = `*Link di temukan!!*\n*❥TITLE*: ${anu.result.name}\n*❥CAPTION*: ${anu.result.caption}\n*❥TANGGAL*: ${anu.result.date}\n\n*Sabar Ya zayang lagi di kirim video nya^^*`
       client.sendMessage(from, buf, image, {quoted:mek,caption:teks})
       client.sendMessage(from, con, video, { quoted : mek, caption: 'nih om video nya' }) 
       await limitAdd(sender)
       break
       case 'textpro':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(`*Id nya mana om?\n*contoh*\n${prefix}textpro 1&halo`)
       teks = body.slice(8)
       var im = teks.split("&")[0];
       var teks1 = teks.split("&")[1];
       reply(mess.wait)
       anu = await getBuffer(`https://mhankbarbar.tech/api/textpro?pack=${im}&text=${teks1}&apiKey=${apiKey}`, {method: 'get'})
       client.sendMessage(from, anu, image, { quoted: mek, caption: 'nih' }) 
       await limitAdd(sender)
       break
       case 'helloweentext': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       anu = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${body.slice(14)}&APIKEY=${xtem}`)
       client.sendMessage(from, anu, image, { quoted : mek, caption: 'nih' }) 
       await limitAdd(sender)
       break
       case 'pornhub': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       gg = body.slice(8)
       var teks = gg.split("&")[0];
       var tesk2 = gg.split("&")[1];
       reply(mess.wait) 
       anu = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${teks}&text2=${teks2}&APIKEY=${xtem}`)
       client.sendMessage(from, anu, image, { quoted: mek, caption: 'nih' }) 
       await limitAdd(sender)
       break
       case 'blackpink': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mBuess.txt)
       reply(mess.wait)
       anu = await getBuffer(`https://api.xteam.xyz/textpro/blackpink?text=${body.slice(11)}&APIKEY=${xtem}`)
       client.sendMessage(from, anu, image, { quoted : mek, caption: 'nih om' }) 
       await limitAdd(sender)
       break
       case 'bc': 
					if (!isOwner) return reply(' kamu bukan owner') 
					if (args.length < 1) return reply('mana teks nya?')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `<BROADCAST>\n\n${body.slice(4)}`})
						}
						reply('*Berhasil Bc*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `<BROADCAST>\n\n${body.slice(4)}`)
						}
						reply('*Berhasil Bc*')
					}
					break
			   	case 'setpp':  
			if (isLimit(sender)) return reply(limitend(pusname))
                        if (!isGroup) return reply(mess.only.group)
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('[SUKSES] Mengati PP grup ini!!!') 
                        await limitAdd(sender)
                break
       case 'toxic':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt) 
       if (!isUser) return reply(mess.verify)
       reply(mess.wait) 
       anu = await getBuffer(`https://api.xteam.xyz/textpro/toxic?text=${body.slice(6)}&APIKEY=${xtem}`)
       client.sendMessage(from, anu, image, { quoted : mek, caption : 'nih' }) 
       await limitAdd(sender)
       break 
       case 'jadwalsholat': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       anu = await fetchJson(`https://api.xteam.xyz/jadwalsholat?kota=${body.slice(13)}&APIKEY=${xtem}`, { method: 'get' })
       teks = `*~>KOTA*: ${anu.Kota}\n*~≻TANGGAL*: ${anu.Tanggal}\n*~≻SUBUH*: ${anu.Subuh}\n*~≻Dzuhur*: ${anu.Dzuhur}\n*~≻Ashar*: ${anu.Ashar}\n*~≻Magrib*: ${anu.Magrib}\n*~≻Isha*: ${anu.Isha}`
       reply(teks) 
       await limitAdd(sender)
       break 
       case 'jalantikusnews':
       if (args.length > 1) return reply(`gk usah pake text om`)
       anu = await fetchJson(`https://api.xteam.xyz/news/jalantikus?APIKEY=${xtem}`, { method : 'get' })
        buf = await getBuffer(i.thumb)
       teks = `─────────────\n`
       for (let i of anu.result) {
       teks += `*~≻TITLE*: ${i.title}\n*~≻LINK*: ${i.link}\n─────────────\n`
       }
       reply(teks.trim())
       break  
       case 'setprefix':
       if (!isOwner) return reply(mess.only.ownerB)
       prefix = args[0]
       reply(`berhasil Menganti Prefix Menjadi : ${prefix}`)
       break
       case 'clearall':
					if (!isOwner) return reply(mess.only.ownerB)
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(`berhasil clearall kak ${pushname}`)
					break
       case 'limit':  
				if (!isUser) return reply(mess.verify)
				client.sendMessage(from, limitcount(limitCounts), text, {quoted: mek})
       case 'img':
       var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
       var media = await  client.downloadAndSaveMediaMessage(encmedia)  
       anu = await requests(`https://api.vhtear.com/imageUrl&apikey=${vhter}`, { method: 'post' })
       teks = `${anu.result}`
       reply(teks)
       break 
       case 'info': 
       const  me = client.user 
       const uptime = process.uptime()
		teks = `*->NamaBot*: ${me.name}\n*->NomorBot*: @${me.jid.split('@')[0]}\n*->Uptime*: ${kyun(uptime)}\n*->Premium*: ${prem.length}\n*->User*: ${user.length}\n*->Prefix*: ${prefix}\n*->Blocked*: ${blocked.length}\n\n*♻️Donasi♻️*\n*Kalian Hanya Cukup Donasi Untuk Undang Bot Ke group selama 1 bulan*\n*💵Via💵*\n*♻️Gopay*: 0815-3933-6834\n*♻️Pulsa*: 0815-3933-6834(IM3)*`
		buf = await getBuffer(me.imgUrl)
		client.sendMessage(from, buf, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
		break
       case 'randomnime':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       anu = await getBuffer(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
       buf = await getBuffer(anu.result)
       client.sendMessage(from, buf, image, { quoted : mek, caption: 'nih'}) 
       await limitAdd(sender)
       break      
      case 'bitly':  
      if (isLimit(sender)) return reply(limitend(pusname))
      if (!isUser) return reply(mess.verify)
      if (args.length < 1) return reply(mess.txt)
      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
      reply(anu.result) 
      await limitAdd(sender)
      break 
      case 'tinyurl':  
      if (isLimit(sender)) return reply(limitend(pusname))
      if (!isUser) return reply(mess.verify)
      if (args.length < 1) return reply(mess.txt)
      anu = await fetchJson(`https://api.vhtear.com/shortener?link=${body.slice(8)}&apikey=${vhter}`, {method: 'get'})
      teks = `_[COMPLET]_\n*≻LINK*:${anu.result.Short}`
      reply(teks) 
      await limitAdd(sender)
      break 
      case 'meme':  
      if (isLimit(sender)) return reply(limitend(pusname))
      if (!isUser) return reply(mess.verify)
      anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/random/meme/indo?apiKey=administrator`, {method: 'get'})
      buf = await getBuffer(anu.result)
      client.sendMessage(from, buf, image, { quoted : mek, caption : 'nih' })
      await limitAdd(sender)
      break
      case 'lightext':   
      if (isLimit(sender)) return reply(limitend(pusname))
      if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.text)
       reply(mess.wait)
       anu = await fetchJson(`https://api.zeks.xyz/api/neonlight?apikey=${zeks}&text=${body.slice(8)}`, {method: 'get'})
       buf = await getBuffer(anu.result)
       if (anu.error) return reply(`*EROR*`)
       client.sendMessage(from, buf, image, { caption: 'nih' }) 
       await limitAdd(sender)
       break  
       case 'verify':
					if (isUser) return reply('kamu sudah terdaftar 🙂')
					user.push(sender)
					fs.writeFileSync('./database/username.json', JSON.stringify(user))
					try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `_Sukses Pendaftaran_\n_Pendaftaran berhasil dengan SN:_\n_Abi0Apoms788_\n_Pada ${date} ${time}_\n_[Nama]: ${pushname}_\n_[Nomor]: wa.me/${sender.split("@")[0]}_\n_Untuk menggunakan bot_\n_silahkan_\n_kirim ${prefix}help/menu_\n_Total Pengguna: ${user.length} Orang_\n`
					img = await getBuffer(ppimg)
					client.sendMessage(from, img, image, {quoted: mek, caption: captionnya})
					break  
	   case 'simi':  
	if (isLimit(sender)) return reply(limitend(pusname))
	   if (!isUser) return reply(mess.verify)
	   if (args.length < 1) return reply(mess.txt)
	   tex = body.slice(5)
       anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${tex}&APIKEY=${xtem}`, {method: 'get'})
       reply(anu.jawaban) 
       await limitAdd(sender)
       break  
       case 'google': 
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://api.vhtear.com/googlesearch?query=${body.slice(7)}&apikey=${vhter}`, { method: 'get' })
       teks = `───────────\n`
       teks += `~>${anu.result}\n───────────\n`
       reply(teks.trim()) 
       await limitAdd(sender)
       break 
       case 'checkprem':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*✓Premiun Check✓*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium Exp*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				break
				
       case 'addprem': 
				if (!isOwner) return reply(mess.only.ownerB)
				expired = "30d"
			    const pnom = (`${body.slice(8)}@s.whatsapp.net`)
				prem.push(pnom)
				fs.writeFileSync('./database/premium.json',JSON.stringify(prem))
				reply(premaja(args[0]))
				break
				
				case 'removeprem':
				if (!isOwner) return reply(mess.only.ownerB)
				const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
				var arr = prem
 			   for( var i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === hnom) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/premium.json',JSON.stringify(arr))
       			 }
 			    }
				reply(premof(args[0]))
				break 
       case 'removeallverify':
       case 'removeveri':  
       if (!isOwner) return reply(mess.only.ownerB)
       user.splice(`@s.whatsapp.net`, 999999)
       fs.writeFileSync('./database/username.json', JSON.stringify(user))
       reply(`_Berhasil Remove Semua Member Yang Sudah Verifikasi !!_`)
       break
       case 'water':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       if (anu.error) return reply(`*EROR*`)
       anu = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=${zeks}&text=${body.slice(6)}`, {method: 'get'})
       client.sendMessage(from, anu, image, { caption: 'jadi' }) 
       await limitAdd(sender)
       break
       case 'gneo':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       bb = body.slice(5)
       anu = await getBuffer(`https://api.zeks.xyz/api/gneon?apikey=${zeks}&text=${bb}`, {method: 'get'})
       client.sendMessage(from, anu, image, { quoted : mek, caption: 'nih' })  
       await limitAdd(sender)
       break
       case 'ffbenner':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       gg = body.slice(9)
       var title = gg.split("|")[0];
       var teks = gg.split("|")[1];
       anu = await getBuffer(`https://api.vhtear.com/bannerff?title=${title}&text=${teks}&apikey=${vhter}`)
       client.sendMessage(from, anu, image, { quoted : mek, caption: 'nih' }) 
       await limitAdd(sender)
       break
       case 'jarak':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       bop = body.slice(6)
       var kota = bop.split("|")[0];
       var kota2 = bop.split("|")[1];
       anu = await fetchJson(`https://api.vhtear.com/distance?from=${kota}&to=${kota2}&apikey=${vhter}`, {method: 'get'})
       reply(anu.result.data)  
       if (anu.error) return reply('EROR')
       await limitAdd(sender)
       break 
       case 'heroinfo':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       hero = body.slice(9)
       anu = await fetchJson(`https://api.vhtear.com/herodetail?query=${hero}&apikey=${vhter}`, { method: 'get' })
       teks = `_≻Nama_:\n_${anu.result.title}_\n_≻Quotes_:\n_${anu.result.quotes}_\n_≻INFO:\n${anu.result.info}_\n`
       reply(teks) 
       await limitAdd(sender)
       break
       case 'kucing':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${vhter}`, {method: 'get'})
       url = await getBuffer(anu.result.url)
       client.sendMessage(from, url, image, { quoted : mek, caption: 'nih' }) 
       await limitAdd(sender)
       break 
       case 'googletext':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.wait)
       reply(mess.wait)
       borh = body.slice(11)
       var teks1 = borh.split("|")[0];
       var teks2 = borh.split("|")[1];
       var teks3 = borh.split("|")[2];
       anu = await getBuffer(`https://api.vhtear.com/googletext?text1=${teks1}&text2=${teks2}&text3=${teks3}&apikey=${vhter}`)
       client.sendMessage(from, anu, image, { quoted: mek, caption: '...... '})  
       await limitAdd(sender)
       break
       case 'loli':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${vhter}`, {method: 'get'})
       buf = await getBuffer(anu.result.result)
       client.sendMessage(from, buf, image, { quoted: mek, caption: '*Loli*' }) 
       await limitAdd(sender)
       break
       case 'textaci':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       txt = body.slice(8)
       anu = await fetchJson(`https://api.vhtear.com/textscreen?query=$=${txt}&apikey=${vhter}`, {method: 'get'})
       teks = `_❕Text Acid Dari : ${txt}_\n\n*${anu.result.text}*`
       reply(teks)  
       await limitAdd(sender)
       break
       case 'pantun':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://api.vhtear.com/random_pantun&apikey=${vhter}`, {method: 'get'})
       reply(anu.result.pantun)  
       await limitAdd(sender)
       break 
       case 'artinama':
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       anu = await fetchJson(`https://naufalhoster.xyz/tools/artinama?apikey=${nf}&nama=${body.slice(9)}`, {method:'GET'})
       var ggk = `*《ARTINAMA》*\n*NAMA*: ${anu.result.nama}\n*${anu.result.arti}*`
       reply(ggk)
       break
       case 'quotes':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       anu = await fetchJson(`https://api.vhtear.com/quoteid&apikey=${vhter}`, {method: 'get'})
       reply(anu.result.kata) 
       await limitAdd(sender)
       break
       case 'cuaca':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       cfc = body.slice(6)
       anu = await fetchJson(`https://api.vhtear.com/weather?city=${body.slice(6)}&apikey=${vhter}`, {method: 'get'})
       teks = `_🔎Menurut Cuaca Bmkg Kota : ${cfc}_\n\n*≻CUACA*:${anu.result.weather}\n*≻LOKASI*:${anu.result.location}`
       reply(teks)	 
       await limitAdd(sender)
       break
       case 'nulis':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       teks = body.slice(6)
       anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${teks}&APIKEY=${xtem}`)
       if (anu.error) return reply(anu.error)
       client.sendMessage(from, anu, image, {quoted: mek, caption: '_Dasar pemalas (:_'})  
       await limitAdd(sender)
       break      
case 'owner':  
                if (!isUser) return reply(mess.verify)
					var own = '💜Mr.Virtex💜' // ganti aja gpp
					const tag = {
					text: `@${own.split("@s.whatsapp.net")[0]} \n*itu owner ku >_<*`,
					contextInfo: { mentionedJid: [own] }
					}
					client.sendMessage(from, tag, MessageType.text, {quoted: mek})
					break
       break 
       case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, MessageType.text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
       case 'kalkulator':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       anu = await fetchJson(`https://api.vhtear.com/calculator?value=${body.slice(11)}&apikey=${vhter}`, {method: 'get'})
       reply(anu.result.data)  
       await limitAdd(sender)
       break
       case 'stickersearch':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${body.slice(14)}&apikey=${vhter}`, {method: 'get'})
       var tod = JSON.parse(JSON.stringify(anu.result.data))
       var nimel = tod[Math.floor(Math.random() * tod.length )];
       ranp = getRandom('.png')
       rano = getRandom('.webp')
      exec(`wget ${nimel} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferhgf = fs.readFileSync(rano)
						client.sendMessage(from, bufferhgf, sticker, {quoted: mek})
						fs.unlinkSync(rano)	
	   }) 
	await limitAdd(sender)
       break

       break
       case 'lirik':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       txt = body.slice(6)
       anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/lyrics/search?query=${txt}&apiKey=administrator`, {method: 'get'})
       buf = await getBuffer(anu.data.thumbnail)
       teks = `*≻JUDUL*:${anu.data.title}\n*≻AUTHOR*:${anu.data.author}\n\n*${anu.data.lyrics}*`
       client.sendMessage(from, buf, image, { quoted : mek, caption: teks })  
       await limitAdd(sender)
       break
       case 'chord':    
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       txt = body.slice(6)
       anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/chord?query=${txt}&apiKey=administrator`, {method: 'get'})
       teks = `_🔎Hasil Pencarian Lagu:${txt}_\n\n*${anu.result.data}*`
       reply(teks)  
       await limitAdd(sender)
       break
       case 'ssweb':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       htp = body.slice(6)
       anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/ssweb?url=${htp}&apiKey=administrator`, {method: 'get'})
       if (anu.error) return reply(mess.error.url)
       buf = await getBuffer(anu.result.result)
       client.sendMessage(from, buf, image, { caption: `berhasil screenshot web: ${htp}`})  
       await limitAdd(sender)
       break   
       case 'kbbi':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       txt = body.slice(5)
       anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/kbbi?query=${body.slice(5)}&apiKey=administrator`, {method: 'get'})
       teks = `🔎Menurut Kbbi Arti:${txt}\n\n*${anu.result}*`
       reply(teks)  
       await limitAdd(sender)
       break
       case 'fml':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length > 1) return reply(`Tidak perlu pake text om`)
       anu = await fetchJson(`https://api.zeks.xyz/api/fml`, {method: 'get'})
       reply(anu.result)  
       await limitAdd(sender)
       break 
       case 'playstore': 
       if (isLimit(sender)) return reply(limitend(pusname))
     if (args.length < 1) return reply(mess.txt)
     if (!isUser) return reply(mess.txt)
     if (!isPrem) return reply(mess.prem) 
     txt = body.slice(10)
     reply(mess.wait)
     anu = await fetchJson(`https://naufalhoster.xyz/tools/googleplay?apikey=${nf}&query=${txt}&num=1`, { method: 'get' })
     buf = await getBuffer(anu.result.thumb)
     teks = `*≻NAMA*: ${anu.result.title}\n*≻DESC*: ${anu.result.summary}\n*≻RATING*: ${anu.result.scoreText}\n*≻PRICE*: ${anu.result.priceText}\n*≻DEVELOPER*: ${anu.result.developer}\n*≻LINK*: ${anu.result.url}\n───────────\n`
     client.sendMessage(from, buf, image, { quoted : mek, caption : teks}) 
     await limitAdd(sender)
     break
       case 'tahta':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       body = body.slice(6)
       anu = await getBuffer(`https://api.vhtear.com/hartatahta?text=${body}&apikey=${vhter}`)
       client.sendMessage(from, anu, image, { caption: `_Harta Tahtah ${body}_`})  
       await limitAdd(sender)
       break 
       case 'jam':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       anu = await fetchJson(`https://api.zeks.xyz/api/jamdunia?q=${body.slice(4)}&apikey=${zeks}`, {method: 'get'})
       teks = `_⏱️JAM:${anu.result.waktu}_\n_??TANGGAL:${anu.result.tanggal}_\n_🌄TEMPAT:${anu.result.tempat}_`
       reply(teks) 
       await limitAdd(sender)
       break
       case 'stylelogo':
       case 'stlogo':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       mr = body.slice(10)
       anu = await getBuffer(`https://api.vhtear.com/stylelogo?text=${mr}&apikey=${vhter}`)
       client.sendMessage(from, anu, image, { caption: '_nih_'}) 
       await limitAdd(sender)
       break 
      case 'ttp':   
      await limitAdd(sender)
      if (!isUser) return reply(mess.verify)
      if (args.length < 1) return reply(mess.txt)
	 anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ttp?text=${body.slice(5)}&apikey=BotWeA`, {method: 'get'})
	reply(mess.wait) 
	buf = await getBase64(anu.base64)
	ranp = getRandom('.png')
	rano = getRandom('.webp')
	exec(`wget ${buf} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
		})
	  break  
	  case 'ytmp3':   
	if (isLimit(sender)) return reply(limitend(pusname))
	  if (!isUser) return reply(mess.verify)
	  if (args.length < 1) return reply(mess.txt)
	  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
	  reply(mess.wait)
	  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${body.slice(6)}&apikey=${zeks}`, {method: 'get'})
	  buf = await getBuffer(anu.result.thumb)
	  bufq = await getBuffer(anu.result.link)
	  teks = `_≻TITLE_:${anu.result.title}\n_≻SIZE_:${anu.result.size}\n\n_Mohon Tunggu Zayang audio sedang di kirim^^_`
	  client.sendMessage(from, buf, image, { quoted: mek, caption: teks })
	  client.sendMessage(from, bufq, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true }) 
	await limitAdd(sender)
	 break 
	  case 'ytmp4':    
	if (isLimit(sender)) return reply(limitend(pusname))
	  if (!isUser) return reply(mess.verify)
	  if (args.length < 1) return reply(mess.txt)
	  reply(mess.wait)
	  const text = body.slice(6)
	  anu = await fetchJson(`https://videfikri.com/api/ytmp4/?url=${text}`, {method: 'get'})
	  buf = await getBuffer(anu.result.imgUrl)
	  bufq = await getBuffer(anu.result.urlVideo)
	  teks = `_≻TITLE_:${anu.result.judul}\n\n_Mohon Tunggu Zayang video sedang di kirim^^_`
	  client.sendMessage(from, buf, image, { quoted: mek, caption: teks })
	  client.sendMessage(from, bufq, video, { caption: 'nih' }) 
	await limitAdd(sender)
	 break 
	 case 'tts': 
	if (!isUser) return reply(mess.verify)
	 if (args.length < 1) return reply(mess.txt)
	 hm = body.slice(4)
	var i2d = hm.split("|")[0];
	var teks = hm.split("|")[1];
	 anu = await getBuffer(`https://api.zeks.xyz/api/tts?code=${i2d}&text=${teks}`)
	 client.sendMessage(from, anu, audio, { mimetype: 'audio/mp4', quoted : mek, ptt: true })
	 break
	  case 'img2url':   
	if (isLimit(sender)) return reply(limitend(pusname))
	if (!isUser) return reply(mess.verify)
	        var imgbb = require('imgbb-uploader')
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  client.downloadAndSaveMediaMessage(encmedia)        
            imgbb('4b1ba7ed7d3f1171a48266da13d38eec', media)
                .then(data => {
                    var caps = `「 *IMAGE TO URL* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     client.sendMessage(from, ibb, image, { quoted: mek, caption: caps }) 	
                })
                .catch(err => {
                    throw err
                }) 
                await limitAdd(sender)
            break 
       case  'brainly':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       jwb = body.slice(8)
       anu = await fetchJson(`https://api.vhtear.com/branly?query=${body.slice(8)}&apikey=${vhter}`, {method: 'get'})
       teks = `_Ini hasli pencarian dari:${jwb}_\n\n${anu.result.data}`
       reply(teks)  	 
       await limitAdd(sender)
       break 
       case 'wiki':
       case 'wikipedia':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (args.length < 1) return reply(mess.txt)
      anu = await fetchJson(`https://api.vhtear.com/wikipedia?query=${body.slice(4)}&apikey=${vhter}`, {method: 'get'})
      teks = `_❕ini yang saya temukan di wiki_\n\n*${anu.result.Info}*`
      reply(teks) 
      await limitAdd(sender)
      break
     case 'wikien':   
     if (isLimit(sender)) return reply(limitend(pusname))
     if (!isUser) return reply(mess.verify)
     if (args.length < 1) return reply(mess.txt)
     anu = await fetchJson(`https://arugaz.herokuapp.com/api/wikien?q=${body.slice(7)}`, {method: 'get'})
     teks = `🔎 Menurut Wekepidia Adalah:\n\n*${anu.result}*`
     reply(teks) 
     await limitAdd(sender)
     break  
     if (isLimit(sender)) return reply(limitend(pusname))
     case 'goldbutton':
     if (args.length < 1) return reply(mess.txt)
     if (!isUser) return reply(mess.txt)
     if (!isPrem) return reply(mess.prem)
     anu = await fetchJson(`https://api.zeks.xyz/api/gplaybutton?text=${body.slice(11)}&apikey=${zeks}`, { method : 'get' })
     buf = await getBuffer(anu.result)
     client.sendMessage(from, buf, image, { quoted : mek, caption : '*Selamat^^*' }) 
     await limitAdd(sender)
     break 
     case 'silverbutton': 
     if (isLimit(sender)) return reply(limitend(pusname))
     if (args.length < 1) return reply(mess.txt)
     if (!isUser) return reply(mess.txt)
     if (!isPrem) return reply(mess.prem)
     anu = await fetchJson(`https://api.zeks.xyz/api/splaybutton?text=${body.slice(11)}&apikey=${zeks}`, { method : 'get' })
     buf = await getBuffer(anu.result)
     client.sendMessage(from, buf, image, { quoted : mek, caption : '*Selamat^^*' }) 
     await limitAdd(sender)
     break
       case 'wolflogo':   
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       budy = body.slice(9)
       var hh = budy.split("|")[0];
       var tt = budy.split("|")[1];
       anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=${zeks}&text1=apivinz&text2=${tt}`, {method: 'get'})
       if (anu.error) return reply(`*EROR*`)
       client.sendMessage(from, anu, image, { caption: 'jadi' }) 
       await limitAdd(sender)
       break  
       case 'removebg':
       if (isLimit(sender)) return reply(limitend(pusname))
                  if (!isUser) return reply(mess.verify)
            var imgbb = require('imgbb-uploader')
     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    reply(mess.wait)
     owgi = await client.downloadAndSaveMediaMessage(ger)
     anu = await imgbb("4b1ba7ed7d3f1171a48266da13d38eec", owgi)
     teks = `${anu.display_url}`
      hm = await fetchJson(`https://naufalhoster.xyz/tools/removebg?apikey=${nf}&url=${teks}`, {method:'get'})
      bp = await getBuffer(hm.result.image)
      client.sendMessage(from, bp, image, {quoted:mek,caption:'*✓Berhasil Remove Bg✓*'})
      } else {
      	reply('foto aja om')
      } 
      await limitAdd(sender)
      break
       case 'play':  
       if (isLimit(sender)) return reply(limitend(pusname))
       if (!isUser) return reply(mess.verify)
       if (!isPrem) return reply(mess.prem)
       if (args.length < 1) return reply(mess.txt)
       reply(mess.wait)
       anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(5)}&apikey=loplopia`, {method: 'get'})
       buf = await getBuffer(anu.result.image)
       buft = await getBuffer(anu.result.mp3)
       teks = `*Data Lagu Berhasil Di Dapat*\n*≻NAMA*:${anu.result.title}\n*≻SIZE*:${anu.result.size}\n*≻DURASI*:${anu.result.duration}\n\n*Sabar Bruh Lagi gw kirim*`
       client.sendMessage(from, buf, image, { quoted : mek, caption: teks })
       client.sendMessage(from, buft, audio, { mimetype: 'audio/mp4', quoted : mek, ptt : true }) 
       await limitAdd(sender)
       break  
       case 'stickwm':
       bob = body.slice(8)
       var bas = bob.split("|")[0];
       var oom = bob.split("|")[1];
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`${oom}`,`${text}`)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`${oom}`,`${text}`)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
			case 'triggered':
     case 'ger': 
     if (isLimit(sender)) return reply(limitend(pusname))
     if (!isUser) return reply(mess.verify)
            var imgbb = require('imgbb-uploader')
     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    reply(mess.wait)
     owgi = await client.downloadAndSaveMediaMessage(ger)
     anu = await imgbb("4b1ba7ed7d3f1171a48266da13d38eec", owgi)
     teks = `${anu.display_url}`
    ranp = getRandom('.gif')
      rano = getRandom('.webp')
       anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
   exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!') 
                                          }             
await limitAdd(sender)     
                  break 
                  case 'fisheye': 
                  if (isLimit(sender)) return reply(limitend(pusname))
                  if (!isUser) return reply(mess.verify)
            var imgbb = require('imgbb-uploader')
     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    reply(mess.wait)
     owgi = await client.downloadAndSaveMediaMessage(ger)
     anu = await imgbb("4b1ba7ed7d3f1171a48266da13d38eec", owgi)
     teks = `${anu.display_url}`
     anu1 = await fetchJson(`https://naufalhoster.xyz/tools/fisheye?apikey=${nf}&url=${teks}`, {method:'get'})
     bub = await getBuffer(anu1.result.image)
     client.sendMessage(from, bub, image, { quoted :mek, caption: 'wkwkwkwk' })
     } else {
     	reply(`gambar nya om`)      
     } 
    await limitAdd(sender)
     break
            default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[FROZE]','aqua'), 'Cmd Yang Tidak Terdaftar Di dalam Bot Dari', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
