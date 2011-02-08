/**
 * Constructeur du diagramme camembert.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var PieDiagramme = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

    this.getWidestText = function(texts) {
        var context = this.canvas.getContext('2d');
        var widest = {text: texts[0], length: context.measureText(texts[0]).width};
        $.each(texts, function(i, text) {
            var length = context.measureText(text).width;
            if (widest.length < length) {
                widest.length = length;
                widest.text = text;
            }
        });
        return widest;
    };

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide";
	}
	this.dir = direction;
	if (typeof PieDiagramme.initialized == "undefined") {
		PieDiagramme.initialized = true;
		PieDiagramme.prototype.drawAxis = function() {
			// Vide
		};

		PieDiagramme.prototype.drawAxis = function() {
			// Vide
		};

		/**
		 * Dessin du diagramme en camembert.
		 */
		PieDiagramme.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			//var width = this.getWidth();
			var height = this.getHeight();
			// Création des parts
			var parts = new Array();
			var total = this.data.getTotal();
			var that = this;
			if (this.dir == 'x') { // Pourcentage de chaque ligne
				$.each(this.data.getYLabels(), function(i, yLabel) {
					parts.push(that.data.getLineTotal(yLabel) / total);
				});
			} else {
				$.each(this.data.getXLabels(), function(i, xLabel) {
					parts.push(that.data.getColumnTotal(xLabel) / total);
				});
			}
			//TODO: gérer les couleurs
			var colors = this.getColors();
			var startArc = -Math.PI / 2;
			var endArc;
            // TODO: faire un test de tous les cas possible + légende a tailler selon width/height pas que rect
			var radius = (this.getHeight() > this.getWidth() ? this.getWidth() : this.getHeight()) / 2.5 - 10;
            radius = radius > 0 ? radius : 0;
			var center = {x: this.getWidth() / 2, y: this.getHeight() / 2};
			var textConfig = { // TODO: faire mieux
				positionOnRadius: 0.75,
				distanceFromStart: 2
			};
			$.each(parts, function(i, part) {
				endArc = startArc - (2 * Math.PI) * part;
				context.fillStyle = colors[i < colors.length ? i : i % colors.length];
				context.beginPath();
					context.arc(center.x, center.y, radius, startArc, endArc, true);
                    // /!\ Indispensable pour avoir une part complete.
					context.lineTo(center.x, center.y);
				context.closePath();
				context.fill();

				// On utilise comme angle d'écriture du texte le milieu d'une part
				var textArc = startArc - (2 * Math.PI) * part / textConfig.distanceFromStart;
				// La position est celle du cercle trigo multipliée par le zoom (rayon plus grand que 1) puis translatée par le centre (> 0,0)
				var xPos = Math.cos(textArc) * radius * textConfig.positionOnRadius + center.x;
				// L'axe y est inversé par rapport au cercle trigo classique et l'angle est aussi inversé 
				//TODO: trouver la bonne combinaison pour avoir l'angle orienté avec cohérence
				var yPos = height - (Math.sin(-textArc) * radius * textConfig.positionOnRadius + center.y);
				context.fillStyle = "white"; // TODO: a fixer quelque part
				context.fillText(parseFloat(part * 100).toFixed(2) + "%", xPos, yPos);
				startArc = endArc;
		        
			});
		};
	}
};

// Héritage: chainage des prototypes.
PieDiagramme.prototype = new IDiagramme(null); // TODO: on répète deux fois, trouver mieux
PieDiagramme.prototype.constructor = PieDiagramme;
