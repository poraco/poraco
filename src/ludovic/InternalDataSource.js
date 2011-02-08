/**
 * Classe représentant la source de donnée interne à la page.
 * Conception: Pierre Collignon
 */

/**
 * Constructeur de la source de donnée interne
 * @param preId Identifiant de la balise pre contenant le flux xml.
 */
var InternalDataSource = function(preId) {
	IDataSource.call(this);
    this.pre = preId;

    this.xml = null;
    if (typeof InternalDataSource.initialized == "undefined" ) {
        InternalDataSource.initialized = true;
        /**
         * Charge à partir d'une balise <pre> d'id this.pre un flux xml.
         * @param callback Fonction appelée à la fin de la transformation.
         */
        InternalDataSource.prototype.loadData = function(callback) {
            if (window.DOMParser) {
                var parser = new DOMParser();
                // Utiliser /g remplace TOUTES les occurences.
                this.xml = parser.parseFromString(
                            document.getElementById(this.pre).innerHTML.trim().replace(/\n/g, '').replace(/ /g, ''),
                            "text/xml"
                        );
                callback(this.xml);
            } else {
                throw "Impossible de transformer la chaine fournie";
            }
        };

        /**
         * Renvoie la matrice représentant les données lues.
         */
        InternalDataSource.prototype.getDataMatrix = function() {
            var dataMatrix = new DataMatrix();

        	var labels = this.xml.getElementsByTagName('labels')[0];
            $.each(labels.childNodes, function(index, childNode) {
                if (childNode.tagName == 'column') {
                    dataMatrix.addColumnLabel(childNode.textContent);
                } else if (childNode.tagName == 'row') {
                    dataMatrix.addRowLabel(childNode.textContent);;
                }
            });

            var rows = this.xml.getElementsByTagName('rows')[0];
            $.each(rows.childNodes, function(i, childNode) {
                $.each(childNode.childNodes, function(j, grandChildNode) {
                    dataMatrix.setValue(dataMatrix.getRowLabels()[i], dataMatrix.getColumnLabels()[j],
                                        grandChildNode.textContent);
                });
            });
            return dataMatrix;
        }
    }
};

// Héritage: chainage des prototypes.
InternalDataSource.prototype = new IDataSource(); // TODO: on répète deux fois, trouver mieux
InternalDataSource.prototype.constructor = InternalDataSource;