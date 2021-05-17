jQuery(function($){
	var _window = $(window),
		_header = $('.site-header'),
		heroBottom,
		startPos,
		winScrollTop;
	
	_window.on('scroll',function(){
		winScrollTop = $(this).scrollTop();
		heroBottom = $('.top').height();
		if (winScrollTop >= startPos) {
			if(winScrollTop >= heroBottom){
				_header.addClass('hide');
			}
		} else {
			_header.removeClass('hide');
		}
		startPos = winScrollTop;
	});
	
	_window.trigger('scroll');	
});	

var px_change = 1;
// スクロールのイベントハンドラを登録
window.addEventListener('scroll', function(e) {
  // 変化するポイントまでスクロールしたらクラスを追加
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if ( scrollTop > px_change ) {
    document.getElementById( "btn-backtotop" ).classList.add( "fadein" );

  // 変化するポイント以前であればクラスを削除
  } else {
    document.getElementById( "btn-backtotop" ).classList.remove( "fadein" );
  }
});

/* ========================================================
トップに戻るボタンのスムーズスクロール
=========================================================*/

document.getElementById( "btn-backtotop" ).addEventListener('click', function(e) {
  anime.remove("html, body");
  anime({
    targets: "html, body",
    scrollTop: 0,
    dulation: 600,
    easing: 'easeOutCubic',
  });
  return false;
});


