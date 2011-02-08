/**
 * Constructeur du diagramme camembert.
 * Raffine IDiagram
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 *
 * Conception: Pierre Collignon
 * Commentaires: Maxence Luce
 */
var PieDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;

	if (typeof PieDiagram.initialized == "undefined") {
		PieDiagram.initialized = true;
		PieDiagram.prototype.drawAxis = function() {
			// Vide
		};

		PieDiagram.prototype.drawAxis = function() {
			// Vide
		};

		/**
		 * Dessin du diagramme en camembert.
		 */
		PieDiagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			var height = this.getHeight();
			// Création des parts
			var parts = new Array();
			var total = this.data.getTotal();

			if (this.dir == 'row') { // Pourcentage de chaque ligne
				$.each(this.data.getRowLabels(), $.proxy(function(i, rowLabel) {
					parts.push(this.data.getRowTotal(rowLabel) / total);
				}, this));
			} else {
				$.each(this.data.getColumnLabels(), $.proxy(function(i, columnLabel) {
					parts.push(this.data.getColumnTotal(columnLabel) / total);
				},this));
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
PieDiagram.prototype = new IDiagram(null); // TODO: on répète deux fois, trouver mieux
PieDiagram.prototype.constructor = PieDiagram;
