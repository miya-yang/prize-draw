window.onload = function(){
	setH();
	$("a").click(function(){
		var prize = $(this).html();
		switch(prize){
			case "点我":
				window.localStorage.setItem("prize",prize);
				window.location.href = "draw.html";
				break;
			case "二等奖":
				window.localStorage.setItem("prize",prize);
				window.location.href = "draw.html";
				break;
			case "三等奖":
				window.localStorage.setItem("prize",prize);
				window.location.href = "draw.html";
				break;
			case "查询":
				window.location.href = "query.html";
				break;
		}
	})
}

window.onresize = function(){
	setH();
}

function setH(){
	var clientHeight = $(window).height();
	var a = $("a");
	a.css("height",(clientHeight/2));
	a.css("line-height",(clientHeight/2) + 'px');
}