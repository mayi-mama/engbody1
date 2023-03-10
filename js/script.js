$(function(){
	/*スクールするとボタンがでる*/
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$('header').addClass('header--active');
		}else{
			$('header').removeClass('header--active');
		}

	});

	/*スクロールエフェクト*/
	function fadeUpEffect(){

	$('.fadeUpEffect').each(function(){ 
	  var elemPos = $(this).offset().top + 100;
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
	  $(this).addClass('fadeUp');
	  }
	  });
  }
	$(window).scroll(function (){
	  fadeUpEffect();
	});

	/*タブの切り替え*/
	$('.tab').on('click', function() {
		$('.tab--active').removeClass('tab--active');
		$(this).addClass('tab--active');
		var index = $('.tab').index(this);
		$('.tab-content').eq(index).addClass('tab--active');
	  });

	/*swiper*/
	const loop = new Swiper(".swiper", {
		 loop: true,
		pagination: {
			el: ".swiper-pagination"
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev"
			}
		});
	/*スクロールボタン*/
	$('.price-list').scroll(function(){
		if($(this).scrollLeft() > 20){
			$('.price-list__scroll').fadeOut();
		}
	});
	/*FAQのアコーディオン*/
	$('.accordion__question').click(function(){
		$(this).next('.accordion__answer').slideToggle(200);

	});

	/*ページトップに戻る*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
		  $('.page-top').fadeIn();
		} else {
		  $('.page-top').fadeOut();
		}
	  });
	  $('.page-top').on('click', function () {
		$('body,html').animate({
		  scrollTop: 0
		}, 200);
		return false;
	  });
});

/*背景が伸びてテキストが表示される*/
// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

    // 背景色が伸びて出現（左から右）
	$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
		}else{
			$(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
		}
	});	

   // 文字列を囲う子要素
	$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
		}else{
			$(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
		}
	});		
}

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


/**/