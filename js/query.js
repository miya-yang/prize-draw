$(function(){
	//一等奖存在
	var html = "<h2>一等奖</h2>";
	var i = 0;
	while(1){
		//进行循环写入
		if(window.localStorage.getItem("first" + i) != null){
			html += "<p>" + window.localStorage.getItem("first" + i) + "</p>";
			i++;
		}else{
			if(i == 0){
				html += "<p>暂无数据</p>";
			}
			i = 0;
			break;
		}
	}
	html += "<h2>二等奖</h2>";
	//二等奖存在
	while(1){
		//进行循环写入
		if(window.localStorage.getItem("second" + i) != null){
			html += "<p>" + window.localStorage.getItem("second" + i) + "</p>";
			i++;
		}else{
			if(i == 0){
				html += "<p>暂无数据</p>";
			}
			i = 0;
			break;
		}
	}
	html += "<h2>三等奖</h2>";
	//三等奖存在
	while(1){
		//进行循环写入
		if(window.localStorage.getItem("third" + i) != null){
			html += "<p>" + window.localStorage.getItem("third" + i) + "</p>";
			i++;
		}else{
			if(i == 0){
				html += "<p>暂无数据</p>";
			}
			break;
		}
	}
	$("#table").append(html);

	//重置按钮
	$("#reset").click(function(){
		if(confirm("真的要重置数据吗？")){
			var i = 0;
			while(1){
				if(window.localStorage.getItem("first" + i) != null){
					window.localStorage.removeItem("first" + i);
					i++;
				}else{
					i = 0;
					break;
				}
			}
			while(1){
				if(window.localStorage.getItem("second" + i) != null){
					window.localStorage.removeItem("second" + i);
					i++;
				}else{
					i = 0;
					break;
				}
			}
			while(1){
				if(window.localStorage.getItem("third" + i) != null){
					window.localStorage.removeItem("third" + i);
					i++;
				}else{
					break;
				}
			}
			history.go(0);
		}
	});
})