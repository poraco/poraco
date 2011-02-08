/**
 * Charge tous les scripts nécessaire au fonctionnement de la bibliothèque
 */

// On définit les fichier:
var jsFiles = new Array("Observer.js", "ArrayList.js" ,"DiagModel.js", "testModel.js");

/**
 * Charge un script
 * @param url Url du script
 */
var loadScript = function(url) {
	var script = document.createElement('script');
	script.setAttribute('type','text/javascript');
	script.setAttribute('src', url);
	document.getElementsByTagName('head')[0].appendChild(script);
};

// On charge tout (sans utiliser JQuery qu'on insère nous meme)
for (var i = 0; i < jsFiles.length; i++) {
	loadScript(jsFiles[i]);
}