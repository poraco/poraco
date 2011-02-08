/**
 * Created by IntelliJ IDEA.
 * User: pierre
 * Date: 30/01/11
 * Time: 05:01
 * To change this template use File | Settings | File Templates.
 */
var m = new DataMatrix();
m.setXAxisLabels(new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"));
m.setYAxisLabels(new Array("CatsWhoCode.com", "WpRecipes.com", "CatsWhoBlog.com"));
m.setValue("Monday", "CatsWhoCode.com", 12541);
m.setValue("Tuesday", "CatsWhoCode.com", 11204);
m.setValue("Wednesday", "CatsWhoCode.com", 11354);
m.setValue("Thursday", "CatsWhoCode.com", 10058);
m.setValue("Friday", "CatsWhoCode.com", 9871);
m.setValue("Saturday", "CatsWhoCode.com", 8254);
m.setValue("Sunday", "CatsWhoCode.com", 5477);

m.setValue("Monday", "WpRecipes.com", 9855);
m.setValue("Tuesday", "WpRecipes.com", 8870);
m.setValue("Wednesday", "WpRecipes.com", 8731);
m.setValue("Thursday", "WpRecipes.com", 7488);
m.setValue("Friday", "WpRecipes.com", 8159);
m.setValue("Saturday", "WpRecipes.com", 6547);
m.setValue("Sunday", "WpRecipes.com", 4512);

m.setValue("Monday", "CatsWhoBlog.com", 3241);
m.setValue("Tuesday", "CatsWhoBlog.com", 2544);
m.setValue("Wednesday", "CatsWhoBlog.com", 2597);
m.setValue("Thursday", "CatsWhoBlog.com", 3108);
m.setValue("Friday", "CatsWhoBlog.com", 2114);
m.setValue("Saturday", "CatsWhoBlog.com", 2045);
m.setValue("Sunday", "CatsWhoBlog.com", 950);

//alert(m.getValue(1, 0));
//alert(m.getWidth());
//alert(m.getTopValue());
//alert(m.getLineTotal("CatsWhoCode.com"));
//alert(m.getColumnTotal("Monday"));
//alert(m.getTotal());

var idiag = new PieDiagramme(document.getElementsByTagName('canvas')[0], 'y');
idiag.setData(m);
idiag.setWidth(500);
idiag.setHeight(500);