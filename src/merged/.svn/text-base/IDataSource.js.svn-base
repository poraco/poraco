/**
 * Interface des sources de données, permettant la transformation d'un flux de données vers un objet
 * DataMatrix.
 * Conception: Lyes Kimouche
 * Corrections: Pierre Collignon
 */
var IDataSource = function() {
	if (typeof IDataSource.initialized == "undefined" ) {
        IDataSource.initialized = true;

        /**
         * Charge les données depuis la source.
         * @param callback Fonction appelée lors de la fin du chargement des données.
         */
        IDataSource.prototype.loadData = function(callback) { };

        /**
         *  Retourne la matrice représentant les données.
         */
        IDataSource.prototype.getDataMatrix = function() { };
	}
};