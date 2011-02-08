/**
 * Matrice des données représentant un tableau à double entrée indexé par les labels de lignes et colonne
 *             |LabelColonne1|LabelColonne2|
 * ____________|_____________|______________
 * LabelLigne1 |Valeur1......|Valeur2......|
 * ____________|_____________|______________
 * LabelLigne2 |Valeur3......|Valeur4......|
 *
 * Le sens de parcour se fait "en ligne" ou en "colonne". Parcourir en ligne signifie qu'on considère une valeur
 * comme le resultat d'une fonction d'acces de [LabelLigne][LabelColonne] tandis que parcourir en colonne est inverse:
 * [LabelColonne][LabelLigne].
 *
 * Conception: Pierre Collignon
 * Commentaires pour corrections: Abdourahmane Djigo et Lyes Kimouche
 */

var DataMatrix = function() {
    // Attributs privés
	this.rowLabels = new Array();
	this.columnLabels = new Array();

	this.rows = new Array();

	/**
	 * Prototypage, toutes les methodes définies ici ne seront pas dupliquées
	 * à l'instanciation.
	 */
    if (typeof DataMatrix.initialized == "undefined" ) {
        DataMatrix.initialized = true;

    	/**
    	 * Retourne la largeur de la matrice.
    	 */
    	DataMatrix.prototype.getColumnNumber = function() {
    		return this.columnLabels.length;
    	};

    	/**
    	 * Retourne la hauteur de la matrice.
    	 */
    	DataMatrix.prototype.getRowNumber = function() {
    		return this.rowLabels.length;
    	};

    	/**
    	 * Retourne les labels de colonne.
    	 */
    	DataMatrix.prototype.getColumnLabels = function() {
    		return this.columnLabels;
    	};

    	/**
    	 * Retourne les labels en line.
    	 */
    	DataMatrix.prototype.getRowLabels = function() {
    		return this.rowLabels;
    	};

    	/**
    	 * Renvoie la somme de tous les éléments du tableau à double entrée.
    	 */
        DataMatrix.prototype.getTotal = function() {
    		var total = 0;
    		$.each(this.rowLabels, $.proxy(function(rowIndex, rowLabel) {
                $.each(this.columnLabels, $.proxy(function(columnIndex, columnLabel) {
                    total += this.getValueByLabel(rowLabel, columnLabel);
                }, this));
            }, this));
    		return total;
    	};

    	/**
    	 * Spécifie le nom de chaque colonne
    	 */
    	DataMatrix.prototype.setColumnLabels = function(labels) {
    		$.each(labels, $.proxy(function(index, value) {
    			this.columnLabels.push(value);
    		}, this));
    	};

    	/**
    	 * Spécifie le nom de chaque ligne
    	 */
    	DataMatrix.prototype.setRowLabels = function(labels) {
    		$.each(labels, $.proxy(function(index, value) {
    			this.rowLabels.push(value);
    		}, this));
    	};

    	/**
    	 * Ajoute un label de colonne.
    	 */
    	DataMatrix.prototype.addColumnLabel = function(label) {
    		this.columnLabels.push(label);
    	};

    	/**
    	 * Ajoute un label de ligne.
    	 */
    	DataMatrix.prototype.addRowLabel = function(label) {
    		this.rowLabels.push(label);
    	};

    	/**
    	 * Insère la valeur value dans la matrice, aux coordonnées labélisées
    	 * fournies.
    	 */
    	DataMatrix.prototype.setValue = function(rowLabel, columnLabel, value) {
    		if ($.inArray(rowLabel, this.rowLabels) != -1 && $.inArray(columnLabel, this.columnLabels) != -1) {
    			if (!this.rows[rowLabel]) {
    				this.rows[rowLabel] = new Array();
    			}
    			this.rows[rowLabel][columnLabel] = value;
    		} else {
    			throw "Labels indéfinis : " + rowLabel + "," + columnLabel;
    		}
    	};

    	/**
    	 * Retoune la valeur entrée dans la matrice selon les labels.
    	 */
    	DataMatrix.prototype.getValueByLabel = function(rowLabel, columnLabel) {
    		if (!this.rows[rowLabel] || !this.rows[rowLabel][columnLabel]) {
    			throw "Label/Valeur indéfinis : " + rowLabel + "," + columnLabel;
    		}
    		return this.rows[rowLabel][columnLabel];
    	};

        /**
    	 * Retoune la valeur entrée dans la matrice selon les labels de ligne et colonne, selon
    	 * la direction.
         * @param firstLabel Label de ligne si dir == 'row' | Label de colonne si dir == 'column'
         * @param secondLabel Label de colonne si dir == 'row' | Label de ligne si dir == 'column'
    	 */
    	DataMatrix.prototype.getValueByLabelAndDirection = function(firstLabel, secondLabel, dir) {
    		if (!this.rows[firstLabel] && !this.rows[secondLabel]) {
    			throw "Label/Valeur indéfinis : " + firstLabel + ";" + secondLabel;
    		}
    		if (dir == 'row') {
    			return this.rows[firstLabel][secondLabel];
    		} else {
    			return this.rows[secondLabel][firstLabel];
    		}
    	};

    	/**
    	 * Retourne la valeur entrée dans la matrice selon ses coordonnées
    	 * numériques.
    	 */
    	DataMatrix.prototype.getValue = function(x, y) {
    		return this.getValueByLabel(this.rowLabels[x], this.columnLabels[y]);
    	};

    	/**
    	 * Retourne la valeur maximale contenu dans la matrice
    	 */
    	DataMatrix.prototype.getTopValue = function() {
    		var top;
            try {
                top = this.getValue(0, 0);
            } catch(e) {
                top = 0;
            }
            $.each(this.rowLabels, $.proxy(function(rowIndex, rowLabel) {
                $.each(this.columnLabels, $.proxy(function(columnIndex, columnLabel) {
                    var currentValue = this.getValueByLabel(rowLabel, columnLabel);
                    if (currentValue > top) {
                        top = currentValue;
                    }
                }, this));
            }, this));
    		return top;
    	};

    	/**
    	 * Retourne la somme des valeurs d'une ligne.
    	 */
    	DataMatrix.prototype.getRowTotal = function(rowLabel) {
            if (!this.rows[rowLabel]) {
                throw "Label inexistant : " + rowLabel;
            }
    		var sum = 0;
    		$.each(this.columnLabels, $.proxy(function(i, columnLabel) {
    			sum += this.getValueByLabel(rowLabel, columnLabel);
    		}, this));
    		return sum;
    	};

    	/**
    	 * Retourne la somme des valeurs d'une colonne.
    	 */
    	DataMatrix.prototype.getColumnTotal = function(columnLabel) {
    		if (!this.rows[this.rowLabels[0]][columnLabel]) {
                throw "Label inexistant : " + columnLabel;
            }
    		var sum = 0;
    		$.each(this.rowLabels, $.proxy(function(i, rowLabel) {
    			sum += this.getValueByLabel(rowLabel, columnLabel);
    		}, this));
    		return sum;
    	};
    }
};