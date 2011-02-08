function extend(subClass, superClass) {
    var F = function() {
    };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superclass = superClass.prototype;
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}

function DiagModel() {
    Observable.call(this);
    /*
     * ici les methodes liés au stockage des parametres de style
     *  - on utlise une structure de données du type "Map" afin d'enregistrer
     * des associations du type : "element - style"
     */


    /*
     *  ici les methodes liées à
     */

}
extend(DiagModel, Observable);

