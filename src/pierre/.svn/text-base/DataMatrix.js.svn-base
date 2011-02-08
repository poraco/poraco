/**
 * Matrice des données représentant un tableau à double entrée, indexé en
 * x et en y par des labels.
 */

var DataMatrix = function() {
	var width = 0;
	var height = 0;
	
	var xLabels = new Array();
	var yLabels = new Array();
	
	var rows = new Array();
	
	/**
	 * Prototypage, toutes les methodes définies ici ne seront pas dupliquées
	 * à l'instanciation.
	 */
    if (typeof DataMatrix.initialized == "undefined" ) {
        DataMatrix.initialized = true;
    	/**
    	 * Retourne l'index correspondant à la valeur
    	 * @param value La valeur à retrouver
    	 * @returns L'index de la valeur
    	 */
    	DataMatrix.prototype.findValueInArray = function(array, value) {
    		var index = -1;
    		$.each(array, function(i, val) {
    			if (value == val) {
    				index = i;
    				return false;
    			}
                return true;
    		});
    		return index;
    	};
    	
    	/**
    	 * Retourne la largeur de la matrice.
    	 */
    	DataMatrix.prototype.getWidth = function() {
    		return width;
    	};
    	
    	/**
    	 * Retourne la hauteur de la matrice.
    	 */
    	DataMatrix.prototype.getHeight = function() {
    		return height;
    	};
    	
    	/**
    	 * Retourne les labels en x.
    	 */
    	DataMatrix.prototype.getXLabels = function() {
    		return xLabels;
    	};
    	
    	/**
    	 * Retourne les labels en y.
    	 */
    	DataMatrix.prototype.getYLabels = function() {
    		return yLabels;
    	};
    	
    	/**
    	 * Renvoie la somme de tous les éléments du tableau.
    	 */
        DataMatrix.prototype.getTotal = function() {
    		var total = 0;
    		for (var x = 0; x < width; x++) {
    			for (var y = 0; y < height; y++) {
    				total += this.getValue(x, y);
    			}
    		}
    		return total;
    	};

    	/**
    	 * Spécifie le nom de chaque abscisse
    	 */
    	DataMatrix.prototype.setXAxisLabels = function(labels) {
    		$.each(labels, function(index, value) {
    			xLabels.push(value);
    		});
    		width = xLabels.length;
    	};
    	
    	/**
    	 * Spécifie le nom de chaque ordonnée
    	 */	
    	DataMatrix.prototype.setYAxisLabels = function(labels) {
    		$.each(labels, function(index, value) {
    			yLabels.push(value);
    		});
    		height = yLabels.length;
    	};
    	
    	/**
    	 * Ajoute un label d'abscisse.
    	 */
    	DataMatrix.prototype.addXAxisLabel = function(label) {
    		xLabels.push(label);
    		width += 1;
    	};
    	
    	/**
    	 * Ajoute un label d'ordonnée.
    	 */
    	DataMatrix.prototype.addYAxisLabel = function(label) {
    		yLabels.push(label);
    		height += 1;
    	};
    	
    	/**
    	 * Insère la valeur value dans la matrices, aux coordonnées labélisées
    	 * fournies.
    	 */
    	DataMatrix.prototype.setValue = function(xLabel, yLabel, value) {
    		var i = this.findValueInArray(xLabels, xLabel);
    		var j = this.findValueInArray(yLabels, yLabel);
    		if (i != -1 && j != -1) {
    			if (!rows[yLabel]) {
    				rows[yLabel] = new Array();
    			}
    			rows[yLabel][xLabel] = value;
    		} else {
    			throw "Label indéfini";
    		}
    	};
    	
    	/**
    	 * Retoune la valeur entrée dans la matrice selon les labels en x et y.
    	 */
    	DataMatrix.prototype.getValueByLabel = function(xLabel, yLabel) {
    		if (!rows[yLabel] || !rows[yLabel][xLabel]) {
    			throw "Label/Valeur indéfinis : [" + xLabel + ";" + yLabel + "]";
    		}
    		return rows[yLabel][xLabel];
    	};
    	
    	/**
    	 * Retourne la valeur entrée dans la matrice selon ses coordonnées
    	 * numériques.
    	 */
    	DataMatrix.prototype.getValue = function(x, y) {
    		return this.getValueByLabel(xLabels[x], yLabels[y]);
    	};
    	
    	/**
    	 * Retourne la valeur maximale contenu dans la matrice
    	 */
    	DataMatrix.prototype.getTopValue = function() {
    		var top = this.getValue(0, 0);
    		for (var x = 0; x < width; x++) {
    			for (var y = 0; y < height; y++) {
    				var value = this.getValue(x, y);
    				if (value > top) {
    					top = value;
    				}
    			}
    		}
    		return top;
    	};
    	
    	/**
    	 * Retourne la somme des valeurs d'une ligne, indéxée par un label en y.
    	 */
    	DataMatrix.prototype.getLineTotal = function(yLabel) {
    		if (this.findValueInArray(yLabels, yLabel) < 0) {
    			throw "Label inexistant : " + yLabel;
    		}
    		var sum = 0;
    		var ref = this;
    		$.each(xLabels, function(i, xLabel) {
    			sum += ref.getValueByLabel(xLabel, yLabel);
    		});
    		return sum;
    	};
    	
    	/**
    	 * Retourne la somme des valeurs d'une colonne indéxée par un  label en x.
    	 */
    	DataMatrix.prototype.getColumnTotal = function(xLabel) {
    		if (this.findValueInArray(xLabels, xLabel) < 0) {
    			throw "Label inexistant : " + xLabel;
    		}
    		var sum = 0;
    		var ref = this;
    		$.each(yLabels, function(i, yLabel) {
    			sum += ref.getValueByLabel(xLabel, yLabel);
    		});
    		return sum;
    	};
    }
};