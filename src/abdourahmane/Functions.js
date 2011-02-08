var maxTab = function(tableau) {
	var max = tableau[0];
	var len = tableau.length;
	for (var j = 0; j < tableau[j].length; j++) {
		for (var i = 0; i < len; i++) {
			if (tableau[i][j] > max) {
				max = tableau[i][j];
			}
		}
	}
	return max;
}

var drawHisto2d = function(pinceau, tableau, tabN) {
	var maxTableau = maxTab(tableau);

	context.strokeStyle = "black";
	pinceau.beginPath();
	
	//Tracage du repère
	pinceau.rect(50, 20, 0, 250);
	pinceau.rect(50, 270, 45*tableau.length, 0);

	//Tracage des 4 barres des valeurs clés du repére
	pinceau.rect(45, 20, 10, 0);
	pinceau.rect(45, 140, 10, 0);
	pinceau.rect(45, 70, 10, 0);
	pinceau.rect(45, 210, 10, 0);

	//Tracage des 4 valeurs clés du repère
	pinceau.fillText(maxTableau, 40 - context.measureText(maxTableau).width, 20);
	pinceau.fillText(maxTableau/2, 40 - context.measureText(maxTableau/2).width, 140);
	pinceau.fillText(maxTableau/4 * 3, 40 - context.measureText(maxTableau/4 * 3).width, 70);
	pinceau.fillText(maxTableau/4, 40 - context.measureText(maxTableau/4).width, 210);
	pinceau.stroke();

	var nbBar = 0;

	while(tableau.length > 0) {
		for (var i = 0; i < tableau[i].length; i++) {
			var elt = tableau[tableau.length - 1];
			var element = tableau[i][elt];
			var name = tabN[tabN.length - 1];
			context.fillStyle = "green";
			pinceau.fillRect(70 + 20 * nbBar * 2, 270 - element/maxTableau * 250, 20, element/maxTableau * 250);
			context.fillStyle = "black";
			pinceau.fillText(name, 50 + 45 * nbBar, 290);
			nbBar++;
			tableau[i].pop();
			tabN.pop();
		}
	}
}