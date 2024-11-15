/*
Romart Mobile Framework
JavaScript-Library
(c) ROMART, 2012-2013
http://romart.ua

function $
	ShowHideMenu()
	ShowHideSubMenu()
	ShowHide($id_elem)
	Show($id_elem)
	Hide($id_elem)
*/

var rmf_cnst_w = window,
    rmf_cnst_d = document,
    e = rmf_cnst_d.documentElement,
    g = rmf_cnst_d.getElementsByTagName('body')[0],
    // viewport sizes
    rmf_cnst_x = rmf_cnst_w.innerWidth || e.clientWidth || g.clientWidth,
    rmf_cnst_y = rmf_cnst_w.innerHeight|| e.clientHeight|| g.clientHeight;
	//console.log(rmf_cnst_x + ' × ' + rmf_cnst_y);


function $(div){
	return content.document.getElementById(div);
}

function addEvent(elem,evType,call) {
     if(elem.addEventListener) {  
        elem.addEventListener(evType, call, false);
     } else if(elem.attachEvent) {  
        elem.attachEvent('on' + evType, call); 
     }                
}

function ShowHideMenu() {

    ShowHide("rmf_menu_sf");

    if (document.getElementById("rmf_submenu_sf").style.getPropertyValue("display")=='block') {
        document.getElementById("rmf_submenu_sf").style.visibility='hidden';
        document.getElementById("rmf_submenu_sf").style.display='none';
        document.getElementById("btn_submenu").style.background="rgb(0, 47, 61)";
    } 
    /* 
    if (document.getElementById("btn_menu").style.getPropertyValue("background")=="rgb(0, 47, 61)") {    
        document.getElementById("btn_menu").style.background="rgb(0, 145, 77)";
        
    } else {
        document.getElementById("btn_menu").style.background="rgb(0, 47, 61)";
    }
    */
}

function ShowHideSubMenu() {
    ShowHide("rmf_submenu_sf");
    if (document.getElementById("rmf_menu_sf").style.getPropertyValue("display")=='block') {
        document.getElementById("rmf_menu_sf").style.visibility='hidden';
        document.getElementById("rmf_menu_sf").style.display='none';
    }
    if (document.getElementById("btn_submenu").style.getPropertyValue("background")=="rgb(0, 47, 61)") {    
        document.getElementById("btn_submenu").style.background="rgb(0, 145, 77)";
    } else {
        document.getElementById("btn_submenu").style.background="rgb(0, 47, 61)";
    } 
}

function ShowHide($id_elem) {
    if (document.getElementById($id_elem).style.getPropertyValue("display")=='block') {
        document.getElementById($id_elem).style.visibility='hidden';
        document.getElementById($id_elem).style.display='none';
    } else {
		if($id_elem == "rmf_project_menu_projects_lst") elHide("rmf_project_menu_sections"); 
        document.getElementById($id_elem).style.visibility='visible';
		if($id_elem == "rmf_project_pages"){
			document.getElementById($id_elem).style.display='table';
		} else {
			document.getElementById($id_elem).style.display='block';
		}
		
        
    } 
}

function elShow($id_elem) {
        document.getElementById($id_elem).style.visibility='visible';
        document.getElementById($id_elem).style.display='flex';
		//alert(rmf_cnst_x +" / "+ rmf_cnst_y);
}

function elHide($id_elem) {
        document.getElementById($id_elem).style.visibility='hidden';
        document.getElementById($id_elem).style.display='none';
}
 
function HideThis(div) {
       div.style.visibility='hidden';
       div.style.display='none';
}

function addClss(div, clsname) {
	var el = document.getElementById(div);
	//el.className += " " + clsname;
	//el.style.webkitAnimation = clsname + " 2s";
	document.getElementById(div).classList.add(clsname);
	
}

function removeClss(div, clsname){
	var el_div = document.getElementById(div);
	if (el_div.classList.contains(clsname)){
		el_div.classList.remove(clsname);
	}
}

function toggleClss(div, clssrc, clstrget){
	var el_div = document.getElementById(div);
	if (el_div.classList.contains(clssrc)){
		el_div.classList.toggle(clstrget);
	}
}

function chkCook(){
	if (!navigator.cookieEnabled) {
		alert("Please, enable your browser's settings to support cookies.");
	}
}

function showLen($el_src, $val_max, $el_info){
	var elSrc = document.getElementById($el_src).value;
	document.getElementById($el_info).innerHTML = elSrc.length + '/' + $val_max;
}

function testKeyCode(e, el, el_info, maxlen) {
	//e.preventDefault();
    var key = e.keyCode;
	var elObj = document.getElementById(el);
	var elSrc = document.getElementById(el).value;
	
	if(key == 32 && elSrc == " ") {
		//alert('Wrong start symbol...');
		elObj.value = "";
		elObj.innerHTML = "";
		//e.preventDefault()
		console.log(key);
	} else {
		showLen(el, maxlen, el_info);
		console.log(key);
	}
}
function testKeyPress(e, el, el_info, maxlen) {
    var char = e.which || e.keyCode;
	var elObj = document.getElementById(el);
	var elSrc = document.getElementById(el).value;
	if(char == 32 && elSrc.length <= 1) {
		//alert('Wrong start symbol...');
		e.preventDefault();
		elObj.blur();
		setElContent(el,"");
		//console.log(char);
	} else {
		showLen(el, maxlen, el_info);
		//console.log(char);
	}

}


// draggable elements
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

}

var makeMovable = function(target, handle) {

  target = $(target);

  $(handle).onmousedown = function(event) {
    var initialXOffset = target.offsetLeft - event.pageX;
    var initialYOffset = target.offsetTop - event.pageY;

    document.onmousemove = function(event) {
      target.style.left = event.pageX + initialXOffset;
      target.style.top = event.pageY + initialYOffset; 
    }

    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup = null;
    }

    return false;
  }
}




var _startX = 130;			
var _startY = 100;
var _offsetX = 130;			
var _offsetY = 100;
var _dragElement;			
var _oldZIndex = 100;


InitDragDrop();

function InitDragDrop() {
	document.onmousedown = OnMouseDown;
	document.onmouseup = OnMouseUp;
}

function OnMouseDown(e) {
	//console.log("OnMouseDown(e)...");
	e = e || window.e;

	var target = e.target != null ? e.target : e.srcElement;
	
	if ((e.button == 1 && window.event != null || e.button == 0) && target.getAttribute('movablelement') == 'true') {
		//console.log("OnMouseDown(e)... movablelement...");
		_startX = e.clientX;
		_startY = e.clientY;
		_offsetX = ExtractNumber(target.style.left);
		_offsetY = ExtractNumber(target.style.top);
		_oldZIndex = target.style.zIndex;
		target.style.zIndex = 50000;
		_dragElement = target;
		_dragElement.style.cursor = 'grabbing';
		document.onmousemove = OnMouseMove;
		document.body.focus();
		document.onselectstart = function () { return false; };
		target.ondragstart = function() { return false; };
		return false;
	}
	
}

function OnMouseMove(e) {
	e = e || window.e;
		
	let posX = (_offsetX + e.clientX - _startX);
	let posY = (_offsetY + e.clientY - _startY);

	_dragElement.style.left = posX + 'px';
	_dragElement.style.top = posY + 'px';
	
	if( _dragElement.id.substring(0, 3)  == "el_" ){
		// call to -----> rmf_lib_bmgui.js
		refreshLayerOnTplData(Math.round(_offsetX + e.clientX - _startX), Math.round(_offsetY + e.clientY - _startY));
	}

}

function OnMouseUp(e) {
	if (_dragElement != null) {
		_dragElement.style.zIndex = _oldZIndex;
		document.onmousemove = null;
		document.onselectstart = null;
		_dragElement.ondragstart = null;
		_dragElement.style.cursor = 'grab';
		_dragElement = null;
	} 
}

function ExtractNumber(value) {
	var n = parseInt(value);
	return n == null || isNaN(n) ? 0 : n;
}



function convertObjectToArray(obj) {

	var result_ar = Object.keys(obj).map(function(key) {
	  return [Number(key), obj[key]];
	});
	
	return result_ar;
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function clearULItem(ule) {
	var ul_el = document.getElementById(ule);
	ul_el.innerHTML = '';
}
function clearSelectItem(sele) {
	var ul_el = document.getElementById(sele);
	ul_el.options.length = 0;
}

