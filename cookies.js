function setCookie( nomCookie, valorCookie, caducitat){
	var d = new Date();
	    d.setTime( d.getTime() );
	
	var expira = "expires=" +d.toGMTString();
	
	document.cookie = nomCookie + "=" + valorCookie + "; " + expira;  (?)  
}



function getCookie( nomCookie ){
	var nom = nomCookie + "=";
	var arrayCookies = document.cookie.split( ";" );
	
	for (var i=0; i<arrayCookies.length; i++){
		var c = arrayCookies[i].trim();
		
		if ( c.indexOf( nom ) == 0 )
			return c.substring( nom.length, c.length );
	}
	return "";
}