(function () {
    class View {
        constructor() {
            this.DOMElements = {
                search: document.querySelector('.search'),
                sort: document.querySelector('#sort'),
                create: document.querySelector('.create__btn'),
                btnWrapper: document.querySelector('.btn__wrapper'),
                form: document.querySelector('#form'),
                nameInput: document.querySelector('#name'),
                cardTypeInput: document.querySelector('#card-type'),
                dataInput: document.querySelector('#data'),
                statusInput: document.querySelector('#status'),
                formWrapperBtn: document.querySelector('.wrapper__btn'),
                saveBtn: document.querySelector('.save__btn'),
                tBody: document.querySelector('.table__b'),
                alert: document.querySelector('.alert'),
                table: document.querySelector('.society__table'),
                main: document.querySelector('.main')
            };
        }
        deleteSociety(elem) {
            elem.parentElement.parentElement.remove();
        }
        displayAlert(text, name) {
            this.DOMElements.alert.textContent = text;
            this.DOMElements.alert.classList.add(name);

            setTimeout(function () {
                document.querySelector('.alert').textContent = '';
            }, 1000);
        }
        clearAllFields() {
            this.DOMElements.nameInput.value = this.DOMElements.cardTypeInput.value = this.DOMElements.dataInput.value = this.DOMElements.statusInput.value = '';
        }
        createListItem(item, i) {
            let html = `
                    <tr class="table__r" data-id="${item.id}">
                    <td class="table__d"></td>
                    <td class="table__d">${item.name}</td>
                    <td class="table__d">${item.cardType}</td>
                    <td class="table__d">${Math.trunc(Math.random() * 100) + 1}</td>
                    <td class="table__d">${item.data}</td>
                    <td class="table__d">${item.status}</td>
                    <td class="table__d"> <img class="table__img remove" src="./icons/rename.png" alt="rename"></td>
                    <td class="table__d"><img class="table__img delete" src="./icons/bin.png" alt="bin"></td>
                </tr>
                    `;
            this.DOMElements.tBody.insertAdjacentHTML('beforeend', html);
        }
        renderNotSocietyDisplay() {
            let html =
                `
            <div class="text__wrapper">
            <img src="./icons/box.png" alt="box">
            <div class="title">At the moment you do not have any society</div>
            </div>
             `;
            this.DOMElements.main.insertAdjacentHTML('beforeend', html);
        }
    }


    window.app = window.app || {};
    window.app.View = View;

}());