/**
 * Constructeur de l'histogramme.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception: Ludovic Thueux
 * Corrections: Pierre Collignon et Abdourahmane Djigo
 */
var HistoDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	if (typeof HistoDiagram.initialized == "undefined") {
		HistoDiagram.initialized = true;
		/**
		 * Dessin de l'histogramme.
		 */
		HistoDiagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');

			var shift = 5; // Décalage entre deux ensembles en abscisse
            var firstShift = 20; // Premier décalage
			var currentX = this.getLeftShift() + firstShift; // Position en x sur le canvas du pinceau

			// Calcul des ensemble servant d'abscisse et de couleur selon la direction de parcours
			// du tableau de données
            var absLabels = null;
            var colorLabels = null;
			if (this.dir == 'column') {
				absLabels = this.data.getRowLabels();
				colorLabels = this.data.getColumnLabels();
			} else {
				absLabels = this.data.getColumnLabels();
				colorLabels = this.data.getRowLabels();
			}

			var globalShift = (absLabels.length - 1) * shift; // Somme des décalages entre deux ensembles en abscisse

			// Largeur d'une barre
			var barWidth = ((this.getWidth() - currentX   - globalShift)
                            / (this.data.getColumnNumber() * this.data.getRowNumber()));

			$.each(absLabels, $.proxy(function(i, abslabel){
				$.each(colorLabels, $.proxy(function(j, colorlabel) {
					var value = this.data.getValueByLabelAndDirection(colorlabel, abslabel, this.dir);
					var color = this.getColors()[j];
					var barHeight = this.getPixelPerUnit() * value;
					context.fillStyle = color;
					context.fillRect(currentX,
                                     this.getHeight() - this.getBottomShift() - barHeight,
                                     barWidth,
                                     barHeight);
					currentX += barWidth;
				}, this));
				var xLegendPosition = firstShift + this.getLeftShift() + (i * 5) + (i * barWidth * colorLabels.length)
                                  + ((barWidth * colorLabels.length) / 2) - context.measureText(abslabel).width / 2;
				context.fillStyle = 'black'; // TODO: a fixer ailleurs
				context.fillText(abslabel, xLegendPosition , this.getHeight() - this.getBottomShift() + 10);
				currentX += shift;
			}, this));
		};
	}
};

// Héritage: chainage des prototypes.
HistoDiagram.prototype = new IDiagram(null); // TODO: on rÃ©pÃ¨te deux fois, trouver mieux
HistoDiagram.prototype.constructor = HistoDiagram;
