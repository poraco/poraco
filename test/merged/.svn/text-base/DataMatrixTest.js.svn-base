/**
 * Tests unitaires de la classe DataMatrix
 */
$(document).ready(function() {
    module("DataMatrix");

    test('Test de l\'état intial de la matrice', function() {
        var dataMatrix = new DataMatrix();
        equals(dataMatrix.getRowNumber(), 0, 'Le nombre de lignes doit être nul.');
        equals(dataMatrix.getColumnNumber(), 0, 'Le nombre de colonnes doit être nul.');
        equals(dataMatrix.getRowNumber(), 0, 'Le nombre de lignes doit être nul.');
        equals(dataMatrix.getColumnLabels().length, 0, 'Il ne doit y avoir aucun label de colonne.');
        equals(dataMatrix.getRowLabels().length, 0, 'Il ne doit y avoir aucun label de ligne.');
        equals(dataMatrix.getTotal(), 0, 'La somme des éléments doit être nulle.');
        raises(function() { dataMatrix.getValue(0, 0); }, 'Une exception doit être rejetée lors d\'une récupération de valeur invalide.');
        equals(dataMatrix.getTopValue(), 0, 'La valeur max doit être nulle.');
    });

    test('Test d\'insertion', function() {
        var dataMatrix = new DataMatrix();
        raises(function() { dataMatrix.setValue('labelLigne', 'labelColonne', 25) },
               'Une exception doit avoir lieu si l\'on insère dans une case inexistante.');
        dataMatrix.addRowLabel('rowLabel');
        ok($.inArray('rowLabel', dataMatrix.getRowLabels()) > -1, 'Le label de ligne doit être inséré et accessible après ajout.');
        dataMatrix.addColumnLabel('columnLabel');
        ok($.inArray('columnLabel', dataMatrix.getColumnLabels()) > -1, 'Le label de colonne doit être inséré et accessible après ajout.');
        dataMatrix.setValue('rowLabel', 'columnLabel', 26);
        equals(dataMatrix.getValueByLabel('rowLabel', 'columnLabel'), 26, 'Insertion de la valeur 26.');
        dataMatrix.addColumnLabel('columnLabel2');
        dataMatrix.setValue('rowLabel', 'columnLabel2', 25);
        equals(dataMatrix.getValueByLabel('rowLabel', 'columnLabel2'), 25, 'Insertion de la valeur 25.');
        equals(dataMatrix.getTotal(), 51, 'Le total est 51.');
        equals(dataMatrix.getTopValue(), 26, 'La valeur max est 26.');
        equals(dataMatrix.getRowTotal('rowLabel'), 51, 'La première ligne a pour somme 51.');
        equals(dataMatrix.getColumnTotal('columnLabel'), 26, 'La première colonne a pour somme 26.');
    });

    test('Tests de direction', function() {
        var dataMatrix = new DataMatrix();
        dataMatrix.addRowLabel('rowLabel');
        dataMatrix.addColumnLabel('columnLabel');
        dataMatrix.setValue('rowLabel', 'columnLabel', 26);
        raises(function() { dataMatrix.getValueByLabelAndDirection('rowLabel', 'columnLabel', 'invalide') }, 'Une exception doit être levée quand on demande une direction inexistante.');
        ok(dataMatrix.getValueByLabelAndDirection('rowLabel', 'columnLabel', 'row')
                == dataMatrix.getValueByLabelAndDirection('columnLabel', 'rowLabel', 'column'), 'Les deux directions doivent renvoyer le même résultat.');
    });
});
