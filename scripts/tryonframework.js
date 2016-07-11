// Tryon framework. Developed by Grenville Tryon (gtryonp@hotmail.com). Enjoy it!

//jquery.touch.js
(function (b) { b.support.touch = "ontouchend" in document; if (!b.support.touch) { return; } var c = b.ui.mouse.prototype, e = c._mouseInit, a; function d(g, h) { if (g.originalEvent.touches.length > 1) { return; } g.preventDefault(); var i = g.originalEvent.changedTouches[0], f = document.createEvent("MouseEvents"); f.initMouseEvent(h, true, true, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, false, false, false, false, 0, null); g.target.dispatchEvent(f); } c._touchStart = function (g) { var f = this; if (a || !f._mouseCapture(g.originalEvent.changedTouches[0])) { return; } a = true; f._touchMoved = false; d(g, "mouseover"); d(g, "mousemove"); d(g, "mousedown"); }; c._touchMove = function (f) { if (!a) { return; } this._touchMoved = true; d(f, "mousemove"); }; c._touchEnd = function (f) { if (!a) { return; } d(f, "mouseup"); d(f, "mouseout"); if (!this._touchMoved) { d(f, "click"); } a = false; }; c._mouseInit = function () { var f = this; f.element.bind("touchstart", b.proxy(f, "_touchStart")).bind("touchmove", b.proxy(f, "_touchMove")).bind("touchend", b.proxy(f, "_touchEnd")); e.call(f); }; })(jQuery);

var num=10;

function popup(url, titulo, top, left, height, width) {
	obj = window.top.document.body;
	tab = document.createElement('div');
	tab.id = 'xxx' + num;
	obj.appendChild(tab);
	url = (url == undefined ? '' : url);
	titulo = (titulo == undefined ? url : titulo);
	top = (top == undefined ? 0 : top);
	left = (left == undefined ? 0 : left);
	height = (height == undefined ? screen.height : height);
	width = (width == undefined ? screen.width : width);
	window.top.document.getElementById("xxx" + num).style.position = "absolute";
	window.top.document.getElementById("xxx" + num).style.background = "#ccc";
	window.top.document.getElementById("xxx" + num).style.left = left + "px";
	window.top.document.getElementById("xxx" + num).style.top = top+ "px";
	window.top.document.getElementById("xxx" + num).style.height = height+ "px";
	window.top.document.getElementById("xxx" + num).style.width = width + "px";
	window.top.document.getElementById("xxx" + num).style.borderRadius  = "0px 0px 5px 5px";
	window.top.document.getElementById("xxx" + num).style.overflow = "hidden";
	window.top.document.getElementById("xxx" + num).style.boxShadow = "5px 5px 10px black";
	window.top.document.getElementById("xxx" + num).style.zIndex = num + 1;
	window.top.document.getElementById("xxx" + num).onclick = function () { for (k = 0; k < num; k++) { if (window.top.document.getElementById("xxx" + k)) window.top.document.getElementById("xxx" + k).style.zIndex = 1; }; this.style.zIndex = 2; };
	window.top.document.getElementById("xxx" + num).ondblclick = function () { cual=$(this).attr("id").substring(3); minipopup(cual); }; 
	valor = "";
	valor = valor + "<div id='win_" + num + "' class='ui-widget ui-state-default my_window'  style='abackground:linear-gradient(to right, #800 , #f00);font-family:calibri !important;font-size:18px !important;text-align:left;font-weight:bold !important;padding-top:0px;padding-left:0%;height:28px;acolor:#fff;overflow:hidden;' title='"+titulo+"'>" + titulo + "<div style='margin:0px;padding=0px;float:right;height:28px;width:56px;'><input type='button' class='w_botones'  style='height:28px;width:28px;font:bold 16px verdana;background:linear-gradient(#ddd, #666);color:#fff;' onclick='minipopup(" + num + ")' value='_' title='Minimizar'><input id='x_" + num + "'  class='w_botones' type='button' style='height:28px;width:28px;font:bold 16px verdana;background:linear-gradient(#ddd, #666);color:#fff;' onclick='cerrarpopup(" + num + ")' value='X' title='Cerrar' ></div><div id='adm_" + num + "'  style='cursor:pointer;float:right;height:28px;width:1px;overflow:hidden;' ondblclick='probar(" + num + ")'></div></div>";
	valor = valor + "<div style='clear:both'></div><div><iframe name='ixxx" + num + "' id='ixxx" + num + "' src='" + url + "' height='" + (height-30) + "' width='" + (width) + "' frameborder='0' style='background:#fff;padding:0px;margin:0px;'></iframe></div>";
	window.top.document.getElementById("xxx" + num).innerHTML = valor;
	$("#xxx" + num).resizable({start: function() {
		cual=$(this).attr("id").substring(3);	
		window.top.document.getElementById("xxx" + cual).style.backgroundColor="#aaa";
		window.top.document.getElementById("ixxx" + cual).style.display="none";
		}, stop: function() {
		cual=$(this).attr("id").substring(3);	
		window.top.document.getElementById("xxx" + cual).style.backgroundColor="#ccc";
		window.top.document.getElementById("ixxx" + cual).style.display="inline";
		} ,resize: function() {
		cual=$(this).attr("id").substring(3);	
		$(this).height(($(this).height()<30 ? 30 : $(this).height()) );
		$(this).width(($(this).width()<200 ? 200 : $(this).width()) );
		window.top.document.getElementById("xxx" + cual).height=$(this).height()-40;
		window.top.document.getElementById("xxx" + cual).width=$(this).width();
		window.top.document.getElementById("ixxx" + cual).height=$(this).height()-40;
		window.top.document.getElementById("ixxx" + cual).width=$(this).width();
		cualid = window.top.document.getElementById("xxx"+cual);
		$("#adm_"+cual).html((parseInt(cualid.style.top)+"."+parseInt(cualid.style.left)+"."+parseInt(cualid.style.height)+"."+parseInt(cualid.style.width)).replace(/px/gi,''));
		$("#adm_"+cual).attr("title",(parseInt(cualid.style.top)+"."+parseInt(cualid.style.left)+"."+parseInt(cualid.style.height)+"."+parseInt(cualid.style.width)).replace(/px/gi,''))
		}} ).draggable({ stop: function (event, ui) {
		cual=$(this).attr("id").substring(3);
		if (ui.position.top < 0) { $("#xxx"+cual).animate({ top: '0' }, 100); };
		if (ui.position.left < 0) { $("#xxx"+cual).animate({ left: '0' }, 100);};
		for (k = 0; k < num; k++) { 
			if (window.top.document.getElementById("xxx" + k)) {
				window.top.document.getElementById("xxx" + k).style.zIndex = 1; 
			}
		}; 
		if(cualid.style.height!="30px")	{
			$("#adm_"+cual).html((parseInt(cualid.style.top)+"."+parseInt(cualid.style.left)+"."+parseInt(cualid.style.height)+"."+parseInt(cualid.style.width)).replace(/px/gi,''));
			$("#adm_"+cual).attr("title",(parseInt(cualid.style.top)+"."+parseInt(cualid.style.left)+"."+parseInt(cualid.style.height)+"."+parseInt(cualid.style.width)).replace(/px/gi,''))
		};
		this.style.zIndex = 2; 
		cualid = window.top.document.getElementById("xxx"+cual);
	},iframeFix: true
	});	
	cualid = window.top.document.getElementById("xxx"+num);
	$("#adm_"+num).html((parseInt(cualid.style.top)+"."+parseInt(cualid.style.left)+"."+parseInt(cualid.style.height)+"."+parseInt(cualid.style.width)).replace(/px/gi,''));
	$("#adm_"+num).attr("title",(parseInt(cualid.style.top)+"."+parseInt(cualid.style.left)+"."+parseInt(cualid.style.height)+"."+parseInt(cualid.style.width)).replace(/px/gi,''))
	num++;
	$(".w_botones").mouseover(function() { $(this).css({"background":"linear-gradient(#aaa, #000)"}) }).mouseout(function() { $(this).css({"background":"linear-gradient(#ddd, #666)"}) }); 
	return (num-1);
}

function cerrarpopup(cual) {    
	contenedor = "xxx"+cual;
	cualid = top.document.getElementById(contenedor);
	top.document.body.removeChild(cualid);
}


function minipopup(cual)	{
	contenedor = "xxx"+cual;
	cualid = top.document.getElementById(contenedor);
	if(cualid.style.height=="30px")	{
		cualid.style.height=$("#adm_"+cual).html().split('.')[2]+"px";
		cualid.style.width=$("#adm_"+cual).html().split('.')[3]+"px";		
		cualid.style.top=$("#adm_"+cual).html().split('.')[0]+"px";
		cualid.style.left=$("#adm_"+cual).html().split('.')[1]+"px";
	} else {
		cualid.style.height="30px";
		cualid.style.width="250px";
	};
	posx=0;
	posy=0;
	$(".my_window").each(function() {
		var actualnum=$(this).attr("id").split('_')[1];
		//console.log($(this).attr("id").split('_')[1]+" -> "+$("#xxx" + actualnum).height());
		if($("#xxx" + actualnum).height()>=29 && $("#xxx" + actualnum).height()<=31)	{
			window.top.document.getElementById("xxx" + actualnum).style.top = posx+ "px";
			window.top.document.getElementById("xxx" + actualnum).style.left = posy+"px";
			posy+=250;
			console.log(posy+250+" - "+$("body").width())
			if(posy+250>$("body").width())	{
				posx+=30;
				posy=0;
			}
		}
	})
}
