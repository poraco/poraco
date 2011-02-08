$(document).ready(function() {
    module("Basic Unit Test");
    var aL = new ArrayList();
    aL.addElement('kk');
    test('getElement : ArrayList', function() {
        equals(aL.getElement(0), 'kk', 'kk the right answer ');
    });

    test('inserElttAt : ArrayList', function() {
        aL.insertEltAt('oo', 0);
        equals(aL.getElement(0), 'oo', 'oo the right answer ');
        aL.insertEltAt('uu', 1);
        equals(aL.getElement(1), 'uu', 'uu the right answer ');
    });

    test('removeElement : ArrayList', function() {
        aL.insertEltAt('aa', 1);
        aL.removeElement(0);
        equals(aL.getElement(0), 'aa', 'aa the right answer ');
    });
    test('getLength : ArrayList', function() {
        aL.insertEltAt('aa', 1);
        aL.removeElement(0);
        equals(aL.getLength(), '3', '3 the right answer ');
    });
});