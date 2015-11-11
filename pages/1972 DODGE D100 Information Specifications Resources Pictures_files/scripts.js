function PhotoNavLoad(COMMFORMURL,DIVNAME) {
	var d    = new Date();
	var time = d.getTime();
	var NewURL = COMMFORMURL +'&unq=' +time;
	obj = document.getElementById(DIVNAME); 
  obj.style.visibility = 'visible'; 
  document.getElementById(DIVNAME).innerHTML = '<font face=Arial size=2 color=#999999>Loading, please wait...</font>'; 
  processAjax(NewURL,DIVNAME); 
}

function processAjax(url,unqdivname) {

    if (window.XMLHttpRequest) { // Non-IE browsers 
      req = new XMLHttpRequest(); 
      req.onreadystatechange = function () { targetDiv(unqdivname); };
      try { 
        req.open("GET", url, true); 
      } catch (e) { 
        alert(e); 
      } 
      req.send(null); 
    } else if (window.ActiveXObject) { // IE 
      req = new ActiveXObject("Microsoft.XMLHTTP"); 
      if (req) { 
        req.onreadystatechange = function () { targetDiv(unqdivname); };
        req.open("GET", url, true); 
        req.send(); 

      } 
    } 
}

function targetDiv(dv,reload) { 
	if (req.readyState == 4) { // Complete 
  	if (req.status == 200) { // OK response 
    	document.getElementById(dv).innerHTML = req.responseText; 
    } else { 
   	} 
	} 
}