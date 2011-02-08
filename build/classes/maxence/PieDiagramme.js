/**
 * Constructeur du diagramme camembert.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var PieDiagramme = function(canvasRef, direction) {
	IDiagramme.call(this, canvasRef);
	if (direction != 'x' && direction != 'y') {
		throw "Direction de lecture invalide";
	}
	this.dir = direction;
	if (typeof PieDiagrammeinitialized == "undefined") {
		PieDiagramme.initialized = true;
		
		PieDiagramme.prototype.drawLegend = function() {
			var context = this.canvas.getContext('2d');
			var width = this.getWidth();
			var height = this.getHeight();
			var labels = new Array();
			
			if(this.dir == 'y') {
				labels = this.data.getXLabels();
			} else {
				labels = this.data.getYLabels();
			}
			
			var colors = new Array("blue", "red", "black", "green", "pink", "orange", "darkgreen");
			
			var pos = {x: (width*4)/5, y: height-5};	// valeurs non finales
			$.each(labels, function(i, label) {
				context.fillStyle = colors[i < colors.length ? i : i % colors.length];
				context.beginPath();
					context.fillRect(pos.x, pos.y, 10, -10);
					context.fillStyle = "black"
					context.fillText(label, pos.x+15, pos.y-1);
				context.closePath();
				pos = {x: pos.x, y: pos.y-14};
			});	
		};
		
		PieDiagramme.prototype.drawAxis = function() {
			// Vide
		};
		
		/**
		 * Dessin du diagramme en camembert.
		 */
		PieDiagramme.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			var width = this.getWidth();
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
			var colors = new Array("blue", "red", "black", "green", "pink", "orange", "darkgreen");
			var startArc = -Math.PI / 2;
			var endArc;
			var radius = (this.getWidth()*2) / 5 - 10;
			var center = {x: (this.getWidth()*2) / 5, y: this.getHeight() / 2};
			var textConfig = { // TODO: faire mieux
				positionOnRadius: 0.75,
				distanceFromStart: 2
			};
			$.each(parts, function(i, part) {
				endArc = startArc - (2 * Math.PI) * part;
				context.fillStyle = colors[i < colors.length ? i : i % colors.length];
				context.beginPath();
					// /!\ Indispensable pour avoir une part complete.
					context.moveTo(center.x, center.y);
					context.arc(center.x, center.y, radius, startArc, endArc, true);
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
PieDiagramme.prototype = new IDiagramme(); // TODO: on répète deux fois, trouver mieux
PieDiagramme.prototype.constructor = PieDiagramme;