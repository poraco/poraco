var m = new DataMatrix();
m.setColumnLabels(new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"));
m.setRowLabels(new Array("Clubic.fr", "Google.fr", "Yahoo.fr"));
m.setValue("Clubic.fr", "Lundi", 12541);
m.setValue("Clubic.fr", "Mardi", 11204);
m.setValue("Clubic.fr", "Mercredi", 11354);
m.setValue("Clubic.fr", "Jeudi", 10058);
m.setValue("Clubic.fr", "Vendredi", 9871);
m.setValue("Clubic.fr", "Samedi", 8254);
m.setValue("Clubic.fr", "Dimanche", 5477);

m.setValue("Google.fr", "Lundi", 9855);
m.setValue("Google.fr", "Mardi", 8870);
m.setValue("Google.fr", "Mercredi", 8731);
m.setValue("Google.fr", "Jeudi", 7488);
m.setValue("Google.fr", "Vendredi", 8159);
m.setValue("Google.fr", "Samedi", 6547);
m.setValue("Google.fr", "Dimanche", 4512);

m.setValue("Yahoo.fr", "Lundi", 3241);
m.setValue("Yahoo.fr", "Mardi", 2544);
m.setValue("Yahoo.fr", "Mercredi", 2597);
m.setValue("Yahoo.fr", "Jeudi", 3108);
m.setValue("Yahoo.fr", "Vendredi", 2114);
m.setValue("Yahoo.fr", "Samedi", 2045);
m.setValue("Yahoo.fr", "Dimanche", 950);

/*var diag1 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'column');
diag1.setData(m);
var diag2 = new HistoDiagram(document.getElementsByTagName('canvas')[1], 'row');
diag2.setData(m);
var diag3 = new PieDiagram(document.getElementsByTagName('canvas')[2], 'column');
diag3.setData(m);
var diag4 = new PieDiagram(document.getElementsByTagName('canvas')[3], 'row');
diag4.setData(m);
*/
var ids = new InternalDataSource('testpre');
ids.loadData(function() {
    var diag5 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'row');
    diag5.setData(ids.getDataMatrix());
});

/*
$.each(m.getRowLabels(), function(i, r) {
    $.each(m.getColumnLabels(), function(j, c) {
        alert(r + " | " + c + " | " + m.getValueByLabel(r, c));
    });
});
alert(m.getTopValue());
*/