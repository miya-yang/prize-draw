let dataArr = [
  {
    name: '徐弥阳',
    id: 'xumiyang'
  },
  {
    name: '王思聪',
    id: 'wangsicong'
  },
  {
    name: '周杰伦',
    id: 'zhoujielun'
  },
  {
    name: '林俊杰',
    id: 'linjunjie'
  },
  {
    name: '吴磊',
    id: 'wulei'
  },
  {
    name: '吴宣仪',
    id: 'wuxuanyi'
  }
]
//黑名单id
var arr = [];
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
	$(document).keydown(function(e){
	    if(!e) var e = window.event; 
	    if(Number(e.keyCode)===32 && flag == 0){
        if (dataArr.length === arr2.length) {
          alert('所有人均已被抽中')
          return false
        }
        $('#title').html('')
	    	startRan();
	      flag = 1;
	    }else if(Number(e.keyCode)===32 && flag == 1){
	    	stopRan();
	    	flag = 0;
	    }
 	});
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
  document.querySelector('#bgm').load()
  document.querySelector('#bgm').play()
  let len = dataArr.length
	interval = setInterval(function(){
		var ranNumber = random(0,len - 1);
		$("#number").html(dataArr[ranNumber].name);
	},50);
}

function stopRan(){
  document.querySelector('#bgm').pause()
  clearInterval(interval);
  let len = dataArr.length
  var ranNum = random(0,len - 1);
  //存在重复
  while (1) {
    if (arr2.indexOf(dataArr[ranNum].id) > -1) {
      ranNum = random(0, len - 1)
    } else {
      break
    }
  }
  arr2.push(dataArr[ranNum].id);
  $("#number").html(dataArr[ranNum].name);
  $("#title").html(dataArr[ranNum].id);
}

function random(min,max){
	var range = max - min;
	var rand = Math.random();
	var num = min + Math.round(rand * range);
	return num;
}