exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.eror = () =>{
	return` Yah eror`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}
	
╭─⧉
│•INFO BOT•
│VERSI : 0.02
│FITUR : 300
│CREATOR : zhicco bot
│MODEL SCRIPT : BETA
│SUBSCRIBE CHANNEL ZHICCO BOT
│https://youtube.com/channel/UC0NplCYNyvuhPL5c1H3vq-g
╰───────────────┈ ⳹

╭─⬣ *List Menu*
│ • ${prefix}menu
│ • ${prefix}help
│ • ${prefix}apri
│
├ *Download*
│ • ${prefix}play [query]
│ • ${prefix}song [judul lagu]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}cocofun [url]
│ • ${prefix}ig [url]
│ • ${prefix}igstalk
│ • ${prefix}githubstalk
│ • ${prefix}ytsearch [query]
│ • ${prefix}mediafire [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│ • ${prefix}soundcloud [url]
│ • ${prefix}telesticker [url]
│
├ *Wibu*
│ • ${prefix}otaku
│ • ${prefix}komiku
│ • ${prefix}chara
│ • ${prefix}rias
│ • ${prefix}akeno
│ • ${prefix}naruto
│ • ${prefix}kaneki
│ • ${prefix}rimuru
│ • ${prefix}akira
│ • ${prefix}kurama
│ • ${prefix}dazai
│ • ${prefix}miku
│ • ${prefix}mikasa
│ • ${prefix}eren
│ • ${prefix}titan
│ • ${prefix}levi
│ • ${prefix}sakura
│ • ${prefix}hinata
│ • ${prefix}neji
│ • ${prefix}shinobu
│ • ${prefix}kurumi
│ • ${prefix}rem
│ • ${prefix}minato
│ • ${prefix}jiraya
│ • ${prefix}tsunade
│ • ${prefix}kiba
│ • ${prefix}boruto
│ • ${prefix}sarada
│ • ${prefix}sasuke
│ • ${prefix}madara
│ • ${prefix}obito
│ • ${prefix}tanjiro
│ • ${prefix}nezuko
│ • ${prefix}luffy
│ • ${prefix}zoro
│ • ${prefix}sanji
│ • ${prefix}gon
│ • ${prefix}killua
│ • ${prefix}sagiri
│ • ${prefix}zenitsu
│ • ${prefix}natsu
│ • ${prefix}genos
│ • ${prefix}saitama
│ • ${prefix}inosuke
│ • ${prefix}inori
│
├ *Sfw Dan Nsfw*
│ • ${prefix}waifu
│ • ${prefix}husbu
│ • ${prefix}loli
│ • ${prefix}milf
│ • ${prefix}cosplay
│ • ${prefix}wallml
│ • ${prefix}futanari
│ • ${prefix}nekoh
│ • ${prefix}anal
│ • ${prefix}hentai
│ • ${prefix}ahegao
│ • ${prefix}ass
│ • ${prefix}blowjob
│ • ${prefix}bdsm
│ • ${prefix}cuckold
│ • ${prefix}cum
│ • ${prefix}ero
│ • ${prefix}femdom
│ • ${prefix}foot
│ • ${prefix}gangbang
│ • ${prefix}glasses
│ • ${prefix}masturbation
│ • ${prefix}orgy
│ • ${prefix}panties
│ • ${prefix}pussy
│ • ${prefix}things
│ • ${prefix}yuri
│ • ${prefix}neko
│
├ *Asupan*
│ • ${prefix}asupan
│ • ${prefix}ukty
│ • ${prefix}ghea
│ • ${prefix}rikagusriani
│ • ${prefix}bocil
│ • ${prefix}santuy
│
├ *Convert*
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}attp
│ • ${prefix}ttp
│ • ${prefix}toimg
│ • ${prefix}smeme [text]
│ • ${prefix}memegen [text|text2]
│ • ${prefix}toptt
│ • ${prefix}tomp3
│ • ${prefix}tomp4
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}tourl [image/video]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│
├ *Education*
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}brainly [soal]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
│ • ${prefix}pantun
│ 
├ *Walpaper*
│ • ${prefix}walpaper
│ • ${prefix}teknologi
│ • ${prefix}programmer
│ • ${prefix}gamer
│ • ${prefix}anime
│ • ${prefix}muslim
│ • ${prefix}cyber
│
├ *Other*
│ • ${prefix}ssweb
│ • ${prefix}cekapikey [lolhuman]
│ • ${prefix}delete
│ • ${prefix}meme
│ • ${prefix}readmore
│ • ${prefix}infogempa
│ • ${prefix}upswvideo
│ • ${prefix}upswteks
│ • ${prefix}upswimage
│ • ${prefix}quotesanime
│ • ${prefix}searchgc [link]
│ • ${prefix}playstore [nama apk]
│
├ *Islam*
│ • ${prefix}kisahnabi
│ • ${prefix}surah
│
├ *Sound*
│ • ${prefix}sound
│ • ${prefix}sound1
│ • ${prefix}sound2
│ • ${prefix}sound3
│ • ${prefix}sound4
│ • ${prefix}sound5
│ • ${prefix}sound6
│ • ${prefix}sound7
│ • ${prefix}sound8
│ • ${prefix}sound9
│ • ${prefix}sound10
│ • ${prefix}sound11
│ • ${prefix}sound12
│ • ${prefix}sound13
│ • ${prefix}sound14
│ • ${prefix}sound15
│ • ${prefix}sound16
│ • ${prefix}sound17
│ • ${prefix}sound18
│ • ${prefix}sound19
│ • ${prefix}sound20
│ • ${prefix}sound21
│ • ${prefix}sound22
│ • ${prefix}sound23
│ • ${prefix}sound24
│ • ${prefix}sound25
│
├ *Game*
│ • ${prefix}tebakgambar 
│ • ${prefix}suit
│ • ${prefix}family100
│ • ${prefix}caklontong
│ • ${prefix}truth
│ • ${prefix}dare
│ • ${prefix}gaycek
│ • ${prefix}sangecek
│ • ${prefix}lesbicek
│ • ${prefix}gantengcek
│ • ${prefix}cantikcek
│ • ${prefix}cantik
│ • ${prefix}ganteng
│ • ${prefix}jelek
│ • ${prefix}goblok
│ • ${prefix}bego
│ • ${prefix}pinter
│ • ${prefix}jago
│ • ${prefix}nolep
│ • ${prefix}monyet
│ • ${prefix}babi
│ • ${prefix}beban
│ • ${prefix}baik
│ • ${prefix}jahat
│ • ${prefix}anjing
│ • ${prefix}haram
│ • ${prefix}kontol
│ • ${prefix}pakboy
│ • ${prefix}wibu
│ • ${prefix}hebat
│ • ${prefix}sadboy
│ • ${prefix}sadgirl
│ • ${prefix}apakah
│ • ${prefix}kapankah
│ • ${prefix}pakgirl
│ • ${prefix}jadian
│
├ *TeksPro*
│ • ${prefix}blackpink text
│ • ${prefix}neon text
│ • ${prefix}greenneon text
│ • ${prefix}advanceglow text
│ • ${prefix}futureneon text
│ • ${prefix}sandwriting text
│ • ${prefix}sandsummer text
│ • ${prefix}sandengraved text
│ • ${prefix}metaldark text
│ • ${prefix}neonlight text
│ • ${prefix}holographic text
│ • ${prefix}text1917 text
│ • ${prefix}minion text
│ • ${prefix}deluxesilver text
│ • ${prefix}newyearcard text
│ • ${prefix}bloodfrosted text
│ • ${prefix}halloween text
│ • ${prefix}jokerlogo text
│ • ${prefix}fireworksparkle text
│ • ${prefix}natureleaves text
│ • ${prefix}bokeh text
│ • ${prefix}toxic text
│ • ${prefix}strawberry text
│ • ${prefix}box3d text
│ • ${prefix}roadwarning text
│ • ${prefix}breakwall text
│ • ${prefix}icecold text
│ • ${prefix}luxury text
│ • ${prefix}cloud text
│ • ${prefix}summersand text
│ • ${prefix}horrorblood text
│ • ${prefix}thunder text
│ • ${prefix}pornhub text1 text2
│ • ${prefix}glitch text1 text2
│ • ${prefix}avenger text1 text2
│ • ${prefix}space text1 text2
│ • ${prefix}ninjalogo text1 text2
│ • ${prefix}marvelstudio text1 text2
│ • ${prefix}lionlogo text1 text2
│ • ${prefix}wolflogo text1 text2
│ • ${prefix}steel3d text1 text2
│ • ${prefix}wallgravity text1 text2
│
├ *Photooxy*
│ • ${prefix} shadow text
│ • ${prefix} cup text
│ • ${prefix} cup1 text
│ • ${prefix} romance text
│ • ${prefix} smoke text
│ • ${prefix} burnpaper text
│ • ${prefix} lovemessage text
│ • ${prefix} undergrass text
│ • ${prefix} love text
│ • ${prefix} coffe text
│ • ${prefix} woodheart text
│ • ${prefix} woodenboard text
│ • ${prefix} summer3d text
│ • ${prefix} wolfmetal text
│ • ${prefix} nature3d text
│ • ${prefix} underwater text
│ • ${prefix} golderrose text
│ • ${prefix} summernature text
│ • ${prefix} letterleaves text
│ • ${prefix} glowingneon text
│ • ${prefix} fallleaves text
│ • ${prefix} flamming text
│ • ${prefix} harrypotter text
│ • ${prefix} carvedwood text
│ • ${prefix} tiktok text1 text2
│ • ${prefix} arcade8bit text1 text2
│ • ${prefix} battlefield4 text1 text2
│ • ${prefix} pubg text1 text2
│
├ *Info*
│ • ${prefix}owner
│ • ${prefix}donasi
│ • ${prefix}rules
│ • ${prefix}daftar
│ • ${prefix}creator
│ • ${prefix}ping
│ • ${prefix}sewabot
│
├ *Owner*
│ • ${prefix}bc [text]
│ • ${prefix}bc2 [text]
│ • ${prefix}leave
│ • ${prefix}get [link]
│ • ${prefix}shutdown
│ • ${prefix}restart
│ • ${prefix}buggc
│ • ${prefix}join
│ • ${prefix}setppbot
│ • ${prefix}creategrup @tag
│ • ${prefix}listgroup
│ • ${prefix}block
│ • ${prefix}unblock
│ • ${prefix}setppbot
│ • >
│ • $
│ •  => 
│
├ *Group*
│ • ${prefix}antilink 1 / 0
│ • ${prefix}antivirtex 1 / 0
│ • ${prefix}hidetag [text]
│ • ${prefix}linkgrup
│ • ${prefix}setpp
│ • ${prefix}grup open/close
│ • ${prefix}add 628
│ • ${prefix}tagall
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
╰─⬣
╭─⧉ BIG THANKS TO ⧉
│❒ ALLAH SWT
│❒ ORTU
│❒ ZEEONE OFC (MASTAH)
│❒ ALDI FAUZI (MASTAH)
│❒ APRILIA (NEWBIE)
│❒ SIEGRIN (MASTAH)
│❒ DINATA (MASTAH)
│❒ SANZY YT (MASTAH)
│❒ PENYEDIA MODULE
│❒  MR.CHAINNER (LAMMER)
╰───────────────┈ ⳹
`
	}