//var canva = document.getElementById('canva-test');
//
//var tab1 = new Array();
//tab1.push(2);
//tab1.push(5);
//tab1.push(20.53);
//tab1.push(8);
//tab1.push(12);
//tab1.push(4);
//
//var tab2 = new Array();
//tab2.push(2);
//tab2.push(5);
//tab2.push(20.53);
//tab2.push(8);
//tab2.push(12);
//tab2.push(4);
//
//var tab3 = new Array();
//tab3.push(2);
//tab3.push(5);
//tab3.push(20.53);
//tab3.push(8);
//tab3.push(12);
//tab3.push(4);
//
//var tabValeurs = new Array();
//tabValeurs.push(tab1);
//tabValeurs.push(tab2);
//tabValeurs.push(tab3);
//
//var tabNoms = new Array();
//tabNoms.push("Vin");
//tabNoms.push("Beurre");
//tabNoms.push("Jambon");
//tabNoms.push("Pomme");
//tabNoms.push("Soupe");
//tabNoms.push("Haricots");
//
//if (canva.getContext) {
//	var context = canva.getContext('2d');
//	drawHisto2d(context, tabValeurs, tabNoms);
//}
//Premier site
var m = new DataMatrix();
m.setXAxisLabels(new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"));
m.setYAxisLabels(new Array("CatsWhoCode.com", "WebWhoCode.com"));
m.setValue("Monday", "CatsWhoCode.com", 12541);
m.setValue("Tuesday", "CatsWhoCode.com", 11204);
m.setValue("Wednesday", "CatsWhoCode.com", 11354);
m.setValue("Thursday", "CatsWhoCode.com", 10058);
m.setValue("Friday", "CatsWhoCode.com", 9871);
m.setValue("Saturday", "CatsWhoCode.com", 8254);
m.setValue("Sunday", "CatsWhoCode.com", 5477);


//Deuxieme site
//var m = new DataMatrix();
m.setValue("Monday", "WebWhoCode.com", 477);
m.setValue("Tuesday", "WebWhoCode.com", 1254);
m.setValue("Wednesday", "WebWhoCode.com", 871);
m.setValue("Thursday", "WebWhoCode.com", 1058);
m.setValue("Friday", "WebWhoCode.com", 1354);
m.setValue("Saturday", "WebWhoCode.com", 10204);
m.setValue("Sunday", "WebWhoCode.com", 5410);

var idiag = new HistoDiagramme(document.getElementsByTagName('canvas')[0], 'x');
idiag.setData(m);
idiag.setWidth(500);
idiag.setHeight(500);