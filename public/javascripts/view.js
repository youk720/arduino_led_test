'use strict';

var socket = io();

// 送信ボタンクリック時
// $('#sw').submit(function() {
//   sub_send();
// });
/* 参考サイト
  https://teratail.com/questions/89507
*/
let m = [];
let x = $('input[name=led_select]').change(function(){
  $('input[name=led_select]:checked').each(function(){
    m.push($(this).val());
  });
});

let door_led_status = 0;

function sub_send(){
  socket.emit("sw status", '');
  socket.emit("sw status", m);
}

let melo = $("#melo");
let door = $('#door');

let volume = $("#melo_volume");
let volume_door = $("#door_volume");

//ボリューム数値,元値を100倍して出力
$("#mv_value").html("メロディ用ボリューム" + " 現在:" + Math.round(melo.get(0).volume * 100)/ 10);
//ボリューム数値,元値を100倍して出力
$("#dov_value").html("ドア閉め放送用ボリューム" + " 現在:" + Math.round(door.get(0).volume * 100)/ 10);

//メロディ音源ボリューム制御


$(volume).change(function() {

  let volumeValue = (volume.val().length == 1) ? '0.0' + volume.val() : '0.' + volume.val();

    if (volumeValue === "0.100") {
        melo.get(0).volume = 1;
        $("#mv_value").html("メロディ用ボリューム" + " 現在:" + 100);//ボリューム数値,元値を100倍して出力
    }else{
      melo.get(0).volume = volumeValue;
      $("#mv_value").html("メロディ用ボリューム" + " 現在:" + (volumeValue * 1000)/ 10);//ボリューム数値,元値を100倍して出力
    }

  // $(volume).val(volumeValue);
});

//ドア閉放送ボリューム制御


$(volume_door).change(function() {
  let volumeValue = (volume_door.val().length == 1) ? '0.0' + volume_door.val() : '0.' + volume_door.val();

  if (volumeValue === "0.100") {
    door.get(0).volume = 1;
    $("#dov_value").html("ドア閉め放送用ボリューム" + " 現在:" + 100);
  }else{
  $("#dov_value").html("ドア閉め放送用ボリューム" + " 現在:" +((volumeValue) * 1000)/10);//ボリューム数値,元値を100倍して出力
  door.get(0).volume = volumeValue;
  // $(volume_door).val(volumeValue);
      }
  });

// メロディ & 戸閉放送,再生処理
function on(){
  $(function(){
    melo.get(0).play();
    melo.get(0).loop = true;

    // if(melo.get(0).currentTime != 0){
    //   m.length = 0;
    //   m.push("2");
    //   sub_send();
    // }
    door_led_status = 2;
    console.log("tuda_debug1");
  });
}

function off(){
  $(function (){
    melo.get(0).pause();
    melo.get(0).currentTime = 0;
    melo.get(0).loop = false;


    setTimeout(off_1, 1500);
      function off_1(){
        if(typeof($("#melo").get(0).currentTime) != 'undefined'){
        door.get(0).currentTime = 0;
        }
        door.get(0).play();
        // if(door.get(0).currentTime != door.get(0).duration){
        //   m.length = 0;
        //   m.push("1");
        //   sub_send();
        // }
        door_led_status = 1;
        console.log("tuda_debug5");
      }
  });
}
setInterval(function (){
  if(door.get(0).currentTime != door.get(0).duration && melo.get(0).currentTime != 0){
    m.length = 0;
    m.push("3");
    sub_send();
  }else if(door.get(0).currentTime != door.get(0).duration){
    m.length = 0;
    m.push("1");
    sub_send();
  }else if(melo.get(0).currentTime != 0){
    m.length = 0;
    m.push("2");
    sub_send();
  }

  if(door.get(0).currentTime === door.get(0).duration && melo.get(0).currentTime === 0){
    m.length = 0;
    m.push("-1");
    sub_send();
  }
}, 0.5);

// スイッチ操作の各種処理
// クライアント側クリック用
$('#on').on('click', function(e) {
  //on関数召喚
  on();
});

$('#off').on('click', function (){
  //off関数召喚
    off();
});

// ベルスイッチ用処理

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
