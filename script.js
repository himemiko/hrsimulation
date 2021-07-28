$(function(){
  $('.btn').click(function() {
    calc();
  });
});
function calc() {
  //グラフの縦軸
  var ver1 = $('input[name="firQ"]:checked').val(),//ラジオボタンの値取得
      ver2 = $('input[name="secQ"]:checked').val(),
      ver3 = $('input[name="thiQ"]:checked').val(),
      ver4 = $('input[name="forQ"]:checked').val(),
      ver5 = $('input[name="fifQ"]:checked').val(),
      ver6 = $('input[name="sixQ"]:checked').val();
  //グラフの横軸
  var hor1 = $('input[name="sevQ"]:checked').val(),//ラジオボタンの値取得
      hor2 = $('input[name="eigQ"]:checked').val(),
      hor3 = $('input[name="ninQ"]:checked').val(),
      hor4 = $('input[name="tenQ"]:checked').val(),
      hor5 = $('input[name="eleQ"]:checked').val(),
      hor6 = $('input[name="tweQ"]:checked').val();
  //jqueryのレスポンシブ対応
  var winSize = $(window).width();//ウィンドウサイズ取得

  var cnt = 0;//初期値
  if (ver1) {//グラフの縦軸計算
    cnt += Number(ver1);
  } else {
    cnt += 0;
  }
  if (ver2) {
    cnt += Number(ver2);
  } else {
    cnt += 0;
  }
  if (ver3) {
    cnt += Number(ver3);
  } else {
    cnt += 0;
  }
  if (ver4) {
    cnt += Number(ver4);
  } else {
    cnt += 0;
  }
  if (ver5) {
    cnt += Number(ver5);
  } else {
    cnt += 0;
  }
  if (ver6) {
    cnt += Number(ver6);
  } else {
    cnt += 0;
  }

  if (winSize > 768) {//ウィンドウサイズによってピクトさん位置調整
    cnt *= 15.5;
  } else if (winSize > 480) {
    cnt *= 13;
  } else {
    cnt *= 8;
  }


  var cnt2 = 0;//初期値
  if (hor1) {//グラフの横軸計算
    cnt2 += Number(hor1);
  } else {
    cnt2 += 0;
  }
  if (hor2) {
    cnt2 += Number(hor2);
  } else {
    cnt2 += 0;
  }
  if (hor3) {
    cnt2 += Number(hor3);
  } else {
    cnt2 += 0;
  }
  if (hor4) {
    cnt2 += Number(hor4);
  } else {
    cnt2 += 0;
  }
  if (hor5) {
    cnt2 += Number(hor5);
  } else {
    cnt2 += 0;
  }
  if (hor6) {
    cnt2 += Number(hor6);
  } else {
    cnt2 += 0;
  }

  if (winSize > 768) {//ウィンドウサイズによってピクトさん位置調整
    cnt2 *= 23;
  } else if (winSize > 480) {
    cnt2 *= 17;
  } else {
    cnt2 *= 8.5;//小数点をエンコードできないためdiagnosis.htmlに送ってから計算
  }
  //計算結果をパラメータに渡す
  window.open('./diagnosis.html?cnt=' + encodeURIComponent(cnt) + '&cnt2=' + encodeURIComponent(cnt2), '_self');
  // window.open('./diagnosis.html?cnt=' + encodeURIComponent(cnt) + '&cnt2=' + encodeURIComponent(cnt2), '_blank');
}
