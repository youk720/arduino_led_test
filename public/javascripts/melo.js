'use strict';

// 初期定義
let melo = new Audio("");
let melo_noiz = new Audio("/Users/yuki_tajima/vagrant/ubuntu64_16/workspace/python/test_web/elec_tron/src/melo/noiz_melo.mp3");
melo_noiz.volume = 0.13;

// メロディ(セレクトタブからの選曲時の処理)
$("#melo_select").change(function(){
  melo.src = $("#melo_select").val();
  console.log("now melody: " + melo.src);
});

// メロディ&ドア閉処理(手動入力時の処理)
$('#custam_sw').on('click', function(){
  // 手動入力のところが未入力の時の処理
  if ($("#melo_input").val() != "") {
    // セレクトタブで選択されているものを入れる
    melo.src = $("#melo_input").val();
  }else{
    // 手動入力されたものを入れる
    melo.src = $("#melo_select").val();
  }
  // リンク切り替えのデバッグ処理
  // console.log("now melody: " + melo.src);
});

// リンク部削除
$("#melo_url_del").on('click', function(){
  $("#melo_input").val("");
})

melo.volume = 0.5; //ボリューム初期設定値
// door.volume = 0.5; //ボリューム初期設定値
//ボリューム数値,元値を100倍して出力
$("#mv_value").html("メロディ用ボリューム" + " 現在:" + Math.floor(melo.volume * 100));
// ボリューム数値,元値を100倍して出力
$("#smoking_value").html("禁煙音源ボリューム" + " 現在:" + Math.floor(atos_volume * 100));

// off操作時の禁煙放送停止して、ドア閉め放送再生する処理の関数を定義。
function off_1(){
  // off操作時の禁煙放送停止

  // ドア閉め用atos起動
  close_a();
  // 戸閉ATOS再生処理
  if (atos_mode != 2) {
    atos1.pause();
    atos2.pause();
    list_link = [];
    playlist = [];
    $("#playlist_out").val("");
    $("#playlist_out").val(close_atos.join('\n'));
    soundnum = 0;
    check_sound();
    atos_mode = 3;
  }
  
}


// on操作時の処理を関数定義
function on(){
  $(function(){
    
    melo.play();
    melo.loop = true;
    melo_mode = 1;
    console.log("melody's loop is " + melo.loop);
    if($("#noiz_check").prop('checked')){
      melo_noiz.play();
      melo_noiz.loop = true;
      
    }
  })
}

//off関数を新たに定義しました。しとかないとoffクリックしたり,dキークリックした時の処理文が長くなってめんどくなる
function off(){
    //以下は通常モードの処理
    if($('[name=sw_mode][value=0]').prop('checked')){
      melo.pause();
      melo.currentTime = 0;
      melo.loop = false;
      melo_noiz.pause();
      melo_noiz.currentTime = 0;
      melo_mode = 0;

      melo_noiz.loop = false;
      setTimeout(off_1, 1780);

      console.log("melody's loop is " + melo.loop);
    }
    //以下は立川モードの処理
    else if($('[name=sw_mode][value=1]').prop('checked')){
      melo.loop = false;
      setTimeout(off_1, 200);
      // door.play();
      console.log("melody's loop is " + melo.loop);
    }
    // 別モード
    else if($('[name=sw_mode][value=2]').prop('checked')){
      melo.loop = false;
      console.log("melody's loop is " + melo.loop);
    }
  // $("#on").removeClass().addClass("btn btn-danger btn-lg  text-center");
}

// メロディが流れ終わってからの処理
$(melo).on("ended", function(){
    melo_noiz.pause();
    melo_noiz.currentTime = 0;
    melo_mode = 0;
    melo_noiz.loop = false;

    // 別モード用
  if ($('[name=sw_mode][value=2]').prop('checked')) {
    setTimeout(off_1);
  }
  // 仙台式選択時に、メロディ終了後に駆け込み防止放送再生
  if($('[name=atos_door][value=4]').prop('checked')　&& over === true){
    list_link = [];
    playlist = [];
    $("#playlist_out").val("");
    $("#playlist_out").val("駆け込み乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n無理なご乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n駆け込み乗車は\nおやめください\n空白0.5秒\n空白0.5秒\n無理なご乗車は\nおやめください");
    soundnum = 0;
    check_sound();
  }
});

//戸閉放送流れてる時にonを押したら止める処理の関数定義
// function on_door(){
//     if($('[name=on_mode][value=0]').prop('checked')){
//       return;
//     };
//     if($('[name=on_mode][value=1]').prop('checked')){
//       // 禁煙放送強制停止
//       stop_atos();
//     }
// }

// メロディの再生時間と、合計時間表示
function time(){
  $(function (){
    setInterval(function(){
      let m = ('0' + Math.floor( melo.currentTime / 60 )) .slice( -2 );
      let s = ( '0' + Math.floor( melo.currentTime % 60 )) .slice( -2 );
      let dm = ( '0' + Math.floor( melo.duration / 60 ) ) .slice( -2 );
      let ds = ( '0' + Math.floor( melo.duration % 60 ) ) .slice( -2 );
      $("#time").html(m + ":" + s + " / " + dm + ":" + ds);

    }, 100);
  });
}
// $(melo).on('play', function(){
//   time();
// });
time()
// $(melo.src).change(function(){
//   time();
// })

function smoking(){
  list_link = [];
  playlist = [];
  $("#playlist_out").val("禁煙放送");
  soundnum = 0;
  check_sound()
}



$('#smoking').on('click', function(f){
  smoking();
});
$('body').on("keydown", function(k){
  if(k.keyCode === 88){
      smoking();
    }
});

$('#on').on('click', function(e) {
  //on関数召喚
  on();
  on_door()
});
$('body').on("keydown", function(e) {
if(e.keyCode === 69) {
  //69キー=Eキー off関数召喚
  on();
  }
});
$('#off').on('click', function (){
  //off関数召喚
    off();
});
$('body').on("keydown", function (m){
  if(m.keyCode === 68){
    //68 = dキー off関数召喚
    off();
  }
});

// ボタン押した時
$("#first_off").mousedown(function(){
  on();
});

// ボタン離した瞬間　
$("#first_off").mouseup(function(){
  melo.loop = false;
  setTimeout(() => {
    off_1();
  }, 10000);
})


//メロディ音源ボリューム制御
let volume = $("#melo_volume");
$(volume).change(function() {

  let volumeValue = (volume.val().length == 1) ? '0.0' + volume.val() : '0.' + volume.val();

    if (volumeValue === "0.100") {
        melo.volume = 1;
        $("#mv_value").html("メロディ用ボリューム" + " 現在:" + 100);//ボリューム数値,元値を100倍して出力
    }else{
      melo.volume = volumeValue;
      $("#mv_value").html("メロディ用ボリューム" + " 現在:" + (volumeValue * 1000)/ 10);//ボリューム数値,元値を100倍して出力
    }

  // $(volume).val(volumeValue);
});
// 禁煙放送ボリューム制御
let volume_smoking = $("#smoking_volume");
$(volume_smoking).change(function(){
  let volumeValue = (volume_smoking.val().length === 1) ? '0.0' + volume_smoking.val() : '0.' + volume_smoking.val();
  if(volumeValue === "0.100"){
    atos_volume = 1;
    $("#smoking_value").html("禁煙音源ボリューム" + " 現在:" + 100);
  }else{
    $("#smoking_value").html("禁煙音源ボリューム" + " 現在:" + ((volumeValue) * 1000)/10);
    //ボリューム数値,元値を100倍して出力
    atos_volume = volumeValue;
  }
});

var bell_status = 1;
var door_status = 1;


// arduino側からのスイッチ操作
setInterval(function(){
  // $('#sw_now').change(function() {
    if (bell_status === 1 && $('#sw_now').text() === "True"){
        on();
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