var IDataSource = function() {
	if (typeof IDiataSource.initialized == "undefined" ) {
        IDataSource.initialized = true;	
        
        IDataSource.prototype.loadXML = function(arg){ };
        
        IDataSource.prototype.parseXML = function(){
        	
        	var dataMatrix = new DataMatrix();
        	
        	//le titre du chart
        	var titre = xml.getElementsByTagName("title").childNodes[0].nodeValue;
        	dataMatrix.setTitle(titre);
        	
        	//le titre des absices du chart
        	var xTitre = xml.getElementsByTagName("xAxisTitle").childNodes[0].nodeValue;
        	dataMatrix.setTitle(xTitre);
        	
        	//le titre des ordonners du chart
        	var yTitre = xml.getElementsByTagName("yAxisTitle").childNodes[0].nodeValue;
        	dataMatrix.setYAxisTitle(yTitre);
        	
        	var x = xml.getElementsByTagName("xAxis");
        	for (i = 0; i < x.length; i++) {
        		dataMatrix.addXAxisLabel(x[i].childNodes[0].nodeValue);
        	}

        	var y = xml.getElementsByTagName("yAxis");
        	for (i = 0; i < y.length; i++) {
        		dataMatrix.addYAxisLabel(y[i].childNodes[0].nodeValue);
        	}
        	
        	var rows = xml.getElementsByTagName("row");
        	$.each(rows, function(i, row) {
        		var values = row.children;
        		$.each(values, function(j, value) {
        			dataMatrix.setValue(dataMatrix.getXLabels()[i], dataMatrix.getYLabels()[j], value.firstChild.wholeText);
        		});
        	});
        	
        	return dataMatrix;
        };
	}
};