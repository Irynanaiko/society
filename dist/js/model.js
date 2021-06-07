(function () {

    class Model {
        constructor() {}
        getFromLocalStorage() {
            return localStorage.getItem('new') ? JSON.parse(localStorage.getItem('new')) : [];
        }
        addToLocalStorage(societys) {
            let items = this.getFromLocalStorage();
            console.log(items);
            items.push(societys);
            localStorage.setItem('new', JSON.stringify(items));
            console.log('data added to local storage');
        }
        removeFromLocalStorage(id) {
            let items = JSON.parse(localStorage.getItem('new'));

            items = items.filter(function (item) {
                if (item.id !== id) {
                    return item;
                }
            });
            localStorage.setItem('new', JSON.stringify(items));
            console.log('task removed');
        }
    }

    window.app = window.app || {};
    window.app.Model = Model;

}());