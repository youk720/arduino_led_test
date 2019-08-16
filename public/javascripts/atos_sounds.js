// for文回し用
let d;
// 放送雑種パーツ
let atos_cross = [
  ["./sound/voicetext/arriv_melo.mp3", "接近メロディ"],
  ["./sound/voicetext/honjitsumo_1.mp3", "本日も、ご利用いただき、ありがとうございます"],
  ["./sound/voicetext/kondono.mp3", "今度の"],
  ["./sound/voicetext/ressyaha.mp3", "列車は"],
  ["./sound/voicetext/densyaha.mp3", "電車は"],
  ["./sound/voicetext/yukitonatteorimasu.mp3", "行きとなっております"],
  ["./sound/voicetext/yukidesu.mp3", "行きです"],
  ["./sound/voicetext/yukito.mp3", "行きと"],
  ["./sound/voicetext/yukiha.mp3", "行きは"],
  ["./sound/voicetext/toeki_dep.mp3", "当駅始発"],
  ["./sound/voicetext/toekide.mp3", "当駅で"],
  ["./sound/voicetext/zoketsuwokonai.mp3", "増結を行います"],
  ["./sound/voicetext/zoketsuwoitashi.mp3", "増結をいたします"],
  ["./sound/voicetext/renketsu.mp3", "連結をいたします"],
  ["./sound/voicetext/maeyori.mp3", "前より"],
  ["./sound/voicetext/ushiroyori.mp3", "後ろ寄り"],
  ["./sound/voicetext/cars/5ryoha.mp3", "5両は"],
  ["./sound/voicetext/cars/10ryoha.mp3", "10両は"],
  ["./sound/voicetext/domari.mp3", "止まりとなります"],
  ["./sound/voicetext/yuki.mp3", "行き"],
  ["./sound/voicetext/yukino.mp3", "行きの"],
  ["./sound/voicetext/next.mp3", "次は"],
  ["./sound/voicetext/ni.mp3", "に"],
  ["./sound/voicetext/tomarimasu.mp3", "止まります"],
  ["./sound/voicetext/ressyaga.mp3", "列車が"],
  ["./sound/voicetext/tuka.mp3", "通過いたします"],
  ["./sound/voicetext/hassyasimasu.mp3", "発車いたします"],
  ["./sound/voicetext/konoressyaniha.mp3", "この列車には"],
  ["./sound/voicetext/konodensyaniha.mp3", "この電車には"],
  ["./sound/voicetext/jousya_node.mp3", "ご乗車になれませんので"],
  ["./sound/voicetext/jousya_naremasen.mp3", "ご乗車になれません"],
  ["./sound/voicetext/door_close.mp3", "ドアが閉まります"],
  ["./sound/voicetext/gochui.mp3", "ご注意ください"],
  ["./sound/voicetext/machiawase.mp3", "待合わせを行います"],
  ["./sound/voicetext/passmachi.mp3", "通過待ちをいたします"],
  ["./sound/voicetext/kamotuga.mp3", "貨物列車が"],
  ["./sound/voicetext/mamonaku.mp3", "まもなく"],
  ["./sound/voicetext/yukiga.mp3", "行きが"],
  ["./sound/voicetext/mairimasu.mp3", "まいります"],
  ["./sound/voicetext/ressyagamairimasu.mp3", "列車がまいります"],
  ["./sound/voicetext/densyagamairimasu.mp3", "電車がまいります"],
  ["./sound/voicetext/homedoor_motare.mp3", "ホームドアから、手や顔を出したり、もたれかかるのはおやめください"],
  ["./sound/voicetext/abunai_tenji.mp3", "危ないですから、黄色い点字ブロックまで、お下がりください", "点字ブロックまで"],
  ["./sound/voicetext/abunai_homedoor.mp3", "危ないですから、ホームドアの後ろまで、お下がりください", "HMドアまで"],
  ["./sound/voicetext/abunai_sen.mp3", "危ないですから、黄色い線まで、お下がりください", "線まで"],
  ["./sound/voicetext/kikendesukara.mp3", "危険ですから、黄色い線まで、お下がりください", "危険ですから"],
  ["./sound/voicetext/ha.mp3", "は"],
  ["./sound/voicetext/toeki_domarino.mp3", "当駅止まりの"],
  ["./sound/voicetext/orikaeshi.mp3", "折り返し"],
  ["./sound/voicetext/tesyachuno.mp3", "停車中の"],
  ["./sound/voicetext/tochakumade.mp3", "到着まで"],
  ["./sound/voicetext/hassyamade.mp3", "発車まで"],
  ["./sound/voicetext/hodo.mp3", "程"],
  ["./sound/voicetext/shibaraku.mp3", "しばらく"],
  ["./sound/voicetext/omachikudasai.mp3", "お待ちください"],
  ["./sound/voicetext/ressyato.mp3", "列車と"],
  ["./sound/voicetext/densyato.mp3", "電車と"],
  ["./sound/voicetext/ashimotoni.mp3", "足元に"],
  ["./sound/voicetext/ressyatoho-mu_aiteorimasu.mp3", "列車とホームの間は広く開いております"],
  ["./sound/voicetext/densyatoho-mu_aiteorimasu.mp3", "電車とホームの間は広く開いております"],
  ["./sound/voicetext/ressyadesu.mp3", "列車です"],
  ["./sound/voicetext/honjitunikagirimashite.mp3", "本日に限りまして"],
  ["./sound/voicetext/ekide.mp3", "駅で"],
  ["./sound/voicetext/onorikaedesu.mp3", "お乗り換えです"],
  ["./sound/voicetext/tenimotu_ohiki.mp3", "手荷物をお引きください"],
  ["./sound/voicetext/kakekomijousyaha.mp3", "駆け込み乗車は"],
  ["./sound/voicetext/murinagojosyaha.mp3", "無理なご乗車は"],
  ["./sound/voicetext/oyamekudasai.mp3", "おやめください"],
  ["./sound/voicetext/tadaima.mp3", "ただいま"],
  ["./sound/voicetext/seiretujosya.mp3", "整列乗車をお願いしております"],
  ["./sound/voicetext/2retsu.mp3", "2列に"],
  ["./sound/voicetext/3retsu.mp3", "3列に"],
  ["./sound/voicetext/4retsu.mp3", "4列に"],
  ["./sound/voicetext/narande.mp3", "並んで"],
  ["./sound/voicetext/narimasu.mp3", "なります"],
  ["./sound/voicetext/konoressyano.mp3", "この列車の"],
  ["./sound/voicetext/konoressyaha.mp3", "この列車は"],
  ["./sound/voicetext/1door.mp3", "1ドア"],
  ["./sound/voicetext/2door.mp3", "2ドア"],
  ["./sound/voicetext/3door.mp3", "3ドア"],
  ["./sound/voicetext/4door.mp3", "4ドア"],
  [],
  ["./sound/voicetext/desu.mp3", "です"],
  ["./sound/voicetext/kirihanashitonarimasu.mp3", "切離しとなります"],
  ["./sound/voicetext/kirihanashitonarimasunode.mp3", "切離しとなりますので"],
  ["./sound/voicetext/omachigainonaiyouni.mp3", "お間違いのないように"],
  ["./sound/voicetext/ippanno.mp3", "一般のお客様は"],
  ["./sound/voicetext/nogojosya_onegai.mp3", "ご乗車にならないよう、お願いいたします"],
  ["./sound/voicetext/homeniha_no.mp3", "方面にはまいりません"],
  ["./sound/voicetext/ressyani.mp3", "列車に"],
  ["./sound/voicetext/renraku.mp3", "連絡します"],
  ["./sound/voicetext/greencar_tuiteru.mp3", "グリーン車がついております"],
  ["./sound/voicetext/syo_stop.mp3", "少々停車します"],
  ["./sound/voicetext/toeki.mp3", "当駅"],
  ["./sound/voicetext/houmenha.mp3", "方面は"],
  ["./sound/voicetext/tugino_goriyou.mp3", "次の列車を、ご利用ください"],
  ["./sound/voicetext/ohayou.mp3", "おはようございます"],
  ["./sound/voicetext/extraressyaga.mp3", "臨時列車が"],
  ["./sound/voicetext/kaisoressyaga.mp3", "回送列車が"],
  ["./sound/voicetext/dantairessyaga.mp3", "団体列車が"],
  ["./sound/voicetext/ashimotono.mp3", "足元の"],
  ["./sound/voicetext/josyaguchide.mp3", "乗車口で"],
  ["./sound/voicetext/orangeno.mp3", "オレンジ色の"],
  ["./sound/voicetext/greenno.mp3", "緑色の"],
  ["./sound/voicetext/yerrowno.mp3", "黄色の"],
  ["./sound/voicetext/redno.mp3", "赤色の"],
  ["./sound/voicetext/blueno.mp3", "青色の"],
  ["./sound/voicetext/lightblueno.mp3", "水色の"],
  ["./sound/voicetext/lightgreeno.mp3", "黄緑色の"],
  ["./sound/voicetext/de.mp3", "で"],
  ["./sound/voicetext/tesyasinai.mp3", "停車いたしません"],
  ["./sound/voicetext/lastdesu.mp3", "最終です"],
  ["./sound/voicetext/last.mp3", "最終"],
  ["./sound/voicetext/接近メロディ_2.mp3", "接近メロディ_2"],
  ["./sound/voicetext/接近メロディ_3.mp3", "接近メロディ_3"],
  ["./sound/voicetext/接近メロディ_4.mp3", "接近メロディ_4"],
  ["./sound/voicetext/josya_arigato.mp3", "ご乗車、ありがとうございます"],
  ["./sound/voicetext/homen.mp3", "方面"],
  ["./sound/voicetext/homenyukiga.mp3", "方面行きが"],
  ["./sound/voicetext/domari_1.mp3", "止まり"],
  ["./sound/voicetext/densyaga.mp3", "電車が"],
  ["./sound/voicetext/konodensyano.mp3", "この電車の"],
  ["./sound/voicetext/konodensyaha.mp3", "この電車は"],
  ["./sound/voicetext/densyani.mp3", "電車に"],
  ["./sound/voicetext/kaisoressyaga.mp3", "回送電車が"],
  ["./sound/voicetext/禁煙voicetext_men.mp3", "禁煙放送"],
  ["./sound/voicetext/green_carha.mp3", "グリーン車は"],
  ["./sound/voicetext/ashimoto.mp3", "足元"],
  ["./sound/voicetext/josyaguchi.mp3", "乗車口"],
  ["./sound/voicetext/to.mp3", "と"],
  ["./sound/voicetext/hasira_bango.mp3", "柱番号"],
  ["./sound/voicetext/4ban.mp3", "4番"],
  ["./sound/voicetext/5ban.mp3", "5番"],
  ["./sound/voicetext/8ban.mp3", "8番"],
  ["./sound/voicetext/9ban.mp3", "9番"],
  ["./sound/voicetext/homeno.mp3", "ホームの"],
  ["./sound/voicetext/yoriniha_tomarimasen.mp3", "寄りには止まりません"],
  ["./sound/voicetext/futsusyaha.mp3", "普通車は"],
  ["./sound/voicetext/1gosya.mp3", "1号車"],
  ["./sound/voicetext/kara.mp3", "から"],
  ["./sound/voicetext/2gosya.mp3", "2号車"],
  ["./sound/voicetext/3gosya.mp3", "3号車"],
  ["./sound/voicetext/4gosya.mp3", "4号車"],
  ["./sound/voicetext/5gosya.mp3", "5号車"],
  ["./sound/voicetext/6gosya.mp3", "6号車"],
  ["./sound/voicetext/9gosya.mp3", "9号車"],
  ["./sound/voicetext/10gosya.mp3", "10号車"],
  ["./sound/voicetext/11gosya.mp3", "11号車"],
  ["./sound/voicetext/14gosya.mp3", "14号車"],
  ["./sound/voicetext/15gosya.mp3", "15号車"],
  ["./sound/voicetext/last_carga.mp3", "一番後ろが"],
  ["./sound/voicetext/nojunde.mp3", "の、順で"],
  ["./sound/voicetext/zujono.mp3", "頭上の"],
  ["./sound/voicetext/space_05.mp3", "空白0.5秒"],
  ["./sound/voicetext/ueno_domari.mp3", "上野止まり"],
  ["./sound/voicetext/no.mp3", "の"],
  ["./sound/voicetext/densyawo.mp3", "電車を"],
  ["./sound/voicetext/ressyawo.mp3", "列車を"],
  ["./sound/voicetext/goriyokudasai.mp3", "ご利用ください"],
  ["./sound/voicetext/untensyuryo.mp3", "運転を終了しております"],
  ["./sound/voicetext/goriyoitadaki.mp3", "ご利用いただき"],
  ["./sound/voicetext/noriokure.mp3", "お乗り遅れのないように"],
  // ["./sound/voicetext/.mp3", ""],
]
// 配列内の要素をhtmlのoptionタグで動的出力
for (d = 42; d < 46; d++) {
  $("#seafty").append($("<option>").val(d).text(atos_cross[d][2]));
}
// 切離/増結等駅指定(当駅)
$("#stop_sta").append($("<option>").val("93_1").text(atos_cross[93][1]));


// 列車種別
let train_type = [
  [],
  ["./sound/voicetext/type/local_1.mp3", "各駅停車"],
  ["./sound/voicetext/type/local_2.mp3", "普通"],
  ["./sound/voicetext/type/rapid.mp3", "快速"],
  ["./sound/voicetext/type/chuoutokkai.mp3", "中央特快"],
  ["./sound/voicetext/type/ometokkai.mp3", "青梅特快"],
  ["./sound/voicetext/type/comtokkai.mp3", "通勤特快"],
  ["./sound/voicetext/type/comrip.mp3", "通勤快速"],
  ["./sound/voicetext/type/tokkai.mp3", "特別快速"],
  ["./sound/voicetext/type/extra.mp3", "臨時"],
  ["./sound/voicetext/type/group.mp3", "団体"],
  ["./sound/voicetext/type/kaiso.mp3", "回送"],
  ["./sound/voicetext/type/junkyu.mp3", "準急"],
  ["./sound/voicetext/type/kaikyu.mp3", "快速急行"],
  ["./sound/voicetext/type/exp.mp3", "急行"],
  ["./sound/voicetext/type/ltdexp.mp3", "特急"],
  ["./sound/voicetext/type/nightltexp.mp3", "寝台特急"],
  ["./sound/voicetext/type/ohayoliner.mp3", "おはようライナー"],
  ["./sound/voicetext/type/homeliner.mp3", "ホームライナー"],
  ["./sound/voicetext/type/horide.mp3", "ホリデー快速"],
  ["./sound/voicetext/type/L_ltd.mp3", "L特急"],
]
// 配列内の要素をhtmlのoptionタグで動的出力
for (d = 0; d < train_type.length; d++) {
   $("#kind").append($("<option>").val(d).text(train_type[d][1]));
}

// 路線名
let train_line = [
  ["./sound/voicetext/line/syoshin.mp3", "湘南新宿ライン"],
  ["./sound/voicetext/line/joto.mp3", "上野東京ライン"],
  ["./sound/voicetext/chokutsu.mp3", "直通"],
  ["./sound/voicetext/mawari.mp3", "周り"],
  [],
  ["./sound/voicetext/line/takasaki.mp3", "高崎線"],
  ["./sound/voicetext/line/utsunomiya.mp3", "宇都宮線"],
  ["./sound/voicetext/line/tokaido.mp3", "東海道線"],
  ["./sound/voicetext/line/yokosuka.mp3", "横須賀線"],
  ["./sound/voicetext/line/chuou.mp3", "中央線"],
  ["./sound/voicetext/line/hachikou.mp3", "八高線"], 
  ["./sound/voicetext/line/itsukaichi.mp3", "五日市線"], 
  ["./sound/voicetext/line/ome.mp3", "青梅線"], 
  ["./sound/voicetext/line/joban.mp3", "常磐線"],
  ["./sound/voicetext/line/keiyo.mp3", "京葉線"],
  ["./sound/voicetext/line/sobu.mp3", "総武線"],
  ["./sound/voicetext/line/narita.mp3", "成田線"], 
  ["./sound/voicetext/line/uchibo.mp3", "内房線"], 
  ["./sound/voicetext/line/sotobo.mp3", "外房線"],
  ["./sound/voicetext/line/sotobotogane.mp3", "外房・東金線"], 
  ["./sound/voicetext/line/musashino.mp3", "武蔵野線"],
  ["./sound/voicetext/line/yamate.mp3", "山手線"],
  ["./sound/voicetext/bound/yamate_soto.mp3",  "山手線外回り"],
  ["./sound/voicetext/bound/yamate_uchi.mp3",  "山手線内回り"],
  ["./sound/voicetext/line/keihintohoku.mp3", "京浜東北線"],
  ["./sound/voicetext/line/keihinegishi.mp3", "京浜東北・根岸線"], 
  ["./sound/voicetext/line/sagami.mp3", "相模線"], 
  ["./sound/voicetext/line/yokohama.mp3", "横浜線"], 
  ["./sound/voicetext/line/nanbu.mp3", "南武線"], 
  ["./sound/voicetext/line/kawagoe.mp3", "川越線"],
  ["./sound/voicetext/line/saikyo.mp3", "埼京線"],
  ["./sound/voicetext/line/rinkai.mp3", "りんかい線"],
  ["./sound/voicetext/line/sotetsu.mp3", "相鉄線"],
  ["./sound/voicetext/line/tsurumi.mp3", "鶴見線"], 
  ["./sound/voicetext/line/agatsuma.mp3", "吾妻線"], 
  ["./sound/voicetext/line/shinetsu.mp3", "信越線"], 
  ["./sound/voicetext/line/joetsu.mp3", "上越線"], 
  ["./sound/voicetext/line/ryomo.mp3", "両毛線"], 
  ["./sound/voicetext/line/mito.mp3", "水戸線"], 
  ["./sound/voicetext/line/odk.mp3", "小田急線"], 
  ["./sound/voicetext/line/tokyutoyoko.mp3", "東急東横線"], 
  ["./sound/voicetext/line/tokyudenentoshi.mp3", "東急田園都市線"], 
  ["./sound/voicetext/line/tokyumeguro.mp3", "東急目黒線"], 
  ["./sound/voicetext/line/tokyuoimachi.mp3", "東急大井町線"], 
  ["./sound/voicetext/line/seibuikebukuro.mp3", "西武池袋線"], 
  ["./sound/voicetext/line/tojo.mp3", "東武東上線"], 
  ["./sound/voicetext/line/isesaki.mp3", "東武伊勢崎線"], 
  ["./sound/voicetext/line/tobuutsunomiya.mp3", "東武宇都宮線"], 
  ["./sound/voicetext/line/tobunikou.mp3", "東武日光線"], 
  ["./sound/voicetext/line/kinugawa.mp3", "東武鬼怒川線"], 
  ["./sound/voicetext/line/keikyu.mp3", "京急線"], 
  ["./sound/voicetext/line/subtozai.mp3", "地下鉄東西線"], 
  ["./sound/voicetext/line/subchiyoda.mp3", "地下鉄千代田線"], 
  ["./sound/voicetext/line/sendai_air.mp3", "仙台空港アクセス線"], 
  ["./sound/voicetext/line/tohoku.mp3", "東北本線"], 
  ["./sound/voicetext/line/senseki.mp3", "仙石線"], 
  ["./sound/voicetext/line/senzan.mp3", "仙山線"],
  ["./sound/voicetext/line/senseki_tohoku_1.mp3", "仙石東北ライン"], 
  ["./sound/voicetext/line/senseki_tohoku.mp3", "仙石東北ライン_石巻線"], 
  // ["./sound/voicetext/line/.mp3", ""], 
  // ["./sound/voicetext/line/.mp3", ""], 
]
for (d = 4; d < train_line.length; d++) {
  $("#line").append($("<option>").val(d).text(train_line[d][1]));
}

// 番線用音源
let bansen_num = [
  ["./sound/voicetext/bansen/1.mp3", "1番線"],
  ["./sound/voicetext/bansen/2.mp3", "2番線"],
  ["./sound/voicetext/bansen/3.mp3", "3番線"],
  ["./sound/voicetext/bansen/4.mp3", "4番線"],
  ["./sound/voicetext/bansen/5.mp3", "5番線"],
  ["./sound/voicetext/bansen/6.mp3", "6番線"],
  ["./sound/voicetext/bansen/7.mp3", "7番線"],
  ["./sound/voicetext/bansen/8.mp3", "8番線"],
  ["./sound/voicetext/bansen/9.mp3", "9番線"],
  ["./sound/voicetext/bansen/10.mp3", "10番線"],
  ["./sound/voicetext/bansen/11.mp3", "11番線"],
  ["./sound/voicetext/bansen/12.mp3", "12番線"],
  ["./sound/voicetext/bansen/13.mp3", "13番線"],
  ["./sound/voicetext/bansen/14.mp3", "14番線"],
  ["./sound/voicetext/bansen/15.mp3", "15番線"],
  ["./sound/voicetext/bansen/16.mp3", "16番線"],
  ["./sound/voicetext/bansen/1no.mp3", "1番線の"],
  ["./sound/voicetext/bansen/2no.mp3", "2番線の"],
  ["./sound/voicetext/bansen/3no.mp3", "3番線の"],
  ["./sound/voicetext/bansen/4no.mp3", "4番線の"],
  ["./sound/voicetext/bansen/5no.mp3", "5番線の"],
  ["./sound/voicetext/bansen/6no.mp3", "6番線の"],
  ["./sound/voicetext/bansen/7no.mp3", "7番線の"],
  ["./sound/voicetext/bansen/8no.mp3", "8番線の"],
  ["./sound/voicetext/bansen/9no.mp3", "9番線の"],
  ["./sound/voicetext/bansen/10no.mp3", "10番線の"],
  ["./sound/voicetext/bansen/11no.mp3", "11番線の"],
  ["./sound/voicetext/bansen/12no.mp3", "12番線の"],
  ["./sound/voicetext/bansen/13no.mp3", "13番線の"],
  ["./sound/voicetext/bansen/14no.mp3", "14番線の"],
  ["./sound/voicetext/bansen/15no.mp3", "15番線の"],
  ["./sound/voicetext/bansen/16no.mp3", "16番線の"],
  ["./sound/voicetext/bansen/1ni.mp3", "1番線に"],
  ["./sound/voicetext/bansen/2ni.mp3", "2番線に"],
  ["./sound/voicetext/bansen/3ni.mp3", "3番線に"],
  ["./sound/voicetext/bansen/4ni.mp3", "4番線に"],
  ["./sound/voicetext/bansen/5ni.mp3", "5番線に"],
  ["./sound/voicetext/bansen/6ni.mp3", "6番線に"],
  ["./sound/voicetext/bansen/7ni.mp3", "7番線に"],
  ["./sound/voicetext/bansen/8ni.mp3", "8番線に"],
  ["./sound/voicetext/bansen/9ni.mp3", "9番線に"],
  ["./sound/voicetext/bansen/10ni.mp3", "10番線に"],
  ["./sound/voicetext/bansen/11ni.mp3", "11番線に"],
  ["./sound/voicetext/bansen/12ni.mp3", "12番線に"],
  ["./sound/voicetext/bansen/13ni.mp3", "13番線に"],
  ["./sound/voicetext/bansen/14ni.mp3", "14番線に"],
  ["./sound/voicetext/bansen/15ni.mp3", "15番線に"],
  ["./sound/voicetext/bansen/16ni.mp3", "16番線に"],
  ["./sound/voicetext/bansen/1wo.mp3", "1番線を"],
  ["./sound/voicetext/bansen/2wo.mp3", "2番線を"],
  ["./sound/voicetext/bansen/3wo.mp3", "3番線を"],
  ["./sound/voicetext/bansen/4wo.mp3", "4番線を"],
  ["./sound/voicetext/bansen/5wo.mp3", "5番線を"],
  ["./sound/voicetext/bansen/6wo.mp3", "6番線を"],
  ["./sound/voicetext/bansen/7wo.mp3", "7番線を"],
  ["./sound/voicetext/bansen/8wo.mp3", "8番線を"],
  ["./sound/voicetext/bansen/9wo.mp3", "9番線を"],
  ["./sound/voicetext/bansen/10wo.mp3", "10番線を"],
  ["./sound/voicetext/bansen/11wo.mp3", "11番線を"],
  ["./sound/voicetext/bansen/12wo.mp3", "12番線を"],
  ["./sound/voicetext/bansen/13wo.mp3", "13番線を"],
  ["./sound/voicetext/bansen/14wo.mp3", "14番線を"],
  ["./sound/voicetext/bansen/15wo.mp3", "15番線を"],
  ["./sound/voicetext/bansen/16wo.mp3", "16番線を"],
  ["./sound/voicetext/bansen/1kara.mp3", "1番線から"],
  ["./sound/voicetext/bansen/2kara.mp3", "2番線から"],
  ["./sound/voicetext/bansen/3kara.mp3", "3番線から"],
  ["./sound/voicetext/bansen/4kara.mp3", "4番線から"],
  ["./sound/voicetext/bansen/5kara.mp3", "5番線から"],
  ["./sound/voicetext/bansen/6kara.mp3", "6番線から"],
  ["./sound/voicetext/bansen/7kara.mp3", "7番線から"],
  ["./sound/voicetext/bansen/8kara.mp3", "8番線から"],
  ["./sound/voicetext/bansen/9kara.mp3", "9番線から"],
  ["./sound/voicetext/bansen/10kara.mp3", "10番線から"],
  ["./sound/voicetext/bansen/11kara.mp3", "11番線から"],
  ["./sound/voicetext/bansen/12kara.mp3", "12番線から"],
  ["./sound/voicetext/bansen/13kara.mp3", "13番線から"],
  ["./sound/voicetext/bansen/14kara.mp3", "14番線から"],
  ["./sound/voicetext/bansen/15kara.mp3", "15番線から"],
  ["./sound/voicetext/bansen/16kara.mp3", "16番線から"],
  
]
for (d = 0; d < 16; d++) {
  $("#bansen").append($("<option>").val(d).text(bansen_num[d][1]));
}

let cars = [
  [],
  ["./sound/voicetext/cars/1ryo.mp3", "1両"],
  ["./sound/voicetext/cars/2ryo.mp3", "2両"],
  ["./sound/voicetext/cars/3ryo.mp3", "3両"],
  ["./sound/voicetext/cars/4ryo.mp3", "4両"],
  ["./sound/voicetext/cars/5ryo.mp3", "5両"],
  ["./sound/voicetext/cars/6ryo.mp3", "6両"],
  ["./sound/voicetext/cars/7ryo.mp3", "7両"],
  ["./sound/voicetext/cars/8ryo.mp3", "8両"],
  ["./sound/voicetext/cars/9ryo.mp3", "9両"],
  ["./sound/voicetext/cars/10ryo.mp3", "10両"],
  ["./sound/voicetext/cars/11ryo.mp3", "11両"],
  ["./sound/voicetext/cars/12ryo.mp3", "12両"],
  ["./sound/voicetext/cars/14ryo.mp3", "14両"],
  ["./sound/voicetext/cars/15ryo.mp3", "15両"]
]
for (d = 0; d < cars.length; d++) {
  $("#cars").append($("<option>").val(d).text(cars[d][1]));
  $("#add_tr_c").append($("<option>").val(d).text(cars[d][1]));
  
}

// 行先_単体
let buund_for = [
  
  ["./sound/voicetext/bound/ikebukuro.mp3",  "池袋"],
  ["./sound/voicetext/bound/nippori.mp3",  "日暮里"],
  ["./sound/voicetext/bound/shibuya.mp3",  "渋谷"],
  ["./sound/voicetext/bound/shinjuku.mp3",  "新宿"],
  ["./sound/voicetext/bound/shinagawa.mp3",  "品川"],
  ["./sound/voicetext/bound/tabata.mp3",  "田端"],
  ["./sound/voicetext/bound/tokyo.mp3",  "東京"],
  ["./sound/voicetext/bound/ueno.mp3",  "上野"],
  ["./sound/voicetext/bound/osaki.mp3",  "大崎"],
  ["./sound/voicetext/bound/kagohara.mp3",  "籠原"],
  ["./sound/voicetext/bound/fukaya.mp3",  "深谷"],
  ["./sound/voicetext/bound/takasaki.mp3",  "高崎"],
  ["./sound/voicetext/bound/maebashi.mp3",  "前橋"],
  ["./sound/voicetext/bound/sinmaebashi.mp3",  "新前橋"],
  ["./sound/voicetext/bound/kumagaya.mp3",  "熊谷"],
  ["./sound/voicetext/bound/konosu.mp3",  "鴻巣"],
  ["./sound/voicetext/bound/kitamoto.mp3",  "北本"],
  ["./sound/voicetext/bound/ageo.mp3",  "上尾"],
  ["./sound/voicetext/bound/omiya.mp3",  "大宮"],
  ["./sound/voicetext/bound/yokohama.mp3",  "横浜"],
  ["./sound/voicetext/bound/ofuna.mp3",  "大船"],
  ["./sound/voicetext/bound/hiratsuka.mp3",  "平塚"],
  ["./sound/voicetext/bound/kozu.mp3",  "国府津"],
  ["./sound/voicetext/bound/odawara.mp3",  "小田原"],
  ["./sound/voicetext/bound/atami.mp3",  "熱海"],
  ["./sound/voicetext/bound/numazu.mp3",  "沼津"],
  ["./sound/voicetext/bound/koganei.mp3",  "小金井"],
  ["./sound/voicetext/bound/koga.mp3",  "古河"],
  ["./sound/voicetext/bound/utsunomiya.mp3",  "宇都宮"],
  ["./sound/voicetext/bound/nozaki.mp3",  "野崎"],
  ["./sound/voicetext/bound/nasushiobara.mp3",  "那須塩原"],
  ["./sound/voicetext/bound/yaita.mp3",  "矢板"],
  ["./sound/voicetext/bound/kuroiso.mp3",  "黒磯"],
  ["./sound/voicetext/bound/kotesashi.mp3",  "小手指"],
  ["./sound/voicetext/bound/shinkiba.mp3",  "新木場"],
  ["./sound/voicetext/bound/tokyo_tereport.mp3",  "東京テレポート"],
  ["./sound/voicetext/bound/kaihinmakuhari.mp3",  "海浜幕張"],
  ["./sound/voicetext/bound/minamifunabashi.mp3",  "南船橋"],
  ["./sound/voicetext/bound/nishifunabashi.mp3",  "西船橋"],
  ["./sound/voicetext/bound/shinarashino.mp3",  "新習志野"],
  ["./sound/voicetext/bound/chibaminato.mp3",  "千葉みなと"],
  ["./sound/voicetext/bound/soga.mp3",  "蘇我"],
  ["./sound/voicetext/bound/mobara.mp3",  "茂原"],
  ["./sound/voicetext/bound/honda.mp3",  "誉田"],
  ["./sound/voicetext/bound/kazusaichinomiya.mp3",  "上総一ノ宮"],
  ["./sound/voicetext/bound/katsura.mp3",  "勝浦"],
  ["./sound/voicetext/bound/naruto.mp3",  "成東"],
  ["./sound/voicetext/bound/awakamogawa.mp3",  "安房鴨川"],
  ["./sound/voicetext/bound/kimitsu.mp3",  "君津"],
  ["./sound/voicetext/bound/kisarazu.mp3",  "木更津"],
  ["./sound/voicetext/bound/tateyama.mp3",  "館山"],
  ["./sound/voicetext/bound/anegasaki.mp3",  "姉ヶ崎"],
  ["./sound/voicetext/bound/kazusaminato.mp3",  "上総湊"],
  ["./sound/voicetext/bound/chikura.mp3",  "千倉"],
  ["./sound/voicetext/bound/sakura.mp3",  "佐倉"],
  ["./sound/voicetext/bound/choshi.mp3",  "銚子"],
  ["./sound/voicetext/bound/narita.mp3",  "成田"],
  ["./sound/voicetext/bound/narita_air.mp3",  "成田空港"],
  ["./sound/voicetext/bound/sawara.mp3",  "佐原"],
  ["./sound/voicetext/bound/kashimajingu.mp3",  "鹿島神宮"],
  ["./sound/voicetext/bound/chiba.mp3",  "千葉"],
  ["./sound/voicetext/bound/tsudanuma.mp3",  "津田沼"],
  ["./sound/voicetext/bound/ryogoku.mp3",  "両国"],
  ["./sound/voicetext/bound/ochanomizu.mp3",  "御茶ノ水"],
  ["./sound/voicetext/bound/nakano.mp3",  "中野"],
  ["./sound/voicetext/bound/mitaka.mp3",  "三鷹"],
  ["./sound/voicetext/bound/musashi_koganei.mp3",  "武蔵小金井"],
  ["./sound/voicetext/bound/kokubunji.mp3",  "国分寺"],
  ["./sound/voicetext/bound/tachikawa.mp3",  "立川"],
  ["./sound/voicetext/bound/kunitachi.mp3",  "国立"],
  ["./sound/voicetext/bound/toyoda.mp3",  "豊田"],
  ["./sound/voicetext/bound/hachiouji.mp3",  "八王子"],
  ["./sound/voicetext/bound/takao.mp3",  "高尾"],
  ["./sound/voicetext/bound/otsuki.mp3",  "大月"],
  ["./sound/voicetext/bound/kawaguchiko.mp3",  "河口湖"],
  ["./sound/voicetext/bound/kofu.mp3",  "甲府"],
  ["./sound/voicetext/bound/matsumoto.mp3",  "松本"],
  ["./sound/voicetext/bound/haijima.mp3",  "拝島"],
  ["./sound/voicetext/bound/ome.mp3",  "青梅"],
  ["./sound/voicetext/bound/okutama.mp3",  "奥多摩"],
  ["./sound/voicetext/bound/musashi_itsukaichi.mp3",  "武蔵五日市"],
  ["./sound/voicetext/bound/komagawa.mp3",  "高麗川"],
  ["./sound/voicetext/bound/hakonegasaki.mp3",  "箱根ヶ崎"],
  ["./sound/voicetext/bound/minakami.mp3",  "水上"],
  ["./sound/voicetext/bound/numata.mp3",  "沼田"],
  ["./sound/voicetext/bound/shibukawa.mp3",  "渋川"],
  ["./sound/voicetext/bound/omae.mp3",  "大前"],
  ["./sound/voicetext/bound/manzakazawa.mp3",  "万座・鹿沢口"],
  ["./sound/voicetext/bound/naganoharakusatsu.mp3",  "長野原草津口"],
  ["./sound/voicetext/bound/kiryu.mp3",  "桐生"],
  ["./sound/voicetext/bound/sano.mp3",  "佐野"],
  ["./sound/voicetext/bound/oyama.mp3",  "小山"],
  ["./sound/voicetext/bound/tomobe.mp3",  "友部"],
  ["./sound/voicetext/bound/tsuchiura.mp3",  "土浦"],
  ["./sound/voicetext/bound/mito.mp3",  "水戸"],
  ["./sound/voicetext/bound/katsuta.mp3",  "勝田"],
  ["./sound/voicetext/bound/iwaki.mp3",  "いわき"],
  ["./sound/voicetext/bound/kitasenju.mp3",  "北千住"],
  ["./sound/voicetext/bound/matsudo.mp3",  "松戸"],
  ["./sound/voicetext/bound/abiko.mp3",  "我孫子"],
  ["./sound/voicetext/bound/toride.mp3",  "取手"],
  ["./sound/voicetext/bound/chigasaki.mp3",  "茅ヶ崎"],
  ["./sound/voicetext/bound/minamiurawa.mp3",  "南浦和"],
  ["./sound/voicetext/bound/akabane.mp3",  "赤羽"],
  ["./sound/voicetext/bound/kamata.mp3",  "蒲田"],
  ["./sound/voicetext/bound/tsurumi.mp3",  "鶴見"],
  ["./sound/voicetext/bound/sakuragicho.mp3",  "桜木町"],
  ["./sound/voicetext/bound/isogo.mp3", "磯子"],
  ["./sound/voicetext/bound/yoshikawaminami.mp3",  "吉川美南"],
  ["./sound/voicetext/bound/minamikoshigaya.mp3",  "南越谷"],
  ["./sound/voicetext/bound/musashiurawa.mp3",  "武蔵浦和"],
  ["./sound/voicetext/bound/kawagoe.mp3",  "川越"],
  ["./sound/voicetext/bound/higashitokorozawa.mp3",  "東所沢"],
  ["./sound/voicetext/bound/fuchuhonmachi.mp3",  "府中本町"],
  ["./sound/voicetext/bound/kawasaki.mp3",  "川崎"],
  ["./sound/voicetext/bound/yako.mp3", "矢向"],
  ["./sound/voicetext/bound/musashi_nakahara.mp3", "武蔵中原"],
  ["./sound/voicetext/bound/noborito.mp3",  "登戸"],
  ["./sound/voicetext/bound/inaginaganuma.mp3",  "稲城長沼"],
  ["./sound/voicetext/bound/kikuna.mp3",  "菊名"],
  ["./sound/voicetext/bound/nagatsuta.mp3",  "長津田"],
  ["./sound/voicetext/bound/hashimoto.mp3",  "橋下"],
  ["./sound/voicetext/bound/machida.mp3",  "町田"],
  ["./sound/voicetext/bound/higashikanagawa.mp3",  "東神奈川"],
  ["./sound/voicetext/bound/shin_yokohama.mp3",  "新横浜"],
  ["./sound/voicetext/bound/aomori.mp3",  "青森"],
  ["./sound/voicetext/bound/ogaki.mp3",  "大垣"],
  ["./sound/voicetext/bound/nagoya.mp3",  "名古屋"],
  ["./sound/voicetext/bound/hakata.mp3",  "博多"],
  ["./sound/voicetext/bound/sapporo.mp3",  "札幌"],
  ["./sound/voicetext/bound/hakodate.mp3",  "函館"],
  ["./sound/voicetext/bound/kamakura.mp3",  "鎌倉"],
  ["./sound/voicetext/bound/zushi.mp3",  "逗子"],
  ["./sound/voicetext/bound/yokosuka.mp3",  "横須賀"],
  ["./sound/voicetext/bound/kurihama.mp3",  "久里浜"],
  ["./sound/voicetext/bound/misakiguchi.mp3",  "三崎口"],
  ["./sound/voicetext/bound/izukyu_shimoda.mp3",  "伊豆急下田"],
  ["./sound/voicetext/bound/haranomachi.mp3",  "原ノ町"],
  ["./sound/voicetext/bound/yamashita.mp3",  "山下"],
  ["./sound/voicetext/bound/shinchi.mp3",  "新地"],
  ["./sound/voicetext/bound/ayashi.mp3",  "愛子"],
  ["./sound/voicetext/bound/yamagata.mp3",  "山形"],
  ["./sound/voicetext/bound/sakunami.mp3",  "作並"],
  ["./sound/voicetext/bound/east_shiogama.mp3",  "東塩釜"],
  ["./sound/voicetext/bound/ishonomaki.mp3",  "石巻"],
  ["./sound/voicetext/bound/aobadori.mp3",  "あおば通"],
  ["./sound/voicetext/bound/kogota.mp3",  "小牛田"],
  ["./sound/voicetext/bound/rifu.mp3",  "利府"],
  ["./sound/voicetext/bound/ichinoseki.mp3", "一ノ関"],
  ["./sound/voicetext/bound/matsushima.mp3",  "松島"],
  ["./sound/voicetext/bound/ishikoshi/.mp3",  "石越"],
  ["./sound/voicetext/bound/shinjo.mp3",  "新庄"],
  ["./sound/voicetext/bound/shiroishi.mp3",  "白石"],
  ["./sound/voicetext/bound/fukushima.mp3",  "福島"],
  ["./sound/voicetext/bound/iwanuma.mp3",  "岩沼"],
  ["./sound/voicetext/bound/koriyama.mp3",  "郡山"],
  ["./sound/voicetext/bound/yanagawa.mp3",  "梁川"],
  ["./sound/voicetext/bound/ogwara.mp3",  "大河原"],
  ["./sound/voicetext/bound/onagawa.mp3",  "女川"],
  ["./sound/voicetext/bound/sendai_air.mp3",  "仙台空港"],
  ["./sound/voicetext/bound/mitazono.mp3",  "美田園"],
  ["./sound/voicetext/bound/natori.mp3",  "名取"],
  ["./sound/voicetext/bound/sendai.mp3",  "仙台"],
  ["./sound/voicetext/bound/morioka.mp3",  "盛岡"],
  ["./sound/voicetext/bound/hachinohe.mp3",  "八戸"],
  ["./sound/voicetext/bound/hon_hachinohe.mp3",  "本八戸"],
  // ["./sound/voicetext/bound/.mp3",  ""],
  // ["./sound/voicetext/bound/.mp3",  ""],
  // ["./sound/voicetext/bound/.mp3",  ""],
  // ["./sound/voicetext/bound/.mp3",  ""],
  // ["./sound/voicetext/bound/.mp3",  ""],
]

for (d = 0; d < buund_for.length; d++) {
  $("#destination").append($("<option>").val(d).text(buund_for[d][1]));
  $("#destination_2").append($("<option>").val(d).text(buund_for[d][1]));
  $("#stop_sta").append($("<option>").val(d).text(buund_for[d][1]));
}
// 行先_接近用
let bound_ga = [
  ["./sound/voicetext/bound/ga/yamate_ikb.mp3",  "池袋方面行きが"],
  ["./sound/voicetext/bound/ga/yamate_nipr.mp3",  "日暮里方面行きが"],
  ["./sound/voicetext/bound/ga/yamate_sby.mp3",  "渋谷方面行きが"],
  ["./sound/voicetext/bound/ga/yamate_sjk.mp3",  "新宿方面行きが"],
  ["./sound/voicetext/bound/ga/yamate_sng.mp3",  "品川方面行きが"],
  ["./sound/voicetext/bound/ga/yamate_tbt.mp3",  "田端方面行きが"],
  ["./sound/voicetext/bound/ga/yamate_tokyo.mp3",  "東京方面行きが"],
  ["./sound/voicetext/bound/ga/yamate_ueno.mp3",  "上野方面行きが"],
  ["./sound/voicetext/bound/ga/ueno.mp3",  "上野行きが"],
  ["./sound/voicetext/bound/ga/fukaya.mp3",  "深谷行きが"],
  ["./sound/voicetext/bound/ga/takasaki.mp3",  "高崎行きが"],
  ["./sound/voicetext/bound/ga/maebashi.mp3",  "前橋行きが"],
  ["./sound/voicetext/bound/ga/shinmaebashi.mp3",  "新前橋行きが"],
  ["./sound/voicetext/bound/ga/kagohara.mp3",  "籠原行きが"],
  ["./sound/voicetext/bound/ga/honjo.mp3",  "本庄行きが"],
  ["./sound/voicetext/bound/ga/konosu.mp3",  "鴻巣"],
  ["./sound/voicetext/bound/ga/omiya.mp3",  "大宮行きが"],
  ["./sound/voicetext/bound/ga/tokyo.mp3",  "東京行きが"],
  ["./sound/voicetext/bound/ga/utsunomiya.mp3",  "宇都宮行きが"],
  ["./sound/voicetext/bound/ga/koganei.mp3",  "小金井行きが"],
  ["./sound/voicetext/bound/ga/kuroiso.mp3",  "黒磯行きが"],
  ["./sound/voicetext/bound/ga/odawara.mp3",  "小田原行きが"],
  ["./sound/voicetext/bound/ga/ofuna.mp3",  "大船行きが"],
  ["./sound/voicetext/bound/ga/hiratsuka.mp3",  "平塚行きが"],
  ["./sound/voicetext/bound/ga/kozu.mp3",  "国府津行きが"],
  ["./sound/voicetext/bound/ga/atami.mp3",  "熱海行きが"],
  ["./sound/voicetext/bound/ga/numazu.mp3",  "沼津行きが"],
  ["./sound/voicetext/bound/ga/ogaki.mp3",  "大垣行きが"],
  ["./sound/voicetext/bound/ga/izukyu-shimoda.mp3",  "伊豆急下田行きが"],
  ["./sound/voicetext/bound/ga/ikebukuro.mp3",  "池袋行きが"],
  ["./sound/voicetext/bound/ga/shinjuku.mp3",  "新宿行きが"],
  ["./sound/voicetext/bound/ga/musashiurawa.mp3",  "武蔵浦和行きが"],
  ["./sound/voicetext/bound/ga/kawagoe.mp3",  "川越行きが"],
  ["./sound/voicetext/bound/ga/osaki.mp3",  "大崎行きが"],
  ["./sound/voicetext/bound/ga/nakano.mp3",  "中野行きが"],
  ["./sound/voicetext/bound/ga/mitaka.mp3",  "三鷹行きが"],
  ["./sound/voicetext/bound/ga/musashikoganei.mp3",  "武蔵小金井行きが"],
  ["./sound/voicetext/bound/ga/hachiouji.mp3",  "八王子行きが"],
  ["./sound/voicetext/bound/ga/tachikawa.mp3",  "立川行きが"],
  ["./sound/voicetext/bound/ga/takao.mp3",  "高尾行きが"],
  ["./sound/voicetext/bound/ga/minamiurawa.mp3",  "南浦和行きが"],
  ["./sound/voicetext/bound/ga/kaihinmakuhari.mp3",  "海浜幕張行きが"],
  ["./sound/voicetext/bound/ga/soga.mp3",  "蘇我行きが"],
  ["./sound/voicetext/bound/ga/nishifunabashi.mp3",  "西船橋行きが"],
  ["./sound/voicetext/bound/ga/tsudanuma.mp3",  "津田沼行きが"],
  ["./sound/voicetext/bound/ga/chiba.mp3",  "千葉行きが"],
  ["./sound/voicetext/bound/ga/kamakura.mp3",  "鎌倉行きが"],
  ["./sound/voicetext/bound/ga/zushi.mp3",  "逗子行きが"],
  ["./sound/voicetext/bound/ga/yokosuka.mp3",  "横須賀行きが"],
  ["./sound/voicetext/bound/ga/kurihama.mp3",  "久里浜行きが"],
  ["./sound/voicetext/bound/ga/narita-air.mp3",  "成田空港行きが"],
  ["./sound/voicetext/bound/ga/narita.mp3",  "成田行きが"],
  ["./sound/voicetext/bound/ga/awakamogawa.mp3",  "安房鴨川行きが"],
  ["./sound/voicetext/bound/ga/kazusaichinomiya.mp3",  "上総一ノ宮行きが"],
  ["./sound/voicetext/bound/ga/tateyama.mp3",  "館山行きが"],
  ["./sound/voicetext/bound/ga/kisarazu.mp3",  "木更津行きが"],
  ["./sound/voicetext/bound/ga/kimitu.mp3",  "君津行きが"],
  ["./sound/voicetext/bound/ga/shinkiba.mp3",  "新木場行きが"],
  ["./sound/voicetext/bound/ga/shinarashino.mp3",  "新習志野行きが"],
  ["./sound/voicetext/bound/ga/kamata.mp3",  "蒲田行きが"],
  ["./sound/voicetext/bound/ga/isogo.mp3",  "磯子行きが"],
  ["./sound/voicetext/bound/ga/sakuragicho.mp3",  "桜木町行きが"],
  ["./sound/voicetext/bound/ga/tsurumi.mp3",  "鶴見行きが"],
  ["./sound/voicetext/bound/ga/fuchuhonmachi.mp3",  "府中本町行きが"],
  ["./sound/voicetext/bound/ga/tsuchiura.mp3",  "土浦行きが"],
  ["./sound/voicetext/bound/ga/tomobe.mp3",  "友部行きが"],
  ["./sound/voicetext/bound/ga/mito.mp3",  "水戸行きが"],
  ["./sound/voicetext/bound/ga/katsuta.mp3",  "勝田行きが"],
  ["./sound/voicetext/bound/ga/iwaki.mp3",  "いわき行きが"],
  ["./sound/voicetext/bound/ga/kitasenju.mp3",  "北千住行きが"],
  ["./sound/voicetext/bound/ga/matsudo.mp3",  "松戸行きが"],
  ["./sound/voicetext/bound/ga/abiko.mp3",  "我孫子行きが"],
  ["./sound/voicetext/bound/ga/toride.mp3",  "取手行きが"],
  ["./sound/voicetext/bound/ga/ome.mp3",  "青梅行きが"],
  ["./sound/voicetext/bound/ga/otsuki.mp3",  "大月"],
  ["./sound/voicetext/bound/ga/kawaguchiko.mp3",  "河口湖行きが"],
  ["./sound/voicetext/bound/ga/haijima.mp3",  "拝島行きが"],
  ["./sound/voicetext/bound/ga/komagawa.mp3",  "高麗川行きが"],
  ["./sound/voicetext/bound/ga/minakami.mp3",  "水上行きが"],
  ["./sound/voicetext/bound/ga/numata.mp3",  "沼田行きが"],
  ["./sound/voicetext/bound/ga/shibukawa.mp3",  "渋川行きが"],
  ["./sound/voicetext/bound/ga/haranomachi.mp3",  "原ノ町行きが"],
  ["./sound/voicetext/bound/ga/yamashita.mp3",  "山下行きが"],
  ["./sound/voicetext/bound/ga/ayashi.mp3",  "愛子行きが"],
  ["./sound/voicetext/bound/ga/yamagata.mp3",  "山形行きが"],
  ["./sound/voicetext/bound/ga/sakunami.mp3",  "作並行きが"],
  ["./sound/voicetext/bound/ga/ishinomaki.mp3",  "石巻行きが"],
  ["./sound/voicetext/bound/ga/aobadori.mp3",  "あおば通行きが"],
  ["./sound/voicetext/bound/ga/kogota.mp3",  "小牛田行きが"],
  ["./sound/voicetext/bound/ga/rifu.mp3",  "利府行きが"],
  ["./sound/voicetext/bound/ga/ichinoseki.mp3",  "一ノ関行きが"],
  ["./sound/voicetext/bound/ga/matsushima.mp3",  "松島行きが"],
  ["./sound/voicetext/bound/ga/ishikoshi.mp3",  "石越行きが"],
  ["./sound/voicetext/bound/ga/shinjo.mp3",  "新庄行きが"],
  ["./sound/voicetext/bound/ga/fukushima.mp3",  "福島行きが"],
  ["./sound/voicetext/bound/ga/iwanuma.mp3",  "岩沼行きが"],
  ["./sound/voicetext/bound/ga/koriyama.mp3",  "郡山行きが"],
  ["./sound/voicetext/bound/ga/sendai_air.mp3",  "仙台空港行きが"],
  ["./sound/voicetext/bound/ga/mitazono.mp3",  "美田園行きが"],
  ["./sound/voicetext/bound/ga/natori.mp3",  "名取行きが"],
  ["./sound/voicetext/bound/ga/sendai.mp3",  "仙台行きが"],
  ["./sound/voicetext/bound/ga/aomori.mp3",  "青森行きが"],
  ["./sound/voicetext/bound/ga/sapporo.mp3",  "札幌行きが"],
  ["./sound/voicetext/bound/ga/morioka.mp3",  "盛岡行きが"],
  ["./sound/voicetext/bound/ga/hachinohe.mp3",  "八戸行きが"],
  ["./sound/voicetext/bound/ga/hon_hachinohe.mp3",  "本八戸行きが"],
  // ["./sound/voicetext/bound/ga/.mp3",  ""],
  // ["./sound/voicetext/bound/ga/.mp3",  ""],
  // ["./sound/voicetext/bound/ga/.mp3",  ""],
  // ["./sound/voicetext/bound/ga/.mp3",  ""],
  // ["./sound/voicetext/bound/ga/.mp3",  ""],
  // ["./sound/voicetext/bound/ga/.mp3",  ""],
  
  
  
]

// textareaサイズ初期設定
$("#all_parts").width(321);
$("#all_parts").height(196);

// 完全手動で音源を選択時に、選択欄に音源のパーツを追加してあげる
let atos =  atos_cross.concat(train_type, train_line, bansen_num, buund_for, bound_ga, cars);

for (d = 0; d < atos.length; d++) {
  $("#all_parts").append($("<option>").text(atos[d][1]));
}