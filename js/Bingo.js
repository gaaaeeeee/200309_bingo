var start = false;  //スタートボタンのフラグ
var times = 0;  //番号を引いた回数
var shuffleId;  //setInterval用の変数
var nums = [];  //ビンゴ用の番号を格納する配列

for(i=1; i<=75; i++) {  //1～75までの番号を配列に追加
  nums.push(i);
}

//配列の中身をランダムに並び替え
var narabikae = function() {return Math.random()-.5};
nums.sort(narabikae);

//配列から値を取り出して#numに表示
function bingo(){
  var i = nums[times];
  $('#num').text(i);
  $('#num2').append('<li>' + i + '</li>');
  times ++;
  console.log(times)
}

//STARTボタンを押した後のシャッフルシーン用
function shuffle(){
  shuffleId = setInterval(function(){
    var randomNum = 10 + Math.floor( Math.random() * 90 );
    $('#num').text(randomNum);
  }, 30);
}


$(function(){
  //ボタン押下時のイベント
  $('#button').on('click', function() {

    //74回目まで、スタートボタンをストップボタンに切り替え
    if(start == false && times <= 74) {
      $(this).text('STOP');
      shuffle();
      start = true;

    //74回目まで、ストップボタンをスタートボタンに切り替え
    } else if(times < 74){
      $(this).text('START');
      clearInterval(shuffleId);
      bingo();
      start = false;

    //75回目（最後）のシャッフル時のボタン処理
    } else if(start == true && times == 74){
      $(this).text('END');
      clearInterval(shuffleId);
      bingo();
    }
  });
});
