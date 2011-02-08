var InternalDataSource = function() {

	InternalDataSource.call(this);
/****
 Chargement des données en interne à partir d'un fichier xml local vers un 
  modèle DataMatrix
 */
	InternalDataSource.prototype.loadXML = function(nameFile) {
		var xmlhttp = null;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.open("GET", nameFile, false);
		xmlhttp.send(); 
		return xmlhttp.responseXML;
	};

};

// Héritage: chainage des prototypes.
InternalDataSource.prototype = new IDataSource(); // TODO: on répète deux
													// fois, trouver mieux
InternalDataSource.prototype.constructor = InternalDataSource;