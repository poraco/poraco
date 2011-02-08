var IDiagramme = function(canvasRef) {
	this.canvas = canvasRef;
	this.data = null;
    this.colors = new Array("blue", "red", "black", "green", "pink", "orange", "darkgreen", "yellow");
	
    this.yAxisConfig = {
		leftShift: 50,
		topShift: 20,
		bottomShift: 50,
		nbIntervals: 10,
		stepWidth: 6
	};
        
	/**
	 * Prototypage, toutes les methodes définies ici ne seront pas dupliquées
	 * à l'instanciation.
	 */
    if (typeof IDiagramme.initialized == "undefined" ) {
        IDiagramme.initialized = true;
		/**
		 *	Définit la largeur de la fenêtre du diagramme.
		 *	@param width Largeur de la fenêtre
		 */
		IDiagramme.prototype.setWidth = function(width){
			this.canvas.setAttribute('width', width);
			this.redraw();
		};
	
		/**
		 *	Retourne la largeur de la fenêtre du diagramme.
		 */
		IDiagramme.prototype.getWidth = function(){
			return this.canvas.getAttribute('width');
		};
	
		/**
		 *	Définit la hauteur de la fenêtre du diagramme
		 *	@param height Hauteur de la fenêtre.
		 */
		IDiagramme.prototype.setHeight = function(height){
			this.canvas.setAttribute('height', height);
			this.redraw();
		};
	
		/**
		 *	Retourne la hauteur de la fenêtre du diagramme
		 */
		IDiagramme.prototype.getHeight = function(){
			return this.canvas.getAttribute('height');
		};

        IDiagramme.prototype.getColors = function() {
             return this.colors;
         };

		
		/**
		 * Charge un fichier de style pour le diagramme.
		 * @param styleConfig Objet de config de style {colors: ["blue", "red], background: "yellox"}
		 */
		IDiagramme.prototype.setStyle = function(styleConfig) {
            // TODO: faire
        };
	
		/**
		 * Charge les données du diagramme.
		 * @param dataMatrix Matrice des données
		 */
		IDiagramme.prototype.setData = function(dataMatrix) {
			this.data = dataMatrix;
		};
		
		/**
		 *	Dessine la légende du diagramme
		 */
		IDiagramme.prototype.drawLegend = function(){
            var context = this.canvas.getContext('2d');
			var width = this.getWidth();
			var height = this.getHeight();
            // Dessin du rectangle encadrant la légende TODO: spécifier ce rectangle autrement
            var rectangle = {x: 0, y: 0, width: 500, height: 120 };
            context.strokeStyle = 'black';
            context.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

            // Choix des labels composant la légende
			var labels = this.dir == 'y' ? this.data.getXLabels() : this.data.getYLabels();

            // Récupération du plus long label
            var widest = this.getWidestText(labels);

            // TODO: gérer les couleurs
			var colors = new Array("blue", "red", "black", "green", "pink", "orange", "darkgreen");
            //Dessin des éléments de la légende. TODO: faire un objet de config
			var pos = {x: rectangle.x, y: rectangle.y}; // Position du pinceau
            var squareSide = 10; //Taille du carré coloré
            var shift = 5; // Décalage du texte en x par rapport au rectangle coloré
            var xStep = widest.length + squareSide + 2 * shift; // Pas de déplacement en x
            var yStep = rectangle.height / labels.length; // Pas de déplacement en y

            $.each(labels, function(i, label) {
                // Dessin du carré
				context.fillStyle = colors[i < colors.length ? i : i % colors.length];
                context.strokeStyle = 'black';
                context.strokeRect(pos.x, pos.y, squareSide, squareSide);
				context.fillRect(pos.x, pos.y, squareSide, squareSide);

                // Dessin du texte
				context.fillStyle = 'black';
				context.fillText(label, pos.x + squareSide + shift, pos.y + squareSide);

                // Translation du pinceau
                if (pos.x + 2 * widest.length + squareSide + shift < rectangle.x + rectangle.width) {
                    pos.x += xStep;
                } else {
				    pos.x = rectangle.x;
				    pos.y += yStep;
                }
			});
        };
		
		/**
		 * Dessine les abscisses et ordonnées du diagramme
		 */
		IDiagramme.prototype.drawAxis = function() {
			this.drawXAxis();
			this.drawYAxis();
		};
		
		/**
		 * Dessine les abscisses du diagramme
		 */
		IDiagramme.prototype.drawXAxis = function() {
			var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
			context.beginPath();
				// Ligne des abscisses
				context.moveTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
				context.lineTo(this.getWidth(), this.getHeight() - this.yAxisConfig.bottomShift);
			context.closePath();
			context.stroke();
		};
		
		/**
		 *	Dessine les ordonnées du diagramme
		 */
		IDiagramme.prototype.drawYAxis = function(){
			// TODO: Récupérer la couleur dynamiquement à partir du css.
			var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
			context.beginPath();
				// Ligne des ordonnées
				context.moveTo(this.yAxisConfig.leftShift, this.yAxisConfig.topShift);
				context.lineTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
			context.closePath();
			context.stroke();
			
			// Dessin des intervalles en y
			var currentValue = this.data.getTopValue();
			var lengthInterval = (this.getHeight() - this.yAxisConfig.topShift - this.yAxisConfig.bottomShift) / this.yAxisConfig.nbIntervals;
			var dataInterval = Math.round(currentValue / this.yAxisConfig.nbIntervals);
			var stepWidth = this.yAxisConfig.stepWidth; // Longueur de la graduation
			for (var y = this.yAxisConfig.topShift; y < this.getHeight() - this.yAxisConfig.bottomShift; y += lengthInterval) {
				context.moveTo(this.yAxisConfig.leftShift - stepWidth / 2, y);
				context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);
				context.stroke();
				var textWidth = context.measureText(currentValue).width;
				context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
				currentValue -= dataInterval;
			}
		};
		
		IDiagramme.prototype.getBottomShift = function() {
			return this.yAxisConfig.bottomShift;
		};
		
		IDiagramme.prototype.getPixelPerUnit = function() {
			var lengthInterval = (this.getHeight() - this.yAxisConfig.topShift - this.yAxisConfig.bottomShift) / this.yAxisConfig.nbIntervals;
			var dataInterval = Math.round(this.data.getTopValue() / this.yAxisConfig.nbIntervals);
			return lengthInterval / dataInterval;
		};
		
		/**
		 *	Dessine le diagramme. 
		 */
		IDiagramme.prototype.drawDiagram = function(){};
		
		/**
		 * Dessine les lignes de visée
		 */
		IDiagramme.prototype.drawYLines = function() {
			
		};
		
		IDiagramme.prototype.redraw = function() {
			this.drawAxis();
			this.drawYLines();
			this.drawDiagram();
            this.drawLegend();
		};
    }
};
