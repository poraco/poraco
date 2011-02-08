function Observable() {
    this.observers = new ArrayList();

    /*
     * On implemente les methodes necessaires afin de rendre le modele
     * Observable
     */

    Observable.prototype.notifyObservers = function(context) {
        var m_count = this.observers.getLength();
        for (var i = 0; i < m_count; i++)
            this.observers.getElement(i).update(context);
    };

    Observable.prototype.attach = function(observer) {
        if (!observer.update)
            throw 'invalid parameter : observer';

        this.observers.addElement(observer);
    };

    Observable.prototype.dettachObserver = function(observer) {
        if (!observer.update)
            throw 'invalid parameter : observer';
        this.observers.removeElement(this.observers.getIndex(observer, 0));
    };
}