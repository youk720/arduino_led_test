'use strict';
// textareaサイズ初期設定
$("#playlist_out").width(321);
$("#playlist_out").height(196);

// 接近:放送順序デフォルト定義
let jun = [
  ["接近メロディ\n空白0.5秒"],
  ["まもなく"],
  ["1番線に"],
  [""], //当駅始発 or no
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  [""], //行先
  [""],
  ["行きが"],
  ["まいります"],
  ["危ないですから、黄色い点字ブロックまで、お下がりください"],
  ["この列車は"], //この列車は
  [""], //ドア数
  [""], //両数
  ["です"],
  [""], //グリーン
  [""], //この列車の
  [""], //　前後ろ
  [""], //両数
  [""], // は
  [""], //切り離し駅
  [""], //止まりとなります or 増結をいたします
]
let jun_yuru = [
  ["接近メロディ"],
  ["まもなく"],
  ["1番線に"],
  [], //種別
  [], //列車が
  ["まいります"], //まいります
  ["危ないですから、黄色い点字ブロックまで、お下がりください"]
]
// 折り返し用接近
let arriv_back = [
  ["接近メロディ\n空白0.5秒"],
  ["まもなく"],
  ["1番線に"],
  ["当駅止まりの"],
  ["列車がまいります"],
  ["危ないですから、黄色い点字ブロックまで、お下がりください"],
  ["この列車は"],
  [""], //ドア数
  [""], //両数
  ["です"],
  [""], //グリーン
  ["空白0.5秒\n折り返し"],
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  [""], //行先
  [""], //行先2
  [""],
  ["行きと"],
  ["なります"]
]
// 戸閉用
let close_atos = [
  ["3番線"], //番線
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  [""], //行先
  [""], //行先2
  [""], // 方面
  [""], //行きが
  [""], //発車いたします
  [""],
  ["ドアが閉まります"],
  ["ご注意ください"]
]
// 予告:順序デフォルト定義
let info = [
  ["本日も、ご利用いただき、ありがとうございます"],
  ["今度の"],
  ["1番線の"],
  [""], // 停車中の
  ["列車は"],
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  [""], //行先
  [""],
  [""], //方面
  ["行きです"],
  ["この列車は"], //この列車は
  [""], //ドア数
  [""], //両数
  ["です"],
  [""], // green
  [""], //この列車の
  [""], //　前後ろ
  [""], //両数
  [""], // は
  [""], //切り離し駅
  [""] //止まりとなります or 増結をいたします
  

]

// 列車データ格納
let atos_sentence = [
  ["1番線"], //番線
  [""], //路線愛称
  [""], //路線
  [""], //直通他
  [""], //種別
  ["池袋"], //行先
  [""], //行先2
  ["4ドア"], //ドア
  [""], //両数
  [""], // グリーン
  [""], //この列車の
  [""], //　前後ろ
  [""], //両数
  [""], // は
  [""], //切り離し駅
  [""], //止まりとなります or 増結をいたします
]

// ATOSモード定義, 予告:1, 接近;2, 発車:3
let atos_mode = 0;

// 番線選択
let bn_num = 0;
$("#bansen").change(function(){
  bn_num = $("#bansen").val();
  atos_sentence[0] = bansen_num[bn_num][1];
  
});

// 上東/湘新追加判定
$("[name=line_1]").change(function(){
  // 湘新選択時
  if ($('[name=line_1][value=0]').prop('checked')){
    atos_sentence[1] = train_line[0][1];
    // 上東選択時
  }else if($('[name=line_1][value=1]').prop('checked')){
    atos_sentence[1] = train_line[1][1];
    // 愛称外す場合
  }else if($('[name=line_1][value=4]').prop('checked')){
    atos_sentence[1] = "";
  }
});

// 路線名
let line_num = 1;
$("#line").change(function(){
  line_num = $("#line").val();
  atos_sentence[2] = train_line[line_num][1];
});

// 直通/周り追加判定
$("[name=line_2]").change(function(){
  // 直通
  if($('[name=line_2][value=2]').prop('checked')){
    // 直通パーツ,追加
    atos_sentence[3] = train_line[2][1];
  // 周り
  }else if($('[name=line_2][value=3]').prop('checked')){
    atos_sentence[3] = train_line[3][1];
  // 無し
  }else if($('[name=line_2][value=4]').prop('checked')){
    atos_sentence[2] = "";
    atos_sentence[3] = "";
    }
});

// 種別任意選択
let kind_num = 1;
$("#kind").change(function(){
  kind_num = $("#kind").val();
  atos_sentence[4] = train_type[kind_num][1];
});

// 行き先任意選択
let bound = 0;
$("#destination").change(function(){
  bound = $("#destination").val();
  atos_sentence[5] = buund_for[bound][1];
  
});
// 行先2
let bound_2 = 0;
$("#destination_2").change(function(){
  bound_2 = $("#destination_2").val();
  atos_sentence[6] = buund_for[bound_2][1];
});



// 危ないですからry の種類選択
let seafty = 40;
$("#seafty").change(function(){
  seafty = $("#seafty").val();
  jun[12] = atos_cross[seafty][1];
  jun_yuru[6] = atos_cross[seafty][1];
  arriv_back[5] = atos_cross[seafty][1];
})

//ドア数
let door_at = 78;
$("#doors").change(function(){
  door_at = $("#doors").val();
  atos_sentence[7] = atos_cross[door_at][1];
})

// 両数
let cars_num = 0;
$("#cars").change(function(){
  cars_num = $("#cars").val();
  atos_sentence[8] = cars[cars_num][1];
})

$("#door_car").change(function(){
  if($("#door_car").prop('checked') == true){
    arriv_back[9] = "です";
    jun[13] = "空白0.5秒\nこの列車は";
    jun[16] = "です";
    info[13] = "空白0.5秒\nこの列車は";
    info[16] = "です";
  }else{
    arriv_back[9] = "";
    jun[13] = "";
    jun[16] = "";
    info[13] = "";
    info[16] = "";
  }
})

//グリーン車案内 
$("#green_car").change(function(){
  if($("#green_car").prop('checked') == true){
    atos_sentence[9] = "空白0.5秒\nグリーン車がついております";
  }else{
    atos_sentence[9] = "";
  }
});

// 増結・切離し
function add_tr(){
  // 増結選択時
  if($("#add_tr_a").val() === "0"){
    if($("#stop_sta").val() === "93_1"){
      atos_sentence[10] = "空白0.5秒\n当駅で";
      atos_sentence[11] = "";
    }else{
      atos_sentence[10] = "空白0.5秒\n" + buund_for[$("#stop_sta").val()][1];
      atos_sentence[11] = "で";
    }
    atos_sentence[12] = atos_cross[$("#add_tr_b").val()][1];
    atos_sentence[13] = cars[$("#add_tr_c").val()][1];
    atos_sentence[14] = "増結を行います";
    atos_sentence[15] = "";

    // 切離し
  }else if($("#add_tr_a").val() === "1"){
    atos_sentence[10] = "空白0.5秒\nこの列車の";
    atos_sentence[11] = atos_cross[$("#add_tr_b").val()][1];
    atos_sentence[12] = cars[$("#add_tr_c").val()][1];
    atos_sentence[13] = "は";

    if($("#stop_sta").val() === "93_1"){
      atos_sentence[14] = "当駅";
    }else{
      atos_sentence[14] = buund_for[$("#stop_sta").val()][1];
    }
    atos_sentence[15] = "止まりとなります";
    
      // なし
  }else if($("#add_tr_a").val() === "2"){
    for(d=0;d<6;d++){
      atos_sentence[10+d] = "";
    }

  }
}
// 114*184

// 接近用パーツ順序表示
function arriv(){
  list_link = [];
  playlist = [];
  $("#playlist_out").val("");
  // 番線代入
  jun[2] = atos_sentence[0] + "に";
  arriv_back[2] = atos_sentence[0] + "に";
  jun_yuru[2] = atos_sentence[0] + "に";

  // ループで路線愛称から行き先までの音源を自動追加
  for(d=0;d<5;d++){
    jun[4+d] = atos_sentence[1+d];
    arriv_back[12+d] = atos_sentence[1+d];
  }

  // ドア数&両数
  jun[14] = atos_sentence[7];
  jun[15] = atos_sentence[8];
  // グリーン追加
  jun[17] = atos_sentence[9];
  arriv_back[10] = atos_sentence[9];

  // 増解結案内
  add_tr();
  for(d=0;d<6;d++){
    jun[18+d] = atos_sentence[10+d];
  }


  // 行き先
  // 2つ(行き分け)
  if($("[name=bound_set][value=2]").prop('checked')){
    jun[8] = buund_for[bound][1];
    jun[9] = buund_for[bound_2][1];
    jun[10] = "行きが";

    arriv_back[16] = buund_for[bound][1];
    arriv_back[17] = buund_for[bound_2][1];
    arriv_back[18] = "";
  // 単独(非連続)
  }else if($("[name=bound_set][value=1]").prop('checked')){
    jun[8] = buund_for[bound][1];
    jun[9] = "";
    jun[10] = "行きが";
    
    arriv_back[16] = buund_for[bound][1];
    arriv_back[18] = "";
    // 山手用
  }else if($('[name=bound_set][value=3]').prop('checked')){
    jun[8] = buund_for[bound][1];

    for(d=0;d<bound_ga.length;d++){
      if(buund_for[bound_2][1] + "方面行きが" === bound_ga[d][1]){
        jun[9] = bound_ga[d][1];
        jun[10] = "";
        break;
      }else if(d === (bound_ga.length-1) && buund_for[bound_2][1] + "方面行きが" != bound_ga[d][1]){
        jun[9] = buund_for[bound_2][1];
        jun[10] = "方面行きが";
      }
    }

    arriv_back[16] = buund_for[bound][1];
    arriv_back[17] = buund_for[bound_2][1];
    arriv_back[18] = "方面";    
    // 単独(連続)
  }else if($('[name=bound_set][value=0]').prop('checked')){
    jun[8] = buund_for[bound][1];
    jun[9] = "";
    for(d=0;d<bound_ga.length;d++){
      if(buund_for[bound][1] + "行きが" === bound_ga[d][1]){
        jun[8] = bound_ga[d][1];
        jun[10] = "";
        break;
      }else if(d === (bound_ga.length-1) && buund_for[bound][1] + "行きが" != bound_ga[d][1]){
        jun[8] = buund_for[bound][1];
        jun[10] = "行きが";
      }
    }

    arriv_back[16] = buund_for[bound][1];
    arriv_back[18] = "";
  }

  // 通常
  if($('[name=type_2][value=0]').prop('checked')){
    jun[3] = "";
    // jun[4] = atos_sentence[1];
    $("#playlist_out").val(jun.join('\n'));

    // 当駅始発
  }else if($('[name=type_2][value=1]').prop('checked')){
    jun[3] = "当駅始発";
    $("#playlist_out").val(jun.join('\n'));

    // 折り返し
  }else if($('[name=type_2][value=2]').prop('checked')){
    // arriv_back[8] = atos_sentence[1]
    arriv_back[7] = atos_sentence[7];
    arriv_back[8] = atos_sentence[8];
    arriv_back[16] = buund_for[bound][1];
    $("#playlist_out").val(arriv_back.join('\n'));

    // 簡易放送
  }else if($('[name=type_2][value=3]').prop('checked')){
    jun_yuru[3] = "";
    jun_yuru[4] = "";
    jun_yuru[5] = "列車がまいります";
    $("#playlist_out").val(jun_yuru.join('\n'));

    // 種別のみ接近
  }else if($('[name=type_2][value=4]').prop('checked')){
    // 種別
    jun_yuru[5] = "まいります";
    if(atos_sentence[4] == "回送" || atos_sentence[4] == "団体"){
      jun_yuru[3] = atos_sentence[4] + "列車が";
      jun_yuru[4] = "";
      jun_yuru[5] = "まいります";
    }else if(atos_sentence[4] == ""){
      jun_yuru[3] = "";
      jun_yuru[4] = "";
      jun_yuru[5] = "列車がまいります";
    }else{
      jun_yuru[3] = atos_sentence[4]
      jun_yuru[4] = "列車が";
      jun_yuru[5] = "まいります";
    }
    $("#playlist_out").val(jun_yuru.join('\n'));
  }
  atos_mode = 2;
  console.log("atos_mode: " + atos_mode);
}

// 予告用パーツ順序表示
function yokoku(){
  list_link = [];
  playlist = [];
  $("#playlist_out").val("");

  if($('[name=mor_honj][value=0]').prop('checked')){
    info[0] = "おはようございます\n空白0.5秒";
  }else{
    info[0] = "本日も、ご利用いただき、ありがとうございます\n空白0.5秒";
  }
  // 到着前の予告放送
  if($('[name=type_3][value=0]').prop('checked')){
    info[1] = "今度の";
    info[2] = atos_sentence[0] + "の";
    info[3] = "";

    // グリーン
    info[18] = atos_sentence[9];

    //増解結放送追加
    add_tr();
    for(d=0;d<6;d++){
      info[19+d] = atos_sentence[10+d];
    }

    // ドア案内
    if($("#door_car").prop('checked') == true){
      info[13] = "空白0.5秒\nこの列車は";
      // ドア&両数
      info[14] = atos_sentence[7];
      info[15] = atos_sentence[8];
      info[16] = "です";
    }else{
      // 省略
      for(d=0;d<4;d++){
        info[d+13] = "";
      }
    }

    // 出発予告
  }else if($('[name=type_3][value=1]').prop('checked')){
    info[1] = "";
    info[2] = atos_sentence[0] + "に";
    info[3] = "停車中の";
    // 両数案内省略 & 発車待ち案内
    info[13] = "空白0.5秒\n発車まで";
    info[14] = "しばらく";
    info[15] = "お待ちください"
    info[16] = "";
    info[17] = "";
    info[18] = "";

    // 増解結等
    add_tr();
    if($("#stop_sta").val() != "93_1"){
      for(d=0;d<6;d++){
        info[19+d] = atos_sentence[10+d];
      }
    }else{
      for(d=0;d<6;d++){
        info[19+d] = "";
      }
    }
  }

  // ループで路線愛称から行き先までの音源を自動追加
  for(d=0;d<6;d++){
    info[5+d] = atos_sentence[1+d];
  }

  // 行き先info[9], info[10]
  // 2つ(行き分け)
  if($("[name=bound_set][value=2]").prop('checked')){
    info[9] = buund_for[bound][1];
    info[10] = buund_for[bound_2][1];
    info[11] = "";
    // 山手用
  }else if($('[name=bound_set][value=3]').prop('checked')){
    info[9] = buund_for[bound][1];
    info[10] = buund_for[bound_2][1];
    info[11] = "方面";
    // 単独
  }else if($('[name=bound_set][value=0]').prop('checked') || $('[name=bound_set][value=1]').prop('checked')){
    info[9] = buund_for[bound][1];
    info[10] = "";
    info[11] = "";
  }

  // 最終的にセットした予告を、再生リストへ追加
  $("#playlist_out").val(info.join('\n'));
  // 予告放送用モード
  atos_mode = 1;
  console.log("atos_mode: " + atos_mode);
}

// 戸閉放送用
function close_a(){
  // ドア閉放送種別変更
    // ○番線
    if($('[name=atos_door][value=0]').prop('checked')){
      close_atos[0] = bansen_num[bn_num][1];
      for(d=0;d<9;d++){
        close_atos[1+d] = "";
      }
      close_atos[10] = ""
      close_atos[11] = "ドアが閉まります";
    // ○番線の
    }else if($('[name=atos_door][value=1]').prop('checked')){
      close_atos[0] = bansen_num[bn_num][1] + "の";
      for(d=0;d<9;d++){
        close_atos[1+d] = "";
      }
      close_atos[10] = ""
      close_atos[11] = "ドアが閉まります";
      // ○番線 路線愛称 路線名
    }else if($('[name=atos_door][value=2]').prop('checked')){
      close_atos[0] = bansen_num[bn_num][1] + "の";
      close_atos[1] = atos_sentence[1];
      close_atos[2] = train_line[line_num][1];
      for(d=0;d<6;d++){
        close_atos[3+d] = "";
      }
      close_atos[10] = ""
      close_atos[11] = "ドアが閉まります";
  
      // ○番線から "種別" が 発車いたします
    }else if($('[name=atos_door][value=3]').prop('checked')){
      close_atos[0] = bansen_num[bn_num][1] + "から";
      close_atos[1] = "";
      close_atos[2] = "";
      close_atos[3] = "";
      for (let d = 0; d < 3; d++) {
        close_atos[1+d] = "";
      }
      if(atos_sentence[4] === "回送" || atos_sentence[4] === "臨時" || atos_sentence[4] === "団体"){
        close_atos[4] = train_type[kind_num][1] + "列車が";
      }else{
        close_atos[4] = "列車が";
      }
      for (let d = 0; d < 3; d++) {
        close_atos[5+d] = "";
      }
      close_atos[9] = "発車いたします";
      close_atos[11] = "";
  
      // 仙台式
    }else if($('[name=atos_door][value=4]').prop('checked')){
      close_atos[0] = bansen_num[bn_num][1] + "から";
      // 
      for(d=0;d<4;d++){
        close_atos[1+d] = atos_sentence[1+d];
      }
      
      // 2つ(行き分け)
      if($("[name=bound_set][value=2]").prop('checked')){
        close_atos[5] = buund_for[bound][1];
        close_atos[6] = buund_for[bound_2][1];
        close_atos[7] = "";
        close_atos[8] = "行きが";
        
        // 山手用
      }else if($('[name=bound_set][value=3]').prop('checked')){
        close_atos[5] = buund_for[bound][1];
        
        for(d=0;d<bound_ga.length;d++){
          if(buund_for[bound_2][1] + "方面行きが" === bound_ga[d][1]){
            close_atos[6] = bound_ga[d][1];
            close_atos[7] = "";
            break;
          }else if(d === (bound_ga.length-1) && buund_for[bound_2][1] + "方面行きが" != bound_ga[d][1]){
            close_atos[6] = buund_for[bound_2][1];
            close_atos[7] = "方面行きが";
          }
        }
        
  
        // 単独(連続パーツ)
      }else if($('[name=bound_set][value=0]').prop('checked')){
  
        for(d=0;d<bound_ga.length;d++){
          if(buund_for[bound][1] + "行きが" === bound_ga[d][1]){
            close_atos[5] = bound_ga[d][1];
            close_atos[8] = "";
            break;
          }else if(d === (bound_ga.length-1) && buund_for[bound][1] + "行きが" != bound_ga[d][1]){
            close_atos[5] = buund_for[bound][1];
            close_atos[8] = "行きが";
          }
        }
        close_atos[6] = "";
        close_atos[7] = "";
        // 単独パーツ
      }else if($('[name=bound_set][value=1]').prop('checked')){
        close_atos[5] = buund_for[bound][1];
        close_atos[6] = "";
        close_atos[7] = "";
        close_atos[8] = "行きが";
      }
  
      close_atos[9] = "発車いたします";
      close_atos[10] = "空白0.5秒";
      close_atos[11] = "ドアが閉まります";
  
    }
}

$('#arriv').on('click', function(){
  arriv();
});
$("#info").on('click', function(){
  yokoku();
})