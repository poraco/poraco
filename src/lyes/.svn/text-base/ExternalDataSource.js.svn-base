var ExternalDataSource = function() {
	
	ExternalDataSource.call(this);
	
	/**
	 * Chargement des données externe à partir d'un fichier xml externe vers un
	 *  modèle DataMatrix
	 * @param url
	 * @return xmlhttp.responseXML
	 */
	ExternalDataSource.prototype.loadXML = function(url){
		var xmlhttp = null;
		if (window.XMLHttpRequest) { 
			xmlhttp = new XMLHttpRequest();
			if (xmlhttp.overrideMimeType) {	
				xmlhttp.overrideMimeType('text/xml');
			}
		} 
		else if (window.ActiveXObject) {
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} 
			catch (e) {
				try {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} 
				catch (e) {}
			}
		}
		if (!xmlhttp) {
			throw "Impossible de créer une requete XML";
			return null;
		}
		xmlhttp.onreadystatechange = waitForResponse;
		xmlhttp.open("GET", url, true);
		xmlhttp.send(null);
		return xmlhttp.responseXML;//reponse du serveur transmettant du xml
	};
};

// Héritage: chainage des prototypes.
ExternalDataSource.prototype = new IDataSource(); // TODO: on répète deux
													// fois, trouver mieux
ExternalDataSource.prototype.constructor = ExternalDataSource;