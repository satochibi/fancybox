$(document).ready(function () {
	$('[data-fancybox]').fancybox({
		// オプションを下記に記載していきます
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
		hideScrollbar: false,
		infobar: true,
		protect: true,
	});
});