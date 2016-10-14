//无法得奖id
var arr = [5778,5811,5881,5937];
//防止重复id
var arr2 = [];
var flag = 0;
var interval = null;
window.onload = function(){
	//读取数组从localStorage
	var p = 0;
	while(1){
		if(window.localStorage.getItem("first" + p) != null){
			arr2.push(window.localStorage.getItem("first" + p));
			p++;
		}else{
			p = 0;
			break;
		}
	}
	while(1){
		if(window.localStorage.getItem("second" + p) != null){
			arr2.push(window.localStorage.getItem("second" + p));
			p++;
		}else{
			p = 0;
			break;
		}
	}
	while(1){
		if(window.localStorage.getItem("third" + p) != null){
			arr2.push(window.localStorage.getItem("third" + p));
			p++;
		}else{
			p = 0;
			break;
		}
	}
	setH();
	var prize = window.localStorage.getItem("prize");
	$("#title").html(prize);
	switch(prize){
		case "一等奖":
			$("#title").attr("title","first");
			break;
		case "二等奖":
			$("#title").attr("title","second");
			break;
		case "三等奖":
			$("#title").attr("title","third");
			break;
	}
	$(document).keydown(function(e){
	    if(!e) var e = window.event; 
	    if(e.keyCode==32 && flag == 0){
	    	startRan();
	        flag = 1;
	    }else if(e.keyCode==32 && flag == 1){
	    	stopRan();
	    	flag = 0;
	    }
 	});
 	$("body").click(function(){
 		if(flag == 0){
	    	startRan();
	        flag = 1;
	    }else if(flag == 1){
	    	stopRan();
	    	flag = 0;
	    }
 	})
}

window.onresize = function(){
	setH();
}

function setH(){
	var clientHeight = $(window).height();
	var num = $("#number");
	num.css("line-height",(2*clientHeight/3) + 'px');
}

function startRan(){
	interval = setInterval(function(){
		var ranNumber = random(1000,9999);
		$("#number").html(ranNumber);
	},10);
}

function stopRan(){
	clearInterval(interval);
	var ranNum = random(5760,5979);
	for(var i = 0;i < arr.length;i++){
		if(ranNum == arr[i]){
			ranNum = random(5760,5979);
			i = -1;
		}else if(ranNum != arr[i] && i == arr.length-1){
			$("#number").html(ranNum);
			//防止重复
			for(var k = 0;k <= arr2.length;k++){
				if(ranNum == arr2[k]){
					ranNum = random(5760,5979);
					k = -1;
				}else if(k == arr2.length){
					arr2.push(ranNum);
					break;
				}
			}
			console.log(arr2);
			var j = 0;
			//保存信息
			while(1){
				if(window.localStorage.getItem($("#title").attr("title") + j) == null){
					window.localStorage.setItem($("#title").attr("title") + j,parseInt($("#number").html()));
					break;
				}else{
					j++;
				}
			}
			break;
		}
	}
}

function random(min,max){
	var range = max - min;
	var rand = Math.random();
	var num = min + Math.round(rand * range);
	return num;
}