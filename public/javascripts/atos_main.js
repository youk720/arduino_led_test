'use strict';

// socket起動
var socket = io();

// socket.ioで文字列の格納
let m = [];
let x = $('input[name=led_select]').change(function(){
  $('input[name=led_select]:checked').each(function(){
    m.push($(this).val());
  });
});
// arduinoへledの光らせ方を送るもの
function sub_send(){
  socket.emit("sw status", '');
  socket.emit("sw status", m);
}
// ラズパイledの光らせ方を指示
let door_led_status = 0;

// arduinoのled光らせ用のフラグ
let atos_flug = 0;
let melo_mode = 0;

// ledの光らせ方の指示を周期的に
setInterval(function (){
  // メロディ再生中かつドア閉放送再生中に光らせる場合
  if(atos_flug == 1 && melo_mode == 1){
    m.length = 0;
    m.push("3");
    sub_send();
  // ドア閉め放送のみ再生中
}else if(atos_flug == 1 /* || sm_vi.currentTime != 0 */){
    m.length = 0;
    m.push("1");
    sub_send();
    // メロディのみ再生中
  }else if(melo_mode == 1){
    m.length = 0;
    m.push("2");
    sub_send();
  }
  // 再生されていない時
  if((atos_flug == 0 && melo_mode == 0)/* || (sm_vi.currentTime === 0)*/){
    m.length = 0;
    m.push("-1");
    sub_send();
  }
}, 0.5);

// swページからjsonを読み取ってスイッチ入ったかの反応処理
$(document).ready(function () {
  setInterval(function(){
    $.getJSON("/sw", function(data){
      $("#sw_now").html(data.sw);
    });
  }, 10);
});

var bell_status = 1;
var door_status = 1;
// arduino側からのスイッチ操作
setInterval(function(){
// $('#sw_now').change(function() {
  if (bell_status === 1 && $('#sw_now').text() === "True"){
      on();
      on_door();
      // console.log("ON");
      $("#on").removeClass().addClass("btn btn-danger btn-lg  text-center");
      $("#off").removeClass().addClass("btn btn-default btn-lg  text-center");
      bell_status = 0;
      door_status = 1;

  };
  if(door_status === 1 && $('#sw_now').text() === "False"){
      $("#on").removeClass().addClass("btn btn-default btn-lg");
      $("#off").removeClass().addClass("btn btn-success btn-lg");
      off();
      // console.log("OFF");
      bell_status = 1;
      door_status = 0;
  };
}, 10);



// 音声定義
let atos1 = new Audio();
let atos2 = new Audio();
let atos_noiz = new Audio("./sound/voicetext/noiz_2.mp3");
let arriv_melo = new Audio("./sound/voicetext/接近メロディ_4.mp3");
atos_noiz.volume = 0.7;
let atos_volume = 1;

// テキストボックス入力値代入
let playlist = [];
// チェック後,URL貼り付け用
let list_link = [];

$("#playlist_out").change(function(){
  list_link = [];
  playlist = [];
})

function add_playlist(){
  let old_val = $("#playlist_out").val();
  $("#playlist_out").val(old_val +$("#all_parts option:selected").text()+'\n')
}


// 音源が実際に存在するかどうか、確認
function check_sound(){

  // すでにチェックが済んでいる場合、直接再生させる
  if (list_link.length != 0) {
    console.log("clear");
    setTimeout(sound_start, 1000);

  // 音源チェック
  }else{
    // 再生リストを入れる
    playlist = $("#playlist_out").val().split('\n');
    // チェック審査用フラグ
    let check_flag = false;
    let check_flag_2 = true;
    let out_sound = [];
    // プレイリスト内でチェック
    for (let i = 0; i < playlist.length; i++) {
      // atosの音源管理リストから、一致する音源を探す
      for (let t = 0; t < atos.length; t++) {
        // atosリストと、再生リストが一致の場合
        if (playlist[i] === atos[t][1]) {
          check_flag = true;
          // チェック後の再生リストへ、音源用リンクを貼る
          list_link.push(atos[t][0]);
          break;
          
        }else if(playlist[i] === ""){
          break;
        }
      // console.log(list_link[i]);
      }
      // 音源が該当しなければ
      if (check_flag === false) {
        out_sound.push(playlist[i]);
      }
    }
    // フラグ審査
    if (out_sound.length != 0) {
      alert("定義されていない音源があります\n"+ out_sound + "は、音源管理ファイルにありません");
      // 完了後,時間をおいて再生開始
    }else{
      console.log("clear");
      setTimeout(sound_start, 1000)
    }
    console.log(list_link);
  }
}

// 再生順番、初期定義
let soundnum = 0;
// atos終了定義
let over = false;

// 音声再生枠
function sound_start(){
  atos_flug = 1;
  over = false;
  // 再現ノイズ
  // atos_noiz.play();
  // atos_noiz.loop = true;
  
  // 最初の時の処理
   if (soundnum === 0) {
    stop_atos();
    //  リンク定義
    atos1 = new Audio(list_link[soundnum]);
    atos1.play();
    console.log("src1: " + list_link[soundnum]);
    atos1.volume = atos_volume;
    // 偶数順番
  }else if (soundnum % 2 === 0) {
    atos1.play();
    atos1.volume = atos_volume;
    // 奇数順番
  }else{
    atos2.play();
    atos2.volume = atos_volume;
  }
  // 順番の数字が、チェック済みの再生パーツ数より多くなるまで
  if(soundnum < list_link.length-1){
    console.log(soundnum);
    // 奇数順番時
    if(soundnum % 2 === 1){
      // 音源再生終了後、リンク定義&順番を進める
      $(atos2).on('ended', function(){
        soundnum++;
        console.log("src1: " + list_link[soundnum]);
        atos1 = new Audio(list_link[soundnum]);
        // console.log("src1: " + atos1.src);
        
        // 次の音源を再生させる
        nextsound();
      });
      // 偶数順番時
    }else{
      $(atos1).on('ended', function(){
        soundnum++;
        console.log("src2: " + list_link[soundnum]);
        atos2 = new Audio(list_link[soundnum]);
        // console.log("src2: " + atos2.src);
        nextsound();
     });
    }
    
   }else{
     // 接近メロディ再生用ループ設置
     if (atos_mode == 2) {
      setTimeout(function(){
        arriv_melo.currentTime = 0;
        // arriv_melo.play();
        arriv_melo.loop = true;
      }, 4500);
     }
    //  奇数で終わる場合
    // ledを光らせなくする
     if(list_link.length % 2 === 1){
      setTimeout(function(){
        atos_flug = 0;
      }, atos2.duration);
     }else{
       setTimeout(function(){
        atos_flug = 0;
       }, atos1.duration);
     }
    //  atos_noiz.loop = false;
     console.log("over");
     over = true;
     atos_mode = 0;
     console.log("atos_mode: " + atos_mode);
   }
  //  atos_noiz.loop = false;
}

// 次音源再生開始用の関数処理
function nextsound() {
  sound_start();
}
// クリア操作
$("#clear").on('click', function(){
  playlist = []
  list_link = []
  $("#playlist_out").val("");
  
});

$('#atos_start').on('click', function(){
  soundnum = 0;
  check_sound();
})

function stop_atos(){
  atos1.loop = false;
  atos1.pause();
  atos2.loop = false;
  atos2.pause();
  arriv_melo.pause();
  arriv_melo.loop = false;
}

// 途中停止処理
$("#atos_stop").on('click', function(){
  stop_atos();
})

