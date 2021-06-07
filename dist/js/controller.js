(function () {
    class Controller {
        constructor(model, view) {
            this.model = model;
            this.view = view;
            this.init();
        }
        init() {
            this.bindEvents();

        }
        bindEvents() {
            this.view.DOMElements.saveBtn.addEventListener('click', () => {
                this.insert();
            });
            window.addEventListener('load', this.setupItems());
            this.view.DOMElements.table.addEventListener('click', (e) => {
                this.deleteItem(e);
            });
        }
        deleteItem(e) {
            let elem = e.target;
            if (elem.classList.contains('delete')) {
                const perentElem = elem.parentElement.parentElement;
                const id = perentElem.dataset.id;
                e.target.parentElement.parentElement.remove();

                this.model.removeFromLocalStorage(id);
                this.view.displayAlert('Society was deleted!', 'red');
            }
        }
        insert() {
            const id = new Date().getTime().toString();
            let name = document.querySelector('#name').value;
            let cardType = document.querySelector('#card-type').value;
            let data = document.querySelector('#data').value;
            let status = document.querySelector('#status').value;

            const obj = {
                id,
                name,
                cardType,
                data,
                status
            };
            this.view.createListItem(obj);
            this.model.addToLocalStorage(obj);
            this.view.displayAlert('Society added to the list', 'green');
            this.view.clearAllFields();
            console.log('task added');
        }
        setupItems() {
            let items = this.model.getFromLocalStorage();
            if (items.length > 0) {
                items.forEach((item, i) => {
                    this.view.createListItem(item, i);
                });
            } else {
                this.view.renderNotSocietyDisplay();
            }
            console.log('data retrieved from local storage');
        }
    }

    window.app = window.app || {};
    window.app.Controller = Controller;

}());