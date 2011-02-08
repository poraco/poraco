/**
 * une implementation de la structure de données ArrayList
 */

function ArrayList() {
    // on initialise avec un tableau vide
    this.array = [];


    /**
     * @returns {Number}
     */
    ArrayList.prototype.getLength = function() {
        return this.array.length;
    };

    /**
     *
     * @param element
     * @returns {ArrayList}
     */
    ArrayList.prototype.addElement = function(element) {
        return this.array.push(element);
    };

    /**
     * @param index
     * @returns {Number}
     */
    ArrayList.prototype.getElement = function(index) {
        if (index > -1 && index < this.array.length)
            return this.array[index];
        else
            return undefined;
    };

    /**
     * on vide l'arrayList
     */
    ArrayList.prototype.clear = function() {
        this.array = [];
    };

    /**
     * @param index
     * @pre : l'index doit etre un nombre
     * @post : getLength() = old.getLength() - 1
     *            pour i de index à getLength() :
     *               array[i] == old.array[i+1]
     */
    ArrayList.prototype.removeElement = function(index) {
        var eltCount = this.array.length;
        if (eltCount > 0 && index > -1 && index < this.array.length) {
            switch (index) {
                case 0:
                    this.array.shift();
                    break;
                case eltCount - 1:
                    this.array.pop();
                    break;
                default:
                    var left = this.array.slice(0, index);
                    var right = this.array.slice(index + 1);
                    this.array = left.concat(right);
                    break;
            }
        }
    };

    /**
     * @param element
     * @param index
     * @returns {Number}
     */
    ArrayList.prototype.insertEltAt = function(element, index) {
        var left = new Array();
        var right = new Array();
        var eltCount = this.array.length;
        var result = -1;
        if (!(index > -1 && index <= eltCount)) {
        } else {
            switch (index) {
                case 0:
                    this.array.unshift(element);
                    result = 0;
                    break;
                case eltCount:
                    this.array.push(element);
                    result = eltCount;
                    break;
                default:
                    left = this.array.slice(0, index);
                    right = this.array.slice(index);
                    left.push(element);
                    this.array = left.concat(right);
                    result = index;
                    break;
            }
        }
        return result;
    };

    /**
     *
     * @param element
     * @param startIndex
     * @returns {Number}
     */
    ArrayList.prototype.getIndex = function(element, startIndex) {
        var eltCount = this.array.length;
        var result = -1;
        if (startIndex > -1 && startIndex < eltCount) {
            var i = startIndex;
            while (i < eltCount) {
                if (this.array[i] == element) {
                    result = i;
                    break;
                }
                i++;
            }
        }
        return result;
    };

    /**
     *
     * @param element
     * @param startIndex
     * @returns {Number}
     */
    ArrayList.prototype.lastIndex = function(element, startIndex) {
        var eltCount = this.array.length;
        var result = -1;
        if (startIndex > -1 && startIndex < eltCount) {
            var i = eltCount - 1;

            while (i >= startIndex) {
                if (this.array[i] == element) {
                    result = i;
                    break;
                }
                i--;
            }
        }
        return result;
    };
}