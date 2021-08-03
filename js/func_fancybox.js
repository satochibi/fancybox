$(document).ready(function () {
	$('[data-fancybox]').fancybox({
		buttons: [
			"print",
			"zoom",
			//"share",
			//"slideShow",
			//"fullScreen",
			"download",
			"thumbs",
			"close"
		],
		thumbs: {
			autoStart: true,   // オープニングにサムネイルを表示する
			hideOnClose: true,     // 閉じるアニメーションの際にサムネイルグリッドを非表示にする
		},
		transitionEffect: "fade",
		transitionDuration: 0,
		animationEffect: "fade",
		animationDuration: 366,
		hideScrollbar: false,
		infobar: true,
		protect: true,
	});
});